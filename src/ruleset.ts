// import validateSchemaPropertyPatternRegex from "./functions/validateSchemaPropertyPatternRegex";
// import { DiagnosticSeverity } from "@stoplight/types";

export default {
  rules: {
    // "unsafe-pattern-regex-components-schema-property": {
    //   description:
    //     "Check for possible ReDos regex patterns in components schemas properties",
    //   given: "$.components.schemas..properties[*]",
    //   message: "{{error}}",
    //   severity: DiagnosticSeverity.Error,
    //   then: {
    //     function: validateSchemaPropertyPatternRegex,
    //   },
    // },
    // "unsafe-pattern-regex-components-schema-array-property": {
    //   description:
    //     "Check for possible ReDos regex patterns in components schemas with array items that are not objects",
    //   given:
    //     '$.components.schemas..properties[?(@ && @.type == "array" && @.items && @.items.properties == null)].items',
    //   message: "{{error}}",
    //   severity: DiagnosticSeverity.Error,
    //   then: {
    //     function: validateSchemaPropertyPatternRegex,
    //   },
    // },
    // "unsafe-pattern-regex-components-schema-array-object-property": {
    //   description:
    //     "Check for possible ReDos regex patterns in components schemas with array items that are objects",
    //   given:
    //     '$.components.schemas..properties[?(@ && @.type=="array")].items.properties[*]',
    //   message: "{{error}}",
    //   severity: DiagnosticSeverity.Error,
    //   then: {
    //     function: validateSchemaPropertyPatternRegex,
    //   },
    // },
    // "unsafe-pattern-regex-components-headers-property": {
    //   description:
    //     "Check for possible ReDos regex patterns in components headers schemas",
    //   given: "$.components.headers..schema",
    //   message: "{{error}}",
    //   severity: DiagnosticSeverity.Error,
    //   then: {
    //     function: validateSchemaPropertyPatternRegex,
    //   },
    // },
    // "unsafe-pattern-regex-path-parameter-property": {
    //   description: "Check regex patterns in path parameters",
    //   given: "$.paths.*.*.parameters[*].schema",
    //   message: "{{error}}",
    //   severity: DiagnosticSeverity.Error,
    //   then: {
    //     function: validateSchemaPropertyPatternRegex,
    //   },
    // },
  },
};
