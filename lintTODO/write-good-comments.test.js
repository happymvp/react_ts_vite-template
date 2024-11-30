import {RuleTester} from "eslint-docgen";
import rule from "eslint-plugin-write-good-comments/lib/rules/write-good-comments.js";

RuleTester.run("write-good-comments", rule, {
  invalid: [
    {
      code: "// In order to comment code",
      errors: [
        {
          column: 4,
          endColumn: 15,
          endLine: 1,
          line: 1,
          message: '"In order to" is wordy or unneeded',
        },
      ],
    },
    {
      code: "// But in order to comment code",
      errors: [
        {
          column: 8,
          endColumn: 19,
          endLine: 1,
          line: 1,
          message: '"in order to" is wordy or unneeded',
        },
      ],
    },
    {
      code: `/* In order
to comment code */`,
      errors: ['"In order to" is wordy or unneeded'],
    },
    {
      code: '// We are using the "eprime" rule',
      errors: [
        {
          column: 7,
          endColumn: 10,
          endLine: 1,
          line: 1,
          message: `"are" is a form of 'to be'`,
        },
      ],
      options: [{ eprime: true }],
    },
  ],
  valid: [
    {
      code: "/* Hello World */",
    },
    {
      code: "// Normal comment",
    },
    {
      code: '// The "passive" rule is disabled',
      options: [{ passive: false }],
    },
    {
      code: '// Whitelisting "read-only" so it does not trigger the "adverb" rule',
      options: [{ whitelist: ["read-only"] }],
    },
  ],
});
