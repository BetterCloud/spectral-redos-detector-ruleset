var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/lodash/fp/_mapping.js
var require_mapping = __commonJS({
  "node_modules/lodash/fp/_mapping.js"(exports) {
    exports.aliasToReal = {
      "each": "forEach",
      "eachRight": "forEachRight",
      "entries": "toPairs",
      "entriesIn": "toPairsIn",
      "extend": "assignIn",
      "extendAll": "assignInAll",
      "extendAllWith": "assignInAllWith",
      "extendWith": "assignInWith",
      "first": "head",
      "conforms": "conformsTo",
      "matches": "isMatch",
      "property": "get",
      "__": "placeholder",
      "F": "stubFalse",
      "T": "stubTrue",
      "all": "every",
      "allPass": "overEvery",
      "always": "constant",
      "any": "some",
      "anyPass": "overSome",
      "apply": "spread",
      "assoc": "set",
      "assocPath": "set",
      "complement": "negate",
      "compose": "flowRight",
      "contains": "includes",
      "dissoc": "unset",
      "dissocPath": "unset",
      "dropLast": "dropRight",
      "dropLastWhile": "dropRightWhile",
      "equals": "isEqual",
      "identical": "eq",
      "indexBy": "keyBy",
      "init": "initial",
      "invertObj": "invert",
      "juxt": "over",
      "omitAll": "omit",
      "nAry": "ary",
      "path": "get",
      "pathEq": "matchesProperty",
      "pathOr": "getOr",
      "paths": "at",
      "pickAll": "pick",
      "pipe": "flow",
      "pluck": "map",
      "prop": "get",
      "propEq": "matchesProperty",
      "propOr": "getOr",
      "props": "at",
      "symmetricDifference": "xor",
      "symmetricDifferenceBy": "xorBy",
      "symmetricDifferenceWith": "xorWith",
      "takeLast": "takeRight",
      "takeLastWhile": "takeRightWhile",
      "unapply": "rest",
      "unnest": "flatten",
      "useWith": "overArgs",
      "where": "conformsTo",
      "whereEq": "isMatch",
      "zipObj": "zipObject"
    };
    exports.aryMethod = {
      "1": [
        "assignAll",
        "assignInAll",
        "attempt",
        "castArray",
        "ceil",
        "create",
        "curry",
        "curryRight",
        "defaultsAll",
        "defaultsDeepAll",
        "floor",
        "flow",
        "flowRight",
        "fromPairs",
        "invert",
        "iteratee",
        "memoize",
        "method",
        "mergeAll",
        "methodOf",
        "mixin",
        "nthArg",
        "over",
        "overEvery",
        "overSome",
        "rest",
        "reverse",
        "round",
        "runInContext",
        "spread",
        "template",
        "trim",
        "trimEnd",
        "trimStart",
        "uniqueId",
        "words",
        "zipAll"
      ],
      "2": [
        "add",
        "after",
        "ary",
        "assign",
        "assignAllWith",
        "assignIn",
        "assignInAllWith",
        "at",
        "before",
        "bind",
        "bindAll",
        "bindKey",
        "chunk",
        "cloneDeepWith",
        "cloneWith",
        "concat",
        "conformsTo",
        "countBy",
        "curryN",
        "curryRightN",
        "debounce",
        "defaults",
        "defaultsDeep",
        "defaultTo",
        "delay",
        "difference",
        "divide",
        "drop",
        "dropRight",
        "dropRightWhile",
        "dropWhile",
        "endsWith",
        "eq",
        "every",
        "filter",
        "find",
        "findIndex",
        "findKey",
        "findLast",
        "findLastIndex",
        "findLastKey",
        "flatMap",
        "flatMapDeep",
        "flattenDepth",
        "forEach",
        "forEachRight",
        "forIn",
        "forInRight",
        "forOwn",
        "forOwnRight",
        "get",
        "groupBy",
        "gt",
        "gte",
        "has",
        "hasIn",
        "includes",
        "indexOf",
        "intersection",
        "invertBy",
        "invoke",
        "invokeMap",
        "isEqual",
        "isMatch",
        "join",
        "keyBy",
        "lastIndexOf",
        "lt",
        "lte",
        "map",
        "mapKeys",
        "mapValues",
        "matchesProperty",
        "maxBy",
        "meanBy",
        "merge",
        "mergeAllWith",
        "minBy",
        "multiply",
        "nth",
        "omit",
        "omitBy",
        "overArgs",
        "pad",
        "padEnd",
        "padStart",
        "parseInt",
        "partial",
        "partialRight",
        "partition",
        "pick",
        "pickBy",
        "propertyOf",
        "pull",
        "pullAll",
        "pullAt",
        "random",
        "range",
        "rangeRight",
        "rearg",
        "reject",
        "remove",
        "repeat",
        "restFrom",
        "result",
        "sampleSize",
        "some",
        "sortBy",
        "sortedIndex",
        "sortedIndexOf",
        "sortedLastIndex",
        "sortedLastIndexOf",
        "sortedUniqBy",
        "split",
        "spreadFrom",
        "startsWith",
        "subtract",
        "sumBy",
        "take",
        "takeRight",
        "takeRightWhile",
        "takeWhile",
        "tap",
        "throttle",
        "thru",
        "times",
        "trimChars",
        "trimCharsEnd",
        "trimCharsStart",
        "truncate",
        "union",
        "uniqBy",
        "uniqWith",
        "unset",
        "unzipWith",
        "without",
        "wrap",
        "xor",
        "zip",
        "zipObject",
        "zipObjectDeep"
      ],
      "3": [
        "assignInWith",
        "assignWith",
        "clamp",
        "differenceBy",
        "differenceWith",
        "findFrom",
        "findIndexFrom",
        "findLastFrom",
        "findLastIndexFrom",
        "getOr",
        "includesFrom",
        "indexOfFrom",
        "inRange",
        "intersectionBy",
        "intersectionWith",
        "invokeArgs",
        "invokeArgsMap",
        "isEqualWith",
        "isMatchWith",
        "flatMapDepth",
        "lastIndexOfFrom",
        "mergeWith",
        "orderBy",
        "padChars",
        "padCharsEnd",
        "padCharsStart",
        "pullAllBy",
        "pullAllWith",
        "rangeStep",
        "rangeStepRight",
        "reduce",
        "reduceRight",
        "replace",
        "set",
        "slice",
        "sortedIndexBy",
        "sortedLastIndexBy",
        "transform",
        "unionBy",
        "unionWith",
        "update",
        "xorBy",
        "xorWith",
        "zipWith"
      ],
      "4": [
        "fill",
        "setWith",
        "updateWith"
      ]
    };
    exports.aryRearg = {
      "2": [1, 0],
      "3": [2, 0, 1],
      "4": [3, 2, 0, 1]
    };
    exports.iterateeAry = {
      "dropRightWhile": 1,
      "dropWhile": 1,
      "every": 1,
      "filter": 1,
      "find": 1,
      "findFrom": 1,
      "findIndex": 1,
      "findIndexFrom": 1,
      "findKey": 1,
      "findLast": 1,
      "findLastFrom": 1,
      "findLastIndex": 1,
      "findLastIndexFrom": 1,
      "findLastKey": 1,
      "flatMap": 1,
      "flatMapDeep": 1,
      "flatMapDepth": 1,
      "forEach": 1,
      "forEachRight": 1,
      "forIn": 1,
      "forInRight": 1,
      "forOwn": 1,
      "forOwnRight": 1,
      "map": 1,
      "mapKeys": 1,
      "mapValues": 1,
      "partition": 1,
      "reduce": 2,
      "reduceRight": 2,
      "reject": 1,
      "remove": 1,
      "some": 1,
      "takeRightWhile": 1,
      "takeWhile": 1,
      "times": 1,
      "transform": 2
    };
    exports.iterateeRearg = {
      "mapKeys": [1],
      "reduceRight": [1, 0]
    };
    exports.methodRearg = {
      "assignInAllWith": [1, 0],
      "assignInWith": [1, 2, 0],
      "assignAllWith": [1, 0],
      "assignWith": [1, 2, 0],
      "differenceBy": [1, 2, 0],
      "differenceWith": [1, 2, 0],
      "getOr": [2, 1, 0],
      "intersectionBy": [1, 2, 0],
      "intersectionWith": [1, 2, 0],
      "isEqualWith": [1, 2, 0],
      "isMatchWith": [2, 1, 0],
      "mergeAllWith": [1, 0],
      "mergeWith": [1, 2, 0],
      "padChars": [2, 1, 0],
      "padCharsEnd": [2, 1, 0],
      "padCharsStart": [2, 1, 0],
      "pullAllBy": [2, 1, 0],
      "pullAllWith": [2, 1, 0],
      "rangeStep": [1, 2, 0],
      "rangeStepRight": [1, 2, 0],
      "setWith": [3, 1, 2, 0],
      "sortedIndexBy": [2, 1, 0],
      "sortedLastIndexBy": [2, 1, 0],
      "unionBy": [1, 2, 0],
      "unionWith": [1, 2, 0],
      "updateWith": [3, 1, 2, 0],
      "xorBy": [1, 2, 0],
      "xorWith": [1, 2, 0],
      "zipWith": [1, 2, 0]
    };
    exports.methodSpread = {
      "assignAll": { "start": 0 },
      "assignAllWith": { "start": 0 },
      "assignInAll": { "start": 0 },
      "assignInAllWith": { "start": 0 },
      "defaultsAll": { "start": 0 },
      "defaultsDeepAll": { "start": 0 },
      "invokeArgs": { "start": 2 },
      "invokeArgsMap": { "start": 2 },
      "mergeAll": { "start": 0 },
      "mergeAllWith": { "start": 0 },
      "partial": { "start": 1 },
      "partialRight": { "start": 1 },
      "without": { "start": 1 },
      "zipAll": { "start": 0 }
    };
    exports.mutate = {
      "array": {
        "fill": true,
        "pull": true,
        "pullAll": true,
        "pullAllBy": true,
        "pullAllWith": true,
        "pullAt": true,
        "remove": true,
        "reverse": true
      },
      "object": {
        "assign": true,
        "assignAll": true,
        "assignAllWith": true,
        "assignIn": true,
        "assignInAll": true,
        "assignInAllWith": true,
        "assignInWith": true,
        "assignWith": true,
        "defaults": true,
        "defaultsAll": true,
        "defaultsDeep": true,
        "defaultsDeepAll": true,
        "merge": true,
        "mergeAll": true,
        "mergeAllWith": true,
        "mergeWith": true
      },
      "set": {
        "set": true,
        "setWith": true,
        "unset": true,
        "update": true,
        "updateWith": true
      }
    };
    exports.realToAlias = function() {
      var hasOwnProperty = Object.prototype.hasOwnProperty, object = exports.aliasToReal, result = {};
      for (var key in object) {
        var value = object[key];
        if (hasOwnProperty.call(result, value)) {
          result[value].push(key);
        } else {
          result[value] = [key];
        }
      }
      return result;
    }();
    exports.remap = {
      "assignAll": "assign",
      "assignAllWith": "assignWith",
      "assignInAll": "assignIn",
      "assignInAllWith": "assignInWith",
      "curryN": "curry",
      "curryRightN": "curryRight",
      "defaultsAll": "defaults",
      "defaultsDeepAll": "defaultsDeep",
      "findFrom": "find",
      "findIndexFrom": "findIndex",
      "findLastFrom": "findLast",
      "findLastIndexFrom": "findLastIndex",
      "getOr": "get",
      "includesFrom": "includes",
      "indexOfFrom": "indexOf",
      "invokeArgs": "invoke",
      "invokeArgsMap": "invokeMap",
      "lastIndexOfFrom": "lastIndexOf",
      "mergeAll": "merge",
      "mergeAllWith": "mergeWith",
      "padChars": "pad",
      "padCharsEnd": "padEnd",
      "padCharsStart": "padStart",
      "propertyOf": "get",
      "rangeStep": "range",
      "rangeStepRight": "rangeRight",
      "restFrom": "rest",
      "spreadFrom": "spread",
      "trimChars": "trim",
      "trimCharsEnd": "trimEnd",
      "trimCharsStart": "trimStart",
      "zipAll": "zip"
    };
    exports.skipFixed = {
      "castArray": true,
      "flow": true,
      "flowRight": true,
      "iteratee": true,
      "mixin": true,
      "rearg": true,
      "runInContext": true
    };
    exports.skipRearg = {
      "add": true,
      "assign": true,
      "assignIn": true,
      "bind": true,
      "bindKey": true,
      "concat": true,
      "difference": true,
      "divide": true,
      "eq": true,
      "gt": true,
      "gte": true,
      "isEqual": true,
      "lt": true,
      "lte": true,
      "matchesProperty": true,
      "merge": true,
      "multiply": true,
      "overArgs": true,
      "partial": true,
      "partialRight": true,
      "propertyOf": true,
      "random": true,
      "range": true,
      "rangeRight": true,
      "subtract": true,
      "zip": true,
      "zipObject": true,
      "zipObjectDeep": true
    };
  }
});

// node_modules/lodash/fp/placeholder.js
var require_placeholder = __commonJS({
  "node_modules/lodash/fp/placeholder.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/lodash/fp/_baseConvert.js
var require_baseConvert = __commonJS({
  "node_modules/lodash/fp/_baseConvert.js"(exports, module) {
    var mapping = require_mapping();
    var fallbackHolder = require_placeholder();
    var push = Array.prototype.push;
    function baseArity(func, n) {
      return n == 2 ? function(a, b) {
        return func.apply(void 0, arguments);
      } : function(a) {
        return func.apply(void 0, arguments);
      };
    }
    function baseAry(func, n) {
      return n == 2 ? function(a, b) {
        return func(a, b);
      } : function(a) {
        return func(a);
      };
    }
    function cloneArray(array) {
      var length = array ? array.length : 0, result = Array(length);
      while (length--) {
        result[length] = array[length];
      }
      return result;
    }
    function createCloner(func) {
      return function(object) {
        return func({}, object);
      };
    }
    function flatSpread(func, start) {
      return function() {
        var length = arguments.length, lastIndex = length - 1, args = Array(length);
        while (length--) {
          args[length] = arguments[length];
        }
        var array = args[start], otherArgs = args.slice(0, start);
        if (array) {
          push.apply(otherArgs, array);
        }
        if (start != lastIndex) {
          push.apply(otherArgs, args.slice(start + 1));
        }
        return func.apply(this, otherArgs);
      };
    }
    function wrapImmutable(func, cloner) {
      return function() {
        var length = arguments.length;
        if (!length) {
          return;
        }
        var args = Array(length);
        while (length--) {
          args[length] = arguments[length];
        }
        var result = args[0] = cloner.apply(void 0, args);
        func.apply(void 0, args);
        return result;
      };
    }
    function baseConvert(util, name, func, options) {
      var isLib = typeof name == "function", isObj = name === Object(name);
      if (isObj) {
        options = func;
        func = name;
        name = void 0;
      }
      if (func == null) {
        throw new TypeError();
      }
      options || (options = {});
      var config = {
        "cap": "cap" in options ? options.cap : true,
        "curry": "curry" in options ? options.curry : true,
        "fixed": "fixed" in options ? options.fixed : true,
        "immutable": "immutable" in options ? options.immutable : true,
        "rearg": "rearg" in options ? options.rearg : true
      };
      var defaultHolder = isLib ? func : fallbackHolder, forceCurry = "curry" in options && options.curry, forceFixed = "fixed" in options && options.fixed, forceRearg = "rearg" in options && options.rearg, pristine = isLib ? func.runInContext() : void 0;
      var helpers = isLib ? func : {
        "ary": util.ary,
        "assign": util.assign,
        "clone": util.clone,
        "curry": util.curry,
        "forEach": util.forEach,
        "isArray": util.isArray,
        "isError": util.isError,
        "isFunction": util.isFunction,
        "isWeakMap": util.isWeakMap,
        "iteratee": util.iteratee,
        "keys": util.keys,
        "rearg": util.rearg,
        "toInteger": util.toInteger,
        "toPath": util.toPath
      };
      var ary = helpers.ary, assign = helpers.assign, clone = helpers.clone, curry = helpers.curry, each = helpers.forEach, isArray = helpers.isArray, isError = helpers.isError, isFunction = helpers.isFunction, isWeakMap = helpers.isWeakMap, keys = helpers.keys, rearg = helpers.rearg, toInteger = helpers.toInteger, toPath = helpers.toPath;
      var aryMethodKeys = keys(mapping.aryMethod);
      var wrappers = {
        "castArray": function(castArray) {
          return function() {
            var value = arguments[0];
            return isArray(value) ? castArray(cloneArray(value)) : castArray.apply(void 0, arguments);
          };
        },
        "iteratee": function(iteratee) {
          return function() {
            var func2 = arguments[0], arity = arguments[1], result = iteratee(func2, arity), length = result.length;
            if (config.cap && typeof arity == "number") {
              arity = arity > 2 ? arity - 2 : 1;
              return length && length <= arity ? result : baseAry(result, arity);
            }
            return result;
          };
        },
        "mixin": function(mixin) {
          return function(source) {
            var func2 = this;
            if (!isFunction(func2)) {
              return mixin(func2, Object(source));
            }
            var pairs2 = [];
            each(keys(source), function(key) {
              if (isFunction(source[key])) {
                pairs2.push([key, func2.prototype[key]]);
              }
            });
            mixin(func2, Object(source));
            each(pairs2, function(pair) {
              var value = pair[1];
              if (isFunction(value)) {
                func2.prototype[pair[0]] = value;
              } else {
                delete func2.prototype[pair[0]];
              }
            });
            return func2;
          };
        },
        "nthArg": function(nthArg) {
          return function(n) {
            var arity = n < 0 ? 1 : toInteger(n) + 1;
            return curry(nthArg(n), arity);
          };
        },
        "rearg": function(rearg2) {
          return function(func2, indexes) {
            var arity = indexes ? indexes.length : 0;
            return curry(rearg2(func2, indexes), arity);
          };
        },
        "runInContext": function(runInContext) {
          return function(context) {
            return baseConvert(util, runInContext(context), options);
          };
        }
      };
      function castCap(name2, func2) {
        if (config.cap) {
          var indexes = mapping.iterateeRearg[name2];
          if (indexes) {
            return iterateeRearg(func2, indexes);
          }
          var n = !isLib && mapping.iterateeAry[name2];
          if (n) {
            return iterateeAry(func2, n);
          }
        }
        return func2;
      }
      function castCurry(name2, func2, n) {
        return forceCurry || config.curry && n > 1 ? curry(func2, n) : func2;
      }
      function castFixed(name2, func2, n) {
        if (config.fixed && (forceFixed || !mapping.skipFixed[name2])) {
          var data = mapping.methodSpread[name2], start = data && data.start;
          return start === void 0 ? ary(func2, n) : flatSpread(func2, start);
        }
        return func2;
      }
      function castRearg(name2, func2, n) {
        return config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name2]) ? rearg(func2, mapping.methodRearg[name2] || mapping.aryRearg[n]) : func2;
      }
      function cloneByPath(object, path) {
        path = toPath(path);
        var index = -1, length = path.length, lastIndex = length - 1, result = clone(Object(object)), nested = result;
        while (nested != null && ++index < length) {
          var key = path[index], value = nested[key];
          if (value != null && !(isFunction(value) || isError(value) || isWeakMap(value))) {
            nested[key] = clone(index == lastIndex ? value : Object(value));
          }
          nested = nested[key];
        }
        return result;
      }
      function convertLib(options2) {
        return _.runInContext.convert(options2)(void 0);
      }
      function createConverter(name2, func2) {
        var realName = mapping.aliasToReal[name2] || name2, methodName = mapping.remap[realName] || realName, oldOptions = options;
        return function(options2) {
          var newUtil = isLib ? pristine : helpers, newFunc = isLib ? pristine[methodName] : func2, newOptions = assign(assign({}, oldOptions), options2);
          return baseConvert(newUtil, realName, newFunc, newOptions);
        };
      }
      function iterateeAry(func2, n) {
        return overArg(func2, function(func3) {
          return typeof func3 == "function" ? baseAry(func3, n) : func3;
        });
      }
      function iterateeRearg(func2, indexes) {
        return overArg(func2, function(func3) {
          var n = indexes.length;
          return baseArity(rearg(baseAry(func3, n), indexes), n);
        });
      }
      function overArg(func2, transform) {
        return function() {
          var length = arguments.length;
          if (!length) {
            return func2();
          }
          var args = Array(length);
          while (length--) {
            args[length] = arguments[length];
          }
          var index = config.rearg ? 0 : length - 1;
          args[index] = transform(args[index]);
          return func2.apply(void 0, args);
        };
      }
      function wrap(name2, func2, placeholder) {
        var result, realName = mapping.aliasToReal[name2] || name2, wrapped = func2, wrapper = wrappers[realName];
        if (wrapper) {
          wrapped = wrapper(func2);
        } else if (config.immutable) {
          if (mapping.mutate.array[realName]) {
            wrapped = wrapImmutable(func2, cloneArray);
          } else if (mapping.mutate.object[realName]) {
            wrapped = wrapImmutable(func2, createCloner(func2));
          } else if (mapping.mutate.set[realName]) {
            wrapped = wrapImmutable(func2, cloneByPath);
          }
        }
        each(aryMethodKeys, function(aryKey) {
          each(mapping.aryMethod[aryKey], function(otherName) {
            if (realName == otherName) {
              var data = mapping.methodSpread[realName], afterRearg = data && data.afterRearg;
              result = afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
              result = castCap(realName, result);
              result = castCurry(realName, result, aryKey);
              return false;
            }
          });
          return !result;
        });
        result || (result = wrapped);
        if (result == func2) {
          result = forceCurry ? curry(result, 1) : function() {
            return func2.apply(this, arguments);
          };
        }
        result.convert = createConverter(realName, func2);
        result.placeholder = func2.placeholder = placeholder;
        return result;
      }
      if (!isObj) {
        return wrap(name, func, defaultHolder);
      }
      var _ = func;
      var pairs = [];
      each(aryMethodKeys, function(aryKey) {
        each(mapping.aryMethod[aryKey], function(key) {
          var func2 = _[mapping.remap[key] || key];
          if (func2) {
            pairs.push([key, wrap(key, func2, _)]);
          }
        });
      });
      each(keys(_), function(key) {
        var func2 = _[key];
        if (typeof func2 == "function") {
          var length = pairs.length;
          while (length--) {
            if (pairs[length][0] == key) {
              return;
            }
          }
          func2.convert = createConverter(key, func2);
          pairs.push([key, func2]);
        }
      });
      each(pairs, function(pair) {
        _[pair[0]] = pair[1];
      });
      _.convert = convertLib;
      _.placeholder = _;
      each(keys(_), function(key) {
        each(mapping.realToAlias[key] || [], function(alias) {
          _[alias] = _[key];
        });
      });
      return _;
    }
    module.exports = baseConvert;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue = require_getValue();
    function getNative(object, key) {
      var value = getValue(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_metaMap.js
var require_metaMap = __commonJS({
  "node_modules/lodash/_metaMap.js"(exports, module) {
    var WeakMap = require_WeakMap();
    var metaMap = WeakMap && new WeakMap();
    module.exports = metaMap;
  }
});

// node_modules/lodash/_baseSetData.js
var require_baseSetData = __commonJS({
  "node_modules/lodash/_baseSetData.js"(exports, module) {
    var identity = require_identity();
    var metaMap = require_metaMap();
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };
    module.exports = baseSetData;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = function() {
      function object() {
      }
      return function(proto) {
        if (!isObject(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_createCtor.js
var require_createCtor = __commonJS({
  "node_modules/lodash/_createCtor.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var isObject = require_isObject();
    function createCtor(Ctor) {
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0:
            return new Ctor();
          case 1:
            return new Ctor(args[0]);
          case 2:
            return new Ctor(args[0], args[1]);
          case 3:
            return new Ctor(args[0], args[1], args[2]);
          case 4:
            return new Ctor(args[0], args[1], args[2], args[3]);
          case 5:
            return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
        return isObject(result) ? result : thisBinding;
      };
    }
    module.exports = createCtor;
  }
});

// node_modules/lodash/_createBind.js
var require_createBind = __commonJS({
  "node_modules/lodash/_createBind.js"(exports, module) {
    var createCtor = require_createCtor();
    var root = require_root();
    var WRAP_BIND_FLAG = 1;
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
      function wrapper() {
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }
    module.exports = createBind;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_composeArgs.js
var require_composeArgs = __commonJS({
  "node_modules/lodash/_composeArgs.js"(exports, module) {
    var nativeMax = Math.max;
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }
    module.exports = composeArgs;
  }
});

// node_modules/lodash/_composeArgsRight.js
var require_composeArgsRight = __commonJS({
  "node_modules/lodash/_composeArgsRight.js"(exports, module) {
    var nativeMax = Math.max;
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }
    module.exports = composeArgsRight;
  }
});

// node_modules/lodash/_countHolders.js
var require_countHolders = __commonJS({
  "node_modules/lodash/_countHolders.js"(exports, module) {
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    module.exports = countHolders;
  }
});

// node_modules/lodash/_baseLodash.js
var require_baseLodash = __commonJS({
  "node_modules/lodash/_baseLodash.js"(exports, module) {
    function baseLodash() {
    }
    module.exports = baseLodash;
  }
});

// node_modules/lodash/_LazyWrapper.js
var require_LazyWrapper = __commonJS({
  "node_modules/lodash/_LazyWrapper.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var baseLodash = require_baseLodash();
    var MAX_ARRAY_LENGTH = 4294967295;
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;
    module.exports = LazyWrapper;
  }
});

// node_modules/lodash/noop.js
var require_noop = __commonJS({
  "node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// node_modules/lodash/_getData.js
var require_getData = __commonJS({
  "node_modules/lodash/_getData.js"(exports, module) {
    var metaMap = require_metaMap();
    var noop = require_noop();
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };
    module.exports = getData;
  }
});

// node_modules/lodash/_realNames.js
var require_realNames = __commonJS({
  "node_modules/lodash/_realNames.js"(exports, module) {
    var realNames = {};
    module.exports = realNames;
  }
});

// node_modules/lodash/_getFuncName.js
var require_getFuncName = __commonJS({
  "node_modules/lodash/_getFuncName.js"(exports, module) {
    var realNames = require_realNames();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function getFuncName(func) {
      var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
      while (length--) {
        var data = array[length], otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }
    module.exports = getFuncName;
  }
});

// node_modules/lodash/_LodashWrapper.js
var require_LodashWrapper = __commonJS({
  "node_modules/lodash/_LodashWrapper.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var baseLodash = require_baseLodash();
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = void 0;
    }
    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;
    module.exports = LodashWrapper;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray = Array.isArray;
    module.exports = isArray;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_wrapperClone.js
var require_wrapperClone = __commonJS({
  "node_modules/lodash/_wrapperClone.js"(exports, module) {
    var LazyWrapper = require_LazyWrapper();
    var LodashWrapper = require_LodashWrapper();
    var copyArray = require_copyArray();
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__ = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }
    module.exports = wrapperClone;
  }
});

// node_modules/lodash/wrapperLodash.js
var require_wrapperLodash = __commonJS({
  "node_modules/lodash/wrapperLodash.js"(exports, module) {
    var LazyWrapper = require_LazyWrapper();
    var LodashWrapper = require_LodashWrapper();
    var baseLodash = require_baseLodash();
    var isArray = require_isArray();
    var isObjectLike = require_isObjectLike();
    var wrapperClone = require_wrapperClone();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function lodash(value) {
      if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, "__wrapped__")) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;
    module.exports = lodash;
  }
});

// node_modules/lodash/_isLaziable.js
var require_isLaziable = __commonJS({
  "node_modules/lodash/_isLaziable.js"(exports, module) {
    var LazyWrapper = require_LazyWrapper();
    var getData = require_getData();
    var getFuncName = require_getFuncName();
    var lodash = require_wrapperLodash();
    function isLaziable(func) {
      var funcName = getFuncName(func), other = lodash[funcName];
      if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }
    module.exports = isLaziable;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setData.js
var require_setData = __commonJS({
  "node_modules/lodash/_setData.js"(exports, module) {
    var baseSetData = require_baseSetData();
    var shortOut = require_shortOut();
    var setData = shortOut(baseSetData);
    module.exports = setData;
  }
});

// node_modules/lodash/_getWrapDetails.js
var require_getWrapDetails = __commonJS({
  "node_modules/lodash/_getWrapDetails.js"(exports, module) {
    var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
    var reSplitDetails = /,? & /;
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }
    module.exports = getWrapDetails;
  }
});

// node_modules/lodash/_insertWrapDetails.js
var require_insertWrapDetails = __commonJS({
  "node_modules/lodash/_insertWrapDetails.js"(exports, module) {
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
      details = details.join(length > 2 ? ", " : " ");
      return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
    }
    module.exports = insertWrapDetails;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// node_modules/lodash/_updateWrapDetails.js
var require_updateWrapDetails = __commonJS({
  "node_modules/lodash/_updateWrapDetails.js"(exports, module) {
    var arrayEach = require_arrayEach();
    var arrayIncludes = require_arrayIncludes();
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_CURRY_RIGHT_FLAG = 16;
    var WRAP_PARTIAL_FLAG = 32;
    var WRAP_PARTIAL_RIGHT_FLAG = 64;
    var WRAP_ARY_FLAG = 128;
    var WRAP_REARG_FLAG = 256;
    var WRAP_FLIP_FLAG = 512;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = "_." + pair[0];
        if (bitmask & pair[1] && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }
    module.exports = updateWrapDetails;
  }
});

// node_modules/lodash/_setWrapToString.js
var require_setWrapToString = __commonJS({
  "node_modules/lodash/_setWrapToString.js"(exports, module) {
    var getWrapDetails = require_getWrapDetails();
    var insertWrapDetails = require_insertWrapDetails();
    var setToString = require_setToString();
    var updateWrapDetails = require_updateWrapDetails();
    function setWrapToString(wrapper, reference, bitmask) {
      var source = reference + "";
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }
    module.exports = setWrapToString;
  }
});

// node_modules/lodash/_createRecurry.js
var require_createRecurry = __commonJS({
  "node_modules/lodash/_createRecurry.js"(exports, module) {
    var isLaziable = require_isLaziable();
    var setData = require_setData();
    var setWrapToString = require_setWrapToString();
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_BOUND_FLAG = 4;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_PARTIAL_FLAG = 32;
    var WRAP_PARTIAL_RIGHT_FLAG = 64;
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
      bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func,
        bitmask,
        thisArg,
        newPartials,
        newHolders,
        newPartialsRight,
        newHoldersRight,
        argPos,
        ary,
        arity
      ];
      var result = wrapFunc.apply(void 0, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }
    module.exports = createRecurry;
  }
});

// node_modules/lodash/_getHolder.js
var require_getHolder = __commonJS({
  "node_modules/lodash/_getHolder.js"(exports, module) {
    function getHolder(func) {
      var object = func;
      return object.placeholder;
    }
    module.exports = getHolder;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/_reorder.js
var require_reorder = __commonJS({
  "node_modules/lodash/_reorder.js"(exports, module) {
    var copyArray = require_copyArray();
    var isIndex = require_isIndex();
    var nativeMin = Math.min;
    function reorder(array, indexes) {
      var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : void 0;
      }
      return array;
    }
    module.exports = reorder;
  }
});

// node_modules/lodash/_replaceHolders.js
var require_replaceHolders = __commonJS({
  "node_modules/lodash/_replaceHolders.js"(exports, module) {
    var PLACEHOLDER = "__lodash_placeholder__";
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    module.exports = replaceHolders;
  }
});

// node_modules/lodash/_createHybrid.js
var require_createHybrid = __commonJS({
  "node_modules/lodash/_createHybrid.js"(exports, module) {
    var composeArgs = require_composeArgs();
    var composeArgsRight = require_composeArgsRight();
    var countHolders = require_countHolders();
    var createCtor = require_createCtor();
    var createRecurry = require_createRecurry();
    var getHolder = require_getHolder();
    var reorder = require_reorder();
    var replaceHolders = require_replaceHolders();
    var root = require_root();
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_CURRY_RIGHT_FLAG = 16;
    var WRAP_ARY_FLAG = 128;
    var WRAP_FLIP_FLAG = 512;
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor(func);
      function wrapper() {
        var length = arguments.length, args = Array(length), index = length;
        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func,
            bitmask,
            createHybrid,
            wrapper.placeholder,
            thisArg,
            args,
            newHolders,
            argPos,
            ary,
            arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }
    module.exports = createHybrid;
  }
});

// node_modules/lodash/_createCurry.js
var require_createCurry = __commonJS({
  "node_modules/lodash/_createCurry.js"(exports, module) {
    var apply = require_apply();
    var createCtor = require_createCtor();
    var createHybrid = require_createHybrid();
    var createRecurry = require_createRecurry();
    var getHolder = require_getHolder();
    var replaceHolders = require_replaceHolders();
    var root = require_root();
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);
      function wrapper() {
        var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
        while (index--) {
          args[index] = arguments[index];
        }
        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func,
            bitmask,
            createHybrid,
            wrapper.placeholder,
            void 0,
            args,
            holders,
            void 0,
            void 0,
            arity - length
          );
        }
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }
    module.exports = createCurry;
  }
});

// node_modules/lodash/_createPartial.js
var require_createPartial = __commonJS({
  "node_modules/lodash/_createPartial.js"(exports, module) {
    var apply = require_apply();
    var createCtor = require_createCtor();
    var root = require_root();
    var WRAP_BIND_FLAG = 1;
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
      function wrapper() {
        var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }
    module.exports = createPartial;
  }
});

// node_modules/lodash/_mergeData.js
var require_mergeData = __commonJS({
  "node_modules/lodash/_mergeData.js"(exports, module) {
    var composeArgs = require_composeArgs();
    var composeArgsRight = require_composeArgsRight();
    var replaceHolders = require_replaceHolders();
    var PLACEHOLDER = "__lodash_placeholder__";
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_BOUND_FLAG = 4;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_ARY_FLAG = 128;
    var WRAP_REARG_FLAG = 256;
    var nativeMin = Math.min;
    function mergeData(data, source) {
      var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
      var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
      if (!(isCommon || isCombo)) {
        return data;
      }
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      value = source[7];
      if (value) {
        data[7] = value;
      }
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      if (data[9] == null) {
        data[9] = source[9];
      }
      data[0] = source[0];
      data[1] = newBitmask;
      return data;
    }
    module.exports = mergeData;
  }
});

// node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// node_modules/lodash/_createWrap.js
var require_createWrap = __commonJS({
  "node_modules/lodash/_createWrap.js"(exports, module) {
    var baseSetData = require_baseSetData();
    var createBind = require_createBind();
    var createCurry = require_createCurry();
    var createHybrid = require_createHybrid();
    var createPartial = require_createPartial();
    var getData = require_getData();
    var mergeData = require_mergeData();
    var setData = require_setData();
    var setWrapToString = require_setWrapToString();
    var toInteger = require_toInteger();
    var FUNC_ERROR_TEXT = "Expected a function";
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_CURRY_RIGHT_FLAG = 16;
    var WRAP_PARTIAL_FLAG = 32;
    var WRAP_PARTIAL_RIGHT_FLAG = 64;
    var nativeMax = Math.max;
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = void 0;
      }
      ary = ary === void 0 ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === void 0 ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;
      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials, holdersRight = holders;
        partials = holders = void 0;
      }
      var data = isBindKey ? void 0 : getData(func);
      var newData = [
        func,
        bitmask,
        thisArg,
        partials,
        holders,
        partialsRight,
        holdersRight,
        argPos,
        ary,
        arity
      ];
      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(void 0, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }
    module.exports = createWrap;
  }
});

// node_modules/lodash/ary.js
var require_ary = __commonJS({
  "node_modules/lodash/ary.js"(exports, module) {
    var createWrap = require_createWrap();
    var WRAP_ARY_FLAG = 128;
    function ary(func, n, guard) {
      n = guard ? void 0 : n;
      n = func && n == null ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, void 0, void 0, void 0, void 0, n);
    }
    module.exports = ary;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map2, key) {
      var data = map2.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject(value)) {
        return value;
      }
      var isArr = isArray(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// node_modules/lodash/clone.js
var require_clone = __commonJS({
  "node_modules/lodash/clone.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_SYMBOLS_FLAG = 4;
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    module.exports = clone;
  }
});

// node_modules/lodash/curry.js
var require_curry = __commonJS({
  "node_modules/lodash/curry.js"(exports, module) {
    var createWrap = require_createWrap();
    var WRAP_CURRY_FLAG = 8;
    function curry(func, arity, guard) {
      arity = guard ? void 0 : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, void 0, void 0, void 0, void 0, void 0, arity);
      result.placeholder = curry.placeholder;
      return result;
    }
    curry.placeholder = {};
    module.exports = curry;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/isError.js
var require_isError = __commonJS({
  "node_modules/lodash/isError.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var isPlainObject = require_isPlainObject();
    var domExcTag = "[object DOMException]";
    var errorTag = "[object Error]";
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
    }
    module.exports = isError;
  }
});

// node_modules/lodash/isWeakMap.js
var require_isWeakMap = __commonJS({
  "node_modules/lodash/isWeakMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var weakMapTag = "[object WeakMap]";
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }
    module.exports = isWeakMap;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map2) {
      var index = -1, result = Array(map2.size);
      map2.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/iteratee.js
var require_iteratee = __commonJS({
  "node_modules/lodash/iteratee.js"(exports, module) {
    var baseClone = require_baseClone();
    var baseIteratee = require_baseIteratee();
    var CLONE_DEEP_FLAG = 1;
    function iteratee(func) {
      return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
    }
    module.exports = iteratee;
  }
});

// node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// node_modules/lodash/rearg.js
var require_rearg = __commonJS({
  "node_modules/lodash/rearg.js"(exports, module) {
    var createWrap = require_createWrap();
    var flatRest = require_flatRest();
    var WRAP_REARG_FLAG = 256;
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, void 0, void 0, void 0, indexes);
    });
    module.exports = rearg;
  }
});

// node_modules/lodash/toPath.js
var require_toPath = __commonJS({
  "node_modules/lodash/toPath.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var copyArray = require_copyArray();
    var isArray = require_isArray();
    var isSymbol = require_isSymbol();
    var stringToPath = require_stringToPath();
    var toKey = require_toKey();
    var toString = require_toString();
    function toPath(value) {
      if (isArray(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }
    module.exports = toPath;
  }
});

// node_modules/lodash/fp/_util.js
var require_util = __commonJS({
  "node_modules/lodash/fp/_util.js"(exports, module) {
    module.exports = {
      "ary": require_ary(),
      "assign": require_baseAssign(),
      "clone": require_clone(),
      "curry": require_curry(),
      "forEach": require_arrayEach(),
      "isArray": require_isArray(),
      "isError": require_isError(),
      "isFunction": require_isFunction(),
      "isWeakMap": require_isWeakMap(),
      "iteratee": require_iteratee(),
      "keys": require_baseKeys(),
      "rearg": require_rearg(),
      "toInteger": require_toInteger(),
      "toPath": require_toPath()
    };
  }
});

// node_modules/lodash/fp/convert.js
var require_convert = __commonJS({
  "node_modules/lodash/fp/convert.js"(exports, module) {
    var baseConvert = require_baseConvert();
    var util = require_util();
    function convert(name, func, options) {
      return baseConvert(util, name, func, options);
    }
    module.exports = convert;
  }
});

// node_modules/lodash/isNil.js
var require_isNil = __commonJS({
  "node_modules/lodash/isNil.js"(exports, module) {
    function isNil2(value) {
      return value == null;
    }
    module.exports = isNil2;
  }
});

// node_modules/lodash/fp/_falseOptions.js
var require_falseOptions = __commonJS({
  "node_modules/lodash/fp/_falseOptions.js"(exports, module) {
    module.exports = {
      "cap": false,
      "curry": false,
      "fixed": false,
      "immutable": false,
      "rearg": false
    };
  }
});

// node_modules/lodash/fp/isNil.js
var require_isNil2 = __commonJS({
  "node_modules/lodash/fp/isNil.js"(exports, module) {
    var convert = require_convert();
    var func = convert("isNil", require_isNil(), require_falseOptions());
    func.placeholder = require_placeholder();
    module.exports = func;
  }
});

// node_modules/redos-detector/dist/redos-detector.es.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1)
      throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f)
      throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _)
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
          return t;
        if (y = 0, t)
          op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2])
              _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m)
    return m.call(o);
  if (o && typeof o.length === "number")
    return {
      next: function() {
        if (o && i >= o.length)
          o = void 0;
        return { value: o && o[i++], done: !o };
      }
    };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m)
    return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
      ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"]))
        m.call(i);
    } finally {
      if (e)
        throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2)
    for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i);
        ar[i] = from[i];
      }
    }
  return to.concat(ar || Array.prototype.slice.call(from));
}
var parserExports = {};
var parser = {
  get exports() {
    return parserExports;
  },
  set exports(v) {
    parserExports = v;
  }
};
(function(module) {
  (function() {
    var fromCodePoint = String.fromCodePoint || function() {
      var stringFromCharCode = String.fromCharCode;
      var floor = Math.floor;
      return function fromCodePoint2() {
        var MAX_SIZE = 16384;
        var codeUnits = [];
        var highSurrogate;
        var lowSurrogate;
        var index = -1;
        var length = arguments.length;
        if (!length) {
          return "";
        }
        var result = "";
        while (++index < length) {
          var codePoint = Number(arguments[index]);
          if (!isFinite(codePoint) || codePoint < 0 || codePoint > 1114111 || floor(codePoint) != codePoint) {
            throw RangeError("Invalid code point: " + codePoint);
          }
          if (codePoint <= 65535) {
            codeUnits.push(codePoint);
          } else {
            codePoint -= 65536;
            highSurrogate = (codePoint >> 10) + 55296;
            lowSurrogate = codePoint % 1024 + 56320;
            codeUnits.push(highSurrogate, lowSurrogate);
          }
          if (index + 1 == length || codeUnits.length > MAX_SIZE) {
            result += stringFromCharCode.apply(null, codeUnits);
            codeUnits.length = 0;
          }
        }
        return result;
      };
    }();
    function parse2(str, flags, features) {
      if (!features) {
        features = {};
      }
      function addRaw(node) {
        node.raw = str.substring(node.range[0], node.range[1]);
        return node;
      }
      function updateRawStart(node, start) {
        node.range[0] = start;
        return addRaw(node);
      }
      function createAnchor(kind, rawLength) {
        return addRaw({
          type: "anchor",
          kind,
          range: [
            pos - rawLength,
            pos
          ]
        });
      }
      function createValue(kind, codePoint, from, to) {
        return addRaw({
          type: "value",
          kind,
          codePoint,
          range: [from, to]
        });
      }
      function createEscaped(kind, codePoint, value, fromOffset) {
        fromOffset = fromOffset || 0;
        return createValue(kind, codePoint, pos - (value.length + fromOffset), pos);
      }
      function createCharacter(matches) {
        var _char = matches[0];
        var first = _char.charCodeAt(0);
        if (isUnicodeMode) {
          var second;
          if (_char.length === 1 && first >= 55296 && first <= 56319) {
            second = lookahead().charCodeAt(0);
            if (second >= 56320 && second <= 57343) {
              pos++;
              return createValue(
                "symbol",
                (first - 55296) * 1024 + second - 56320 + 65536,
                pos - 2,
                pos
              );
            }
          }
        }
        return createValue("symbol", first, pos - 1, pos);
      }
      function createDisjunction(alternatives, from, to) {
        return addRaw({
          type: "disjunction",
          body: alternatives,
          range: [
            from,
            to
          ]
        });
      }
      function createDot() {
        return addRaw({
          type: "dot",
          range: [
            pos - 1,
            pos
          ]
        });
      }
      function createCharacterClassEscape(value) {
        return addRaw({
          type: "characterClassEscape",
          value,
          range: [
            pos - 2,
            pos
          ]
        });
      }
      function createReference(matchIndex) {
        return addRaw({
          type: "reference",
          matchIndex: parseInt(matchIndex, 10),
          range: [
            pos - 1 - matchIndex.length,
            pos
          ]
        });
      }
      function createNamedReference(name) {
        return addRaw({
          type: "reference",
          name,
          range: [
            name.range[0] - 3,
            pos
          ]
        });
      }
      function createGroup(behavior, disjunction, from, to) {
        return addRaw({
          type: "group",
          behavior,
          body: disjunction,
          range: [
            from,
            to
          ]
        });
      }
      function createQuantifier(min, max, from, to, symbol) {
        if (to == null) {
          from = pos - 1;
          to = pos;
        }
        return addRaw({
          type: "quantifier",
          min,
          max,
          greedy: true,
          body: null,
          symbol,
          range: [
            from,
            to
          ]
        });
      }
      function createAlternative(terms, from, to) {
        return addRaw({
          type: "alternative",
          body: terms,
          range: [
            from,
            to
          ]
        });
      }
      function createCharacterClass(contents, negative, from, to) {
        return addRaw({
          type: "characterClass",
          kind: contents.kind,
          body: contents.body,
          negative,
          range: [
            from,
            to
          ]
        });
      }
      function createClassRange(min, max, from, to) {
        if (min.codePoint > max.codePoint) {
          bail("invalid range in character class", min.raw + "-" + max.raw, from, to);
        }
        return addRaw({
          type: "characterClassRange",
          min,
          max,
          range: [
            from,
            to
          ]
        });
      }
      function createClassStrings(strings, from, to) {
        return addRaw({
          type: "classStrings",
          strings,
          range: [from, to]
        });
      }
      function createClassString(characters, from, to) {
        return addRaw({
          type: "classString",
          characters,
          range: [from, to]
        });
      }
      function flattenBody(body) {
        if (body.type === "alternative") {
          return body.body;
        } else {
          return [body];
        }
      }
      function incr(amount) {
        amount = amount || 1;
        var res = str.substring(pos, pos + amount);
        pos += amount || 1;
        return res;
      }
      function skip(value) {
        if (!match(value)) {
          bail("character", value);
        }
      }
      function match(value) {
        if (str.indexOf(value, pos) === pos) {
          return incr(value.length);
        }
      }
      function lookahead() {
        return str[pos];
      }
      function current(value) {
        return str.indexOf(value, pos) === pos;
      }
      function next(value) {
        return str[pos + 1] === value;
      }
      function matchReg(regExp) {
        var subStr = str.substring(pos);
        var res = subStr.match(regExp);
        if (res) {
          res.range = [];
          res.range[0] = pos;
          incr(res[0].length);
          res.range[1] = pos;
        }
        return res;
      }
      function parseDisjunction() {
        var res = [], from = pos;
        res.push(parseAlternative());
        while (match("|")) {
          res.push(parseAlternative());
        }
        if (res.length === 1) {
          return res[0];
        }
        return createDisjunction(res, from, pos);
      }
      function parseAlternative() {
        var res = [], from = pos;
        var term;
        while (term = parseTerm()) {
          res.push(term);
        }
        if (res.length === 1) {
          return res[0];
        }
        return createAlternative(res, from, pos);
      }
      function parseTerm() {
        if (pos >= str.length || current("|") || current(")")) {
          return null;
        }
        var anchor = parseAnchor();
        if (anchor) {
          return anchor;
        }
        var atom = parseAtomAndExtendedAtom();
        var quantifier;
        if (!atom) {
          var pos_backup = pos;
          quantifier = parseQuantifier() || false;
          if (quantifier) {
            pos = pos_backup;
            bail("Expected atom");
          }
          var res;
          if (!isUnicodeMode && (res = matchReg(/^{/))) {
            atom = createCharacter(res);
          } else {
            bail("Expected atom");
          }
        }
        quantifier = parseQuantifier() || false;
        if (quantifier) {
          quantifier.body = flattenBody(atom);
          updateRawStart(quantifier, atom.range[0]);
          return quantifier;
        }
        return atom;
      }
      function parseGroup(matchA, typeA, matchB, typeB) {
        var type = null, from = pos;
        if (match(matchA)) {
          type = typeA;
        } else if (match(matchB)) {
          type = typeB;
        } else {
          return false;
        }
        return finishGroup(type, from);
      }
      function finishGroup(type, from) {
        var body = parseDisjunction();
        if (!body) {
          bail("Expected disjunction");
        }
        skip(")");
        var group = createGroup(type, flattenBody(body), from, pos);
        if (type == "normal") {
          if (firstIteration) {
            closedCaptureCounter++;
          }
        }
        return group;
      }
      function parseAnchor() {
        if (match("^")) {
          return createAnchor("start", 1);
        } else if (match("$")) {
          return createAnchor("end", 1);
        } else if (match("\\b")) {
          return createAnchor("boundary", 2);
        } else if (match("\\B")) {
          return createAnchor("not-boundary", 2);
        } else {
          return parseGroup("(?=", "lookahead", "(?!", "negativeLookahead");
        }
      }
      function parseQuantifier() {
        var res, from = pos;
        var quantifier;
        var min, max;
        if (match("*")) {
          quantifier = createQuantifier(0, void 0, void 0, void 0, "*");
        } else if (match("+")) {
          quantifier = createQuantifier(1, void 0, void 0, void 0, "+");
        } else if (match("?")) {
          quantifier = createQuantifier(0, 1, void 0, void 0, "?");
        } else if (res = matchReg(/^\{([0-9]+)\}/)) {
          min = parseInt(res[1], 10);
          quantifier = createQuantifier(min, min, res.range[0], res.range[1]);
        } else if (res = matchReg(/^\{([0-9]+),\}/)) {
          min = parseInt(res[1], 10);
          quantifier = createQuantifier(min, void 0, res.range[0], res.range[1]);
        } else if (res = matchReg(/^\{([0-9]+),([0-9]+)\}/)) {
          min = parseInt(res[1], 10);
          max = parseInt(res[2], 10);
          if (min > max) {
            bail("numbers out of order in {} quantifier", "", from, pos);
          }
          quantifier = createQuantifier(min, max, res.range[0], res.range[1]);
        }
        if (min && !Number.isSafeInteger(min) || max && !Number.isSafeInteger(max)) {
          bail("iterations outside JS safe integer range in quantifier", "", from, pos);
        }
        if (quantifier) {
          if (match("?")) {
            quantifier.greedy = false;
            quantifier.range[1] += 1;
          }
        }
        return quantifier;
      }
      function parseAtomAndExtendedAtom() {
        var res;
        if (res = matchReg(/^[^^$\\.*+?()[\]{}|]/)) {
          return createCharacter(res);
        } else if (!isUnicodeMode && (res = matchReg(/^(?:]|})/))) {
          return createCharacter(res);
        } else if (match(".")) {
          return createDot();
        } else if (match("\\")) {
          res = parseAtomEscape();
          if (!res) {
            if (!isUnicodeMode && lookahead() == "c") {
              return createValue("symbol", 92, pos - 1, pos);
            }
            bail("atomEscape");
          }
          return res;
        } else if (res = parseCharacterClass()) {
          return res;
        } else if (features.lookbehind && (res = parseGroup("(?<=", "lookbehind", "(?<!", "negativeLookbehind"))) {
          return res;
        } else if (features.namedGroups && match("(?<")) {
          var name = parseIdentifier();
          skip(">");
          var group = finishGroup("normal", name.range[0] - 3);
          group.name = name;
          return group;
        } else if (features.modifiers && str.indexOf("(?") == pos && str[pos + 2] != ":") {
          return parseModifiersGroup();
        } else {
          return parseGroup("(?:", "ignore", "(", "normal");
        }
      }
      function parseModifiersGroup() {
        function hasDupChar(str2) {
          var i = 0;
          while (i < str2.length) {
            if (str2.indexOf(str2[i], i + 1) != -1) {
              return true;
            }
            i++;
          }
          return false;
        }
        var from = pos;
        incr(2);
        var enablingFlags = matchReg(/^[sim]+/);
        var disablingFlags;
        if (match("-")) {
          disablingFlags = matchReg(/^[sim]+/);
          if (!disablingFlags) {
            bail("Invalid flags for modifiers group");
          }
        } else if (!enablingFlags) {
          bail("Invalid flags for modifiers group");
        }
        enablingFlags = enablingFlags ? enablingFlags[0] : "";
        disablingFlags = disablingFlags ? disablingFlags[0] : "";
        var flags2 = enablingFlags + disablingFlags;
        if (flags2.length > 3 || hasDupChar(flags2)) {
          bail("flags cannot be duplicated for modifiers group");
        }
        skip(":");
        var modifiersGroup = finishGroup("ignore", from);
        modifiersGroup.modifierFlags = {
          enabling: enablingFlags,
          disabling: disablingFlags
        };
        return modifiersGroup;
      }
      function parseUnicodeSurrogatePairEscape(firstEscape) {
        if (isUnicodeMode) {
          var first, second;
          if (firstEscape.kind == "unicodeEscape" && (first = firstEscape.codePoint) >= 55296 && first <= 56319 && current("\\") && next("u")) {
            var prevPos = pos;
            pos++;
            var secondEscape = parseClassEscape();
            if (secondEscape.kind == "unicodeEscape" && (second = secondEscape.codePoint) >= 56320 && second <= 57343) {
              firstEscape.range[1] = secondEscape.range[1];
              firstEscape.codePoint = (first - 55296) * 1024 + second - 56320 + 65536;
              firstEscape.type = "value";
              firstEscape.kind = "unicodeCodePointEscape";
              addRaw(firstEscape);
            } else {
              pos = prevPos;
            }
          }
        }
        return firstEscape;
      }
      function parseClassEscape() {
        return parseAtomEscape(true);
      }
      function parseAtomEscape(insideCharacterClass) {
        var res, from = pos;
        res = parseDecimalEscape(insideCharacterClass) || parseNamedReference();
        if (res) {
          return res;
        }
        if (insideCharacterClass) {
          if (match("b")) {
            return createEscaped("singleEscape", 8, "\\b");
          } else if (match("B")) {
            bail("\\B not possible inside of CharacterClass", "", from);
          } else if (!isUnicodeMode && (res = matchReg(/^c([0-9])/))) {
            return createEscaped("controlLetter", res[1] + 16, res[1], 2);
          } else if (!isUnicodeMode && (res = matchReg(/^c_/))) {
            return createEscaped("controlLetter", 31, "_", 2);
          }
          if (isUnicodeMode && match("-")) {
            return createEscaped("singleEscape", 45, "\\-");
          }
        }
        res = parseCharacterClassEscape() || parseCharacterEscape();
        return res;
      }
      function parseDecimalEscape(insideCharacterClass) {
        var res, match2, from = pos;
        if (res = matchReg(/^(?!0)\d+/)) {
          match2 = res[0];
          var refIdx = parseInt(res[0], 10);
          if (refIdx <= closedCaptureCounter && !insideCharacterClass) {
            return createReference(res[0]);
          } else {
            backrefDenied.push(refIdx);
            if (firstIteration) {
              shouldReparse = true;
            } else {
              bailOctalEscapeIfUnicode(from, pos);
            }
            incr(-res[0].length);
            if (res = matchReg(/^[0-7]{1,3}/)) {
              return createEscaped("octal", parseInt(res[0], 8), res[0], 1);
            } else {
              res = createCharacter(matchReg(/^[89]/));
              return updateRawStart(res, res.range[0] - 1);
            }
          }
        } else if (res = matchReg(/^[0-7]{1,3}/)) {
          match2 = res[0];
          if (match2 !== "0") {
            bailOctalEscapeIfUnicode(from, pos);
          }
          if (/^0{1,3}$/.test(match2)) {
            return createEscaped("null", 0, "0", match2.length);
          } else {
            return createEscaped("octal", parseInt(match2, 8), match2, 1);
          }
        }
        return false;
      }
      function bailOctalEscapeIfUnicode(from, pos2) {
        if (isUnicodeMode) {
          bail("Invalid decimal escape in unicode mode", null, from, pos2);
        }
      }
      function parseCharacterClassEscape() {
        var res;
        if (res = matchReg(/^[dDsSwW]/)) {
          return createCharacterClassEscape(res[0]);
        } else if (features.unicodePropertyEscape && isUnicodeMode && (res = matchReg(/^([pP])\{([^\}]+)\}/))) {
          return addRaw({
            type: "unicodePropertyEscape",
            negative: res[1] === "P",
            value: res[2],
            range: [res.range[0] - 1, res.range[1]],
            raw: res[0]
          });
        } else if (features.unicodeSet && hasUnicodeSetFlag && match("q{")) {
          return parseClassStrings();
        }
        return false;
      }
      function parseNamedReference() {
        if (features.namedGroups && matchReg(/^k<(?=.*?>)/)) {
          var name = parseIdentifier();
          skip(">");
          return createNamedReference(name);
        }
      }
      function parseRegExpUnicodeEscapeSequence() {
        var res;
        if (res = matchReg(/^u([0-9a-fA-F]{4})/)) {
          return parseUnicodeSurrogatePairEscape(
            createEscaped("unicodeEscape", parseInt(res[1], 16), res[1], 2)
          );
        } else if (isUnicodeMode && (res = matchReg(/^u\{([0-9a-fA-F]+)\}/))) {
          return createEscaped("unicodeCodePointEscape", parseInt(res[1], 16), res[1], 4);
        }
      }
      function parseCharacterEscape() {
        var res;
        var from = pos;
        if (res = matchReg(/^[fnrtv]/)) {
          var codePoint = 0;
          switch (res[0]) {
            case "t":
              codePoint = 9;
              break;
            case "n":
              codePoint = 10;
              break;
            case "v":
              codePoint = 11;
              break;
            case "f":
              codePoint = 12;
              break;
            case "r":
              codePoint = 13;
              break;
          }
          return createEscaped("singleEscape", codePoint, "\\" + res[0]);
        } else if (res = matchReg(/^c([a-zA-Z])/)) {
          return createEscaped("controlLetter", res[1].charCodeAt(0) % 32, res[1], 2);
        } else if (res = matchReg(/^x([0-9a-fA-F]{2})/)) {
          return createEscaped("hexadecimalEscape", parseInt(res[1], 16), res[1], 2);
        } else if (res = parseRegExpUnicodeEscapeSequence()) {
          if (!res || res.codePoint > 1114111) {
            bail("Invalid escape sequence", null, from, pos);
          }
          return res;
        } else {
          return parseIdentityEscape();
        }
      }
      function parseIdentifierAtom(check) {
        var ch = lookahead();
        var from = pos;
        if (ch === "\\") {
          incr();
          var esc = parseRegExpUnicodeEscapeSequence();
          if (!esc || !check(esc.codePoint)) {
            bail("Invalid escape sequence", null, from, pos);
          }
          return fromCodePoint(esc.codePoint);
        }
        var code = ch.charCodeAt(0);
        if (code >= 55296 && code <= 56319) {
          ch += str[pos + 1];
          var second = ch.charCodeAt(1);
          if (second >= 56320 && second <= 57343) {
            code = (code - 55296) * 1024 + second - 56320 + 65536;
          }
        }
        if (!check(code))
          return;
        incr();
        if (code > 65535)
          incr();
        return ch;
      }
      function parseIdentifier() {
        var start = pos;
        var res = parseIdentifierAtom(isIdentifierStart);
        if (!res) {
          bail("Invalid identifier");
        }
        var ch;
        while (ch = parseIdentifierAtom(isIdentifierPart)) {
          res += ch;
        }
        return addRaw({
          type: "identifier",
          value: res,
          range: [start, pos]
        });
      }
      function isIdentifierStart(ch) {
        var NonAsciiIdentifierStart = /[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFF1]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
        return ch === 36 || ch === 95 || ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122 || ch >= 128 && NonAsciiIdentifierStart.test(fromCodePoint(ch));
      }
      function isIdentifierPart(ch) {
        var NonAsciiIdentifierPartOnly = /[0-9_\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD801[\uDCA0-\uDCA9]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDD30-\uDD39\uDF46-\uDF50]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC66-\uDC6F\uDC7F-\uDC82\uDCB0-\uDCBA\uDCF0-\uDCF9\uDD00-\uDD02\uDD27-\uDD34\uDD36-\uDD3F\uDD45\uDD46\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDC9-\uDDCC\uDDD0-\uDDD9\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF3B\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDC50-\uDC59\uDC5E\uDCB0-\uDCC3\uDCD0-\uDCD9\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDE50-\uDE59\uDEAB-\uDEB7\uDEC0-\uDEC9\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC2C-\uDC3A\uDCE0-\uDCE9\uDE01-\uDE0A\uDE33-\uDE39\uDE3B-\uDE3E\uDE47\uDE51-\uDE5B\uDE8A-\uDE99]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC50-\uDC59\uDC92-\uDCA7\uDCA9-\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD50-\uDD59\uDD8A-\uDD8E\uDD90\uDD91\uDD93-\uDD97\uDDA0-\uDDA9\uDEF3-\uDEF6]|\uD81A[\uDE60-\uDE69\uDEF0-\uDEF4\uDF30-\uDF36\uDF50-\uDF59]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A\uDD50-\uDD59]|\uDB40[\uDD00-\uDDEF]/;
        return isIdentifierStart(ch) || ch >= 48 && ch <= 57 || ch >= 128 && NonAsciiIdentifierPartOnly.test(fromCodePoint(ch));
      }
      function parseIdentityEscape() {
        var tmp;
        var l = lookahead();
        if (isUnicodeMode && /[\^\$\.\*\+\?\(\)\\\[\]\{\}\|\/]/.test(l) || !isUnicodeMode && l !== "c") {
          if (l === "k" && features.lookbehind) {
            return null;
          }
          tmp = incr();
          return createEscaped("identifier", tmp.charCodeAt(0), tmp, 1);
        }
        return null;
      }
      function parseCharacterClass() {
        var res, from = pos;
        if (res = matchReg(/^\[\^/)) {
          res = parseClassRanges();
          skip("]");
          return createCharacterClass(res, true, from, pos);
        } else if (match("[")) {
          res = parseClassRanges();
          skip("]");
          return createCharacterClass(res, false, from, pos);
        }
        return null;
      }
      function parseClassRanges() {
        var res;
        if (current("]")) {
          return { kind: "union", body: [] };
        } else if (hasUnicodeSetFlag) {
          return parseClassContents();
        } else {
          res = parseNonemptyClassRanges();
          if (!res) {
            bail("nonEmptyClassRanges");
          }
          return { kind: "union", body: res };
        }
      }
      function parseHelperClassRanges(atom) {
        var from, to, res, atomTo, dash;
        if (current("-") && !next("]")) {
          from = atom.range[0];
          dash = createCharacter(match("-"));
          atomTo = parseClassAtom();
          if (!atomTo) {
            bail("classAtom");
          }
          to = pos;
          var classRanges = parseClassRanges();
          if (!classRanges) {
            bail("classRanges");
          }
          if (!("codePoint" in atom) || !("codePoint" in atomTo)) {
            if (!isUnicodeMode) {
              res = [atom, dash, atomTo];
            } else {
              bail("invalid character class");
            }
          } else {
            res = [createClassRange(atom, atomTo, from, to)];
          }
          if (classRanges.type === "empty") {
            return res;
          }
          return res.concat(classRanges.body);
        }
        res = parseNonemptyClassRangesNoDash();
        if (!res) {
          bail("nonEmptyClassRangesNoDash");
        }
        return [atom].concat(res);
      }
      function parseNonemptyClassRanges() {
        var atom = parseClassAtom();
        if (!atom) {
          bail("classAtom");
        }
        if (current("]")) {
          return [atom];
        }
        return parseHelperClassRanges(atom);
      }
      function parseNonemptyClassRangesNoDash() {
        var res = parseClassAtom();
        if (!res) {
          bail("classAtom");
        }
        if (current("]")) {
          return res;
        }
        return parseHelperClassRanges(res);
      }
      function parseClassAtom() {
        if (match("-")) {
          return createCharacter("-");
        } else {
          return parseClassAtomNoDash();
        }
      }
      function parseClassAtomNoDash() {
        var res;
        if (res = matchReg(/^[^\\\]-]/)) {
          return createCharacter(res[0]);
        } else if (match("\\")) {
          res = parseClassEscape();
          if (!res) {
            bail("classEscape");
          }
          return parseUnicodeSurrogatePairEscape(res);
        }
      }
      function parseClassContents() {
        var body = [];
        var kind;
        var operand = parseClassOperand(true);
        body.push(operand);
        if (operand.type === "classRange") {
          kind = "union";
        } else if (current("&")) {
          kind = "intersection";
        } else if (current("-")) {
          kind = "subtraction";
        } else {
          kind = "union";
        }
        while (!current("]")) {
          if (kind === "intersection") {
            skip("&");
            skip("&");
            if (current("&")) {
              bail("&& cannot be followed by &. Wrap it in brackets: &&[&].");
            }
          } else if (kind === "subtraction") {
            skip("-");
            skip("-");
          }
          operand = parseClassOperand(kind === "union");
          body.push(operand);
        }
        return { kind, body };
      }
      function parseClassOperand(allowRanges) {
        var from = pos;
        var start, res;
        if (match("\\")) {
          if (res = parseClassEscape()) {
            start = res;
          } else if (res = parseClassCharacterEscapedHelper()) {
            return res;
          } else {
            bail("Invalid escape", "\\" + lookahead(), from);
          }
        } else if (res = parseClassCharacterUnescapedHelper()) {
          start = res;
        } else if (res = parseCharacterClass()) {
          return res;
        } else {
          bail("Invalid character", lookahead());
        }
        if (allowRanges && current("-") && !next("-")) {
          skip("-");
          if (res = parseClassCharacter()) {
            return createClassRange(start, res, from, pos);
          }
          bail("Invalid range end", lookahead());
        }
        return start;
      }
      function parseClassCharacter() {
        if (match("\\")) {
          var res, from = pos;
          if (res = parseClassCharacterEscapedHelper()) {
            return res;
          } else {
            bail("Invalid escape", "\\" + lookahead(), from);
          }
        }
        return parseClassCharacterUnescapedHelper();
      }
      function parseClassCharacterUnescapedHelper() {
        var res;
        if (res = matchReg(/^[^()[\]{}/\-\\|]/)) {
          return createCharacter(res);
        }
      }
      function parseClassCharacterEscapedHelper() {
        var res;
        if (match("b")) {
          return createEscaped("singleEscape", 8, "\\b");
        } else if (match("B")) {
          bail("\\B not possible inside of ClassContents", "", pos - 2);
        } else if (res = matchReg(/^[&\-!#%,:;<=>@_`~]/)) {
          return createEscaped("identifier", res[0].codePointAt(0), res[0]);
        } else if (res = parseCharacterEscape()) {
          return res;
        } else {
          return null;
        }
      }
      function parseClassStrings() {
        var from = pos - 3;
        var res = [];
        do {
          res.push(parseClassString());
        } while (match("|"));
        skip("}");
        return createClassStrings(res, from, pos);
      }
      function parseClassString() {
        var res = [], from = pos;
        var char;
        while (char = parseClassCharacter()) {
          res.push(char);
        }
        return createClassString(res, from, pos);
      }
      function bail(message, details, from, to) {
        from = from == null ? pos : from;
        to = to == null ? from : to;
        var contextStart = Math.max(0, from - 10);
        var contextEnd = Math.min(to + 10, str.length);
        var context = "    " + str.substring(contextStart, contextEnd);
        var pointer = "    " + new Array(from - contextStart + 1).join(" ") + "^";
        throw SyntaxError(message + " at position " + from + (details ? ": " + details : "") + "\n" + context + "\n" + pointer);
      }
      var backrefDenied = [];
      var closedCaptureCounter = 0;
      var firstIteration = true;
      var shouldReparse = false;
      var hasUnicodeFlag = (flags || "").indexOf("u") !== -1;
      var hasUnicodeSetFlag = (flags || "").indexOf("v") !== -1;
      var isUnicodeMode = hasUnicodeFlag || hasUnicodeSetFlag;
      var pos = 0;
      if (hasUnicodeSetFlag && !features.unicodeSet) {
        throw new Error('The "v" flag is only supported when the .unicodeSet option is enabled.');
      }
      if (hasUnicodeFlag && hasUnicodeSetFlag) {
        throw new Error('The "u" and "v" flags are mutually exclusive.');
      }
      str = String(str);
      if (str === "") {
        str = "(?:)";
      }
      var result = parseDisjunction();
      if (result.range[1] !== str.length) {
        bail("Could not parse entire input - got stuck", "", result.range[1]);
      }
      shouldReparse = shouldReparse || backrefDenied.some(function(ref) {
        return ref <= closedCaptureCounter;
      });
      if (shouldReparse) {
        pos = 0;
        firstIteration = false;
        return parseDisjunction();
      }
      return result;
    }
    var regjsparser = {
      parse: parse2
    };
    if (module.exports) {
      module.exports = regjsparser;
    } else {
      window.regjsparser = regjsparser;
    }
  })();
})(parser);
function parse(pattern, unicode) {
  var ast = parserExports.parse(pattern, unicode ? "u" : "", {
    lookbehind: true,
    unicodePropertyEscape: true
  });
  return ast;
}
function mergeSets(a, b) {
  return new Set(__spreadArray(__spreadArray([], __read(a), false), __read(b), false));
}
function areSetsEqual(a, b) {
  return a.size === b.size && mergeSets(a, b).size === a.size;
}
function subtractSets(a, b) {
  var newSet = new Set(a);
  b.forEach(function(bEntry) {
    return newSet.delete(bEntry);
  });
  return newSet;
}
function setsOverlap(a, b) {
  var total = a.size + b.size;
  return new Set(__spreadArray(__spreadArray([], __read(a), false), __read(b), false)).size < total;
}
function buildFinalizationRegistry(cleanupCallback) {
  return new FinalizationRegistry(cleanupCallback);
}
var forkSymbol = Symbol("fork");
var pendingResultsSymbol = Symbol("pendingResults");
function buildForkableIterator(source) {
  var onResult = /* @__PURE__ */ new Set();
  var registry = buildFinalizationRegistry(function(onResultCallback) {
    onResult.delete(onResultCallback);
  });
  var readSource = function() {
    var result = source.next();
    onResult.forEach(function(fn) {
      return fn(result);
    });
  };
  var makeFork = function(initialPendingResults) {
    var _a;
    var iterator = (_a = {}, _a[forkSymbol] = function() {
      return makeFork(this[pendingResultsSymbol]);
    }, _a[pendingResultsSymbol] = initialPendingResults.slice(0), _a.next = function(value) {
      if (value !== void 0) {
        throw new Error("`ForkableIterator` `next()` cannot take a value");
      }
      var pendingResults = this[pendingResultsSymbol];
      if (!pendingResults.length) {
        readSource();
      }
      return pendingResults.shift();
    }, _a);
    var ref = new WeakRef(iterator);
    var callback = function(result) {
      var maybeIterator = ref.deref();
      maybeIterator === null || maybeIterator === void 0 ? void 0 : maybeIterator[pendingResultsSymbol].push(result);
    };
    registry.register(iterator, callback);
    onResult.add(callback);
    return iterator;
  };
  return makeFork([]);
}
function fork(forkableIterator) {
  if (!forkableIterator || !forkableIterator[forkSymbol]) {
    throw new Error("The provided value was not a `ForkableIterator` from `buildForkableIterator()`");
  }
  return forkableIterator[forkSymbol]();
}
function emptyReader() {
  return __generator(this, function(_a) {
    return [2];
  });
}
function buildForkableReader(sourceReader) {
  return buildForkableIterator(sourceReader);
}
function chainReaders(readers) {
  var readers_1, readers_1_1, reader, next, e_1_1;
  var e_1, _a;
  return __generator(this, function(_b) {
    switch (_b.label) {
      case 0:
        _b.trys.push([0, 6, 7, 8]);
        readers_1 = __values(readers), readers_1_1 = readers_1.next();
        _b.label = 1;
      case 1:
        if (!!readers_1_1.done)
          return [3, 5];
        reader = readers_1_1.value;
        next = void 0;
        _b.label = 2;
      case 2:
        if (!!(next = reader.next()).done)
          return [3, 4];
        return [4, next.value];
      case 3:
        _b.sent();
        return [3, 2];
      case 4:
        readers_1_1 = readers_1.next();
        return [3, 1];
      case 5:
        return [3, 8];
      case 6:
        e_1_1 = _b.sent();
        e_1 = { error: e_1_1 };
        return [3, 8];
      case 7:
        try {
          if (readers_1_1 && !readers_1_1.done && (_a = readers_1.return))
            _a.call(readers_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
        return [7];
      case 8:
        return [2];
    }
  });
}
function buildArrayReader(input) {
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        return [5, __values(input)];
      case 1:
        _a.sent();
        return [2];
    }
  });
}
function buildEndReader(offset) {
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        return [4, {
          bounded: false,
          offset,
          stack: [],
          subType: "end",
          type: characterReaderTypeCharacterEntry
        }];
      case 1:
        _a.sent();
        throw new Error("Internal error: should not be reading after end");
    }
  });
}
function join(getAction, getReader) {
  var _join = function(_getAction, _getReader, timeSinceEmitSomething) {
    var i, action, emittedSomething, reader, next, _loop_1;
    if (timeSinceEmitSomething === void 0) {
      timeSinceEmitSomething = 0;
    }
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          i = 0;
          _a.label = 1;
        case 1:
          action = _getAction(i, timeSinceEmitSomething);
          if (!(action === "stop"))
            return [3, 2];
          return [2];
        case 2:
          if (!(action === "fork"))
            return [3, 4];
          return [4, {
            reader: function() {
              return emptyReader();
            },
            subType: null,
            type: characterReaderTypeSplit
          }];
        case 3:
          _a.sent();
          _a.label = 4;
        case 4:
          emittedSomething = false;
          reader = _getReader(i);
          next = void 0;
          _loop_1 = function() {
            var value, _b, _i_1, _timeSinceEmittedSomething_1;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  value = next.value;
                  _b = value.type;
                  switch (_b) {
                    case characterReaderTypeSplit:
                      return [3, 1];
                    case characterReaderTypeCharacterEntry:
                      return [3, 3];
                  }
                  return [3, 5];
                case 1:
                  _i_1 = i;
                  _timeSinceEmittedSomething_1 = timeSinceEmitSomething;
                  return [4, {
                    reader: function() {
                      return _join(function(innerIndex, innerTimeSinceEmittedSomething) {
                        return innerIndex === 0 ? "continue" : _getAction(innerIndex + _i_1, innerTimeSinceEmittedSomething);
                      }, function(innerIndex) {
                        return innerIndex === 0 ? value.reader() : _getReader(innerIndex + _i_1);
                      }, _timeSinceEmittedSomething_1);
                    },
                    subType: value.subType,
                    type: characterReaderTypeSplit
                  }];
                case 2:
                  _c.sent();
                  return [3, 5];
                case 3:
                  if (value.subType !== "null" && value.subType !== "start" && value.subType !== "end") {
                    emittedSomething = true;
                  }
                  return [4, value];
                case 4:
                  _c.sent();
                  return [3, 5];
                case 5:
                  return [2];
              }
            });
          };
          _a.label = 5;
        case 5:
          if (!!(next = reader.next()).done)
            return [3, 7];
          return [5, _loop_1()];
        case 6:
          _a.sent();
          return [3, 5];
        case 7:
          timeSinceEmitSomething = emittedSomething ? 0 : timeSinceEmitSomething + 1;
          _a.label = 8;
        case 8:
          i++;
          return [3, 1];
        case 9:
          return [2];
      }
    });
  };
  return _join(getAction, getReader);
}
function joinArray(input) {
  var length = input.length;
  return join(function(i) {
    return i < length ? "continue" : "stop";
  }, function(i) {
    return input[i]();
  });
}
function buildSequenceCharacterReader(nodes) {
  return joinArray(nodes.map(function(node) {
    return function() {
      return buildCharacterReader(node);
    };
  }));
}
function map(reader, handle) {
  var startThread = function(innerReader) {
    var next, _loop_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _loop_1 = function() {
            var value, _b;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  value = next.value;
                  _b = value.type;
                  switch (_b) {
                    case characterReaderTypeSplit:
                      return [3, 1];
                    case characterReaderTypeCharacterEntry:
                      return [3, 3];
                  }
                  return [3, 5];
                case 1:
                  return [4, {
                    reader: function() {
                      return startThread(value.reader());
                    },
                    subType: value.subType,
                    type: characterReaderTypeSplit
                  }];
                case 2:
                  _c.sent();
                  return [3, 5];
                case 3:
                  return [4, handle(value)];
                case 4:
                  _c.sent();
                  return [3, 5];
                case 5:
                  return [2];
              }
            });
          };
          _a.label = 1;
        case 1:
          if (!!(next = innerReader.next()).done)
            return [3, 3];
          return [5, _loop_1()];
        case 2:
          _a.sent();
          return [3, 1];
        case 3:
          return [2];
      }
    });
  };
  return startThread(reader);
}
function getGroups(stack) {
  var e_1, _a;
  var quantifierStack = [];
  var groups = /* @__PURE__ */ new Map();
  try {
    for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
      var entry = stack_1_1.value;
      if (entry.type === "quantifier") {
        quantifierStack.push(entry);
      } else if (entry.type === "group") {
        groups.set(entry.group, { quantifierStack: __spreadArray([], __read(quantifierStack), false) });
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return))
        _a.call(stack_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return groups;
}
function getLookaheadStack(stack) {
  var e_2, _a;
  var lookaheadStack = [];
  try {
    for (var stack_2 = __values(stack), stack_2_1 = stack_2.next(); !stack_2_1.done; stack_2_1 = stack_2.next()) {
      var entry = stack_2_1.value;
      if (entry.type === "group") {
        var group = entry.group;
        var behavior = group.behavior;
        if (behavior === "lookbehind" || behavior === "negativeLookbehind" || behavior === "negativeLookahead" || behavior === "lookahead") {
          lookaheadStack.push(group);
        }
      }
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (stack_2_1 && !stack_2_1.done && (_a = stack_2.return))
        _a.call(stack_2);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  return lookaheadStack;
}
function buildGroupCharacterReader(node) {
  switch (node.behavior) {
    case "lookbehind":
    case "negativeLookbehind":
    case "lookahead":
    case "negativeLookahead": {
      return buildArrayReader([
        {
          reader: function() {
            return joinArray([
              function() {
                return map(buildSequenceCharacterReader(node.body), function(value) {
                  return __assign(__assign({}, value), { stack: __spreadArray([{ group: node, type: "group" }], __read(value.stack), false) });
                });
              },
              function() {
                return buildEndReader(node.range[1]);
              }
            ]);
          },
          subType: node.behavior === "lookahead" ? "lookahead" : null,
          type: characterReaderTypeSplit
        }
      ]);
    }
    case "ignore":
    case "normal": {
      return map(buildSequenceCharacterReader(node.body), function(value) {
        return __assign(__assign({}, value), { stack: __spreadArray([{ group: node, type: "group" }], __read(value.stack), false) });
      });
    }
  }
}
function buildAnchorReader(node) {
  var _a;
  return __generator(this, function(_b) {
    switch (_b.label) {
      case 0:
        _a = node.kind;
        switch (_a) {
          case "end":
            return [3, 1];
          case "start":
            return [3, 3];
          case "boundary":
            return [3, 5];
          case "not-boundary":
            return [3, 5];
        }
        return [3, 6];
      case 1:
        return [4, {
          bounded: true,
          offset: node.range[0],
          stack: [],
          subType: "end",
          type: characterReaderTypeCharacterEntry
        }];
      case 2:
        _b.sent();
        throw new Error("Internal error: should not be reading after end");
      case 3:
        return [4, {
          offset: node.range[0],
          stack: [],
          subType: "start",
          type: characterReaderTypeCharacterEntry
        }];
      case 4:
        _b.sent();
        return [3, 6];
      case 5: {
        return [3, 6];
      }
      case 6:
        return [2];
    }
  });
}
function characterClassEscapeToRange(value) {
  if (value === "d") {
    return [48, 57];
  }
  return null;
}
function buildCharacterClassEscapeReader(node) {
  var range;
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        range = characterClassEscapeToRange(node.value);
        return [4, {
          characterGroups: {
            characterClassEscapes: new Set(range ? [] : [node.value]),
            dot: false,
            negated: false,
            ranges: range ? [range] : [],
            unicodePropertyEscapes: /* @__PURE__ */ new Set()
          },
          node,
          stack: [],
          subType: "groups",
          type: characterReaderTypeCharacterEntry
        }];
      case 1:
        _a.sent();
        return [2];
    }
  });
}
function buildCharacterClassCharacterReader(node) {
  var e_1, _a;
  var characterGroups = {
    characterClassEscapes: /* @__PURE__ */ new Set(),
    dot: false,
    negated: !!node.negative,
    ranges: [],
    unicodePropertyEscapes: /* @__PURE__ */ new Set()
  };
  try {
    for (var _b = __values(node.body), _c = _b.next(); !_c.done; _c = _b.next()) {
      var expression = _c.value;
      switch (expression.type) {
        case "value": {
          characterGroups.ranges.push([
            expression.codePoint,
            expression.codePoint
          ]);
          break;
        }
        case "characterClassRange": {
          var min = expression.min, max = expression.max;
          characterGroups.ranges.push([min.codePoint, max.codePoint]);
          break;
        }
        case "characterClassEscape": {
          var range = characterClassEscapeToRange(expression.value);
          if (range) {
            characterGroups.ranges.push(range);
          } else {
            characterGroups.characterClassEscapes.add(expression.value);
          }
          break;
        }
        case "unicodePropertyEscape": {
          characterGroups.unicodePropertyEscapes.add(expression.value);
          break;
        }
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return buildArrayReader([
    {
      characterGroups,
      node,
      stack: [],
      subType: "groups",
      type: characterReaderTypeCharacterEntry
    }
  ]);
}
function buildDisjunctionCharacterReader(node) {
  return chainReaders([
    buildArrayReader(node.body.slice(0, -1).map(function(part) {
      return {
        reader: function() {
          return buildCharacterReader(part);
        },
        subType: null,
        type: characterReaderTypeSplit
      };
    })),
    buildCharacterReader(node.body[node.body.length - 1])
  ]);
}
function buildDotCharacterReader(node) {
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        return [4, {
          characterGroups: {
            characterClassEscapes: /* @__PURE__ */ new Set(),
            dot: true,
            negated: false,
            ranges: [],
            unicodePropertyEscapes: /* @__PURE__ */ new Set()
          },
          node,
          stack: [],
          subType: "groups",
          type: characterReaderTypeCharacterEntry
        }];
      case 1:
        _a.sent();
        return [2];
    }
  });
}
function buildReferenceCharacterReader(node) {
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        return [4, {
          node,
          referenceIndex: node.matchIndex,
          stack: [],
          subType: "reference",
          type: characterReaderTypeCharacterEntry
        }];
      case 1:
        _a.sent();
        return [2];
    }
  });
}
function buildUnicodePropertyEscapeCharacterReader(node) {
  return buildArrayReader([
    {
      characterGroups: {
        characterClassEscapes: /* @__PURE__ */ new Set(),
        dot: false,
        negated: node.negative,
        ranges: [],
        unicodePropertyEscapes: /* @__PURE__ */ new Set([node.value])
      },
      node,
      stack: [],
      subType: "groups",
      type: characterReaderTypeCharacterEntry
    }
  ]);
}
function buildValueCharacterReader(node) {
  return buildArrayReader([
    {
      characterGroups: {
        characterClassEscapes: /* @__PURE__ */ new Set(),
        dot: false,
        negated: false,
        ranges: [[node.codePoint, node.codePoint]],
        unicodePropertyEscapes: /* @__PURE__ */ new Set()
      },
      node,
      stack: [],
      subType: "groups",
      type: characterReaderTypeCharacterEntry
    }
  ]);
}
var characterReaderTypeCharacterEntry = Symbol("characterReaderTypeCharacterEntry");
var characterReaderTypeSplit = Symbol("characterReaderTypeSplit");
function buildCharacterReader(node) {
  switch (node.type) {
    case "anchor":
      return buildAnchorReader(node);
    case "characterClass":
      return buildCharacterClassCharacterReader(node);
    case "characterClassEscape":
      return buildCharacterClassEscapeReader(node);
    case "unicodePropertyEscape":
      return buildUnicodePropertyEscapeCharacterReader(node);
    case "reference":
      return buildReferenceCharacterReader(node);
    case "value":
      return buildValueCharacterReader(node);
    case "dot":
      return buildDotCharacterReader(node);
    case "alternative":
      return buildSequenceCharacterReader(node.body);
    case "disjunction":
      return buildDisjunctionCharacterReader(node);
    case "group":
      return buildGroupCharacterReader(node);
    case "quantifier":
      return buildQuantifierCharacterReader(node);
  }
}
function buildNullCharacterReader(offset) {
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        return [4, {
          offset,
          stack: [],
          subType: "null",
          type: characterReaderTypeCharacterEntry
        }];
      case 1:
        _a.sent();
        return [2];
    }
  });
}
function getQuantifierStack(stack) {
  var e_1, _a;
  var quantifierStack = [];
  try {
    for (var stack_1 = __values(stack), stack_1_1 = stack_1.next(); !stack_1_1.done; stack_1_1 = stack_1.next()) {
      var entry = stack_1_1.value;
      if (entry.type === "quantifier") {
        quantifierStack.push(entry);
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (stack_1_1 && !stack_1_1.done && (_a = stack_1.return))
        _a.call(stack_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return quantifierStack;
}
function buildQuantifiersInInfinitePortion(stack) {
  return new Set(stack.filter(function(_a) {
    var inInfinitePortion = _a.inInfinitePortion;
    return inInfinitePortion;
  }).map(function(_a) {
    var quantifier = _a.quantifier;
    return quantifier;
  }));
}
function buildQuantifierIterations(stack) {
  var res = /* @__PURE__ */ new Map();
  stack.forEach(function(_a) {
    var iteration = _a.iteration, quantifier = _a.quantifier;
    return res.set(quantifier, iteration);
  });
  return res;
}
function buildQuantifierTrail(stack, asteriskInfinite) {
  return stack.map(function(_a) {
    var quantifier = _a.quantifier, inInfinitePortion = _a.inInfinitePortion, iteration = _a.iteration;
    return "".concat(quantifier.range[0], ":").concat(asteriskInfinite && inInfinitePortion ? "*" : "".concat(iteration));
  }).join(",");
}
function buildQuantifierCharacterReader(node) {
  var min = node.min, _a = node.max, max = _a === void 0 ? Infinity : _a;
  return joinArray([
    function() {
      return buildNullCharacterReader(node.body[0].range[0]);
    },
    function() {
      return join(function(i, timeSinceEmit) {
        if (timeSinceEmit > 1)
          return "stop";
        if (i >= max)
          return "stop";
        if (i >= min)
          return "fork";
        return "continue";
      }, function(i) {
        return map(joinArray(__spreadArray(__spreadArray([], __read(i > 0 ? [
          function() {
            return buildNullCharacterReader(node.body[0].range[0]);
          }
        ] : []), false), [
          function() {
            return buildCharacterReader(node.body[0]);
          }
        ], false)), function(value) {
          var inInfinitePortion = i >= min && i >= 1 && max === Infinity;
          return __assign(__assign({}, value), { stack: __spreadArray([
            {
              inInfinitePortion,
              iteration: i,
              quantifier: node,
              type: "quantifier"
            }
          ], __read(value.stack), false) });
        });
      });
    }
  ]);
}
function subtractRanges(source, toSubtract) {
  var res = [];
  if (source[0] < toSubtract[0]) {
    res.push([source[0], Math.min(toSubtract[0] - 1, source[1])]);
  }
  if (source[1] > toSubtract[1]) {
    res.push([Math.max(toSubtract[1] + 1, source[0]), source[1]]);
  }
  return res;
}
function intersectRanges(a, b) {
  var startShared = Math.max(a[0], b[0]);
  var endShared = Math.min(a[1], b[1]);
  if (startShared > endShared) {
    return null;
  }
  var shared = [startShared, endShared];
  return {
    a: subtractRanges(a, shared),
    b: subtractRanges(b, shared),
    shared
  };
}
function isEmptyCharacterGroups(group) {
  return !group.negated && !group.ranges.length && !group.dot && !group.characterClassEscapes.size && !group.unicodePropertyEscapes.size;
}
function intersectTwoCharacterGroups(a, b) {
  var newRanges;
  var newChracterClassEscapes;
  var newUnicodePropertyEscapes;
  var newNegated;
  var newDot;
  if (a.dot || b.dot) {
    if (a.dot && b.dot) {
      newDot = true;
      newNegated = false;
      newRanges = [];
      newChracterClassEscapes = /* @__PURE__ */ new Set();
      newUnicodePropertyEscapes = /* @__PURE__ */ new Set();
    } else if (a.dot) {
      newDot = false;
      newNegated = b.negated;
      newRanges = b.ranges;
      newChracterClassEscapes = b.characterClassEscapes;
      newUnicodePropertyEscapes = b.unicodePropertyEscapes;
    } else {
      newDot = false;
      newNegated = a.negated;
      newRanges = a.ranges;
      newChracterClassEscapes = a.characterClassEscapes;
      newUnicodePropertyEscapes = a.unicodePropertyEscapes;
    }
  } else {
    newDot = false;
    if (!a.negated) {
      if (!b.negated) {
        newNegated = false;
        newRanges = [];
        a.ranges.forEach(function(aRange) {
          b.ranges.forEach(function(bRange) {
            var intersection = intersectRanges(aRange, bRange);
            if (intersection) {
              newRanges.push(intersection.shared);
            }
          });
        });
        newChracterClassEscapes = mergeSets(a.characterClassEscapes, b.characterClassEscapes);
        newUnicodePropertyEscapes = mergeSets(a.unicodePropertyEscapes, b.unicodePropertyEscapes);
      } else {
        newNegated = false;
        newRanges = __spreadArray([], __read(a.ranges), false);
        b.ranges.forEach(function(bRange) {
          var narrowed = [];
          newRanges.forEach(function(aRange) {
            var intersection = intersectRanges(aRange, bRange);
            if (!intersection) {
              narrowed.push(aRange);
            } else {
              narrowed.push.apply(narrowed, __spreadArray([], __read(intersection.a), false));
            }
          });
          newRanges = narrowed;
        });
        newChracterClassEscapes = subtractSets(a.characterClassEscapes, b.characterClassEscapes);
        newUnicodePropertyEscapes = subtractSets(a.unicodePropertyEscapes, b.unicodePropertyEscapes);
      }
    } else {
      if (!b.negated) {
        newNegated = false;
        newRanges = __spreadArray([], __read(b.ranges), false);
        a.ranges.forEach(function(aRange) {
          var narrowed = [];
          newRanges.forEach(function(bRange) {
            var intersection = intersectRanges(aRange, bRange);
            if (!intersection) {
              narrowed.push(bRange);
            } else {
              narrowed.push.apply(narrowed, __spreadArray([], __read(intersection.b), false));
            }
          });
          newRanges = narrowed;
        });
        newChracterClassEscapes = subtractSets(b.characterClassEscapes, a.characterClassEscapes);
        newUnicodePropertyEscapes = subtractSets(b.unicodePropertyEscapes, a.unicodePropertyEscapes);
      } else {
        newNegated = true;
        newRanges = [];
        a.ranges.forEach(function(aRange) {
          b.ranges.forEach(function(bRange) {
            newRanges.push(aRange);
            newRanges.push(bRange);
          });
        });
        newChracterClassEscapes = mergeSets(a.characterClassEscapes, b.characterClassEscapes);
        newUnicodePropertyEscapes = mergeSets(a.unicodePropertyEscapes, b.unicodePropertyEscapes);
      }
    }
  }
  return {
    characterClassEscapes: newChracterClassEscapes,
    dot: newDot,
    negated: newNegated,
    ranges: newRanges,
    unicodePropertyEscapes: newUnicodePropertyEscapes
  };
}
function intersectCharacterGroups(groups) {
  var res = groups[0];
  for (var i = 1; i < groups.length; i++) {
    res = intersectTwoCharacterGroups(res, groups[i]);
  }
  return res;
}
var characterReaderLevel1TypeSplit = Symbol("characterReaderLevel2TypeSplit");
var characterReaderLevel1TypeEntry = Symbol("characterReaderLevel1TypeEntry");
function buildCharacterReaderLevel1(node) {
  var startThread = function(reader, preceedingZeroWidthEntries) {
    var next, _loop_1, state_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _loop_1 = function() {
            var _b, _c, value_1, _preceedingZeroWidthEntries_1;
            return __generator(this, function(_d) {
              switch (_d.label) {
                case 0:
                  _b = next.value.type;
                  switch (_b) {
                    case characterReaderTypeCharacterEntry:
                      return [3, 1];
                    case characterReaderTypeSplit:
                      return [3, 10];
                  }
                  return [3, 12];
                case 1:
                  _c = next.value.subType;
                  switch (_c) {
                    case "groups":
                      return [3, 2];
                    case "reference":
                      return [3, 4];
                    case "end":
                      return [3, 6];
                    case "null":
                      return [3, 7];
                    case "start":
                      return [3, 8];
                  }
                  return [3, 9];
                case 2:
                  return [4, {
                    characterGroups: next.value.characterGroups,
                    node: next.value.node,
                    preceedingZeroWidthEntries,
                    stack: next.value.stack,
                    subType: "groups",
                    type: characterReaderLevel1TypeEntry
                  }];
                case 3:
                  _d.sent();
                  preceedingZeroWidthEntries = [];
                  return [3, 9];
                case 4:
                  return [4, {
                    node: next.value.node,
                    preceedingZeroWidthEntries,
                    referenceIndex: next.value.referenceIndex,
                    stack: next.value.stack,
                    subType: next.value.subType,
                    type: characterReaderLevel1TypeEntry
                  }];
                case 5:
                  _d.sent();
                  preceedingZeroWidthEntries = [];
                  return [3, 9];
                case 6: {
                  return [2, { value: {
                    bounded: next.value.bounded,
                    preceedingZeroWidthEntries
                  } }];
                }
                case 7: {
                  preceedingZeroWidthEntries = __spreadArray(__spreadArray([], __read(preceedingZeroWidthEntries), false), [
                    { offset: next.value.offset, type: "null" }
                  ], false);
                  return [3, 9];
                }
                case 8: {
                  preceedingZeroWidthEntries = __spreadArray(__spreadArray([], __read(preceedingZeroWidthEntries), false), [
                    { offset: next.value.offset, type: "start" }
                  ], false);
                  return [3, 9];
                }
                case 9:
                  return [3, 12];
                case 10:
                  value_1 = next.value;
                  _preceedingZeroWidthEntries_1 = preceedingZeroWidthEntries;
                  return [4, {
                    reader: function() {
                      return startThread(value_1.reader(), _preceedingZeroWidthEntries_1);
                    },
                    subType: value_1.subType,
                    type: characterReaderLevel1TypeSplit
                  }];
                case 11:
                  _d.sent();
                  return [3, 12];
                case 12:
                  return [2];
              }
            });
          };
          _a.label = 1;
        case 1:
          if (!!(next = reader.next()).done)
            return [3, 3];
          return [5, _loop_1()];
        case 2:
          state_1 = _a.sent();
          if (typeof state_1 === "object")
            return [2, state_1.value];
          return [3, 1];
        case 3:
          return [2, { bounded: false, preceedingZeroWidthEntries }];
      }
    });
  };
  return startThread(buildCharacterReader(node), []);
}
function last(input) {
  var length = input.length;
  return length ? input[length - 1] : null;
}
function areArraysEqual(a, b) {
  if (a.length !== b.length)
    return false;
  return a.every(function(value, i) {
    return value === b[i];
  });
}
function dropCommon(a, b) {
  var commonLevels;
  for (commonLevels = 0; commonLevels < a.length && commonLevels < b.length && a[commonLevels] === b[commonLevels]; commonLevels++)
    ;
  return {
    a: a.slice(commonLevels),
    b: b.slice(commonLevels)
  };
}
function areMapsEqual(a, b) {
  var e_1, _a;
  if (a.size !== b.size)
    return false;
  try {
    for (var a_1 = __values(a), a_1_1 = a_1.next(); !a_1_1.done; a_1_1 = a_1.next()) {
      var _b = __read(a_1_1.value, 2), key = _b[0], value = _b[1];
      if (b.has(key) && b.get(key) !== value) {
        return false;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (a_1_1 && !a_1_1.done && (_a = a_1.return))
        _a.call(a_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return true;
}
function mustGet(map2, key) {
  if (!map2.has(key)) {
    throw new Error("Internal error: map missing key");
  }
  return map2.get(key);
}
var characterReaderLevel2TypeSplit = Symbol("characterReaderLevel2TypeSplit");
var characterReaderLevel2TypeEntry = Symbol("characterReaderLevel2TypeEntry");
function internalStackToLevel1Stack(internalStack) {
  var e_1, _a;
  var stack = [];
  try {
    for (var internalStack_1 = __values(internalStack), internalStack_1_1 = internalStack_1.next(); !internalStack_1_1.done; internalStack_1_1 = internalStack_1.next()) {
      var entry = internalStack_1_1.value;
      if (entry.type !== "reference")
        stack.push(entry);
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (internalStack_1_1 && !internalStack_1_1.done && (_a = internalStack_1.return))
        _a.call(internalStack_1);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return stack;
}
var internalReaderTypeSplit = Symbol("internalReaderTypeSplit");
var internalReaderTypeEntry = Symbol("internalReaderTypeEntry");
function characterReaderLevel1ToInternalReader(characterReaderLevel1) {
  var next, _loop_1;
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        _loop_1 = function() {
          var value, _b;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                value = next.value;
                _b = value.type;
                switch (_b) {
                  case characterReaderLevel1TypeSplit:
                    return [3, 1];
                  case characterReaderLevel1TypeEntry:
                    return [3, 3];
                }
                return [3, 5];
              case 1:
                return [4, {
                  reader: function() {
                    return characterReaderLevel1ToInternalReader(value.reader());
                  },
                  subType: value.subType,
                  type: internalReaderTypeSplit
                }];
              case 2:
                _c.sent();
                return [3, 5];
              case 3:
                return [4, __assign(__assign({}, value), { type: internalReaderTypeEntry })];
              case 4:
                _c.sent();
                return [3, 5];
              case 5:
                return [2];
            }
          });
        };
        _a.label = 1;
      case 1:
        if (!!(next = characterReaderLevel1.next()).done)
          return [3, 3];
        return [5, _loop_1()];
      case 2:
        _a.sent();
        return [3, 1];
      case 3:
        return [2, next.value];
    }
  });
}
function haveHadCompleteIteration(before, now) {
  var e_2, _a;
  try {
    for (var now_1 = __values(now), now_1_1 = now_1.next(); !now_1_1.done; now_1_1 = now_1.next()) {
      var _b = __read(now_1_1.value, 2), quantifier = _b[0], iterationsNow = _b[1];
      var iterationsBefore = before.get(quantifier) || 0;
      if (iterationsNow - iterationsBefore > 1) {
        return true;
      }
    }
  } catch (e_2_1) {
    e_2 = { error: e_2_1 };
  } finally {
    try {
      if (now_1_1 && !now_1_1.done && (_a = now_1.return))
        _a.call(now_1);
    } finally {
      if (e_2)
        throw e_2.error;
    }
  }
  return false;
}
function getGroupContentsReader(_a) {
  var group, groupContents, groupLookaheadStack, _b, _c, groupEntry, e_3_1;
  var e_3, _d;
  var groupContentsStore = _a.groupContentsStore, groups = _a.groups, groupsWithInfiniteSize = _a.groupsWithInfiniteSize, nodeExtra = _a.nodeExtra, value = _a.value;
  return __generator(this, function(_e) {
    switch (_e.label) {
      case 0:
        group = mustGet(nodeExtra.indexToCapturingGroup, value.referenceIndex);
        groupContents = groupContentsStore.get(value.referenceIndex) || {
          contents: [],
          group
        };
        groupLookaheadStack = dropCommon(mustGet(nodeExtra.nodeToLookaheadStack, groupContents.group), mustGet(nodeExtra.nodeToLookaheadStack, value.node)).a;
        if (groupLookaheadStack.length) {
          if (groupLookaheadStack.some(function(_a2) {
            var behavior = _a2.behavior;
            return behavior === "negativeLookahead" || behavior === "negativeLookbehind";
          })) {
            return [2, { bounded: false, preceedingZeroWidthEntries: [] }];
          }
          throw new Error("Unsupported reference (".concat(value.referenceIndex, " at position ").concat(value.node.range[0], "). Pattern needs downgrading. See the `downgradePattern` option."));
        }
        if (groups.has(groupContents.group)) {
          return [2, { bounded: false, preceedingZeroWidthEntries: [] }];
        }
        if (groupsWithInfiniteSize.has(value.referenceIndex)) {
          throw new Error("Unsupported reference to group ".concat(value.referenceIndex, " as group is not a finite size. Pattern needs downgrading. See the `downgradePattern` option."));
        }
        _e.label = 1;
      case 1:
        _e.trys.push([1, 6, 7, 8]);
        _b = __values(groupContents.contents), _c = _b.next();
        _e.label = 2;
      case 2:
        if (!!_c.done)
          return [3, 5];
        groupEntry = _c.value;
        return [4, {
          characterGroups: groupEntry.characterGroups,
          node: groupEntry.node,
          preceedingZeroWidthEntries: groupEntry.preceedingZeroWidthEntries,
          stack: __spreadArray(__spreadArray([
            {
              reference: value.node,
              type: "reference"
            }
          ], __read(groupEntry.stack.filter(function(_a2) {
            var type = _a2.type;
            return type === "reference";
          })), false), __read(value.stack), false),
          subType: "groups",
          type: internalReaderTypeEntry
        }];
      case 3:
        _e.sent();
        _e.label = 4;
      case 4:
        _c = _b.next();
        return [3, 2];
      case 5:
        return [3, 8];
      case 6:
        e_3_1 = _e.sent();
        e_3 = { error: e_3_1 };
        return [3, 8];
      case 7:
        try {
          if (_c && !_c.done && (_d = _b.return))
            _d.call(_b);
        } finally {
          if (e_3)
            throw e_3.error;
        }
        return [7];
      case 8:
        return [2, { bounded: false, preceedingZeroWidthEntries: [] }];
    }
  });
}
function buildCharacterReaderLevel2(node, nodeExtra) {
  var startThread = function(state) {
    var _loop_2, state_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _loop_2 = function() {
            var preceedingZeroWidthEntries, groupsWithInfiniteSize, groupContentsStore, quantifierIterationsAtLastGroup, characterReader, referenceCharacterReaderWithReference, activeCharacterReader, result, value, _b, _groupContentsStore_1, _quantifierIterationsAtLastGroup_1, _groupsWithInfiniteSize_1, _preceedingZeroWidthEntries_1, quantifierStack, quantifierIterations, lookaheadStack, groups, _c, groupContentsReader, newGroupContentsStore, groupContentsStore_1, groupContentsStore_1_1, _d, index, group, offsets, offsets_1, offsets_1_1, offset, groupInfiniteSize, _loop_3, _e, _f, stackEntry;
            var e_4, _g, e_5, _h, e_6, _j;
            return __generator(this, function(_k) {
              switch (_k.label) {
                case 0:
                  preceedingZeroWidthEntries = state.preceedingZeroWidthEntries, groupsWithInfiniteSize = state.groupsWithInfiniteSize, groupContentsStore = state.groupContentsStore, quantifierIterationsAtLastGroup = state.quantifierIterationsAtLastGroup;
                  characterReader = state.characterReader, referenceCharacterReaderWithReference = state.referenceCharacterReaderWithReference;
                  activeCharacterReader = (referenceCharacterReaderWithReference === null || referenceCharacterReaderWithReference === void 0 ? void 0 : referenceCharacterReaderWithReference.reader) || characterReader;
                  result = activeCharacterReader.next();
                  if (result.done) {
                    if (referenceCharacterReaderWithReference) {
                      if (result.value.bounded) {
                        throw new Error("Internal error: end of reference reader cannot be bounded");
                      }
                      state = {
                        characterReader,
                        groupContentsStore,
                        groupsWithInfiniteSize,
                        preceedingZeroWidthEntries: __spreadArray(__spreadArray([], __read(preceedingZeroWidthEntries), false), __read(result.value.preceedingZeroWidthEntries), false),
                        quantifierIterationsAtLastGroup,
                        referenceCharacterReaderWithReference: null
                      };
                      return [2, "continue-outer"];
                    }
                    return [2, { value: {
                      bounded: result.value.bounded,
                      preceedingZeroWidthEntries: __spreadArray(__spreadArray([], __read(preceedingZeroWidthEntries), false), __read(result.value.preceedingZeroWidthEntries), false),
                      type: "end"
                    } }];
                  }
                  value = result.value;
                  _b = value.type;
                  switch (_b) {
                    case internalReaderTypeSplit:
                      return [3, 1];
                    case internalReaderTypeEntry:
                      return [3, 3];
                  }
                  return [3, 7];
                case 1:
                  if (referenceCharacterReaderWithReference) {
                    throw new Error("Internal error: should not be seeing a split from a reference reader");
                  }
                  _groupContentsStore_1 = groupContentsStore;
                  _quantifierIterationsAtLastGroup_1 = quantifierIterationsAtLastGroup;
                  _groupsWithInfiniteSize_1 = groupsWithInfiniteSize;
                  _preceedingZeroWidthEntries_1 = preceedingZeroWidthEntries;
                  return [4, {
                    reader: function() {
                      return startThread({
                        characterReader: buildForkableReader(value.reader()),
                        groupContentsStore: _groupContentsStore_1,
                        groupsWithInfiniteSize: _groupsWithInfiniteSize_1,
                        preceedingZeroWidthEntries: _preceedingZeroWidthEntries_1,
                        quantifierIterationsAtLastGroup: _quantifierIterationsAtLastGroup_1,
                        referenceCharacterReaderWithReference
                      });
                    },
                    subType: value.subType,
                    type: characterReaderLevel2TypeSplit
                  }];
                case 2:
                  _k.sent();
                  return [3, 7];
                case 3:
                  preceedingZeroWidthEntries = __spreadArray(__spreadArray([], __read(preceedingZeroWidthEntries), false), __read(value.preceedingZeroWidthEntries), false);
                  quantifierStack = getQuantifierStack(internalStackToLevel1Stack(value.stack));
                  quantifierIterations = buildQuantifierIterations(quantifierStack);
                  lookaheadStack = getLookaheadStack(internalStackToLevel1Stack(value.stack));
                  groups = getGroups(internalStackToLevel1Stack(value.stack));
                  _c = value.subType;
                  switch (_c) {
                    case "reference":
                      return [3, 4];
                    case "groups":
                      return [3, 5];
                  }
                  return [3, 7];
                case 4: {
                  if (referenceCharacterReaderWithReference) {
                    throw new Error("Internal error: should not be seeing a reference from a reference reader");
                  }
                  if (haveHadCompleteIteration(quantifierIterationsAtLastGroup, quantifierIterations)) {
                    return [2, { value: {
                      type: "abort"
                    } }];
                  }
                  groupContentsReader = buildForkableReader(getGroupContentsReader({
                    groupContentsStore,
                    groups,
                    groupsWithInfiniteSize,
                    nodeExtra,
                    value
                  }));
                  state = {
                    characterReader,
                    groupContentsStore,
                    groupsWithInfiniteSize,
                    preceedingZeroWidthEntries,
                    quantifierIterationsAtLastGroup,
                    referenceCharacterReaderWithReference: {
                      reader: groupContentsReader,
                      reference: value.node
                    }
                  };
                  return [3, 7];
                }
                case 5:
                  newGroupContentsStore = new Map(groupContentsStore);
                  if (!referenceCharacterReaderWithReference) {
                    try {
                      for (groupContentsStore_1 = (e_4 = void 0, __values(groupContentsStore)), groupContentsStore_1_1 = groupContentsStore_1.next(); !groupContentsStore_1_1.done; groupContentsStore_1_1 = groupContentsStore_1.next()) {
                        _d = __read(groupContentsStore_1_1.value, 2), index = _d[0], group = _d[1].group;
                        offsets = __spreadArray(__spreadArray([], __read(preceedingZeroWidthEntries.map(function(_a2) {
                          var offset2 = _a2.offset;
                          return offset2;
                        })), false), [
                          value.node.range[0]
                        ], false);
                        try {
                          for (offsets_1 = (e_5 = void 0, __values(offsets)), offsets_1_1 = offsets_1.next(); !offsets_1_1.done; offsets_1_1 = offsets_1.next()) {
                            offset = offsets_1_1.value;
                            if (group.range[0] >= offset) {
                              newGroupContentsStore.delete(index);
                              break;
                            }
                          }
                        } catch (e_5_1) {
                          e_5 = { error: e_5_1 };
                        } finally {
                          try {
                            if (offsets_1_1 && !offsets_1_1.done && (_h = offsets_1.return))
                              _h.call(offsets_1);
                          } finally {
                            if (e_5)
                              throw e_5.error;
                          }
                        }
                      }
                    } catch (e_4_1) {
                      e_4 = { error: e_4_1 };
                    } finally {
                      try {
                        if (groupContentsStore_1_1 && !groupContentsStore_1_1.done && (_g = groupContentsStore_1.return))
                          _g.call(groupContentsStore_1);
                      } finally {
                        if (e_4)
                          throw e_4.error;
                      }
                    }
                  }
                  groupInfiniteSize = false;
                  _loop_3 = function(stackEntry2) {
                    if (stackEntry2.type === "quantifier" && stackEntry2.quantifier.max === void 0) {
                      groupInfiniteSize = true;
                      return "continue";
                    } else if (stackEntry2.type !== "group") {
                      return "continue";
                    }
                    var group2 = stackEntry2.group;
                    if (group2.behavior === "lookbehind" || group2.behavior === "negativeLookbehind" || group2.behavior === "negativeLookahead" || group2.behavior === "lookahead") {
                      groupInfiniteSize = false;
                      return "continue";
                    }
                    if (group2.behavior !== "normal") {
                      return "continue";
                    }
                    var index2 = mustGet(nodeExtra.capturingGroupToIndex, group2);
                    if (groupInfiniteSize) {
                      var newGroupsWithInfiniteSize = new Set(groupsWithInfiniteSize);
                      newGroupsWithInfiniteSize.add(index2);
                      groupsWithInfiniteSize = newGroupsWithInfiniteSize;
                    }
                    var contents = newGroupContentsStore.get(index2) || {
                      contents: [],
                      group: group2
                    };
                    newGroupContentsStore.set(index2, __assign(__assign({}, contents), { contents: __spreadArray(__spreadArray([], __read(contents.contents), false), [
                      __assign(__assign({}, value), { preceedingZeroWidthEntries: preceedingZeroWidthEntries.filter(function(_a2) {
                        var offset2 = _a2.offset;
                        return offset2 >= group2.range[0] && offset2 <= group2.range[1];
                      }) })
                    ], false) }));
                  };
                  try {
                    for (_e = (e_6 = void 0, __values(__spreadArray([], __read(value.stack), false).reverse())), _f = _e.next(); !_f.done; _f = _e.next()) {
                      stackEntry = _f.value;
                      _loop_3(stackEntry);
                    }
                  } catch (e_6_1) {
                    e_6 = { error: e_6_1 };
                  } finally {
                    try {
                      if (_f && !_f.done && (_j = _e.return))
                        _j.call(_e);
                    } finally {
                      if (e_6)
                        throw e_6.error;
                    }
                  }
                  groupContentsStore = newGroupContentsStore;
                  quantifierIterationsAtLastGroup = quantifierIterations;
                  return [4, {
                    backreferenceStack: value.stack.flatMap(function(stackEntry2) {
                      return stackEntry2.type === "reference" ? [stackEntry2.reference] : [];
                    }).reverse(),
                    characterGroups: value.characterGroups,
                    groups,
                    lookaheadStack,
                    node: value.node,
                    preceedingZeroWidthEntries,
                    quantifierStack,
                    type: characterReaderLevel2TypeEntry
                  }];
                case 6:
                  _k.sent();
                  preceedingZeroWidthEntries = [];
                  state = {
                    characterReader,
                    groupContentsStore,
                    groupsWithInfiniteSize,
                    preceedingZeroWidthEntries,
                    quantifierIterationsAtLastGroup,
                    referenceCharacterReaderWithReference
                  };
                  return [3, 7];
                case 7:
                  return [2];
              }
            });
          };
          _a.label = 1;
        case 1:
          return [5, _loop_2()];
        case 2:
          state_1 = _a.sent();
          if (typeof state_1 === "object")
            return [2, state_1.value];
          switch (state_1) {
            case "continue-outer":
              return [3, 3];
          }
          _a.label = 3;
        case 3:
          return [3, 1];
        case 4:
          return [2];
      }
    });
  };
  return startThread({
    characterReader: buildForkableReader(characterReaderLevel1ToInternalReader(buildCharacterReaderLevel1(node))),
    groupContentsStore: /* @__PURE__ */ new Map(),
    groupsWithInfiniteSize: /* @__PURE__ */ new Set(),
    preceedingZeroWidthEntries: [],
    quantifierIterationsAtLastGroup: /* @__PURE__ */ new Map(),
    referenceCharacterReaderWithReference: null
  });
}
var characterReaderLevel3TypeSplit = Symbol("characterReaderLevel3TypeSplit");
var characterReaderLevel3TypeEntry = Symbol("characterReaderLevel3TypeEntry");
function isReaderAtEnd(reader) {
  var isAtEndUnbounded = function(innerReader) {
    var next = innerReader.next();
    if (next.done) {
      return next.value.type === "end" && !next.value.bounded;
    }
    if (next.value.type === characterReaderLevel2TypeSplit) {
      return isAtEndUnbounded(next.value.reader()) || isAtEndUnbounded(innerReader);
    }
    return false;
  };
  return isAtEndUnbounded(fork(reader));
}
function buildCharacterReaderLevel3(node, nodeExtra) {
  var startThread = function(reader) {
    var next, _loop_1;
    return __generator(this, function(_a) {
      switch (_a.label) {
        case 0:
          _loop_1 = function() {
            var value, _b;
            return __generator(this, function(_c) {
              switch (_c.label) {
                case 0:
                  value = next.value;
                  _b = value.type;
                  switch (_b) {
                    case characterReaderLevel2TypeEntry:
                      return [3, 1];
                    case characterReaderLevel2TypeSplit:
                      return [3, 3];
                  }
                  return [3, 5];
                case 1:
                  return [4, {
                    backreferenceStack: value.backreferenceStack,
                    characterGroups: value.characterGroups,
                    groups: value.groups,
                    lookaheadStack: value.lookaheadStack,
                    node: value.node,
                    preceedingZeroWidthEntries: value.preceedingZeroWidthEntries,
                    quantifierStack: value.quantifierStack,
                    type: characterReaderLevel3TypeEntry,
                    unbounded: isReaderAtEnd(reader)
                  }];
                case 2:
                  _c.sent();
                  return [3, 5];
                case 3:
                  return [4, {
                    reader: function() {
                      return startThread(buildForkableReader(value.reader()));
                    },
                    subType: value.subType,
                    type: characterReaderLevel3TypeSplit
                  }];
                case 4:
                  _c.sent();
                  return [3, 5];
                case 5:
                  return [2];
              }
            });
          };
          _a.label = 1;
        case 1:
          if (!!(next = reader.next()).done)
            return [3, 3];
          return [5, _loop_1()];
        case 2:
          _a.sent();
          return [3, 1];
        case 3:
          return [2, next.value];
      }
    });
  };
  return startThread(buildForkableReader(buildCharacterReaderLevel2(node, nodeExtra)));
}
var InfiniteLoopTracker = function() {
  function InfiniteLoopTracker2(isEqual, source) {
    this._history = [];
    this._isEqual = isEqual;
    if (source) {
      this._history = __spreadArray([], __read(source.getHistory()), false);
    }
  }
  InfiniteLoopTracker2.prototype._isEntryEqual = function(a, b) {
    return this._isEqual(a.left, b.left) && this._isEqual(a.right, b.right);
  };
  InfiniteLoopTracker2.prototype.append = function(left, right) {
    this._history.push({ left, right });
  };
  InfiniteLoopTracker2.prototype.clone = function() {
    return new InfiniteLoopTracker2(this._isEqual, this);
  };
  InfiniteLoopTracker2.prototype.getHistory = function() {
    return __spreadArray([], __read(this._history), false);
  };
  InfiniteLoopTracker2.prototype.isLooping = function() {
    var length = this._history.length;
    outer:
      for (var candidateSize = 1; candidateSize <= length / 2; candidateSize++) {
        var candidateStart = length - candidateSize * 2;
        for (var i = 0; i < candidateSize; i++) {
          if (!this._isEntryEqual(this._history[candidateStart + i], this._history[candidateStart + candidateSize + i])) {
            continue outer;
          }
        }
        return true;
      }
    return false;
  };
  return InfiniteLoopTracker2;
}();
function once(fn) {
  var done = false;
  var res;
  return function() {
    if (!done) {
      done = true;
      res = fn();
    }
    return res;
  };
}
var ResultCache = function() {
  function ResultCache2() {
    this._cache = /* @__PURE__ */ new Map();
  }
  ResultCache2.prototype.addResult = function(a, b, result) {
    var mapA = this._cache.get(a) || /* @__PURE__ */ new Map();
    mapA.set(b, result);
    this._cache.set(a, mapA);
    var mapB = this._cache.get(b) || /* @__PURE__ */ new Map();
    mapB.set(a, result);
    this._cache.set(b, mapB);
  };
  ResultCache2.prototype.getResult = function(a, b) {
    var _a;
    return (_a = this._cache.get(a)) === null || _a === void 0 ? void 0 : _a.get(b);
  };
  return ResultCache2;
}();
var SidesEqualChecker = function() {
  function SidesEqualChecker2() {
    this._cache = new ResultCache();
  }
  SidesEqualChecker2.prototype.areSidesEqual = function(left, right) {
    var cached = this._cache.getResult(left, right);
    if (cached !== void 0)
      return cached;
    var equal = left.node === right.node && areArraysEqual(left.backreferenceStack, right.backreferenceStack) && areMapsEqual(buildQuantifierIterations(left.quantifierStack), buildQuantifierIterations(right.quantifierStack));
    this._cache.addResult(left, right, equal);
    return equal;
  };
  return SidesEqualChecker2;
}();
var checkerReaderTypeTrail = Symbol("checkerReaderTypeTrail");
var checkerReaderTypeInfiniteLoop = Symbol("checkerReaderTypeInfiniteLoop");
var stackOverflowLimit = 1e3;
var isNodeWithQuantifierTrailEqual = function(left, right) {
  return left.node === right.node && left.quantifierTrail === right.quantifierTrail;
};
function buildCheckerReader(input) {
  var sidesEqualChecker, trails, stepCount, latestEndTime, timedOut, stackOverflow, initialLeftStreamReader, initialRightStreamReader, stack, _loop_1, state_1;
  return __generator(this, function(_a) {
    switch (_a.label) {
      case 0:
        sidesEqualChecker = new SidesEqualChecker();
        trails = /* @__PURE__ */ new Set();
        stepCount = 0;
        latestEndTime = Date.now() + input.timeout;
        timedOut = false;
        stackOverflow = false;
        initialLeftStreamReader = buildForkableReader(input.leftStreamReader);
        initialRightStreamReader = buildForkableReader(input.rightStreamReader);
        stack = [
          {
            infiniteLoopTracker: new InfiniteLoopTracker(isNodeWithQuantifierTrailEqual),
            streamReadersWithGetters: [
              {
                get: once(function() {
                  return initialLeftStreamReader.next();
                }),
                reader: initialLeftStreamReader
              },
              {
                get: once(function() {
                  return initialRightStreamReader.next();
                }),
                reader: initialRightStreamReader
              }
            ],
            trail: []
          }
        ];
        _loop_1 = function() {
          var entry, streamReadersWithGetters, infiniteLoopTracker, trail, nextValues, _loop_2, i, state_2, _b, leftNextValue, rightNextValue, leftValue, rightValue, leftPassedStartAnchor, rightPassedStartAnchor, somethingPassedStartAnchor, leftLookahead, rightLookahead, leftQuantifiersInInfiniteProportion, rightQuantifiersInInfiniteProportion, leftAndRightIdentical, intersection, leftAtomicGroups, rightAtomicGroups, newEntry, shouldSendTrail;
          return __generator(this, function(_c) {
            switch (_c.label) {
              case 0:
                timedOut = Date.now() > latestEndTime;
                stackOverflow = stack.length > stackOverflowLimit;
                if (timedOut || stackOverflow) {
                  return [2, "break"];
                }
                entry = stack.pop();
                if (!entry)
                  return [2, "break"];
                streamReadersWithGetters = entry.streamReadersWithGetters;
                infiniteLoopTracker = entry.infiniteLoopTracker, trail = entry.trail;
                nextValues = [];
                _loop_2 = function(i2) {
                  var result = streamReadersWithGetters[i2].get();
                  if (!result.done && result.value.type === characterReaderLevel3TypeSplit) {
                    var value_1 = result.value;
                    stack.push({
                      infiniteLoopTracker,
                      streamReadersWithGetters: streamReadersWithGetters.map(function(_a2, j) {
                        var reader = _a2.reader, get = _a2.get;
                        return {
                          get: j === i2 ? once(function() {
                            return reader.next();
                          }) : get,
                          reader
                        };
                      }),
                      trail
                    });
                    var newStreamReadersWithGetters = streamReadersWithGetters.map(function(_a2, j) {
                      var reader = _a2.reader, get = _a2.get;
                      var newReader = j === i2 ? buildForkableReader(value_1.reader()) : fork(reader);
                      return {
                        get: j < i2 ? get : once(function() {
                          return newReader.next();
                        }),
                        reader: newReader
                      };
                    });
                    stack.push({
                      infiniteLoopTracker: infiniteLoopTracker.clone(),
                      streamReadersWithGetters: newStreamReadersWithGetters,
                      trail
                    });
                    return "continue-outer";
                  } else {
                    nextValues.push(result);
                  }
                };
                for (i = 0; i < streamReadersWithGetters.length; i++) {
                  state_2 = _loop_2(i);
                  switch (state_2) {
                    case "continue-outer":
                      return [2, state_2];
                  }
                }
                _b = __read(nextValues, 2), leftNextValue = _b[0], rightNextValue = _b[1];
                if (++stepCount > input.maxSteps || leftNextValue.done || rightNextValue.done) {
                  return [2, "continue"];
                }
                if (leftNextValue.value.type === characterReaderLevel3TypeSplit || rightNextValue.value.type === characterReaderLevel3TypeSplit) {
                  throw new Error("Internal error: impossible leftValue/rightValue type");
                }
                leftValue = leftNextValue.value;
                rightValue = rightNextValue.value;
                leftPassedStartAnchor = leftValue.preceedingZeroWidthEntries.some(function(_a2) {
                  var type = _a2.type;
                  return type === "start";
                });
                rightPassedStartAnchor = rightValue.preceedingZeroWidthEntries.some(function(_a2) {
                  var type = _a2.type;
                  return type === "start";
                });
                somethingPassedStartAnchor = leftPassedStartAnchor || rightPassedStartAnchor;
                if (trail.length > 0 && somethingPassedStartAnchor || leftPassedStartAnchor !== rightPassedStartAnchor) {
                  return [2, "continue"];
                }
                leftLookahead = last(leftValue.lookaheadStack);
                rightLookahead = last(rightValue.lookaheadStack);
                if (leftLookahead !== rightLookahead) {
                  return [2, "continue"];
                }
                leftQuantifiersInInfiniteProportion = buildQuantifiersInInfinitePortion(leftValue.quantifierStack);
                rightQuantifiersInInfiniteProportion = buildQuantifiersInInfinitePortion(rightValue.quantifierStack);
                if (setsOverlap(leftQuantifiersInInfiniteProportion, rightQuantifiersInInfiniteProportion)) {
                  leftAndRightIdentical = trail.every(function(_a2) {
                    var left = _a2.left, right = _a2.right;
                    return sidesEqualChecker.areSidesEqual(left, right);
                  });
                  if (leftAndRightIdentical) {
                    return [2, "continue"];
                  }
                }
                if (leftQuantifiersInInfiniteProportion.size && rightQuantifiersInInfiniteProportion.size) {
                  infiniteLoopTracker.append({
                    node: leftValue.node,
                    quantifierTrail: buildQuantifierTrail(leftValue.quantifierStack, true)
                  }, {
                    node: rightValue.node,
                    quantifierTrail: buildQuantifierTrail(rightValue.quantifierStack, true)
                  });
                } else {
                  infiniteLoopTracker = new InfiniteLoopTracker(isNodeWithQuantifierTrailEqual);
                }
                if (!infiniteLoopTracker.isLooping())
                  return [3, 3];
                if (!(leftValue.node === rightValue.node))
                  return [3, 2];
                return [4, { type: checkerReaderTypeInfiniteLoop }];
              case 1:
                _c.sent();
                _c.label = 2;
              case 2:
                return [2, "continue"];
              case 3:
                intersection = intersectCharacterGroups([leftValue, rightValue].map(function(_a2) {
                  var characterGroups = _a2.characterGroups;
                  return characterGroups;
                }));
                if (isEmptyCharacterGroups(intersection)) {
                  return [2, "continue"];
                }
                leftAtomicGroups = new Set(__spreadArray([], __read(leftValue.groups.keys()), false).filter(function(group) {
                  return input.atomicGroupOffsets.has(group.range[0]);
                }));
                rightAtomicGroups = new Set(__spreadArray([], __read(rightValue.groups.keys()), false).filter(function(group) {
                  return input.atomicGroupOffsets.has(group.range[0]);
                }));
                if (!areSetsEqual(leftAtomicGroups, rightAtomicGroups)) {
                  return [2, "continue"];
                }
                newEntry = {
                  intersection,
                  left: {
                    backreferenceStack: leftValue.backreferenceStack,
                    node: leftValue.node,
                    quantifierStack: leftValue.quantifierStack
                  },
                  right: {
                    backreferenceStack: rightValue.backreferenceStack,
                    node: rightValue.node,
                    quantifierStack: rightValue.quantifierStack
                  }
                };
                trail = __spreadArray(__spreadArray([], __read(trail), false), [newEntry], false);
                if (!((!leftValue.unbounded || !rightValue.unbounded) && !sidesEqualChecker.areSidesEqual(newEntry.left, newEntry.right)))
                  return [3, 5];
                shouldSendTrail = function() {
                  if (!trails.has(trail)) {
                    var alreadyExists = __spreadArray([], __read(trails), false).some(function(existingTrail) {
                      if (existingTrail.length !== trail.length)
                        return false;
                      return existingTrail.every(function(existingEntry, i2) {
                        return sidesEqualChecker.areSidesEqual(existingEntry.left, trail[i2].right) && sidesEqualChecker.areSidesEqual(existingEntry.right, trail[i2].left);
                      }) || existingTrail.every(function(existingEntry, i2) {
                        return sidesEqualChecker.areSidesEqual(existingEntry.left, trail[i2].left) && sidesEqualChecker.areSidesEqual(existingEntry.right, trail[i2].right);
                      });
                    });
                    if (!alreadyExists) {
                      return true;
                    }
                  }
                  return false;
                };
                if (!shouldSendTrail())
                  return [3, 5];
                trails.add(trail);
                return [4, { trail, type: checkerReaderTypeTrail }];
              case 4:
                _c.sent();
                _c.label = 5;
              case 5:
                stack.push({
                  infiniteLoopTracker,
                  streamReadersWithGetters: streamReadersWithGetters.map(function(_a2) {
                    var reader = _a2.reader;
                    return {
                      get: once(function() {
                        return reader.next();
                      }),
                      reader
                    };
                  }),
                  trail
                });
                return [2];
            }
          });
        };
        _a.label = 1;
      case 1:
        return [5, _loop_1()];
      case 2:
        state_1 = _a.sent();
        if (state_1 === "break")
          return [3, 4];
        switch (state_1) {
          case "continue-outer":
            return [3, 3];
        }
        _a.label = 3;
      case 3:
        return [3, 1];
      case 4:
        return [2, {
          error: stepCount > input.maxSteps ? "hitMaxSteps" : timedOut ? "timedOut" : stackOverflow ? "stackOverflow" : null
        }];
    }
  });
}
var lookaheadBehaviours$1 = [
  "lookahead",
  "lookbehind",
  "negativeLookahead",
  "negativeLookbehind"
];
function buildNodeExtra(regexp) {
  var capturingGroupToIndex = /* @__PURE__ */ new Map();
  var indexToCapturingGroup = /* @__PURE__ */ new Map();
  var nodeToLookaheadStack = /* @__PURE__ */ new Map();
  var visit = function(node, lookaheadStack) {
    switch (node.type) {
      case "anchor":
      case "characterClass":
      case "characterClassEscape":
      case "characterClassRange":
      case "unicodePropertyEscape":
      case "value":
      case "dot":
        return;
      case "reference": {
        nodeToLookaheadStack.set(node, lookaheadStack);
        break;
      }
      case "alternative":
      case "disjunction": {
        node.body.forEach(function(expression) {
          return visit(expression, lookaheadStack);
        });
        return;
      }
      case "group": {
        if (node.behavior === "normal") {
          var index = capturingGroupToIndex.size + 1;
          capturingGroupToIndex.set(node, index);
          indexToCapturingGroup.set(index, node);
          nodeToLookaheadStack.set(node, lookaheadStack);
        }
        var newLookaheadStack_1 = __spreadArray([], __read(lookaheadStack), false);
        if (node.behavior !== "normal" && lookaheadBehaviours$1.indexOf(node.behavior) >= 0) {
          newLookaheadStack_1.push(node);
        }
        node.body.forEach(function(expression) {
          return visit(expression, newLookaheadStack_1);
        });
        return;
      }
      case "quantifier": {
        node.body.forEach(function(expression) {
          return visit(expression, lookaheadStack);
        });
        return;
      }
    }
  };
  visit(regexp, []);
  return {
    capturingGroupToIndex,
    indexToCapturingGroup,
    nodeToLookaheadStack
  };
}
function collectResults(_a) {
  var atomicGroupOffsets = _a.atomicGroupOffsets, node = _a.node, maxBacktracks = _a.maxBacktracks, maxSteps = _a.maxSteps, timeout = _a.timeout;
  var nodeExtra = buildNodeExtra(node);
  var leftStreamReader = buildCharacterReaderLevel3(node, nodeExtra);
  var rightStreamReader = buildCharacterReaderLevel3(node, nodeExtra);
  var reader = buildCheckerReader({
    atomicGroupOffsets,
    leftStreamReader,
    maxSteps,
    rightStreamReader,
    timeout
  });
  var trails = [];
  var next;
  var infiniteBacktracks = false;
  var _loop_1 = function() {
    switch (next.value.type) {
      case checkerReaderTypeInfiniteLoop: {
        infiniteBacktracks = true;
        if (trails.length > 0) {
          return "break-outer";
        }
        break;
      }
      case checkerReaderTypeTrail: {
        var trail_1 = next.value.trail;
        trails = trails.filter(function(existingTrail) {
          var samePrefix = trail_1.length >= existingTrail.length && areArraysEqual(trail_1.slice(0, existingTrail.length), existingTrail);
          return !samePrefix;
        });
        trails = __spreadArray(__spreadArray([], __read(trails), false), [trail_1], false);
        if (infiniteBacktracks || trails.length > maxBacktracks) {
          return "break-outer";
        }
        break;
      }
    }
  };
  outer:
    while (!(next = reader.next()).done) {
      var state_1 = _loop_1();
      switch (state_1) {
        case "break-outer":
          break outer;
      }
    }
  var worstCaseBacktrackCount = infiniteBacktracks ? Infinity : trails.length;
  var error = null;
  if (next.done) {
    if (next.value.error) {
      worstCaseBacktrackCount = Infinity;
      error = next.value.error;
    } else if (!trails.length) {
      worstCaseBacktrackCount = 0;
    }
  } else {
    worstCaseBacktrackCount = Infinity;
    error = "hitMaxBacktracks";
  }
  return {
    error,
    trails,
    worstCaseBacktrackCount
  };
}
var lookaheadBehaviours = [
  "lookahead",
  "lookbehind",
  "negativeLookahead",
  "negativeLookbehind"
];
function replace(input, replacement, start, end) {
  return "".concat(input.slice(0, start)).concat(replacement).concat(input.slice(end));
}
function quantifierIterationsToString(quantifier) {
  if (quantifier.symbol) {
    return "".concat(quantifier.symbol).concat(quantifier.greedy ? "" : "?");
  }
  if (quantifier.min === quantifier.max) {
    return "{".concat(quantifier.min, "}");
  }
  return "{".concat(quantifier.min, ",").concat(quantifier.max || "", "}").concat(quantifier.greedy ? "" : "?");
}
function getRawWithoutCapturingGroupsOrLookaheads(rootNode) {
  var referencesWithOffset = /* @__PURE__ */ new Map();
  var walk = function(node, offset) {
    var walkAll = function(nodes, startOffset) {
      var result2 = "";
      nodes.forEach(function(a) {
        result2 += walk(a, startOffset + result2.length);
      });
      return result2;
    };
    switch (node.type) {
      case "anchor":
      case "characterClass":
      case "characterClassEscape":
      case "unicodePropertyEscape":
      case "value":
      case "dot":
        return node.raw;
      case "reference": {
        referencesWithOffset.set(node, offset);
        return node.raw;
      }
      case "group": {
        switch (node.behavior) {
          case "normal":
            return "(?:".concat(walkAll(node.body, offset + 3), ")");
          case "ignore":
            return "(?:".concat(walkAll(node.body, offset + 3), ")");
          case "lookahead":
          case "lookbehind":
          case "negativeLookahead":
          case "negativeLookbehind":
            return "";
        }
      }
      case "disjunction": {
        var res_1 = "";
        node.body.forEach(function(a, i) {
          if (i > 0)
            res_1 += "|";
          res_1 += walk(a, offset + res_1.length);
        });
        return res_1;
      }
      case "alternative":
        return walkAll(node.body, offset);
      case "quantifier": {
        return "".concat(walk(node.body[0], offset)).concat(quantifierIterationsToString(node));
      }
    }
  };
  var result = walk(rootNode, 0);
  return {
    referencesWithOffset,
    result
  };
}
function downgradePattern(_a) {
  var pattern = _a.pattern, unicode = _a.unicode;
  var run = function(lastResult2) {
    var ast = parse(lastResult2.pattern, unicode);
    var actions = [];
    var groups = /* @__PURE__ */ new Map();
    var infiniteGroups = /* @__PURE__ */ new Set();
    var nextGroupIndex = 1;
    var lookaheadOnlyContainsGroup = function(lookahead, group) {
      if (lookahead.body.length !== 1)
        return false;
      var node = lookahead.body[0];
      return node === group;
    };
    var walkAll = function(nodes, nodeStack, serial) {
      var justHadLookahead = null;
      nodes.forEach(function(expression) {
        if (serial) {
          walk(expression, nodeStack, justHadLookahead);
          justHadLookahead = expression.type === "group" && expression.behavior === "lookahead" ? expression : null;
        } else {
          walk(expression, nodeStack, null);
        }
      });
    };
    var walk = function(node, nodeStack, immediatelyPreceedingLookahead) {
      switch (node.type) {
        case "anchor":
        case "characterClass":
        case "characterClassEscape":
        case "unicodePropertyEscape":
        case "value":
        case "dot":
          return;
        case "group": {
          var groupIndex = null;
          if (node.behavior === "normal") {
            groupIndex = nextGroupIndex;
            nextGroupIndex++;
          }
          walkAll(node.body, __spreadArray(__spreadArray([], __read(nodeStack), false), [node], false), true);
          if (groupIndex !== null && node.behavior === "normal") {
            groups.set(groupIndex, { group: node, stack: __spreadArray([], __read(nodeStack), false) });
          }
          return;
        }
        case "disjunction": {
          walkAll(node.body, __spreadArray(__spreadArray([], __read(nodeStack), false), [node], false), false);
          return;
        }
        case "alternative": {
          walkAll(node.body, __spreadArray(__spreadArray([], __read(nodeStack), false), [node], false), true);
          return;
        }
        case "quantifier": {
          if (node.max === void 0) {
            __spreadArray([], __read(nodeStack), false).reverse().some(function(stackNode) {
              if (stackNode.type === "group") {
                if (lookaheadBehaviours.indexOf(stackNode.behavior) >= 0) {
                  return true;
                }
                infiniteGroups.add(stackNode);
              }
              return false;
            });
          }
          walkAll(node.body, __spreadArray(__spreadArray([], __read(nodeStack), false), [node], false), false);
          return;
        }
        case "reference": {
          var entry = groups.get(node.matchIndex);
          if (entry) {
            var group = entry.group, stack = entry.stack;
            var localStack = dropCommon(stack, nodeStack).a;
            var lookaheadStack = localStack.flatMap(function(stackNode) {
              return stackNode.type === "group" && lookaheadBehaviours.indexOf(stackNode.behavior) >= 0 ? [stackNode] : [];
            });
            var groupMayNotBeReached = localStack.some(function(stackNode) {
              return stackNode.type === "disjunction" || stackNode.type === "quantifier" && stackNode.min === 0;
            });
            var groupInLookahead = lookaheadStack.length > 0;
            var groupCouldBeSet = lookaheadStack.every(function(value) {
              return value.behavior !== "negativeLookahead" && value.behavior !== "negativeLookbehind";
            });
            if (groupCouldBeSet && (groupInLookahead || infiniteGroups.has(group))) {
              var atomic = !!immediatelyPreceedingLookahead && lookaheadOnlyContainsGroup(immediatelyPreceedingLookahead, group);
              var optional = groupInLookahead && groupMayNotBeReached;
              actions.push({
                atomicOrOptional: atomic ? "atomic" : optional ? "optional" : null,
                group,
                optional: groupInLookahead && groupMayNotBeReached,
                reference: node
              });
            }
          }
          return;
        }
      }
    };
    walk(ast, [], null);
    var newPattern = lastResult2.pattern;
    var atomicGroupOffsets = new Set(lastResult2.atomicGroupOffsets);
    var needToRerun2 = false;
    __spreadArray([], __read(actions), false).sort(function(a, b) {
      return b.reference.range[0] - a.reference.range[0];
    }).forEach(function(action) {
      var atomicOrOptional = action.atomicOrOptional, group = action.group, _a2 = __read(action.reference.range, 2), referenceStart = _a2[0], referenceEnd = _a2[1];
      var _b2 = getRawWithoutCapturingGroupsOrLookaheads(group), result2 = _b2.result, referencesWithOffset = _b2.referencesWithOffset;
      if (referencesWithOffset.size > 0) {
        needToRerun2 = true;
      }
      var replacement = atomicOrOptional === "optional" ? "(?:".concat(result2, "?)") : result2;
      newPattern = replace(newPattern, replacement, referenceStart, referenceEnd);
      var shiftAmount = replacement.length - (referenceEnd - referenceStart);
      atomicGroupOffsets = new Set(__spreadArray([], __read(atomicGroupOffsets), false).map(function(offset) {
        return offset > referenceStart ? offset + shiftAmount : offset;
      }));
      if (atomicOrOptional === "atomic") {
        atomicGroupOffsets.add(referenceStart);
      }
      actions.forEach(function(_a3) {
        var innerAtomicOrOptional = _a3.atomicOrOptional, innerReference = _a3.reference;
        if (innerAtomicOrOptional === "atomic") {
          var offset = referencesWithOffset.get(innerReference);
          if (offset !== void 0) {
            atomicGroupOffsets.add(referenceStart + offset);
          }
        }
      });
    });
    return { needToRerun: needToRerun2, result: { atomicGroupOffsets, pattern: newPattern } };
  };
  var lastResult = {
    atomicGroupOffsets: /* @__PURE__ */ new Set(),
    pattern
  };
  for (; ; ) {
    var _b = run(lastResult), result = _b.result, needToRerun = _b.needToRerun;
    lastResult = result;
    if (!needToRerun) {
      return result;
    }
  }
}
var defaultTimeout = Infinity;
var defaultMaxBacktracks = 200;
var defaultMaxSteps = 2e4;
var defaultUnicode = false;
var supportedJSFlags = /* @__PURE__ */ new Set(["u", "g", "s", "y"]);
function toRedosDetectorNode(node) {
  return {
    end: { offset: node.range[1] },
    source: node.raw,
    start: { offset: node.range[0] }
  };
}
function toRedosDetectorBackReferenceStack(backreferenceStack) {
  return backreferenceStack.map(function(reference) {
    return {
      index: reference.matchIndex,
      node: toRedosDetectorNode(reference)
    };
  });
}
function toRedosDetectorQuantifierIterations(stack) {
  return stack.map(function(_a) {
    var quantifier = _a.quantifier, iteration = _a.iteration;
    return {
      iteration,
      node: toRedosDetectorNode(quantifier)
    };
  });
}
function isSafePattern(inputPattern, _a) {
  var _b = _a === void 0 ? {} : _a, atomicGroupOffsetsInput = _b.atomicGroupOffsets, _c = _b.maxBacktracks, maxBacktracks = _c === void 0 ? defaultMaxBacktracks : _c, _d = _b.maxSteps, maxSteps = _d === void 0 ? defaultMaxSteps : _d, _e = _b.timeout, timeout = _e === void 0 ? defaultTimeout : _e, _f = _b.unicode, unicode = _f === void 0 ? defaultUnicode : _f, _g = _b.downgradePattern, downgradePattern$1 = _g === void 0 ? true : _g;
  if (downgradePattern$1 && atomicGroupOffsetsInput) {
    throw new Error("`atomicGroupOffsets` cannot be used with `downgradePattern: true`.");
  }
  if (timeout <= 0) {
    throw new Error("`timeout` must be a positive number.");
  }
  if (maxBacktracks < 0) {
    throw new Error("`maxBacktracks` must be a positive number or 0.");
  }
  if (maxSteps <= 0) {
    throw new Error("`maxSteps` must be a positive number.");
  }
  var _h = downgradePattern$1 ? downgradePattern({ pattern: inputPattern, unicode }) : {
    atomicGroupOffsets: new Set(atomicGroupOffsetsInput || []),
    pattern: inputPattern
  }, pattern = _h.pattern, atomicGroupOffsets = _h.atomicGroupOffsets;
  var patternDowngraded = downgradePattern$1 && inputPattern !== pattern;
  var ast = parse(pattern, unicode);
  var result = collectResults({
    atomicGroupOffsets,
    maxBacktracks,
    maxSteps,
    node: ast,
    timeout
  });
  return __assign(__assign({}, result.error ? {
    error: result.error,
    safe: false
  } : {
    error: null,
    safe: true
  }), { pattern, patternDowngraded, trails: result.trails.map(function(trail) {
    var safeRegexTrail = {
      trail: trail.map(function(_a2) {
        var left = _a2.left, right = _a2.right;
        var entry = {
          a: {
            backreferenceStack: toRedosDetectorBackReferenceStack(right.backreferenceStack),
            node: toRedosDetectorNode(right.node),
            quantifierIterations: toRedosDetectorQuantifierIterations(right.quantifierStack)
          },
          b: {
            backreferenceStack: toRedosDetectorBackReferenceStack(left.backreferenceStack),
            node: toRedosDetectorNode(left.node),
            quantifierIterations: toRedosDetectorQuantifierIterations(left.quantifierStack)
          }
        };
        return entry;
      })
    };
    return safeRegexTrail;
  }), worstCaseBacktrackCount: result.worstCaseBacktrackCount === Infinity ? { infinite: true } : { infinite: false, value: result.worstCaseBacktrackCount } });
}
function isSafe(regexp, config) {
  var e_1, _a;
  var unicode = false;
  try {
    for (var _b = __values(regexp.flags.split("")), _c = _b.next(); !_c.done; _c = _b.next()) {
      var flag = _c.value;
      if (!supportedJSFlags.has(flag)) {
        throw new Error("Unsupported flag: ".concat(flag));
      }
      if (flag === "u") {
        unicode = true;
      }
    }
  } catch (e_1_1) {
    e_1 = { error: e_1_1 };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return))
        _a.call(_b);
    } finally {
      if (e_1)
        throw e_1.error;
    }
  }
  return isSafePattern(regexp.source, __assign(__assign({}, config), { unicode }));
}

// src/shared/checkForRedosError.ts
var checkForRedosError = (regex) => {
  return !isSafe(new RegExp(`${regex}`)).safe ? [
    {
      message: `${regex} This pattern is not safe from ReDoS attacks.`
    }
  ] : [];
};
var checkForRedosError_default = checkForRedosError;

// src/functions/validateSchemaPropertyPatternRegex.ts
var isNil = require_isNil2();
var validateSchemaPropertyPatternRegex = (param) => {
  if (!isNil(param.pattern)) {
    return checkForRedosError_default(param.pattern);
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
    "unsafe-pattern-regex-components-schema-property": {
      description: "Check for possible ReDos regex patterns in components schemas properties",
      given: "$.components.schemas..properties[*]",
      message: "{{error}}",
      severity: DiagnosticSeverity.Error,
      then: {
        function: validateSchemaPropertyPatternRegex_default
      }
    },
    "unsafe-pattern-regex-components-schema-array-property": {
      description: "Check for possible ReDos regex patterns in components schemas with array items that are not objects",
      given: '$.components.schemas..properties[?(@ && @.type == "array" && @.items && @.items.properties == null)].items',
      message: "{{error}}",
      severity: DiagnosticSeverity.Error,
      then: {
        function: validateSchemaPropertyPatternRegex_default
      }
    },
    "unsafe-pattern-regex-components-schema-array-object-property": {
      description: "Check for possible ReDos regex patterns in components schemas with array items that are objects",
      given: '$.components.schemas..properties[?(@ && @.type=="array")].items.properties[*]',
      message: "{{error}}",
      severity: DiagnosticSeverity.Error,
      then: {
        function: validateSchemaPropertyPatternRegex_default
      }
    },
    "unsafe-pattern-regex-components-headers-property": {
      description: "Check for possible ReDos regex patterns in components headers schemas",
      given: "$.components.headers..schema",
      message: "{{error}}",
      severity: DiagnosticSeverity.Error,
      then: {
        function: validateSchemaPropertyPatternRegex_default
      }
    },
    "unsafe-pattern-regex-path-parameter-property": {
      description: "Check regex patterns in path parameters",
      given: "$.paths..parameters[*].schema",
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