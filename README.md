# Walmart nutrition discovery

An independent exploratory frontend and product-design prototype. This is portfolio research, not Walmart employment, official collaboration, an endorsement, or shipped retailer functionality.

[Live walkthrough](https://low-cal-filter-walkthrough.kouokambryan.chatgpt.site) · Source baseline: Site version 9, commit `9aeb68c383a0197991a4d3574325234991b20f18`.

The local source package retains the demo's interactions and fixture values. Original product imagery and screenshot/reference visuals are omitted; labeled SVG placeholders make the package runnable without redistributing those files. See [media attribution and rights](MEDIA-RIGHTS.md), [omitted media sources](MEDIA-SOURCES.json), and [source provenance](SOURCE-PROVENANCE.md).

## Observe → Proposed → Result

Four linked walkthroughs keep the proposal and shopping context on the same page:

| Route | Observe | Proposed | Result |
| --- | --- | --- | --- |
| `layout.html` | Five filters in a single line | Wrap the same five filters | All choices can be seen together at the demonstrated widths |
| `index.html` | Low-calorie ranges are inside Filters | A visible Low cal entry point | Apply one of the existing 0–99, 100–199, 200–299, 300–399, or 400–499 per-serving ranges to three apple-filling fixtures |
| `energy.html` | High Protein appears within Suggested | Select a protein minimum, optionally a calorie maximum | Filter three energy/protein-bar fixtures and expose selected facts beside serving sizes |
| `fiber.html` | Fiber choice is inside Suggested | Select a fiber minimum, optionally a calorie maximum | Filter three snack-bar/brownie fixtures with stated portions |

The observations are bounded to the supplied reference evidence and recorded source snapshots. They do not establish the retailer's current interface across devices or categories. `row-fit.html` is a supporting row-placement illustration.

## Implemented behavior

Nutrient chips expose only their selected amount controls. Selecting a chip immediately applies its illustrative default; editing commits on blur or Apply amounts. Protein defaults to ≥10 g and ≤200 calories when combined. Fiber defaults to ≥3 g and ≤100 calories when combined. Grams accept 0–100, including decimals; calories accept whole numbers 0–2000. Invalid entries retain the previous applied result. Search, clear filters, restart, empty-result recovery, step navigation, filter-panel focus handling, and validated query-parameter initialization are implemented.

Applied controls, result counts, selected per-serving facts, and product rows share the same screen. Optional `document.modelContext` tools configure this browser-local demo when a supporting browser provides that API; they do not operate retailer accounts. Prices, unit prices, ratings and written-review counts are static attributed context. Add-to-cart buttons are disabled. Other shopping filters are context-only.

## Stack and local run

Buildless HTML, CSS and vanilla JavaScript, with inline apple-demo code and separate energy/fiber/layout scripts. JSON documents record sources. No framework, installation dependencies, server API, database, analytics, account access or real checkout is implemented.

From this folder, use Python 3 to serve the files:

```sh
python3 -m http.server 8000 --directory dist
```

Open `http://localhost:8000/`. The other walkthroughs are linked in the page. `walkthrough-links.json` records original live routes and explicit demo-state links. Node.js 20+ runs syntax checks without installing packages:

```sh
npm test
```

## Data and source dates

Nine product fixtures are split into three catalogs. Manufacturer/package-label nutrition snapshots were recorded 5–6 October 2026; Walmart listing snapshots were recorded on those dates, with crawl ages and variant limitations retained in the source JSON. `product-sources.json`, `energy-product-sources.json`, `energy-shopping-sources.json`, `fiber-product-sources.json` and `filling-shopping-sources.json` preserve provenance. `reference-row-sources.json` describes the separate row illustration.

The Comstock apple label reports 110 calories while a marketing image reports 100; the fixture uses the label value. Fiber formulation and daily-value discrepancies, review pooling, pack sizes and unavailable offers are recorded. Portions differ, so these per-serving facts are not equal-weight comparisons. Optional IFIC survey context concerns US respondents, not Walmart demand or adoption. No source freshness was re-established during this source export.

## Validation and limits

Preparation on 8 October 2026 confirmed that the original runtime tree matched the selected Sites source commit and that its matching deployment succeeded. In the exported package, `npm test` checked three standalone scripts and one embedded script for syntax. Amazon/Whole Foods unit tests are separate projects; their results do not validate this demo. Earlier private deterministic QA is not shipped and was not rerun as part of this package.

Static asset/link checks, source-change review, and a secret/privacy scan were performed for this export. Chrome Headless Shell 155.0.8059.39 completed all four walkthroughs at 390 and 1200 CSS-pixel widths, each 1000 pixels tall, using an isolated temporary browser profile. Checks verified the same five wrapped filter choices; the existing calorie ranges returning 2, 1 and 0 matches; protein single/combined goals returning 2/1 matches; and fiber single/combined goals returning 3/2 matches. Tighter protein/fiber goals each returned one matching product. Negative grams and fractional calorie inputs retained the prior applied results. Empty results, clear/recovery, search and the visible Result-stage restart control were exercised at both widths.

After scrolling the shopping prototype into view, its selected controls and the first matching row were visible together. Scoped DOM geometry reported no horizontal document overflow, loaded visible placeholders had no load failures, and no uncaught browser exception was recorded. Twelve local source-preview screenshots were reviewed for the wrapped layout, calorie results, and default/tighter protein/fiber results at both widths. These are bounded responsive CSS and interaction checks.

No customer testing, adoption, revenue or conversion lift, production catalog integration, native-app parity, broad accessibility audit, or assistive-technology certification is claimed. Responsive layout and accessible-state markup are prototype work; current retailer behavior and production data coverage remain unverified. The browser checks do not establish physical-phone or touch behavior, or visual fidelity to original retailer screenshots.

This is an independent source export for review. No code or third-party media license is granted by this package.
