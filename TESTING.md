# Website test plan

Source checks were run locally on 2026-10-22. Browser checks and live-site checks have not been run. A source Pass does not establish visual or interactive behavior.

| ID | Testing | Steps | Expected | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Local file targets | Inspect href/src on all five pages and check files exist | All local references resolve | Pass (source check) |
| T2 | Page headings | Count h1 on each page | Exactly one per page | Pass (source check) |
| T3 | Active navigation | Inspect aria-current on each page | Exactly one current page marker | Pass (source check) |
| T4 | Shared CSS | Inspect every page for stylesheet and embedded styles | Shared external stylesheet, no inline or embedded styles | Pass (source check) |
| T5 | Navigation in browser | On each page click every navigation and footer link, locally and live | Correct destination and current page marker | Not run |
| T6 | Phone layouts | View all five pages at 320px and 390px | Readable content, no horizontal overflow | Not run |
| T7 | Laptop layouts | View all five pages at 1366px | Readable layout and visible navigation | Not run |
| T8 | Mobile menu | At phone width use Menu, Close menu, then Escape; resize to desktop | Expanded state matches visibility; Escape returns focus; desktop links remain visible | Not run |
| T9 | No JavaScript | Disable JS and reload every page | Navigation stays available; inquiry explains its limitation | Not run |
| T10 | Keyboard | On every page use Tab, Shift+Tab, Enter and skip link | Visible focus, logical order, main content reachable | Not run |
| T11 | Invalid inquiry | Submit blank fields, then an invalid email | Browser blocks preparation and identifies invalid fields | Not run |
| T12 | Valid inquiry | Complete all fields and prepare | Correct message appears; no transmission claimed | Not run |
| T13 | Copy and fallback | Copy prepared message; repeat with clipboard permission unavailable | Clipboard works or selected text can be copied manually; honest status | Not run |
| T14 | Accessibility | Run Lighthouse on each live page | Accessibility score at least 90 per page | Not run |
| T15 | Console | Open every page and operate menu and inquiry | No JavaScript errors | Not run |
| T17 | Email inquiry | Prepare a valid inquiry and open the email link; also test direct email without JS | Recipient is ntigre007@gmail.com; draft has correct subject and details; nothing sends automatically | Not run |
| T16 | Graphic accessibility | Inspect home photography with accessibility tools | Descriptive alt text; stock imagery not represented as client work | Not run |

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
