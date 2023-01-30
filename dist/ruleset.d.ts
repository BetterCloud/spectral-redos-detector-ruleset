import * as _stoplight_spectral_core from '@stoplight/spectral-core';
import { DiagnosticSeverity } from '@stoplight/types';

declare const _default: {
    rules: {
        "unsafe-pattern-regex-components-schema-property": {
            description: string;
            given: string;
            message: string;
            severity: DiagnosticSeverity;
            then: {
                function: _stoplight_spectral_core.RulesetFunctionWithValidator<any, unknown>;
            };
        };
    };
};

export { _default as default };
