// src/functions/validateSchemaPropertyPatternRegex.ts
import { isSafe } from "redos-detector";
var validateSchemaPropertyPatternRegex = (param) => {
  for (const [key, value] of Object.entries(param)) {
    console.log(param, "param");
    if (key.toLowerCase().includes("pattern")) {
      if (!isSafe(new RegExp(`${value}`)).safe) {
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
export {
  ruleset_default as default
};
module.exports = module.exports.default;
//# sourceMappingURL=ruleset.mjs.map