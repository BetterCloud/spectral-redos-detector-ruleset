import forOwn = require("lodash/fp/forOwn");
import get = require("lodash/fp/get");
import isNil = require("lodash/fp/isNil");
import checkForRedosError from '../shared/checkForRedosError';

const checkForUnsafePattern = (property: any) => {
  const regex = get('pattern', property)
  !isNil(regex) && checkForRedosError(regex);
}
const validateSchemaArrayPropertyPatternRegex = (param: any): any => {
  if (get('type', param) === 'array') {
    forOwn(item => {
      if (get('type', item) === 'array') {
        console.log(item, 'item')
        const arrayItems = get(item, 'items')
        if (get('type', arrayItems) === 'object') {
          return forOwn(objectItem => checkForUnsafePattern(objectItem), arrayItems)
        } else {
          return checkForUnsafePattern(arrayItems)
        }

      } else {
        return checkForUnsafePattern(item)
      }
    }, param.items.properties)
  }
}

export default validateSchemaArrayPropertyPatternRegex
