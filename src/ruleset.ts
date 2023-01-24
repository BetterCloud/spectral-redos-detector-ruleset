import validateSchemaPropertyPatternRegex from "./functions/validateSchemaPropertyPatternRegex";
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
        }
    }
}
