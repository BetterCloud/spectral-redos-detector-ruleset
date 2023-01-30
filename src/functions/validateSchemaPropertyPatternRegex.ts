import {
  createRulesetFunction,
  IFunctionResult,
} from "@stoplight/spectral-core";
import isNil = require("lodash/fp/isNil");
import checkForRedosError from '../shared/checkForRedosError';

export default createRulesetFunction(
  { input: null, options: {} },
  function validateSchemaPropertyPatternRegex(input: any): IFunctionResult[] {
    if (!isNil(input.pattern)) {
      return checkForRedosError(input.pattern);
    } else {
      return [];
    }
  }
);
