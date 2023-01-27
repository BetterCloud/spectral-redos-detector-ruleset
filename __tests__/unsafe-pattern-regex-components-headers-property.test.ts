import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("unsafe-pattern-regex-components-headers-property", [
  {
    name: "invalid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      components: {
        headers: {
          "x-bc-correlation-id": {
            name: "x-bc-correlation-id",
            in: "header",
            required: false,
            schema: {
              type: "string",
              format: "uuid",
              pattern: "^([a-b]*)([a-c]*)$",
              maxLength: 36
            },
            description: "a header used to track requests as they flow through the system",
            example: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          },
        },
      },
    },
    errors: [
      {
        code: "unsafe-pattern-regex-components-headers-property",
        message: "^([a-b]*)([a-c]*)$ This pattern is not safe from ReDoS attacks.",
        path: ["components", "headers", "x-bc-correlation-id", "schema"],
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
      }
    ],
  },

  {
    name: "valid case",
    document: {
      openapi: "3.1.0",
      info: { version: "1.0" },
      components: {
        headers: {
          "x-bc-correlation-id": {
            name: "x-bc-correlation-id",
            in: "header",
            required: false,
            schema: {
              type: "string",
              format: "uuid",
              pattern: "^([a-c]*)d([a-c]*)$",
              maxLength: 36
            },
            description: "a header used to track requests as they flow through the system",
            example: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
          }
        }
      }
    },
    errors: [],
  },
]);
