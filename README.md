# Pocket Studio
### A Vancouver R1-1 Zoning Laneway House Tester

![Pocket Studio — demonstration on 2893 E 49th Ave](docs/images/demo-2893-e-49th.gif)

**Version 3.56 · October 2, 2026** · single-file web app · runs offline in any modern browser

- **Website:** `index.html`
- **Tool:** `r1-1-laneway-house-tester.html` (open it directly, or from the website's *Open the tool* buttons)

---

## Purpose

Pocket Studio is a free, browser-based design tool that tests laneway houses against the City of Vancouver's R1-1 zoning by-law. Every R1-1 lot in the city is mapped and classified, so homeowners and designers can see at once whether a laneway house is possible and why. Users shape the building parametrically while ten live checks — setbacks, separation, height, floor area, site coverage and more — cite the by-law clause for each result. Code-aware floor plans adapt to the chosen size, with compliant stairs, accessible washrooms and 900 mm hallways, and users can move walls, draw rooms and arrange furniture, windows and doors. Plans, elevations, an isometric with the sun path and an in-tool studio render all update together. One click produces a six-sheet A3 design report, alongside SVG drawings, Rhino models and images. It runs offline and is a design aid, not a permit determination.

---

## How it works — seven steps

Pocket Studio takes you from address to drawing set in seven steps: find your R1-1 lot on the base map, read the existing lot and its limits, shape the laneway house parametrically, customise rooms, furniture, windows and doors, check it in the neighbourhood with the sun path, choose materials, and render your chosen view — then download a complete A3 design report.

| Tab | Step | What you do |
|---|---|---|
| **A-01 Base Map** | Start with your lot | Search an address or pick a test case. Every R1-1 parcel is classified (viable, no lane, existing laneway house, through lot); the callout says whether a laneway house can go there and why. |
| **A-02 Existing Lot** | Know what you're working with | Lot dimensions and area, the existing house and its yards, the buildable pocket, the floor-area cap and the height limit, drawn as a plan. |
| **A-03 Laneway House Drawings** | Shape it to fit — parametrically | Start from a single- or double-storey gable preset, then size it by dragging walls or using the sliders. Site plan, floor plans, four elevations and the 3D model update together while the checks keep score. |
| **A-04 Floor Plans** | Make the rooms yours | Layouts drawn to code at your size: straight or switchback stair, accessible washroom, kitchen, open living and bedrooms. Move walls (900 mm passages enforced), draw rooms, add or remove doors, drag, rotate or delete furniture — or clear it all and start your own layout — and place windows from the rooms. The elevation alongside follows. |
| **A-05 Isometric Design View** | See it in the neighbourhood | Isometric with callouts and the sun path for the lot's latitude; play the day to see the shadows. |
| **A-06 Details** | Choose the materials | Ground- and upper-floor cladding, roofing, trim and window frames on a rendered model, with street, lane and garden cameras. |
| **A-07 Rendering** | Render the view you want | Orbit, pan and zoom the model, save views, and make a studio render in the tool (no key needed). Optional photoreal rendering with your own Gemini key. |
| **Report** | Take it with you | Six A3 sheets — cover with key figures, site and existing lot, floor plans, four elevations, views with your chosen render and sun path, compliance checks and the window/door schedule. Print, save as PDF or download. |

---

## Demonstration — 2893 E 49th Avenue

A viable corner lot: lane at the rear, a street along one side, no structure on record behind the house. The tool opens on this lot with the double-storey design already applied.

![A-03 drawings for 2893 E 49th Ave](docs/images/03-laneway-house-drawings.jpg)

### The lot (read from City data)

| | |
|---|---|
| Address | 2893 E 49th Ave · R1-1 |
| Lot | 13.5 × 55.9 m · 701.2 m² |
| Existing house | 217.1 m² footprint · 11.5 × 24.2 m |
| Existing yards | front 11.8 m · rear 19.9 m |
| Rear access | lane · street along one side (corner lot) |
| Laneway floor-area cap | 175.3 m² (25 % of site area, max 186 m²) |

### Inputs

| Input | Value |
|---|---|
| Preset | Double storey — contemporary gable |
| Ground floor | 6.4 × 9.4 m |
| Upper floor | 6.4 × 5.6 m, flush with the lane side |
| Floor-to-floor | 3.0 m ground · 2.7 m upper |
| Roof | gable, ridge along the lot depth, pitch 0.85 (≈ 40°), 100 mm eave |
| Position | 4.9 m from the main house · 3.3 m from the left property line |
| Floor-plan layout | 2-bed · two storey |
| Materials | light vertical cedar (ground) · dark-taupe metal panel (upper) · asphalt shingle · black trim and frames |

### Result

**The design holds — all requirements met.**

| Check | Requirement | Measured | Clause | Status |
|---|---|---|---|---|
| Site | Laneway house permitted: R1-1, rear lane, no rear structure | viable corner lot | s.11.3.8.1; R1-1 s.2.1 | ✅ |
| Separation | ≥ 4.9 m from the main house | 4.9 m | s.11.3.8.6(a) | ✅ |
| Rear setback | ≥ 0.9 m from the rear lot line | 5.5 m | s.11.3.8.6(b) | ✅ |
| Side setbacks | ≥ 1.2 m each side | 3.1 / 2.9 m | s.11.3.8.6(c) | ✅ |
| Height | ≤ 8.5 m | 8.42 m | s.11.3.8.4 | ✅ |
| Floor area | ≤ 0.25 × site area, max 186 m² | 96.0 m² (60.2 ground + 35.8 upper) | s.11.3.8.2 | ✅ |
| Site coverage | ≤ 50 % with the main house | 39.5 % | s.11.3.8.5; R1-1 s.3.2.2.7 | ✅ |
| Site width | ≥ 9.8 m | 13.5 m | s.11.3.8.3 | ✅ |
| Upper floor | ≤ 60 % of the ground floor | 59.6 % | design-brief rule | ✅ |
| Within lot | building inside the property lines | within lot | geometry | ✅ |

**Floor plans produced**

- **Ground floor:**
  - straight stair, 15 risers × 200 mm, 255 mm treads, 900 mm landing at the top, guard along the full run;
  - washroom 1.83 × 2.40 m (shower, toilet, vanity) against the wall facing the main house;
  - laundry 1.83 × 1.0 m with a stacked washer-dryer, sharing the washroom's wall;
  - kitchen run along the side wall;
  - open dining and living with a sofa and round coffee table (add a media unit or anything else from the furniture library);
  - entry door from the lane.
- **Upper floor:** the stair lands in line with the ground floor stair; 1.0 m hall; two bedrooms of 3.9 × 2.6 m, each with a queen bed and closet; linen closet below the stair.
- **Openings:**
  - lane gable: entry door, slim vertical light, tall gable window;
  - long side: square windows stacked floor over floor;
  - garden gable: 2.4 m floor-level slider, bedroom window above;
  - washroom: high awning window.
- **Outputs:**
  - six-sheet A3 report;
  - SVG site plan, floor plans, lane elevation, existing lot plan and sun path;
  - PNG isometric, 3D and rendered views;
  - studio render (JPG);
  - Rhino `.3dm`, OBJ and design JSON.

### Downloads for this example

| File | What it is |
|---|---|
| [`docs/report/pocket-studio-report-2893-e-49th.pdf`](docs/report/pocket-studio-report-2893-e-49th.pdf) | **Compiled design report**, six A3 landscape sheets: R-01 cover and key figures · R-02 site and existing lot · R-03 floor plans · R-04 four elevations · R-05 views (isometric, 3D site model, studio render, sun path) · R-06 compliance checks with clauses and window/door schedule |
| [`docs/report/pocket-studio-report-2893-e-49th.html`](docs/report/pocket-studio-report-2893-e-49th.html) | The same report as produced by the tool (open in a browser, print or save as PDF) |
| [`docs/models/pocket-studio-2893-e-49th.3dm`](docs/models/pocket-studio-2893-e-49th.3dm) | Rhino model — NURBS solids on layers (laneway house volumes, roof, openings, existing house, lot and context) |
| [`docs/models/pocket-studio-2893-e-49th-drawings.3dm`](docs/models/pocket-studio-2893-e-49th-drawings.3dm) | Rhino 2D drawings — plan and elevation curves |
| [`docs/demo-2893-e-49th.json`](docs/demo-2893-e-49th.json) | Full input and result data |

#### Walkthrough of the example

![Walkthrough of the seven steps and the report on 2893 E 49th Ave](docs/images/demo-2893-e-49th.gif)

| Floor plans | Elevations | Studio render |
|---|---|---|
| ![](docs/images/04-floor-plans-ground.jpg) | ![](docs/images/03-elevations.jpg) | ![](docs/images/studio-render-lane.jpg) |
| ![](docs/images/04-floor-plans-upper.jpg) | ![](docs/images/03-compliance.jpg) | [![Design report](docs/images/08-report-cover.jpg)](docs/report/pocket-studio-report-2893-e-49th.pdf) |

More screenshots: [`docs/images`](docs/images).

---

## Regulations, guidelines and sources

### Zoning (compliance checks)

| Document | Version / date | Sections and clauses used |
|---|---|---|
| City of Vancouver Zoning and Development By-law No. 3575 — **R1-1 Residential Inclusive District Schedule** | as amended, June 2026 | s.2.1 (uses), s.2.2.1–2.2.2 (trees), s.2.2.4 and s.4.1.2(a) (floor-area exclusions), s.3.2.2.4 (front yard), s.3.2.2.6 (rear yard), s.3.2.2.7 (site coverage) |
| Referral Report **"Adding Missing Middle Housing and Simplifying Regulations"**, Appendix A — **s.11.3.8 Laneway House** | Council, July 13, 2023 | s.11.3.8.1 (where permitted), 11.3.8.2 (floor area: lesser of 0.25 × site area or 186 m²), 11.3.8.3 (minimum site width 9.8 m), 11.3.8.4 (maximum height 8.5 m), 11.3.8.5 (site coverage), 11.3.8.6(a) (4.9 m separation), 11.3.8.6(b) (0.9 m rear setback), 11.3.8.6(c) (1.2 m side setbacks), 11.3.8.8(c) (floor-to-floor), 11.3.8.10 (decks) |
| Design-brief rule | project brief | upper floor ≤ 60 % of the ground floor |

### Building code (floor plans)

| Document | Version | Used for |
|---|---|---|
| **British Columbia Building Code**, Division B, Part 9 | 2024 | Section 9.8 Stairs, Ramps, Handrails and Guards — rise ≤ 200 mm, run ≥ 255 mm, width ≥ 860 mm, landings at least as long as the stair is wide (9.8.6), handrails 865–965 mm (9.8.7), guards (9.8.8, drawn at 1070 mm). Section 9.5 Design of Areas, Spaces and Doorways — room sizes, hallway clear width (the tool enforces 900 mm, above the 860 mm minimum), door sizes. Subsection 9.9.10 — bedroom egress windows (≥ 0.35 m² unobstructed, no dimension under 380 mm). |
| Adaptable-design targets | — | 860 mm clear interior doors, 910 mm entry, 1500 mm turning circles where they fit, a level shower, 900 mm beside the bed |

### Data

| Source | Datasets |
|---|---|
| City of Vancouver Open Data Portal | property parcel polygons, zoning districts, property addresses, streets, shoreline, public trees, 2015 building footprints (reprojected to UTM 10N, EPSG:26910) |
| NOAA solar position algorithm | sun path, sunrise/sunset and shadows for each lot's latitude and longitude |

> Pocket Studio is a design aid only — not a permit determination. Confirm every design with the City of Vancouver before building.

---

## Running and publishing

- **Run locally:** download the repository and open `index.html` or `r1-1-laneway-house-tester.html` in Chrome, Edge, Firefox or Safari. No install or server is needed; all data is embedded.
- **GitHub Pages:** push the repository, then *Settings → Pages → Deploy from branch → main / root*. The site is served from `index.html`; keep the tool file next to it so the *Open the tool* links work.
- **File sizes:** the tool is about 23 MB and the website about 2.7 MB, both under GitHub's 100 MB per-file limit, so Git LFS isn't needed.
- **Optional photoreal rendering:** the Rendering tab can call Google's Gemini image model with your own key, stored only in your browser. To keep the key server-side, deploy [`docs/gemini-relay.js`](docs/gemini-relay.js) as a Cloudflare Worker and paste its URL into the tab. Studio renders need no key.

## Repository contents

```
index.html                         Pocket Studio website
r1-1-laneway-house-tester.html     the tool (single self-contained file)
README.md                          this file
docs/
  demo-2893-e-49th.json            inputs and results for the demonstration lot
  report/
    pocket-studio-report-2893-e-49th.pdf    compiled six-sheet A3 design report
    pocket-studio-report-2893-e-49th.html   the same report as exported by the tool
  models/
    pocket-studio-2893-e-49th.3dm            Rhino NURBS model
    pocket-studio-2893-e-49th-drawings.3dm   Rhino 2D plan and elevation curves
  gemini-relay.js                  optional relay for photoreal rendering
  images/
    demo-2893-e-49th.gif           walkthrough of the seven steps and the report
    01-base-map.jpg … 08-report-floor-plans.jpg
    studio-render-lane.jpg
```
