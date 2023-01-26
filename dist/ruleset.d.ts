import { DiagnosticSeverity } from '@stoplight/types';

declare const _default: {
    rules: {
        "unsafe-pattern-regex-schema-property": {
            description: string;
            given: string;
            message: string;
            severity: DiagnosticSeverity;
            then: {
                function: (param: any) => any;
            };
        };
        "unsafe-pattern-regex-schema-array-property": {
            description: string;
            given: string;
            message: string;
            severity: DiagnosticSeverity;
            then: {
                function: (param: any) => any;
            };
        };
        "unsafe-pattern-regex-components-headers-property": {
            description: string;
            given: string;
            message: string;
            severity: DiagnosticSeverity;
            then: {
                function: (param: any) => any;
            };
        };
    };
};

export { _default as default };
