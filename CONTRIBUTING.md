# Contributing to JavaScript Mastery

First off, thank you for considering contributing to JavaScript Mastery! It's people like you that make this project such a great learning resource for everyone.

## Code of Conduct

By participating in this project, you are expected to uphold our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before contributing.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report. Following these guidelines helps maintainers understand your report, reproduce the behavior, and find related reports.

- **Use the GitHub issue search** — check if the issue has already been reported.
- **Check if the issue has been fixed** — try to reproduce it using the latest `main` branch.
- **Isolate the problem** — create a reduced test case and a live example.

#### How Do I Submit A Good Bug Report?

Bugs are tracked as [GitHub issues](https://github.com/yourusername/javascript-mastery/issues).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible.
- **Provide specific examples to demonstrate the steps**.
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened.

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion, including completely new features and minor improvements to existing functionality.

- **Use the GitHub issue search** — check if the enhancement has already been suggested.
- **Check if the enhancement has already been implemented** — try the latest version of the code.
- **Determine which repository the enhancement should be suggested in**.

#### How Do I Submit A Good Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://github.com/yourusername/javascript-mastery/issues).

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps** or point to similar features in other apps.
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of the project which the suggestion is related to.
- **Explain why this enhancement would be useful** to most users.
- **List some other applications where this enhancement exists.**
- **Specify which version you're using.**
- **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing? You can start by looking through these `beginner` and `help-wanted` issues:

- [Beginner issues](https://github.com/yourusername/javascript-mastery/labels/beginner) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/yourusername/javascript-mastery/labels/help%20wanted) - issues which should be a bit more involved than `beginner` issues.

### Pull Requests

The process described here has several goals:

- Maintain quality
- Fix problems that are important to users
- Engage the community in working toward the best possible learning platform
- Enable a sustainable system for maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line
- Consider starting the commit message with an applicable emoji:
  - 🎨 `:art:` when improving the format/structure of the code
  - 🐎 `:racehorse:` when improving performance
  - 🚱 `:non-potable_water:` when plugging memory leaks
  - 📝 `:memo:` when writing docs
  - 🐛 `:bug:` when fixing a bug
  - 🔥 `:fire:` when removing code or files
  - 💚 `:green_heart:` when fixing the CI build
  - ✅ `:white_check_mark:` when adding tests
  - 🔒 `:lock:` when dealing with security
  - ⬆️ `:arrow_up:` when upgrading dependencies
  - ⬇️ `:arrow_down:` when downgrading dependencies
  - 👕 `:shirt:` when removing linter warnings

### JavaScript Styleguide

All JavaScript code is linted with [ESLint](https://eslint.org/) and formatted with [Prettier](https://prettier.io/).

- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- Inline `export`s with expressions whenever possible
  \`\`\`js
  // Use this:
  export const foo = 'bar';

  // Instead of:
  const foo = 'bar';
  export { foo };
  \`\`\`
- Place imports in the following order:
  - Built-in Node.js modules (such as `path`)
  - External modules (such as `react`, `next`, etc.)
  - Internal modules (using relative paths)
- Place class properties in the following order:
  - Class methods and properties (methods starting with `static`)
  - Instance methods and properties
- Avoid platform-dependent code

### CSS/Tailwind Styleguide

- Use Tailwind CSS classes for styling
- Follow the [Tailwind CSS best practices](https://tailwindcss.com/docs/utility-first)
- Use custom CSS sparingly and only when necessary
- Keep component styling modular and reusable

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown/) for documentation.
- Reference methods and classes in markdown with the custom `{@link}` syntax.
  - Class: `{@link ClassName}`
  - Method: `{@link ClassName#methodName}`
- Use code examples where appropriate
- Keep documentation up-to-date with code changes

## Additional Notes

### Issue and Pull Request Labels

This section lists the labels we use to help us track and manage issues and pull requests.

#### Type of Issue and Issue State

- `bug`: Confirmed bugs or reports that are very likely to be bugs.
- `enhancement`: Feature requests.
- `documentation`: Documentation-related issues or pull requests.
- `question`: Questions that need clarification.
- `help-wanted`: The team would appreciate help from the community in resolving these issues.
- `beginner`: Less complex issues which would be good first issues to work on for users who want to contribute.
- `duplicate`: Issues which are duplicates of other issues.
- `invalid`: Issues which aren't valid (e.g., user errors).
- `wontfix`: The team has decided not to fix these issues for now for some reason.

#### Pull Request Labels

- `work-in-progress`: Pull requests which are still being worked on, more changes will follow.
- `needs-review`: Pull requests which need code review and approval from maintainers.
- `under-review`: Pull requests being reviewed by maintainers.
- `requires-changes`: Pull requests which need to be updated based on review comments and then reviewed again.
- `needs-testing`: Pull requests which need manual testing.

## Thank You!

Your contributions to open source, large or small, make great projects like this possible. Thank you for taking the time to contribute.
\`\`\`

Let's create a CODE_OF_CONDUCT.md file:

