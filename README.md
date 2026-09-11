# turbo-tool-kit

A set of developer tools whose goal is to make everyone's life easier.

Single-file HTML tools, served straight from GitHub Pages. Nothing to install, nothing to build.

**Live:** https://turborilla.github.io/turbo-tool-kit/

---

## Adding a tool

Three steps, no build step.

**1. Drop the file in `tools/`**

```
tools/my-cool-thing.html
```

It must be a self-contained `.html` file. Inline your CSS and JS, or put assets next to it in
`tools/my-cool-thing/`. Use lowercase-with-dashes filenames, no spaces.

**2. Add an entry to `tools.js`**

```js
{
  name: "My Cool Thing",
  file: "my-cool-thing.html",
  description: "One line saying what it does.",
  tags: ["art", "build"],
  icon: "\u{1F3A8}",
  author: "Your Name",
},
```

| Field         | Required | Notes                                    |
| ------------- | -------- | ---------------------------------------- |
| `name`        | yes      | Shown on the card                        |
| `file`        | yes      | Filename inside `tools/`                 |
| `description` | yes      | One line, plain text                     |
| `tags`        | no       | Drives the filter chips on the index     |
| `icon`        | no       | An emoji; defaults to a wrench           |
| `author`      | no       | Who to bug when it breaks                |

**3. Commit and push**

```bash
git add tools/my-cool-thing.html tools.js
git commit -m "Add My Cool Thing"
git push
```

Live in about 30 seconds.

---

## Testing locally

Just double-click `index.html`. The manifest is a plain `.js` file, not JSON, specifically so the
page works over `file://` without needing a web server.

---

## Layout

```
index.html    the dashboard: search, tag filters, card grid
tools.js      the tool manifest - the only file you edit to list a tool
tools/        the tools themselves, one self-contained .html each
.nojekyll     tells GitHub Pages to serve files as-is, no Jekyll processing
```

## Notes

- Tools run entirely client-side. Don't put secrets, API keys, or internal URLs in them.
- Keep an eye on file size. A tool with a big demo asset baked in as base64 makes every
  visitor download it. `nine-slice-repair-lab.html` is 7.5 MB for this reason. If that
  becomes a habit, pull the asset out to `tools/<tool-name>/` and load it on demand.
- **The site is public.** Anything pushed here is visible to anyone with the link.
- The index sorts alphabetically by `name`. There is no ordering field on purpose.
