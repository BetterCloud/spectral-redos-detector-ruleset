import isNil = require("lodash/fp/isNil");
import checkForRedosError from '../shared/checkForRedosError';

const validateSchemaPropertyPatternRegex = (param: any): any => {
  if (!isNil(param.pattern)) {
    return checkForRedosError(param.pattern)
  } else {
    return []
  }
}

export default validateSchemaPropertyPatternRegex
