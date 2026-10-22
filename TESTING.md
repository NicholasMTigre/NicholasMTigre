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
| T16 | Graphic accessibility | Inspect home graphic with accessibility tools | Labeled illustrative diagram, not represented as client work | Not run |

Record actual live URL, browser, date, failures, fixes, and retests when browser testing is completed. Public contact delivery remains unavailable until a business email or another contact channel is supplied.
