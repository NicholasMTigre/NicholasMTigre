# Website test plan

Latest test run: **2026-10-29**, against website commit `4703d6e` and **https://nicoaerometrics.com/**. Chrome extension browser access now works. Live desktop/mobile layouts, navigation, menu, sampled keyboard traversal, native inquiry validation/preparation, actual clipboard copying, and all five Lighthouse accessibility audits were completed. Source and simulated checks are distinguished from browser results below. Earlier entries are historical.

| ID | Testing | Steps | Expected | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Local file targets | Inspect href/src on all five pages and check files exist | All local references resolve | Pass — 2026-10-29 source: all five pages’ local targets and anchors resolve. |
| T2 | Page headings | Count h1 on each page | Exactly one per page | Pass — 2026-10-29 source: exactly one h1 per page. |
| T3 | Active navigation | Inspect aria-current on each page | Exactly one current page marker | Pass — 2026-10-29 source: consistent five-link navigation, one current marker per page. |
| T4 | Shared CSS | Inspect every page for stylesheet and embedded styles | Shared external stylesheet, no inline or embedded styles | Pass — 2026-10-29 source: one shared styles.css; no inline/embedded styles. |
| T5 | Navigation in browser | On each page click every navigation and footer link, locally and live | Correct destination and current page marker | Pass for live web navigation — 25 navigation combinations and five footer home links clicked successfully. Local-file browser navigation and external email-app handoff remain untested. |
| T6 | Phone layouts | View all five pages at 320px and 390px | Readable content, no horizontal overflow | Pass — all five live pages at 320px and 390px; screenshots reviewed, document scroll width equals client width, and checked visible content stays within horizontal bounds. |
| T7 | Laptop layouts | View all five pages at 1366px | Readable layout and visible navigation | Pass — all five live pages at 1366px; screenshots reviewed, navigation visible, no horizontal overflow. |
| T8 | Mobile menu | At phone width use Menu, Close menu, then Escape; resize to desktop | Expanded state matches visibility; Escape returns focus; desktop links remain visible | Pass — Chrome: open/close, Escape closes and returns focus to Menu, navigation closes menu, and desktop links reappear after resizing. |
| T9 | No JavaScript | Disable JS and reload every page | Navigation stays available; inquiry explains its limitation | Partial — source fallback checks pass; browser JS-disabled reload has not been performed. |
| T10 | Keyboard | On every page use Tab, Shift+Tab, Enter and skip link | Visible focus, logical order, main content reachable | Pass for sampled browser traversal — all five pages: Tab reveals focused skip link, Enter focuses main, Tab reaches first main control, Shift+Tab returns to navigation. Visible focus observed. Full exhaustive tab traversal not claimed. |
| T11 | Invalid inquiry | Submit blank fields, then an invalid email | Browser blocks preparation and identifies invalid fields | Pass — Chrome blocks blank required fields and malformed email; prepared result stays hidden and focus moves to the invalid field. |
| T12 | Valid inquiry | Complete all fields and prepare | Correct message appears; no transmission claimed | Pass — Chrome prepares the complete draft, focuses its output, and states that nothing has been sent. |
| T13 | Copy and fallback | Copy prepared message; repeat with clipboard permission unavailable | Clipboard works or selected text can be copied manually; honest status | Pass for actual copying — clipboard text equals prepared draft. Rejection fallback passes simulation; real browser clipboard-denial case remains untested. |
| T14 | Accessibility | Run Lighthouse on each live page | Accessibility score at least 90 per page | Pass — mobile Lighthouse 13.5.0 via PageSpeed Insights: all five live pages score 100 Accessibility (target ≥90). |
| T15 | Console | Open every page and operate menu and inquiry | No JavaScript errors | Pass for exercised live paths — captured Chrome warning/error logs empty after navigation, menu, form and selector use. |
| T17 | Email inquiry | Prepare a valid inquiry and open the email link; also test direct email without JS | Recipient is ntigre007@gmail.com; draft has correct subject and details; nothing sends automatically | Pass for browser draft/link inspection — recipient and encoded subject/body correct; no automatic delivery. External email app not launched and no email sent. |
| T16 | Graphic accessibility | Inspect home photography with accessibility tools | Descriptive alt text; stock imagery not represented as client work | Pass — browser accessibility snapshot includes descriptive image names and visible stock/concept labels; all five Lighthouse accessibility audits score 100. |

Record actual live URL, browser, date, failures, fixes, and retests when browser testing is completed. Public inquiry email: ntigre007@gmail.com. Email delivery uses the configured email app on the device and must be verified manually.

## Navy redesign checks (2026-10-22)
- Pass (source): all five pages have one h1 and valid local file references.
- Pass (source): homepage services/contact anchors exist; all three photos have descriptive alt text.
- Pass (file check): three downloaded photos are each under 500 KB; visually inspected image assets.
- Pending browser: verify hero text contrast, photo cropping, smooth anchor scrolling, final contact email, and no overflow at 320px, 390px, and 1366px. Re-run mobile menu, inquiry, keyboard, and Lighthouse tests with the navy styling.

## Custom-domain verification (2026-10-22)
- Pass: Cloudflare contains four DNS-only GitHub Pages A records and www CNAME to nicholasmtigre.github.io.
- Pass: public resolver 1.1.1.1 returns all four GitHub Pages IPv4 addresses.
- Pass: http://nicoaerometrics.com returns HTTP 200 and Nico Aerometrics branding.
- Pass: GitHub Pages reports built, domain nicoaerometrics.com, source main / root. Pushes to main publish automatically.
- Pending: valid HTTPS certificate for apex and www; initial checks failed certificate validation while GitHub reported no issued certificate. HTTPS enforcement remains off pending issuance. No certificate checks were bypassed.

## Real estate packages and imagery (2026-10-26)
- Pass: all five pages checked for local links/anchors, balanced main content containers, one h1, and one current navigation marker.
- Pass: JavaScript parses; inquiry handler exercised in an isolated simulated DOM with a home-tour selection, dates, and add-ons; prepared text and encoded email draft include the inputs. This is not browser validation.
- Pass: downloaded house exterior and interior images visually inspected; both under 500 KB. Stock labels and descriptive alt text included.
- Pass: git diff --check.
- Pending: actual desktop/mobile rendering, keyboard/menu, native form validation, clipboard, and email-app behavior. Prior Computer Use attempt stopped because Chrome URL could not be verified. No browser or deployment result is claimed for this update.

## Compact copper redesign (2026-10-26)
- Pass: five pages retain valid local links and anchors, balanced content containers, one h1 and active navigation marker.
- Pass: CSS braces balanced; script parses. Menu CSS and JS share the 900px breakpoint.
- Homepage reduced from seven sections to three; body text 18–19px, navigation 17–18px on desktop. Copper/ivory interface replaces cyan accents.
- Browser rendering, mobile overflow, keyboard/menu interactions and visual contrast remain unverified in this update.

## Direct copy and compact inquiry (2026-10-26)
- Pass: five pages checked for local links/anchors, balanced content containers, and one h1. Seven inquiry fields retain their labels and controls in individual layout groups.
- Removed inquiry sidebar; shortened headings and reduced hero/section padding. Form uses two columns on wider screens and one below 600px.
- Browser visual and interaction checks remain unverified.

## Interactive homepage, phone layout and icons (2026-10-26)
- Pass: all five site pages plus layout preview have balanced content containers, one h1, unique IDs, valid local references/anchors, and favicon links. No vertical social-cut add-on remains in page content.
- Pass: JS parses; simulated DOM exercises all four package selections, all three comparison views, and carryover of the two remaining add-ons into inquiry URLs. Earlier simulated inquiry checks covered prefill, invalid-form guard, and encoded email draft.
- Pass: CSS braces balanced, responsive grids for 700px/600px/380px, 44px minimum menu/comparison/FAQ targets, and 18px form inputs. These source checks do not establish rendered phone behavior.
- Pass: 48px browser icon and 180px touch icon derived from approved drone logo and visually inspected.
- NAR 2026 source supports 48% technology adoption; no quantitative sales-lift claim is made. Illustrations and photos are labeled.
- Browser interaction/phone rendering verification remains pending.

## Test run — 2026-10-29

Scope: current local checkout at `4703d6e` and the public site at https://nicoaerometrics.com/. No website content, hosting settings, or customer data were changed.

### Completed

- All five pages pass the source checks for local references and fragment targets, one h1, unique IDs, balanced checked content containers, descriptive titles/language, current navigation and shared external CSS. These checks are not a full HTML validator.
- Form inputs/selects/textareas have associated labels. All images have alt attributes; decorative package images have empty alt and buttons have text labels. Stock imagery and conceptual comparison illustrations are labeled.
- All five pages and all 11 linked shared/media assets return HTTPS 200 with appropriate content types. All text files match the checkout after normalizing line endings; binary images/icons and SVGs match exactly. The first response-text check showed an apparent SVG mismatch because PowerShell decoded an SVG without a charset differently; the subsequent UTF-8/raw-byte check confirms it matches.
- http://nicoaerometrics.com and https://www.nicoaerometrics.com both resolve to https://nicoaerometrics.com/ with HTTP 200 and normal certificate validation. This resolves the old certificate-verification pending item for this run; no hosting settings were changed.
- Node VM with a simulated DOM passed menu open/close, Escape focus return, link-close, breakpoint-change reset; all four package choices and three comparison views; selected/cleared add-on carryover; inquiry URL prefill; invalid-form guard; valid-message preparation; encoding of ampersands, question marks, hashes, plus signs and newlines; clipboard success and rejected-permission fallback. No emails were sent. These are not native browser tests.
- Source no-JavaScript fallback inspection passed: navigation is visible by default, package/comparison articles remain readable, and the inquiry exposes direct email.

### Unresolved browser checks

Actual 320px/390px/1366px rendering, overflow, photo cropping, keyboard traversal, native validation prompts, real clipboard behavior, console messages, Lighthouse, and email-app handoff remain unverified. The browser-control attempt on 2026-10-29 was stopped by its URL-confidence enforcement before a browser test could run. Do not treat the simulated checks as substitutes for these tests.

### Observation

The shared logo PNG is 1,196,540 bytes (about 1.14 MiB), while the exterior/interior photos are 331,319 and 208,019 bytes. A smaller web logo could reduce the first-load transfer on phones. This is a payload-size observation, not a measured performance failure. No unverified redesign or optimization was applied.

### Evidence

- [Source results](test-results/2026-10-29-source.json)
- [Simulated interaction results](test-results/2026-10-29-interactions.json)
- [Live responses and redirects](test-results/2026-10-29-live.json)
- [Final live content/byte comparisons](test-results/2026-10-29-live-content.json)

## Connected Chrome browser run — 2026-10-29

The user completed Chrome extension setup. Browser access then succeeded. Tested the live site, not an emulated DOM; website files were unchanged. This section supersedes earlier browser-blocked entries.

### Browser results

- Desktop: all five pages rendered at 1366 × 900. Phone: all five pages rendered at 320 × 844 and 390 × 844. No horizontal overflow detected by document/visible-element geometry, and screenshots were inspected.
- Clicked all 25 combinations of five navigation destinations, plus footer-home navigation from each of the five page cases. Correct destinations and current-page markers observed. Footer email destinations were inspected, not sent to.
- Mobile Menu / Close menu work; Escape closes it and focuses the button; resizing to desktop restores navigation.
- On every page, tested Tab to the visible skip link, Enter into main, Tab to the first main interactive element, and Shift+Tab back to navigation. Each tested forward focus had a solid visible outline. All four homepage FAQs toggle with Space. This is sampled keyboard coverage, not a screen-reader audit or exhaustive traversal.
- Native form submission blocks empty required fields and malformed email. A valid synthetic QA inquiry prepares all fields, focuses the output and displays the no-send status. The actual Copy message button places the exact prepared text on the clipboard.
- All four package selectors and three comparison selectors update correctly. Selected add-ons carry into the quote form, including a real 390px home-tour-to-inquiry test. The tour illustration loads after its panel is revealed; its initial unrequested lazy-load state is not a broken image.
- Chrome captured warning/error logs were empty for the exercised site paths.

### Lighthouse (mobile, PageSpeed Insights)

Lighthouse 13.5.0; emulated Moto G Power / slow 4G; single-page initial-load laboratory tests. All pages met the planned accessibility threshold. Automated scores do not guarantee complete accessibility, and performance scores vary by run.

| Page | Accessibility | Performance | Best practices | SEO | Report |
| --- | ---: | ---: | ---: | ---: | --- |
| Home | 100 | 75 | 100 | 100 | [Report](https://pagespeed.web.dev/analysis/https-nicoaerometrics-com/jk1pmepgwu?form_factor=mobile) |
| Owner | 100 | 75 | 100 | 100 | [Report](https://pagespeed.web.dev/analysis/https-nicoaerometrics-com-about-html/1kjeq27141?form_factor=mobile) |
| Services | 100 | 100 | 100 | 100 | [Report](https://pagespeed.web.dev/analysis/https-nicoaerometrics-com-projects-html/s97hidbq3n?form_factor=mobile) |
| Process | 100 | 88 | 100 | 100 | [Report](https://pagespeed.web.dev/analysis/https-nicoaerometrics-com-skills-html/vyg6zh3hls?form_factor=mobile) |
| Project inquiry | 100 | 64 | 100 | 100 | [Report](https://pagespeed.web.dev/analysis/https-nicoaerometrics-com-contact-html/udn2zrf3w8?form_factor=mobile) |

The homepage report flags image delivery and caching opportunities and reports LCP of 8.4 seconds in its throttled test. Owner and inquiry report LCP of 6.8 seconds. The shared 1.14 MiB logo is a candidate for optimization; causality and final remedies need a focused performance investigation. No production optimization or hosting change was applied during this audit.

### Remaining coverage limits

- Real browser no-JavaScript reloads, forced clipboard-denial behavior and an external email-app handoff are not yet verified. Their source/simulated checks remain documented separately. The connected browser API exposes no script-execution toggle; native Chrome access could not provide reliable input geometry, and its screenshot did not match its reported window, so no native debugger action was taken. No browser permissions were weakened or changed.
- Local-file browser navigation was attempted but blocked by the browser URL policy, which permits only HTTP/HTTPS. No workaround was attempted. Live content was previously verified against the checkout.
- Phone results are responsive browser viewport tests, not tests on physical phones.

### Saved browser evidence

- [Browser result data](test-results/2026-10-29-browser.json)
- [390px inquiry screenshot](test-results/mobile-inquiry-390.jpg)
- [Home Lighthouse screenshot](test-results/lighthouse-home.jpg)
- [Owner Lighthouse screenshot](test-results/lighthouse-owner.jpg)
- [Services Lighthouse screenshot](test-results/lighthouse-services.jpg)
- [Process Lighthouse screenshot](test-results/lighthouse-process.jpg)
- [Inquiry Lighthouse screenshot](test-results/lighthouse-project-inquiry.jpg)

Temporary viewport overrides were reset after testing. Tests used synthetic QA details; no inquiry was emailed and no production website or hosting changes were made.
