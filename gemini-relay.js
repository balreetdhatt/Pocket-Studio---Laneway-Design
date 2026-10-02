// Cloudflare Worker relay for the R1-1 Laneway House Tester.
// Keeps your Gemini API key server-side. Deploy with `wrangler deploy`,
// then set the secret:  wrangler secret put GEMINI_KEY
// In the tool, paste the worker URL into "relay URL" instead of a key.
const ALLOW_ORIGIN = '*'; // tighten to your site origin in production, e.g. 'https://yourname.github.io'
export default {
  async fetch(req, env) {
    const cors = { 'Access-Control-Allow-Origin': ALLOW_ORIGIN, 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' };
    if (req.method === 'OPTIONS') return new Response(null, { headers: cors });
    const url = new URL(req.url);
    if (req.method !== 'POST' || url.pathname !== '/render') return new Response('POST /render', { status: 404, headers: cors });
    let body; try { body = await req.json(); } catch { return new Response('bad json', { status: 400, headers: cors }); }
    const { model = 'gemini-2.5-flash-image', prompt = '', image = '' } = body;
    if (!/^gemini-(2\.5-flash-image|3-pro-image-preview)$/.test(model)) return new Response('bad model', { status: 400, headers: cors });
    if (!image || image.length > 12_000_000) return new Response('bad image', { status: 400, headers: cors });
    const g = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': env.GEMINI_KEY },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }, { inline_data: { mime_type: 'image/png', data: image } }] }], generationConfig: { responseModalities: ['IMAGE', 'TEXT'] } }),
    });
    const text = await g.text();
    return new Response(text, { status: g.status, headers: { ...cors, 'Content-Type': 'application/json' } });
  },
};
