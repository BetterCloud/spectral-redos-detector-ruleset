import checkForRedosError from '../shared/checkForRedosError';

const validateSchemaPropertyPatternRegex = (param: any): any => {
  if (param.pattern !== undefined || null) {
    return checkForRedosError(param.pattern)
  }
}

export default validateSchemaPropertyPatternRegex
