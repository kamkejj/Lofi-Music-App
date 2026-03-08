# AGENTS.md

## Cursor Cloud specific instructions

This is a client-side-only React + Vite + Tailwind CSS lofi music player app. There is no backend, database, or API.

### Services

| Service | Command | Port | Notes |
|---------|---------|------|-------|
| Vite Dev Server | `pnpm run dev` | 5173 | The only service needed; serves the full SPA with HMR |

Tauri desktop build (`pnpm run tauri:dev`) is optional and requires Rust toolchain + system deps (webkit2gtk) not installed in cloud environments.

### Key commands

See `package.json` `scripts` for all commands. Key ones:

- **Dev server**: `pnpm run dev`
- **Build**: `pnpm run build`
- **Lint**: `pnpm run lint` — runs ESLint. Note: there are 3 pre-existing prop-types errors in `src/components/HorizontalScrollWithArrows.jsx`; these exist in the repo and are not regressions.
- **Tests**: No test framework is configured yet.

### Gotchas

- `pnpm install` may warn about ignored esbuild build scripts. The esbuild binary still works fine via the pre-built platform-specific package; the warning is safe to ignore.
- The app uses `strictPort: true` in `vite.config.js`, so if port 5173 is already occupied, the dev server will fail instead of picking another port. Kill any existing process on 5173 before starting.
