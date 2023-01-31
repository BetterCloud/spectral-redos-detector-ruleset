import isNil = require("lodash/fp/isNil");
import { isSafe } from 'redos-detector';
import {
  createRulesetFunction,
  IFunctionResult,
} from "@stoplight/spectral-core";

const getAllOperations = function* (paths: any): any {
  if (typeof paths !== "object") {
    return;
  }

  const operation = { path: "", operation: "", operationObject: "" };
  for (const idx of Object.keys(paths)) {
    const path = paths[idx];
    if (typeof path === "object") {
      operation.path = idx;
      for (const httpMethod of Object.keys(path)) {
        if (typeof path[httpMethod] === "object") {
          operation.operation = httpMethod;
          operation.operationObject = path[httpMethod]

          yield operation;
        }
      }
    }
  }
}

export default createRulesetFunction(
  { input: null, options: {} },
  function validateSchemaPropertyPatternRegex(input: any): IFunctionResult[] {
    const errorList: IFunctionResult[] = [];

    for (const { path, operation: httpMethod, operationObject: methodObject } of getAllOperations(input.paths)) {
      if (!isNil(methodObject.parameters)) {
        methodObject.parameters.forEach((param: any) => {
          if (!isNil(param.schema)) {
            if (!isNil(param.schema.pattern) && !isSafe(new RegExp(`${param.schema.pattern}`)).safe) {
              errorList.push({
                message: `${param.schema.pattern} This pattern is not safe from ReDoS attacks.`,
                //TODO enhance to include param index and schema
                path: ["paths", path, httpMethod, "parameters"],
              })
            }
          }
        })
      }
    }

    return errorList
  }
);
