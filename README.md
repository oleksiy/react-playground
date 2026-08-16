# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Setup

### Node Version
This project requires Node.js `22.22.2`. The version is pinned in `.nvmrc` and `.node-version`.

**Automatic version switching:**
- Using **nvm**: Add this to your shell config (`~/.zshrc` or `~/.bashrc`):
  ```bash
  load_nvmrc() {
    local nvmrc_path="$(nvm_find_nvmrc)"
    if [ -n "$nvmrc_path" ]; then
      local dir="$nvmrc_path:h"
      cd -q "$dir" && nvm use
    fi
  }
  load_nvmrc
  ```
- Using **fnm** (recommended): Install from https://github.com/Schniz/fnm, then add to your shell config:
  ```bash
  eval "$(fnm env)"
  ```

After setup, navigate into the project and your Node version will automatically switch.

### Dependencies
```bash
npm install
```

### Development
```bash
npm run dev
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
