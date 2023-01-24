"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/ruleset.ts
var ruleset_exports = {};
__export(ruleset_exports, {
  default: () => ruleset_default
});
module.exports = __toCommonJS(ruleset_exports);

// src/functions/validateSchemaPropertyPatternRegex.ts
var import_redos_detector = require("redos-detector");
var validateSchemaPropertyPatternRegex = (param) => {
  for (const [key, value] of Object.entries(param)) {
    console.log(param, "param");
    if (key.toLowerCase().includes("pattern")) {
      if (!(0, import_redos_detector.isSafe)(new RegExp(`${value}`)).safe) {
        return [
          {
            message: `${value} This pattern is not safe from ReDoS attacks. There may be infinite backtracks possible in the worst case.`
          }
        ];
      }
    }
  }
};
var validateSchemaPropertyPatternRegex_default = validateSchemaPropertyPatternRegex;

// node_modules/@stoplight/types/dist/index.mjs
var HttpParamStyles;
(function(HttpParamStyles2) {
  HttpParamStyles2["Simple"] = "simple";
  HttpParamStyles2["Matrix"] = "matrix";
  HttpParamStyles2["Label"] = "label";
  HttpParamStyles2["Form"] = "form";
  HttpParamStyles2["CommaDelimited"] = "commaDelimited";
  HttpParamStyles2["SpaceDelimited"] = "spaceDelimited";
  HttpParamStyles2["PipeDelimited"] = "pipeDelimited";
  HttpParamStyles2["DeepObject"] = "deepObject";
})(HttpParamStyles || (HttpParamStyles = {}));
var DiagnosticSeverity;
(function(DiagnosticSeverity2) {
  DiagnosticSeverity2[DiagnosticSeverity2["Error"] = 0] = "Error";
  DiagnosticSeverity2[DiagnosticSeverity2["Warning"] = 1] = "Warning";
  DiagnosticSeverity2[DiagnosticSeverity2["Information"] = 2] = "Information";
  DiagnosticSeverity2[DiagnosticSeverity2["Hint"] = 3] = "Hint";
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var NodeType;
(function(NodeType2) {
  NodeType2["Article"] = "article";
  NodeType2["HttpService"] = "http_service";
  NodeType2["HttpServer"] = "http_server";
  NodeType2["HttpOperation"] = "http_operation";
  NodeType2["Model"] = "model";
  NodeType2["Generic"] = "generic";
  NodeType2["Unknown"] = "unknown";
  NodeType2["TableOfContents"] = "table_of_contents";
  NodeType2["SpectralRuleset"] = "spectral_ruleset";
  NodeType2["Styleguide"] = "styleguide";
  NodeType2["Image"] = "image";
})(NodeType || (NodeType = {}));
var NodeFormat;
(function(NodeFormat2) {
  NodeFormat2["Json"] = "json";
  NodeFormat2["Markdown"] = "markdown";
  NodeFormat2["Yaml"] = "yaml";
  NodeFormat2["Javascript"] = "javascript";
  NodeFormat2["Apng"] = "apng";
  NodeFormat2["Avif"] = "avif";
  NodeFormat2["Bmp"] = "bmp";
  NodeFormat2["Gif"] = "gif";
  NodeFormat2["Jpeg"] = "jpeg";
  NodeFormat2["Png"] = "png";
  NodeFormat2["Svg"] = "svg";
  NodeFormat2["Webp"] = "webp";
})(NodeFormat || (NodeFormat = {}));

// src/ruleset.ts
var ruleset_default = {
  rules: {
    "unsafe-pattern-regex-schema-property": {
      description: "Regex patterns for schema properties must be safe",
      given: "$.components.schemas..properties[*]",
      message: "{{error}}",
      severity: DiagnosticSeverity.Error,
      then: {
        function: validateSchemaPropertyPatternRegex_default
      }
    }
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
module.exports = module.exports.default;
//# sourceMappingURL=ruleset.js.map