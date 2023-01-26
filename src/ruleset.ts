import validateSchemaPropertyPatternRegex from "./functions/validateSchemaPropertyPatternRegex";
import validateSchemaArrayPropertyPatternRegex from "./functions/validateSchemaArrayPropertyPatternRegex";
import { DiagnosticSeverity } from "@stoplight/types";
export default {
    rules: {
        "unsafe-pattern-regex-schema-property": {
            description: "Regex patterns for schema properties must be safe",
            given: '$.components.schemas..properties[*]',
            message: '{{error}}',
            severity: DiagnosticSeverity.Error,
            then: {
                function: validateSchemaPropertyPatternRegex
            }
        },
        "unsafe-pattern-regex-schema-array-property": {
            description: "Regex patterns for schema array properties must be safe",
            given: '$.components.schemas..properties[*]',
            message: '{{error}}',
            severity: DiagnosticSeverity.Error,
            then: {
                function: validateSchemaArrayPropertyPatternRegex
            }
        },
        "unsafe-pattern-regex-components-headers-property": {
            description: "Check regex patterns in components headers schemas",
            given: '$.components.headers..schema',
            message: '{{error}}',
            severity: DiagnosticSeverity.Error,
            then: {
                function: validateSchemaPropertyPatternRegex
            }
        },
        "unsafe-pattern-regex-path-parameter-property": {
            description: "Check regex patterns in path parameters",
            given: '$.paths..parameters[*].schema',
            message: '{{error}}',
            severity: DiagnosticSeverity.Error,
            then: {
                function: validateSchemaPropertyPatternRegex
            }
        }
    }
}
