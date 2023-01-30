import isNil = require("lodash/fp/isNil");
import checkForRedosError from '../shared/checkForRedosError';
import {
  createRulesetFunction,
  IFunctionResult,
} from "@stoplight/spectral-core";


export default createRulesetFunction({ input: null, options: {}, },
  function validateSchemaPropertyPatternRegex(input: any): IFunctionResult[] {
    if (!isNil(input.pattern)) {
      return checkForRedosError(input.pattern);
    } else {
      return [];
    }
  }
);
