# ts-utils-kit

![npm version](https://img.shields.io/npm/v/ts-utils-kit)
![npm downloads](https://img.shields.io/npm/dm/ts-utils-kit)
![license](https://img.shields.io/npm/l/ts-utils-kit)
![typescript](https://img.shields.io/badge/TypeScript-Ready-blue)

A lightweight and type-safe TypeScript utility library with reusable helpers for arrays, strings, objects, functions and performance optimization.

Built with TypeScript following modern development practices, including unit testing, mutation testing and automated workflows.

---

## Features

- ✅ Fully written in TypeScript
- ✅ Strong type safety
- ✅ Reusable utility functions
- ✅ Unit testing with Vitest
- ✅ Mutation testing with Stryker
- ✅ ESLint configured
- ✅ Husky git hooks
- ✅ Commitlint conventional commits
- ✅ GitHub Actions CI workflow

---

# Installation

Install the package using npm:

```bash
npm install ts-utils-kit


# Usage

Import utilities directly from the package:

```ts
import { capitalize, sum, debounce } from "ts-utils-kit";

capitalize("typescript");
// Typescript

sum([1, 2, 3]);
// 6
```
---

# Available Utilities

| Category | Utilities |
|---|---|
| Arrays | arraylable, sum, sumBy |
| Checks | isEmpty, isFunction, isNullorUndefined, isObject, isObjectLike, isString |
| Misc | typeOf |
| String | capitalize, includes |
| Timing | debounce, throttle |

---

# API Reference

## Arrays

### arraylable

Checks whether a value can be treated as an array.

```ts
import { arraylable } from "ts-utils-kit";

arraylable([1, 2, 3]);

// true
```

---

### sum

Returns the sum of numeric values.

```ts
import { sum } from "ts-utils-kit";

sum([1, 2, 3, 4]);

// 10
```

---

### sumBy

Calculates the sum using a selector function.

```ts
import { sumBy } from "ts-utils-kit";

const users = [
  {
    name: "John",
    age: 20
  },
  {
    name: "Jane",
    age: 30
  }
];

sumBy(users, user => user.age);

// 50
```

---

# Checks

## isEmpty

Checks if a value is empty.

```ts
import { isEmpty } from "ts-utils-kit";

isEmpty("");

// true
```

---

## isFunction

Type guard that checks if a value is a function.

```ts
import { isFunction } from "ts-utils-kit";

isFunction(() => {});

// true
```

---

## isNullorUndefined

Checks if a value is `null` or `undefined`.

```ts
import { isNullorUndefined } from "ts-utils-kit";

isNullorUndefined(null);

// true
```

---

## isObject

Checks if a value is an object.

```ts
import { isObject } from "ts-utils-kit";

isObject({});

// true
```

---

## isObjectLike

Checks if a value behaves like an object.

```ts
import { isObjectLike } from "ts-utils-kit";

isObjectLike([]);

// true
```

---

## isString

Checks if a value is a string.

```ts
import { isString } from "ts-utils-kit";

isString("hello");

// true
```

---

# Miscellaneous

## typeOf

Improved version of JavaScript `typeof` that correctly handles `null`.

```ts
import { typeOf } from "ts-utils-kit";

typeOf(null);

// "null"

typeOf("hello");

// "string"
```

---

# String Utilities

## capitalize

Capitalizes the first character of a string.

```ts
import { capitalize } from "ts-utils-kit";

capitalize("typescript");

// Typescript
```

---

## includes

Checks whether a string contains another string.

```ts
import { includes } from "ts-utils-kit";

includes("hello world", "world");

// true
```

---

# Timing Utilities

## debounce

Creates a debounced function.

The function execution is delayed until the calls stop for the specified delay time.

Useful for:

- Search inputs
- API requests
- Form validation
- Event handlers

Example:

```ts
import { debounce } from "ts-utils-kit";

const search = debounce(
  (value: string) => {
    console.log(value);
  },
  500
);

search("typescript");
```

---

## throttle

Creates a throttled function.

The function executes immediately and prevents additional executions during the delay period.

Useful for:

- Scroll events
- Resize events
- Mouse events
- Performance optimization

Example:

```ts
import { throttle } from "ts-utils-kit";

const handleScroll = throttle(
  () => {
    console.log("scroll");
  },
  300
);
```

---

# Development

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test
```

Generate coverage:

```bash
npm run coverage
```

Run mutation testing:

```bash
npm run stryker
```

---

# Quality Tools

This project uses:

- TypeScript for static typing
- Vitest for unit testing
- Stryker Mutator for mutation testing
- ESLint for code quality
- Husky for git hooks
- Commitlint for conventional commits
- GitHub Actions for CI automation

---

# Contributing

Contributions, issues and feature requests are welcome.

Before submitting changes, make sure:

- Tests are passing
- Code follows lint rules
- Commit messages follow Conventional Commits

---

# License

MIT License








