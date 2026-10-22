# Portfolio project instructions

## Purpose and pages
- Build Nicholas Tigre's personal portfolio for the Personal Portfolio Website Development and Deployment assignment.
- Use five separate pages: `index.html` (Home), `about.html` (About Me), `projects.html` (Projects), `skills.html` (Skills), and `contact.html` (Contact).
- Include links to all five pages in the navigation on every page.
- Use the existing introduction as the starting point: Nicholas Tigre, NJIT class of 2030, Construction Management Technology major.
- Ask Nicholas for missing background, education details, interests, skills, project information, and a public contact email. Never invent credentials or personal details.
- Projects must include at least three real projects, each with a description, image or screenshot, and a link when applicable. Class projects count.
- Do not leave placeholder text, empty sections, or dummy links in the finished site.

## Design
- Preserve the current simple, clean style unless Nicholas requests a change.
- Use warm off-white (`#f5f3ee`) backgrounds, dark green (`#202d28`) text, and a system sans-serif font stack.
- Keep typography, spacing, navigation, and page widths consistent across all pages.
- Use readable text, generous spacing, clear focus indicators, and responsive layouts for phones and laptops with no horizontal scrolling.
- Keep all styling in one shared external stylesheet, `styles.css`; remove the existing embedded styles when that stylesheet is introduced.

## Technical rules
- Use plain HTML5, CSS, and JavaScript only. No frameworks, CSS libraries, npm, build tools, backend, database, or login system.
- The site must work when `index.html` is opened directly from the filesystem, as well as on GitHub Pages.
- Use relative paths for local pages, stylesheets, scripts, and images. Avoid root-relative paths that break under `/portfolio/`.
- Use a shared `script.js` for interactivity. Keep code small, readable, and easy for Nicholas to explain in class.
- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer`, one `h1` per page, and a logical heading order.
- Include a unique page title, language declaration, UTF-8 charset, and viewport metadata on every page.
- Implement at least two JavaScript features: an accessible responsive navigation menu and one additional feature, such as a light/dark theme toggle.
- Menu controls must be real buttons with accessible names and accurate expanded state. Support keyboard operation and keep navigation usable if JavaScript fails.
- Give images appropriate alt text, keep each image under 500 KB, and maintain sufficient text contrast.
- If a contact form is requested, explain that it cannot send messages without a backend. Validate it with JavaScript and provide an email link. A public email link alone satisfies the contact requirement.
- Never include secrets, API keys, passwords, tokens, a home address, or a phone number. Confirm which email Nicholas wants public before adding one.

## Workflow and Git
- Work on one small task at a time. Read the existing files first and preserve unrelated work.
- Explain what changed and how it was checked so Nicholas can review and understand the code.
- Do not expand a review request into an unsolicited redesign or full implementation.
- After each completed implementation task, create a small commit with a clear message. Do not include unrelated user changes.
- Push completed commits to GitHub as part of the assignment workflow, obtaining push approval as the assignment requests. Do not deploy or change repository settings without authorization.
- Nicholas confirmed that the existing NicholasMTigre/NicholasMTigre repository is correct. Keep its current remote and name; verify the actual GitHub Pages URL before documenting deployment.
- Use revert commits to undo committed work. Never use destructive reset or force push.
- Support steady work over multiple days; never fabricate commit dates or test results.

## Testing and deliverables
- After changes, check relevant links, phone and laptop layouts, and keyboard operation. Inspect the browser console when testing JavaScript.
- Maintain `TESTING.md` with at least 12 test cases, each including an ID, what is tested, steps, expected result, and actual Pass/Fail result after execution. Mark unrun tests as not run.
- Cover every navigation link on every page, every page on phone and laptop screens, every JavaScript feature, keyboard navigation on every page, and Lighthouse Accessibility on every page. If forms are used, test valid and invalid input.
- Aim for a Lighthouse Accessibility score of at least 90 on every page.
- Run final tests on the live GitHub Pages site. Record failures and successful retests honestly; distinguish local checks from live checks.
- Update `README.md` with the project description, verified live URL, local viewing instructions, and acknowledgments where applicable.
- Help prepare the required 1-2 page report with repository and live links, features, challenges and solutions, a real Codex mistake and its correction, and phone/laptop screenshots.
- Do not claim browser, Lighthouse, deployment, or live-site checks passed unless they were actually performed.

