// import isNil = require("lodash/fp/isNil");
import checkForRedosError from "../shared/checkForRedosError";
import {
  createRulesetFunction,
  IFunctionResult,
} from "@stoplight/spectral-core";

export default createRulesetFunction(
  { input: null, options: {} },
  function validateSchemaPropertyPatternRegex(input: any): IFunctionResult[] {
    if (input.pattern !== undefined || null) {
      return checkForRedosError(input.pattern);
    } else {
      return [];
    }
  }
);
