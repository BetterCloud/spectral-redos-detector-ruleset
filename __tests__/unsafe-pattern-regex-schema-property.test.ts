import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("unsafe-pattern-regex-schema-property", [
  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      components: {
        schemas: {
          pet: {
            properties: {
              name: "name",
              in: "path",
              required: true,
              schema: {
                type: "string",
                pattern: "^([a-b]*)([a-c]*)$"
              },
            },
          }
        }
      }
    },
    errors: [
      {
        code: "unsafe-pattern-regex-schema-property",
        message: "^([a-b]*)([a-c]*)$ This pattern is not safe from ReDoS attacks. There may be infinite backtracks possible in the worst case.",
        path: ["components", "schemas", "pet", "properties", "schema"],
        range: {
          end: {
            "character": 188,
            "line": 0,
          },
          start: {
            "character": 141,
            "line": 0,
          },
        },
        severity: DiagnosticSeverity.Error,
      }
    ]
  }
])
