import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("unsafe-pattern-regex-schema-array-property", [
  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      components: {
        schemas: {
          Vet: {
            type: "object",
            properties: {
              services: {
                type: "array",
                minItems: 0,
                maxItems: 100,
                items: {
                  type: "string",
                  maxLength: 30,
                  pattern: "^[a-zA-Z]+(?:[\\s.]+[a-zA-Z]+)*$"
                }
              },
              test: {
                type: "array",
                minItems: 0,
                maxItems: 100,
                items: {
                  type: "object",
                  properties: {
                    id: {
                      type: "string",
                      maxLength: 30,
                      pattern: "^[a-zA-Z]+(?:[\\s.]+[a-zA-Z]+)*$"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    errors: [
      {
        code: "unsafe-pattern-regex-schema-array-property",
        message: "^([a-b]*)([a-c]*)$ This pattern is not safe from ReDoS attacks.",
        path: ["components", "schemas", "Pet", "properties", "schema"],
        range: {
          end: {
            "character": 176,
            "line": 0,
          },
          start: {
            "character": 129,
            "line": 0,
          },
        },
        severity: DiagnosticSeverity.Error,
      }
    ]
  }
])
