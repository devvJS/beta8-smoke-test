# beta8-smoke-test

> A CLI tool that tells you a random dad joke.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later recommended)

## Installation

```bash
npm install
```

## Usage

```bash
node index.js
```

Running the command prints a random dad joke to your terminal.

## How it works

Jokes are fetched live from the [icanhazdadjoke.com](https://icanhazdadjoke.com/) public API at runtime. An active internet connection is required — if the API is unreachable, the tool prints a friendly error message and exits with a non-zero status.
