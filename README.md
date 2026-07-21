# Portfolio Backend

This project now includes a simple Node.js backend with a JSON content store and an admin editor.

## What was added
- `server.js` — Express backend for serving the site and API.
- `data/content.json` — editable content source for the portfolio.
- `admin.html` and `src/admin.js` — browser-based editor interface.

## How to run
1. Install Node.js if it is not installed.
2. Run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000` to view the portfolio.
5. Open `http://localhost:3000/admin.html` to edit site content.

## Editing content
- Use the editor page to modify the JSON content.
- Save changes and refresh the portfolio page to see updates.
- The backend persists edits in `data/content.json`.
