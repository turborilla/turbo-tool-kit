/* ───────────────────────────────────────────────────────────────────────────
   TURBO TOOL KIT — tool manifest

   To add a tool:
     1. Drop the .html file into  tools/
     2. Add an entry below
     3. Commit + push. It's live in ~30s.

   Fields:
     name         required   shown on the card
     file         required   filename inside tools/
     description  required   one line, what it does
     tags         optional   array of strings, used for filtering
     icon         optional   an emoji, defaults to a generic one
     author       optional   who to bug when it breaks
   ─────────────────────────────────────────────────────────────────────────── */

window.TOOLS = [
  {
    name: "Nine-slice Repair Lab",
    file: "nine-slice-repair-lab.html",
    description: "Quilt away the seams in a nine-slice texture. Frame joins, intersections and repeating centres stay linked while it repairs.",
    tags: ["art", "textures", "sprites"],
    icon: "\u{1F9EA}",
    author: "Zacharie",
  },
  {
    name: "Nine Slice Studio",
    file: "nine-slice-studio.html",
    description: "Set 9-slice insets on a sprite and paint straight onto the stretched preview. Repeated tiles and seams update live.",
    tags: ["art", "ui", "sprites"],
    icon: "\u{1FA9F}",
    author: "Zacharie",
  },
];
