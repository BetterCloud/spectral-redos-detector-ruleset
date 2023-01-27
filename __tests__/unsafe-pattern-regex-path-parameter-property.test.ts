import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("unsafe-pattern-regex-path-parameter-property", [
  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: {
        "/pets": {
          get: {
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: {
                  type: "string",
                  format: "uuid",
                  pattern: '^([a-c]*)d([a-c]*)$',
                },
              },
            ],
          },
        },
      },
    },
    errors: [
      {
        code: "unsafe-pattern-regex-path-parameter-property",
        message: "^([a-b]*)([a-c]*)$ This pattern is not safe from ReDoS attacks.",
        path: ["paths", "/pets", "get", "parameters", "name", "schema"],
        range: {
          end: {
            "character": 239,
            "line": 0,
          },
          start: {
            "character": 161,
            "line": 0,
          },
        },
        severity: DiagnosticSeverity.Error,
      },
    ],
  },

  {
    name: "valid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      paths: {
        "/pets": {
          get: {
            parameters: [
              {
                name: "id",
                in: "path",
                required: true,
                schema: {
                  type: "string",
                  format: "uuid",
                  pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
                },
              },
            ],
          },
        },
      },
    },
    errors: [],
  },
]);
