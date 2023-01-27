import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("unsafe-pattern-regex-components-schema-property", [
  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      components: {
        schemas: {
          Pet: {
            type: "object",
            required: ["breedId"],
            properties: {
              breed: {
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
        code: "unsafe-pattern-regex-components-schema-property",
        message: "^([a-b]*)([a-c]*)$ This pattern is not safe from ReDoS attacks.",
        path: ["components", "schemas", "Pet", "properties", "breed"],
        range: {
          end: {
            "character": 184,
            "line": 0,
          },
          start: {
            "character": 137,
            "line": 0,
          },
        },
        severity: DiagnosticSeverity.Error,
      }
    ]
  },

  {
    name: "valid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      components: {
        schemas: {
          Pet: {
            type: "object",
            required: ["breedId"],
            properties: {
              breed: {
                type: "string",
                pattern: "^([a-c]*)d([a-c]*)$"
              },
            },
          }
        }
      }
    },
    errors: []
  }
])
