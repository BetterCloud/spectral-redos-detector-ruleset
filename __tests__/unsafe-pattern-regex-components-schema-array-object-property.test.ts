import { DiagnosticSeverity } from "@stoplight/types";
import testRule from "./__helpers__/helper";

testRule("unsafe-pattern-regex-components-schema-array-object-property", [
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
              vetId: {
                type: 'string',
                format: 'uuid',
                pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$',
                maxLength: 36,
                readOnly: true
              },
              name: {
                type: 'string',
                pattern: '^[a-zA-Z]+(?:[\\s.]+[a-zA-Z]+)*$',
                maxLength: 50
              },
              address: {
                type: 'string',
                pattern: '^\\d{1,5}\\s\\w.\\s(\\b\\w*\\b\\s){1,2}\\w*\\.$',
                maxLength: 50
              },
              test: {
                type: 'array',
                minItems: 0,
                maxItems: 100,
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      maxLength: 30,
                      pattern: '^[a-zA-Z]+(?:[\\s.]+[a-zA-Z]+)*$',
                    },
                  },
                },
              },
            },
            required: ['vetId'],
            example: {
              vetId: '23b22425-8a40-4cdf-a898-2867befe4128',
              name: 'Bark and Meow Vet',
              address: '432 N. Tejon St.',
              services: ['Boarding', 'Wellness', 'Neuter and Spay'],
            },
          },
        },
      },
    },
    errors: [
      {
        code: "unsafe-pattern-regex-components-schema-array-object-property",
        message: "^[a-zA-Z]+(?:[\\s.]+[a-zA-Z]+)*$ This pattern is not safe from ReDoS attacks.",
        path: ["components", "schemas", "Vet", "properties", "test", "items", "properties", "id"],
        range: {
          end: {
            "character": 613,
            "line": 0,
          },
          start: {
            "character": 537,
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
      components: {
        schemas: {
          Vet: {
            type: "object",
            properties: {
              test: {
                type: 'array',
                minItems: 0,
                maxItems: 100,
                items: {
                  type: 'object',
                  properties: {
                    id: {
                      type: 'string',
                      maxLength: 30,
                      pattern: '^([a-c]*)d([a-c]*)$',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    errors: [],
  },
]);
