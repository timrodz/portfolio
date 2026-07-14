#!/usr/bin/env node
"use strict";

// Minimal console application: print the exact string "Hello, World!" to
// standard output and exit with status code 0. No external dependencies,
// networking, or file I/O — this is a baseline build/runtime sanity check.
function main() {
  process.stdout.write("Hello, World!\n");
  return 0;
}

process.exit(main());
