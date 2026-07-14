# Hello, World!

A minimal console application that prints `Hello, World!` to standard output and
exits with status code `0`. It has no external dependencies, no networking, and
no file I/O — its sole purpose is to validate that the build environment,
language toolchain, and deployment pipeline are correctly configured.

## Requirements

- [Node.js](https://nodejs.org/) 18 or newer (the only runtime dependency).

## Build

There is no compilation step for a Node.js script. The `build` script performs a
syntax-only check so the process fails loudly on a malformed source file:

```bash
cd hello
npm run build   # runs: node --check main.js
```

## Run

```bash
cd hello
npm start        # runs: node main.js
```

or invoke the entry point directly:

```bash
node hello/main.js
```

## Expected output

```
Hello, World!
```

The process exits with status code `0` on success. Verify with:

```bash
node hello/main.js; echo "exit=$?"
```

## Notes

- Output is written to **stdout** only; stderr is reserved for diagnostics.
- The build is repeatable from a clean checkout with no local state — there are
  no build artifacts to clean and nothing to install.
