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
import {
  createRulesetFunction
} from "@stoplight/spectral-core";
var validateSchemaPropertyPatternRegex_default = createRulesetFunction(
  { input: null, options: {} },
  function validateSchemaPropertyPatternRegex(input) {
    if (input.pattern !== void 0 || null) {
      return checkForRedosError_default(input.pattern);
    } else {
      return [];
    }
  }
);

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
    }
  }
};
export {
  ruleset_default as default
};
module.exports = module.exports.default;
//# sourceMappingURL=ruleset.mjs.map