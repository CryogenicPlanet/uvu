var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/.pnpm/dequal@1.0.1/node_modules/dequal/dist/dequal.js
var require_dequal = __commonJS({
  "node_modules/.pnpm/dequal@1.0.1/node_modules/dequal/dist/dequal.js"(exports2, module2) {
    var has = Object.prototype.hasOwnProperty;
    module2.exports = function dequal(foo, bar) {
      var ctor, len;
      if (foo === bar)
        return true;
      if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date)
          return foo.getTime() === bar.getTime();
        if (ctor === RegExp)
          return foo.toString() === bar.toString();
        if (ctor === Array) {
          if ((len = foo.length) === bar.length) {
            while (len-- && dequal(foo[len], bar[len]))
              ;
          }
          return len === -1;
        }
        if (!ctor || typeof foo === "object") {
          len = 0;
          for (ctor in foo) {
            if (has.call(foo, ctor) && ++len && !has.call(bar, ctor))
              return false;
            if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor]))
              return false;
          }
          return Object.keys(bar).length === len;
        }
      }
      return foo !== foo && bar !== bar;
    };
  }
});

// node_modules/.pnpm/kleur@4.1.4/node_modules/kleur/index.js
var require_kleur = __commonJS({
  "node_modules/.pnpm/kleur@4.1.4/node_modules/kleur/index.js"(exports2, module2) {
    "use strict";
    var FORCE_COLOR;
    var NODE_DISABLE_COLORS;
    var NO_COLOR;
    var TERM;
    var isTTY = true;
    if (typeof process !== "undefined") {
      ({ FORCE_COLOR, NODE_DISABLE_COLORS, NO_COLOR, TERM } = process.env);
      isTTY = process.stdout && process.stdout.isTTY;
    }
    var $ = {
      enabled: !NODE_DISABLE_COLORS && NO_COLOR == null && TERM !== "dumb" && (FORCE_COLOR != null && FORCE_COLOR !== "0" || isTTY),
      reset: init(0, 0),
      bold: init(1, 22),
      dim: init(2, 22),
      italic: init(3, 23),
      underline: init(4, 24),
      inverse: init(7, 27),
      hidden: init(8, 28),
      strikethrough: init(9, 29),
      black: init(30, 39),
      red: init(31, 39),
      green: init(32, 39),
      yellow: init(33, 39),
      blue: init(34, 39),
      magenta: init(35, 39),
      cyan: init(36, 39),
      white: init(37, 39),
      gray: init(90, 39),
      grey: init(90, 39),
      bgBlack: init(40, 49),
      bgRed: init(41, 49),
      bgGreen: init(42, 49),
      bgYellow: init(43, 49),
      bgBlue: init(44, 49),
      bgMagenta: init(45, 49),
      bgCyan: init(46, 49),
      bgWhite: init(47, 49)
    };
    function run(arr, str) {
      let i = 0, tmp, beg = "", end = "";
      for (; i < arr.length; i++) {
        tmp = arr[i];
        beg += tmp.open;
        end += tmp.close;
        if (!!~str.indexOf(tmp.close)) {
          str = str.replace(tmp.rgx, tmp.close + tmp.open);
        }
      }
      return beg + str + end;
    }
    function chain(has, keys) {
      let ctx = { has, keys };
      ctx.reset = $.reset.bind(ctx);
      ctx.bold = $.bold.bind(ctx);
      ctx.dim = $.dim.bind(ctx);
      ctx.italic = $.italic.bind(ctx);
      ctx.underline = $.underline.bind(ctx);
      ctx.inverse = $.inverse.bind(ctx);
      ctx.hidden = $.hidden.bind(ctx);
      ctx.strikethrough = $.strikethrough.bind(ctx);
      ctx.black = $.black.bind(ctx);
      ctx.red = $.red.bind(ctx);
      ctx.green = $.green.bind(ctx);
      ctx.yellow = $.yellow.bind(ctx);
      ctx.blue = $.blue.bind(ctx);
      ctx.magenta = $.magenta.bind(ctx);
      ctx.cyan = $.cyan.bind(ctx);
      ctx.white = $.white.bind(ctx);
      ctx.gray = $.gray.bind(ctx);
      ctx.grey = $.grey.bind(ctx);
      ctx.bgBlack = $.bgBlack.bind(ctx);
      ctx.bgRed = $.bgRed.bind(ctx);
      ctx.bgGreen = $.bgGreen.bind(ctx);
      ctx.bgYellow = $.bgYellow.bind(ctx);
      ctx.bgBlue = $.bgBlue.bind(ctx);
      ctx.bgMagenta = $.bgMagenta.bind(ctx);
      ctx.bgCyan = $.bgCyan.bind(ctx);
      ctx.bgWhite = $.bgWhite.bind(ctx);
      return ctx;
    }
    function init(open, close) {
      let blk = {
        open: `[${open}m`,
        close: `[${close}m`,
        rgx: new RegExp(`\\x1b\\[${close}m`, "g")
      };
      return function(txt) {
        if (this !== void 0 && this.has !== void 0) {
          !!~this.has.indexOf(open) || (this.has.push(open), this.keys.push(blk));
          return txt === void 0 ? this : $.enabled ? run(this.keys, txt + "") : txt + "";
        }
        return txt === void 0 ? chain([open], [blk]) : $.enabled ? run([blk], txt + "") : txt + "";
      };
    }
    module2.exports = $;
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/base.js
var require_base = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/base.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = Diff;
    function Diff() {
    }
    Diff.prototype = {
      diff: function diff(oldString, newString) {
        var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
        var callback = options.callback;
        if (typeof options === "function") {
          callback = options;
          options = {};
        }
        this.options = options;
        var self = this;
        function done(value) {
          if (callback) {
            setTimeout(function() {
              callback(void 0, value);
            }, 0);
            return true;
          } else {
            return value;
          }
        }
        oldString = this.castInput(oldString);
        newString = this.castInput(newString);
        oldString = this.removeEmpty(this.tokenize(oldString));
        newString = this.removeEmpty(this.tokenize(newString));
        var newLen = newString.length, oldLen = oldString.length;
        var editLength = 1;
        var maxEditLength = newLen + oldLen;
        var bestPath = [{
          newPos: -1,
          components: []
        }];
        var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);
        if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
          return done([{
            value: this.join(newString),
            count: newString.length
          }]);
        }
        function execEditLength() {
          for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
            var basePath = void 0;
            var addPath = bestPath[diagonalPath - 1], removePath = bestPath[diagonalPath + 1], _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;
            if (addPath) {
              bestPath[diagonalPath - 1] = void 0;
            }
            var canAdd = addPath && addPath.newPos + 1 < newLen, canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;
            if (!canAdd && !canRemove) {
              bestPath[diagonalPath] = void 0;
              continue;
            }
            if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
              basePath = clonePath(removePath);
              self.pushComponent(basePath.components, void 0, true);
            } else {
              basePath = addPath;
              basePath.newPos++;
              self.pushComponent(basePath.components, true, void 0);
            }
            _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath);
            if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
              return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
            } else {
              bestPath[diagonalPath] = basePath;
            }
          }
          editLength++;
        }
        if (callback) {
          (function exec() {
            setTimeout(function() {
              if (editLength > maxEditLength) {
                return callback();
              }
              if (!execEditLength()) {
                exec();
              }
            }, 0);
          })();
        } else {
          while (editLength <= maxEditLength) {
            var ret = execEditLength();
            if (ret) {
              return ret;
            }
          }
        }
      },
      pushComponent: function pushComponent(components, added, removed) {
        var last = components[components.length - 1];
        if (last && last.added === added && last.removed === removed) {
          components[components.length - 1] = {
            count: last.count + 1,
            added,
            removed
          };
        } else {
          components.push({
            count: 1,
            added,
            removed
          });
        }
      },
      extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
        var newLen = newString.length, oldLen = oldString.length, newPos = basePath.newPos, oldPos = newPos - diagonalPath, commonCount = 0;
        while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
          newPos++;
          oldPos++;
          commonCount++;
        }
        if (commonCount) {
          basePath.components.push({
            count: commonCount
          });
        }
        basePath.newPos = newPos;
        return oldPos;
      },
      equals: function equals(left, right) {
        if (this.options.comparator) {
          return this.options.comparator(left, right);
        } else {
          return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
        }
      },
      removeEmpty: function removeEmpty(array) {
        var ret = [];
        for (var i = 0; i < array.length; i++) {
          if (array[i]) {
            ret.push(array[i]);
          }
        }
        return ret;
      },
      castInput: function castInput(value) {
        return value;
      },
      tokenize: function tokenize(value) {
        return value.split("");
      },
      join: function join(chars) {
        return chars.join("");
      }
    };
    function buildValues(diff, components, newString, oldString, useLongestToken) {
      var componentPos = 0, componentLen = components.length, newPos = 0, oldPos = 0;
      for (; componentPos < componentLen; componentPos++) {
        var component = components[componentPos];
        if (!component.removed) {
          if (!component.added && useLongestToken) {
            var value = newString.slice(newPos, newPos + component.count);
            value = value.map(function(value2, i) {
              var oldValue = oldString[oldPos + i];
              return oldValue.length > value2.length ? oldValue : value2;
            });
            component.value = diff.join(value);
          } else {
            component.value = diff.join(newString.slice(newPos, newPos + component.count));
          }
          newPos += component.count;
          if (!component.added) {
            oldPos += component.count;
          }
        } else {
          component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
          oldPos += component.count;
          if (componentPos && components[componentPos - 1].added) {
            var tmp = components[componentPos - 1];
            components[componentPos - 1] = components[componentPos];
            components[componentPos] = tmp;
          }
        }
      }
      var lastComponent = components[componentLen - 1];
      if (componentLen > 1 && typeof lastComponent.value === "string" && (lastComponent.added || lastComponent.removed) && diff.equals("", lastComponent.value)) {
        components[componentLen - 2].value += lastComponent.value;
        components.pop();
      }
      return components;
    }
    function clonePath(path) {
      return {
        newPos: path.newPos,
        components: path.components.slice(0)
      };
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/character.js
var require_character = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/character.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffChars = diffChars;
    exports2.characterDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var characterDiff = new _base.default();
    exports2.characterDiff = characterDiff;
    function diffChars(oldStr, newStr, options) {
      return characterDiff.diff(oldStr, newStr, options);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/util/params.js
var require_params = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/util/params.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.generateOptions = generateOptions;
    function generateOptions(options, defaults) {
      if (typeof options === "function") {
        defaults.callback = options;
      } else if (options) {
        for (var name in options) {
          if (options.hasOwnProperty(name)) {
            defaults[name] = options[name];
          }
        }
      }
      return defaults;
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/word.js
var require_word = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/word.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffWords = diffWords;
    exports2.diffWordsWithSpace = diffWordsWithSpace;
    exports2.wordDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    var _params = require_params();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
    var reWhitespace = /\S/;
    var wordDiff = new _base.default();
    exports2.wordDiff = wordDiff;
    wordDiff.equals = function(left, right) {
      if (this.options.ignoreCase) {
        left = left.toLowerCase();
        right = right.toLowerCase();
      }
      return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
    };
    wordDiff.tokenize = function(value) {
      var tokens = value.split(/(\s+|[()[\]{}'"]|\b)/);
      for (var i = 0; i < tokens.length - 1; i++) {
        if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
          tokens[i] += tokens[i + 2];
          tokens.splice(i + 1, 2);
          i--;
        }
      }
      return tokens;
    };
    function diffWords(oldStr, newStr, options) {
      options = (0, _params.generateOptions)(options, {
        ignoreWhitespace: true
      });
      return wordDiff.diff(oldStr, newStr, options);
    }
    function diffWordsWithSpace(oldStr, newStr, options) {
      return wordDiff.diff(oldStr, newStr, options);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/line.js
var require_line = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/line.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffLines = diffLines;
    exports2.diffTrimmedLines = diffTrimmedLines;
    exports2.lineDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    var _params = require_params();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var lineDiff = new _base.default();
    exports2.lineDiff = lineDiff;
    lineDiff.tokenize = function(value) {
      var retLines = [], linesAndNewlines = value.split(/(\n|\r\n)/);
      if (!linesAndNewlines[linesAndNewlines.length - 1]) {
        linesAndNewlines.pop();
      }
      for (var i = 0; i < linesAndNewlines.length; i++) {
        var line = linesAndNewlines[i];
        if (i % 2 && !this.options.newlineIsToken) {
          retLines[retLines.length - 1] += line;
        } else {
          if (this.options.ignoreWhitespace) {
            line = line.trim();
          }
          retLines.push(line);
        }
      }
      return retLines;
    };
    function diffLines(oldStr, newStr, callback) {
      return lineDiff.diff(oldStr, newStr, callback);
    }
    function diffTrimmedLines(oldStr, newStr, callback) {
      var options = (0, _params.generateOptions)(callback, {
        ignoreWhitespace: true
      });
      return lineDiff.diff(oldStr, newStr, options);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/sentence.js
var require_sentence = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/sentence.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffSentences = diffSentences;
    exports2.sentenceDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var sentenceDiff = new _base.default();
    exports2.sentenceDiff = sentenceDiff;
    sentenceDiff.tokenize = function(value) {
      return value.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    function diffSentences(oldStr, newStr, callback) {
      return sentenceDiff.diff(oldStr, newStr, callback);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/css.js
var require_css = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/css.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffCss = diffCss;
    exports2.cssDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var cssDiff = new _base.default();
    exports2.cssDiff = cssDiff;
    cssDiff.tokenize = function(value) {
      return value.split(/([{}:;,]|\s+)/);
    };
    function diffCss(oldStr, newStr, callback) {
      return cssDiff.diff(oldStr, newStr, callback);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/json.js
var require_json = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/json.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffJson = diffJson;
    exports2.canonicalize = canonicalize;
    exports2.jsonDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    var _line = require_line();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function _typeof(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof2(obj2) {
          return typeof obj2;
        };
      } else {
        _typeof = function _typeof2(obj2) {
          return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
        };
      }
      return _typeof(obj);
    }
    var objectPrototypeToString = Object.prototype.toString;
    var jsonDiff = new _base.default();
    exports2.jsonDiff = jsonDiff;
    jsonDiff.useLongestToken = true;
    jsonDiff.tokenize = _line.lineDiff.tokenize;
    jsonDiff.castInput = function(value) {
      var _this$options = this.options, undefinedReplacement = _this$options.undefinedReplacement, _this$options$stringi = _this$options.stringifyReplacer, stringifyReplacer = _this$options$stringi === void 0 ? function(k, v) {
        return typeof v === "undefined" ? undefinedReplacement : v;
      } : _this$options$stringi;
      return typeof value === "string" ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, "  ");
    };
    jsonDiff.equals = function(left, right) {
      return _base.default.prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, "$1"), right.replace(/,([\r\n])/g, "$1"));
    };
    function diffJson(oldObj, newObj, options) {
      return jsonDiff.diff(oldObj, newObj, options);
    }
    function canonicalize(obj, stack, replacementStack, replacer, key) {
      stack = stack || [];
      replacementStack = replacementStack || [];
      if (replacer) {
        obj = replacer(key, obj);
      }
      var i;
      for (i = 0; i < stack.length; i += 1) {
        if (stack[i] === obj) {
          return replacementStack[i];
        }
      }
      var canonicalizedObj;
      if (objectPrototypeToString.call(obj) === "[object Array]") {
        stack.push(obj);
        canonicalizedObj = new Array(obj.length);
        replacementStack.push(canonicalizedObj);
        for (i = 0; i < obj.length; i += 1) {
          canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
        }
        stack.pop();
        replacementStack.pop();
        return canonicalizedObj;
      }
      if (obj && obj.toJSON) {
        obj = obj.toJSON();
      }
      if (_typeof(obj) === "object" && obj !== null) {
        stack.push(obj);
        canonicalizedObj = {};
        replacementStack.push(canonicalizedObj);
        var sortedKeys = [], _key;
        for (_key in obj) {
          if (obj.hasOwnProperty(_key)) {
            sortedKeys.push(_key);
          }
        }
        sortedKeys.sort();
        for (i = 0; i < sortedKeys.length; i += 1) {
          _key = sortedKeys[i];
          canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
        }
        stack.pop();
        replacementStack.pop();
      } else {
        canonicalizedObj = obj;
      }
      return canonicalizedObj;
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/array.js
var require_array = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/diff/array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.diffArrays = diffArrays;
    exports2.arrayDiff = void 0;
    var _base = _interopRequireDefault(require_base());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    var arrayDiff = new _base.default();
    exports2.arrayDiff = arrayDiff;
    arrayDiff.tokenize = function(value) {
      return value.slice();
    };
    arrayDiff.join = arrayDiff.removeEmpty = function(value) {
      return value;
    };
    function diffArrays(oldArr, newArr, callback) {
      return arrayDiff.diff(oldArr, newArr, callback);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/parse.js
var require_parse = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.parsePatch = parsePatch;
    function parsePatch(uniDiff) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/), delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [], list = [], i = 0;
      function parseIndex() {
        var index = {};
        list.push(index);
        while (i < diffstr.length) {
          var line = diffstr[i];
          if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
            break;
          }
          var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);
          if (header) {
            index.index = header[1];
          }
          i++;
        }
        parseFileHeader(index);
        parseFileHeader(index);
        index.hunks = [];
        while (i < diffstr.length) {
          var _line = diffstr[i];
          if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
            break;
          } else if (/^@@/.test(_line)) {
            index.hunks.push(parseHunk());
          } else if (_line && options.strict) {
            throw new Error("Unknown line " + (i + 1) + " " + JSON.stringify(_line));
          } else {
            i++;
          }
        }
      }
      function parseFileHeader(index) {
        var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);
        if (fileHeader) {
          var keyPrefix = fileHeader[1] === "---" ? "old" : "new";
          var data = fileHeader[2].split("	", 2);
          var fileName = data[0].replace(/\\\\/g, "\\");
          if (/^".*"$/.test(fileName)) {
            fileName = fileName.substr(1, fileName.length - 2);
          }
          index[keyPrefix + "FileName"] = fileName;
          index[keyPrefix + "Header"] = (data[1] || "").trim();
          i++;
        }
      }
      function parseHunk() {
        var chunkHeaderIndex = i, chunkHeaderLine = diffstr[i++], chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
        var hunk = {
          oldStart: +chunkHeader[1],
          oldLines: +chunkHeader[2] || 1,
          newStart: +chunkHeader[3],
          newLines: +chunkHeader[4] || 1,
          lines: [],
          linedelimiters: []
        };
        var addCount = 0, removeCount = 0;
        for (; i < diffstr.length; i++) {
          if (diffstr[i].indexOf("--- ") === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf("+++ ") === 0 && diffstr[i + 2].indexOf("@@") === 0) {
            break;
          }
          var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? " " : diffstr[i][0];
          if (operation === "+" || operation === "-" || operation === " " || operation === "\\") {
            hunk.lines.push(diffstr[i]);
            hunk.linedelimiters.push(delimiters[i] || "\n");
            if (operation === "+") {
              addCount++;
            } else if (operation === "-") {
              removeCount++;
            } else if (operation === " ") {
              addCount++;
              removeCount++;
            }
          } else {
            break;
          }
        }
        if (!addCount && hunk.newLines === 1) {
          hunk.newLines = 0;
        }
        if (!removeCount && hunk.oldLines === 1) {
          hunk.oldLines = 0;
        }
        if (options.strict) {
          if (addCount !== hunk.newLines) {
            throw new Error("Added line count did not match for hunk at line " + (chunkHeaderIndex + 1));
          }
          if (removeCount !== hunk.oldLines) {
            throw new Error("Removed line count did not match for hunk at line " + (chunkHeaderIndex + 1));
          }
        }
        return hunk;
      }
      while (i < diffstr.length) {
        parseIndex();
      }
      return list;
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/util/distance-iterator.js
var require_distance_iterator = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/util/distance-iterator.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.default = _default;
    function _default(start, minLine, maxLine) {
      var wantForward = true, backwardExhausted = false, forwardExhausted = false, localOffset = 1;
      return function iterator() {
        if (wantForward && !forwardExhausted) {
          if (backwardExhausted) {
            localOffset++;
          } else {
            wantForward = false;
          }
          if (start + localOffset <= maxLine) {
            return localOffset;
          }
          forwardExhausted = true;
        }
        if (!backwardExhausted) {
          if (!forwardExhausted) {
            wantForward = true;
          }
          if (minLine <= start - localOffset) {
            return -localOffset++;
          }
          backwardExhausted = true;
          return iterator();
        }
      };
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/apply.js
var require_apply = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/apply.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.applyPatch = applyPatch;
    exports2.applyPatches = applyPatches;
    var _parse = require_parse();
    var _distanceIterator = _interopRequireDefault(require_distance_iterator());
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
    function applyPatch(source, uniDiff) {
      var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      if (typeof uniDiff === "string") {
        uniDiff = (0, _parse.parsePatch)(uniDiff);
      }
      if (Array.isArray(uniDiff)) {
        if (uniDiff.length > 1) {
          throw new Error("applyPatch only works with a single input.");
        }
        uniDiff = uniDiff[0];
      }
      var lines = source.split(/\r\n|[\n\v\f\r\x85]/), delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [], hunks = uniDiff.hunks, compareLine = options.compareLine || function(lineNumber, line2, operation2, patchContent) {
        return line2 === patchContent;
      }, errorCount = 0, fuzzFactor = options.fuzzFactor || 0, minLine = 0, offset = 0, removeEOFNL, addEOFNL;
      function hunkFits(hunk2, toPos2) {
        for (var j2 = 0; j2 < hunk2.lines.length; j2++) {
          var line2 = hunk2.lines[j2], operation2 = line2.length > 0 ? line2[0] : " ", content2 = line2.length > 0 ? line2.substr(1) : line2;
          if (operation2 === " " || operation2 === "-") {
            if (!compareLine(toPos2 + 1, lines[toPos2], operation2, content2)) {
              errorCount++;
              if (errorCount > fuzzFactor) {
                return false;
              }
            }
            toPos2++;
          }
        }
        return true;
      }
      for (var i = 0; i < hunks.length; i++) {
        var hunk = hunks[i], maxLine = lines.length - hunk.oldLines, localOffset = 0, toPos = offset + hunk.oldStart - 1;
        var iterator = (0, _distanceIterator.default)(toPos, minLine, maxLine);
        for (; localOffset !== void 0; localOffset = iterator()) {
          if (hunkFits(hunk, toPos + localOffset)) {
            hunk.offset = offset += localOffset;
            break;
          }
        }
        if (localOffset === void 0) {
          return false;
        }
        minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
      }
      var diffOffset = 0;
      for (var _i = 0; _i < hunks.length; _i++) {
        var _hunk = hunks[_i], _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;
        diffOffset += _hunk.newLines - _hunk.oldLines;
        if (_toPos < 0) {
          _toPos = 0;
        }
        for (var j = 0; j < _hunk.lines.length; j++) {
          var line = _hunk.lines[j], operation = line.length > 0 ? line[0] : " ", content = line.length > 0 ? line.substr(1) : line, delimiter = _hunk.linedelimiters[j];
          if (operation === " ") {
            _toPos++;
          } else if (operation === "-") {
            lines.splice(_toPos, 1);
            delimiters.splice(_toPos, 1);
          } else if (operation === "+") {
            lines.splice(_toPos, 0, content);
            delimiters.splice(_toPos, 0, delimiter);
            _toPos++;
          } else if (operation === "\\") {
            var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;
            if (previousOperation === "+") {
              removeEOFNL = true;
            } else if (previousOperation === "-") {
              addEOFNL = true;
            }
          }
        }
      }
      if (removeEOFNL) {
        while (!lines[lines.length - 1]) {
          lines.pop();
          delimiters.pop();
        }
      } else if (addEOFNL) {
        lines.push("");
        delimiters.push("\n");
      }
      for (var _k = 0; _k < lines.length - 1; _k++) {
        lines[_k] = lines[_k] + delimiters[_k];
      }
      return lines.join("");
    }
    function applyPatches(uniDiff, options) {
      if (typeof uniDiff === "string") {
        uniDiff = (0, _parse.parsePatch)(uniDiff);
      }
      var currentIndex = 0;
      function processIndex() {
        var index = uniDiff[currentIndex++];
        if (!index) {
          return options.complete();
        }
        options.loadFile(index, function(err, data) {
          if (err) {
            return options.complete(err);
          }
          var updatedContent = applyPatch(data, index, options);
          options.patched(index, updatedContent, function(err2) {
            if (err2) {
              return options.complete(err2);
            }
            processIndex();
          });
        });
      }
      processIndex();
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/create.js
var require_create = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/create.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.structuredPatch = structuredPatch;
    exports2.createTwoFilesPatch = createTwoFilesPatch;
    exports2.createPatch = createPatch;
    var _line = require_line();
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
      if (!options) {
        options = {};
      }
      if (typeof options.context === "undefined") {
        options.context = 4;
      }
      var diff = (0, _line.diffLines)(oldStr, newStr, options);
      diff.push({
        value: "",
        lines: []
      });
      function contextLines(lines) {
        return lines.map(function(entry) {
          return " " + entry;
        });
      }
      var hunks = [];
      var oldRangeStart = 0, newRangeStart = 0, curRange = [], oldLine = 1, newLine = 1;
      var _loop = function _loop2(i2) {
        var current = diff[i2], lines = current.lines || current.value.replace(/\n$/, "").split("\n");
        current.lines = lines;
        if (current.added || current.removed) {
          var _curRange;
          if (!oldRangeStart) {
            var prev = diff[i2 - 1];
            oldRangeStart = oldLine;
            newRangeStart = newLine;
            if (prev) {
              curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
              oldRangeStart -= curRange.length;
              newRangeStart -= curRange.length;
            }
          }
          (_curRange = curRange).push.apply(_curRange, _toConsumableArray(lines.map(function(entry) {
            return (current.added ? "+" : "-") + entry;
          })));
          if (current.added) {
            newLine += lines.length;
          } else {
            oldLine += lines.length;
          }
        } else {
          if (oldRangeStart) {
            if (lines.length <= options.context * 2 && i2 < diff.length - 2) {
              var _curRange2;
              (_curRange2 = curRange).push.apply(_curRange2, _toConsumableArray(contextLines(lines)));
            } else {
              var _curRange3;
              var contextSize = Math.min(lines.length, options.context);
              (_curRange3 = curRange).push.apply(_curRange3, _toConsumableArray(contextLines(lines.slice(0, contextSize))));
              var hunk = {
                oldStart: oldRangeStart,
                oldLines: oldLine - oldRangeStart + contextSize,
                newStart: newRangeStart,
                newLines: newLine - newRangeStart + contextSize,
                lines: curRange
              };
              if (i2 >= diff.length - 2 && lines.length <= options.context) {
                var oldEOFNewline = /\n$/.test(oldStr);
                var newEOFNewline = /\n$/.test(newStr);
                var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;
                if (!oldEOFNewline && noNlBeforeAdds) {
                  curRange.splice(hunk.oldLines, 0, "\\ No newline at end of file");
                }
                if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
                  curRange.push("\\ No newline at end of file");
                }
              }
              hunks.push(hunk);
              oldRangeStart = 0;
              newRangeStart = 0;
              curRange = [];
            }
          }
          oldLine += lines.length;
          newLine += lines.length;
        }
      };
      for (var i = 0; i < diff.length; i++) {
        _loop(i);
      }
      return {
        oldFileName,
        newFileName,
        oldHeader,
        newHeader,
        hunks
      };
    }
    function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
      var diff = structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options);
      var ret = [];
      if (oldFileName == newFileName) {
        ret.push("Index: " + oldFileName);
      }
      ret.push("===================================================================");
      ret.push("--- " + diff.oldFileName + (typeof diff.oldHeader === "undefined" ? "" : "	" + diff.oldHeader));
      ret.push("+++ " + diff.newFileName + (typeof diff.newHeader === "undefined" ? "" : "	" + diff.newHeader));
      for (var i = 0; i < diff.hunks.length; i++) {
        var hunk = diff.hunks[i];
        ret.push("@@ -" + hunk.oldStart + "," + hunk.oldLines + " +" + hunk.newStart + "," + hunk.newLines + " @@");
        ret.push.apply(ret, hunk.lines);
      }
      return ret.join("\n") + "\n";
    }
    function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
      return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/util/array.js
var require_array2 = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/util/array.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.arrayEqual = arrayEqual;
    exports2.arrayStartsWith = arrayStartsWith;
    function arrayEqual(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      return arrayStartsWith(a, b);
    }
    function arrayStartsWith(array, start) {
      if (start.length > array.length) {
        return false;
      }
      for (var i = 0; i < start.length; i++) {
        if (start[i] !== array[i]) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/merge.js
var require_merge = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/patch/merge.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.calcLineCount = calcLineCount;
    exports2.merge = merge;
    var _create = require_create();
    var _parse = require_parse();
    var _array = require_array2();
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }
    function _iterableToArray(iter) {
      if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]")
        return Array.from(iter);
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr)) {
        for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
          arr2[i] = arr[i];
        }
        return arr2;
      }
    }
    function calcLineCount(hunk) {
      var _calcOldNewLineCount = calcOldNewLineCount(hunk.lines), oldLines = _calcOldNewLineCount.oldLines, newLines = _calcOldNewLineCount.newLines;
      if (oldLines !== void 0) {
        hunk.oldLines = oldLines;
      } else {
        delete hunk.oldLines;
      }
      if (newLines !== void 0) {
        hunk.newLines = newLines;
      } else {
        delete hunk.newLines;
      }
    }
    function merge(mine, theirs, base) {
      mine = loadPatch(mine, base);
      theirs = loadPatch(theirs, base);
      var ret = {};
      if (mine.index || theirs.index) {
        ret.index = mine.index || theirs.index;
      }
      if (mine.newFileName || theirs.newFileName) {
        if (!fileNameChanged(mine)) {
          ret.oldFileName = theirs.oldFileName || mine.oldFileName;
          ret.newFileName = theirs.newFileName || mine.newFileName;
          ret.oldHeader = theirs.oldHeader || mine.oldHeader;
          ret.newHeader = theirs.newHeader || mine.newHeader;
        } else if (!fileNameChanged(theirs)) {
          ret.oldFileName = mine.oldFileName;
          ret.newFileName = mine.newFileName;
          ret.oldHeader = mine.oldHeader;
          ret.newHeader = mine.newHeader;
        } else {
          ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
          ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
          ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
          ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
        }
      }
      ret.hunks = [];
      var mineIndex = 0, theirsIndex = 0, mineOffset = 0, theirsOffset = 0;
      while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
        var mineCurrent = mine.hunks[mineIndex] || {
          oldStart: Infinity
        }, theirsCurrent = theirs.hunks[theirsIndex] || {
          oldStart: Infinity
        };
        if (hunkBefore(mineCurrent, theirsCurrent)) {
          ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
          mineIndex++;
          theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
        } else if (hunkBefore(theirsCurrent, mineCurrent)) {
          ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
          theirsIndex++;
          mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
        } else {
          var mergedHunk = {
            oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
            oldLines: 0,
            newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
            newLines: 0,
            lines: []
          };
          mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
          theirsIndex++;
          mineIndex++;
          ret.hunks.push(mergedHunk);
        }
      }
      return ret;
    }
    function loadPatch(param, base) {
      if (typeof param === "string") {
        if (/^@@/m.test(param) || /^Index:/m.test(param)) {
          return (0, _parse.parsePatch)(param)[0];
        }
        if (!base) {
          throw new Error("Must provide a base reference or pass in a patch");
        }
        return (0, _create.structuredPatch)(void 0, void 0, base, param);
      }
      return param;
    }
    function fileNameChanged(patch) {
      return patch.newFileName && patch.newFileName !== patch.oldFileName;
    }
    function selectField(index, mine, theirs) {
      if (mine === theirs) {
        return mine;
      } else {
        index.conflict = true;
        return {
          mine,
          theirs
        };
      }
    }
    function hunkBefore(test, check) {
      return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
    }
    function cloneHunk(hunk, offset) {
      return {
        oldStart: hunk.oldStart,
        oldLines: hunk.oldLines,
        newStart: hunk.newStart + offset,
        newLines: hunk.newLines,
        lines: hunk.lines
      };
    }
    function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
      var mine = {
        offset: mineOffset,
        lines: mineLines,
        index: 0
      }, their = {
        offset: theirOffset,
        lines: theirLines,
        index: 0
      };
      insertLeading(hunk, mine, their);
      insertLeading(hunk, their, mine);
      while (mine.index < mine.lines.length && their.index < their.lines.length) {
        var mineCurrent = mine.lines[mine.index], theirCurrent = their.lines[their.index];
        if ((mineCurrent[0] === "-" || mineCurrent[0] === "+") && (theirCurrent[0] === "-" || theirCurrent[0] === "+")) {
          mutualChange(hunk, mine, their);
        } else if (mineCurrent[0] === "+" && theirCurrent[0] === " ") {
          var _hunk$lines;
          (_hunk$lines = hunk.lines).push.apply(_hunk$lines, _toConsumableArray(collectChange(mine)));
        } else if (theirCurrent[0] === "+" && mineCurrent[0] === " ") {
          var _hunk$lines2;
          (_hunk$lines2 = hunk.lines).push.apply(_hunk$lines2, _toConsumableArray(collectChange(their)));
        } else if (mineCurrent[0] === "-" && theirCurrent[0] === " ") {
          removal(hunk, mine, their);
        } else if (theirCurrent[0] === "-" && mineCurrent[0] === " ") {
          removal(hunk, their, mine, true);
        } else if (mineCurrent === theirCurrent) {
          hunk.lines.push(mineCurrent);
          mine.index++;
          their.index++;
        } else {
          conflict(hunk, collectChange(mine), collectChange(their));
        }
      }
      insertTrailing(hunk, mine);
      insertTrailing(hunk, their);
      calcLineCount(hunk);
    }
    function mutualChange(hunk, mine, their) {
      var myChanges = collectChange(mine), theirChanges = collectChange(their);
      if (allRemoves(myChanges) && allRemoves(theirChanges)) {
        if ((0, _array.arrayStartsWith)(myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
          var _hunk$lines3;
          (_hunk$lines3 = hunk.lines).push.apply(_hunk$lines3, _toConsumableArray(myChanges));
          return;
        } else if ((0, _array.arrayStartsWith)(theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
          var _hunk$lines4;
          (_hunk$lines4 = hunk.lines).push.apply(_hunk$lines4, _toConsumableArray(theirChanges));
          return;
        }
      } else if ((0, _array.arrayEqual)(myChanges, theirChanges)) {
        var _hunk$lines5;
        (_hunk$lines5 = hunk.lines).push.apply(_hunk$lines5, _toConsumableArray(myChanges));
        return;
      }
      conflict(hunk, myChanges, theirChanges);
    }
    function removal(hunk, mine, their, swap) {
      var myChanges = collectChange(mine), theirChanges = collectContext(their, myChanges);
      if (theirChanges.merged) {
        var _hunk$lines6;
        (_hunk$lines6 = hunk.lines).push.apply(_hunk$lines6, _toConsumableArray(theirChanges.merged));
      } else {
        conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
      }
    }
    function conflict(hunk, mine, their) {
      hunk.conflict = true;
      hunk.lines.push({
        conflict: true,
        mine,
        theirs: their
      });
    }
    function insertLeading(hunk, insert, their) {
      while (insert.offset < their.offset && insert.index < insert.lines.length) {
        var line = insert.lines[insert.index++];
        hunk.lines.push(line);
        insert.offset++;
      }
    }
    function insertTrailing(hunk, insert) {
      while (insert.index < insert.lines.length) {
        var line = insert.lines[insert.index++];
        hunk.lines.push(line);
      }
    }
    function collectChange(state) {
      var ret = [], operation = state.lines[state.index][0];
      while (state.index < state.lines.length) {
        var line = state.lines[state.index];
        if (operation === "-" && line[0] === "+") {
          operation = "+";
        }
        if (operation === line[0]) {
          ret.push(line);
          state.index++;
        } else {
          break;
        }
      }
      return ret;
    }
    function collectContext(state, matchChanges) {
      var changes = [], merged = [], matchIndex = 0, contextChanges = false, conflicted = false;
      while (matchIndex < matchChanges.length && state.index < state.lines.length) {
        var change = state.lines[state.index], match = matchChanges[matchIndex];
        if (match[0] === "+") {
          break;
        }
        contextChanges = contextChanges || change[0] !== " ";
        merged.push(match);
        matchIndex++;
        if (change[0] === "+") {
          conflicted = true;
          while (change[0] === "+") {
            changes.push(change);
            change = state.lines[++state.index];
          }
        }
        if (match.substr(1) === change.substr(1)) {
          changes.push(change);
          state.index++;
        } else {
          conflicted = true;
        }
      }
      if ((matchChanges[matchIndex] || "")[0] === "+" && contextChanges) {
        conflicted = true;
      }
      if (conflicted) {
        return changes;
      }
      while (matchIndex < matchChanges.length) {
        merged.push(matchChanges[matchIndex++]);
      }
      return {
        merged,
        changes
      };
    }
    function allRemoves(changes) {
      return changes.reduce(function(prev, change) {
        return prev && change[0] === "-";
      }, true);
    }
    function skipRemoveSuperset(state, removeChanges, delta) {
      for (var i = 0; i < delta; i++) {
        var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);
        if (state.lines[state.index + i] !== " " + changeContent) {
          return false;
        }
      }
      state.index += delta;
      return true;
    }
    function calcOldNewLineCount(lines) {
      var oldLines = 0;
      var newLines = 0;
      lines.forEach(function(line) {
        if (typeof line !== "string") {
          var myCount = calcOldNewLineCount(line.mine);
          var theirCount = calcOldNewLineCount(line.theirs);
          if (oldLines !== void 0) {
            if (myCount.oldLines === theirCount.oldLines) {
              oldLines += myCount.oldLines;
            } else {
              oldLines = void 0;
            }
          }
          if (newLines !== void 0) {
            if (myCount.newLines === theirCount.newLines) {
              newLines += myCount.newLines;
            } else {
              newLines = void 0;
            }
          }
        } else {
          if (newLines !== void 0 && (line[0] === "+" || line[0] === " ")) {
            newLines++;
          }
          if (oldLines !== void 0 && (line[0] === "-" || line[0] === " ")) {
            oldLines++;
          }
        }
      });
      return {
        oldLines,
        newLines
      };
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/convert/dmp.js
var require_dmp = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/convert/dmp.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.convertChangesToDMP = convertChangesToDMP;
    function convertChangesToDMP(changes) {
      var ret = [], change, operation;
      for (var i = 0; i < changes.length; i++) {
        change = changes[i];
        if (change.added) {
          operation = 1;
        } else if (change.removed) {
          operation = -1;
        } else {
          operation = 0;
        }
        ret.push([operation, change.value]);
      }
      return ret;
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/convert/xml.js
var require_xml = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/convert/xml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    exports2.convertChangesToXML = convertChangesToXML;
    function convertChangesToXML(changes) {
      var ret = [];
      for (var i = 0; i < changes.length; i++) {
        var change = changes[i];
        if (change.added) {
          ret.push("<ins>");
        } else if (change.removed) {
          ret.push("<del>");
        }
        ret.push(escapeHTML(change.value));
        if (change.added) {
          ret.push("</ins>");
        } else if (change.removed) {
          ret.push("</del>");
        }
      }
      return ret.join("");
    }
    function escapeHTML(s) {
      var n = s;
      n = n.replace(/&/g, "&amp;");
      n = n.replace(/</g, "&lt;");
      n = n.replace(/>/g, "&gt;");
      n = n.replace(/"/g, "&quot;");
      return n;
    }
  }
});

// node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/diff@4.0.2/node_modules/diff/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    Object.defineProperty(exports2, "Diff", {
      enumerable: true,
      get: function get() {
        return _base.default;
      }
    });
    Object.defineProperty(exports2, "diffChars", {
      enumerable: true,
      get: function get() {
        return _character.diffChars;
      }
    });
    Object.defineProperty(exports2, "diffWords", {
      enumerable: true,
      get: function get() {
        return _word.diffWords;
      }
    });
    Object.defineProperty(exports2, "diffWordsWithSpace", {
      enumerable: true,
      get: function get() {
        return _word.diffWordsWithSpace;
      }
    });
    Object.defineProperty(exports2, "diffLines", {
      enumerable: true,
      get: function get() {
        return _line.diffLines;
      }
    });
    Object.defineProperty(exports2, "diffTrimmedLines", {
      enumerable: true,
      get: function get() {
        return _line.diffTrimmedLines;
      }
    });
    Object.defineProperty(exports2, "diffSentences", {
      enumerable: true,
      get: function get() {
        return _sentence.diffSentences;
      }
    });
    Object.defineProperty(exports2, "diffCss", {
      enumerable: true,
      get: function get() {
        return _css.diffCss;
      }
    });
    Object.defineProperty(exports2, "diffJson", {
      enumerable: true,
      get: function get() {
        return _json.diffJson;
      }
    });
    Object.defineProperty(exports2, "canonicalize", {
      enumerable: true,
      get: function get() {
        return _json.canonicalize;
      }
    });
    Object.defineProperty(exports2, "diffArrays", {
      enumerable: true,
      get: function get() {
        return _array.diffArrays;
      }
    });
    Object.defineProperty(exports2, "applyPatch", {
      enumerable: true,
      get: function get() {
        return _apply.applyPatch;
      }
    });
    Object.defineProperty(exports2, "applyPatches", {
      enumerable: true,
      get: function get() {
        return _apply.applyPatches;
      }
    });
    Object.defineProperty(exports2, "parsePatch", {
      enumerable: true,
      get: function get() {
        return _parse.parsePatch;
      }
    });
    Object.defineProperty(exports2, "merge", {
      enumerable: true,
      get: function get() {
        return _merge.merge;
      }
    });
    Object.defineProperty(exports2, "structuredPatch", {
      enumerable: true,
      get: function get() {
        return _create.structuredPatch;
      }
    });
    Object.defineProperty(exports2, "createTwoFilesPatch", {
      enumerable: true,
      get: function get() {
        return _create.createTwoFilesPatch;
      }
    });
    Object.defineProperty(exports2, "createPatch", {
      enumerable: true,
      get: function get() {
        return _create.createPatch;
      }
    });
    Object.defineProperty(exports2, "convertChangesToDMP", {
      enumerable: true,
      get: function get() {
        return _dmp.convertChangesToDMP;
      }
    });
    Object.defineProperty(exports2, "convertChangesToXML", {
      enumerable: true,
      get: function get() {
        return _xml.convertChangesToXML;
      }
    });
    var _base = _interopRequireDefault(require_base());
    var _character = require_character();
    var _word = require_word();
    var _line = require_line();
    var _sentence = require_sentence();
    var _css = require_css();
    var _json = require_json();
    var _array = require_array();
    var _apply = require_apply();
    var _parse = require_parse();
    var _merge = require_merge();
    var _create = require_create();
    var _dmp = require_dmp();
    var _xml = require_xml();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { default: obj };
    }
  }
});

// node_modules/.pnpm/uvu@0.1.0/node_modules/uvu/diff/index.js
var require_diff = __commonJS({
  "node_modules/.pnpm/uvu@0.1.0/node_modules/uvu/diff/index.js"(exports2) {
    var kleur = require_kleur();
    var diff = require_lib();
    var colors = {
      "--": kleur.red,
      "\xB7\xB7": kleur.grey,
      "++": kleur.green
    };
    var TITLE = kleur.dim().italic;
    var TAB = kleur.dim("\u2192");
    var SPACE = kleur.dim("\xB7");
    var NL = kleur.dim("\u21B5");
    var LOG = (sym, str) => colors[sym](sym + PRETTY(str)) + "\n";
    var LINE = (num, x) => kleur.dim("L" + String(num).padStart(x, "0") + " ");
    var PRETTY = (str) => str.replace(/[ ]/g, SPACE).replace(/\t/g, TAB).replace(/(\r?\n)/g, NL);
    function line(obj, prev, pad) {
      let char = obj.removed ? "--" : obj.added ? "++" : "\xB7\xB7";
      let arr = obj.value.replace(/\r?\n$/, "").split("\n");
      let i = 0, tmp, out = "";
      if (obj.added)
        out += colors[char]().underline(TITLE("Expected:")) + "\n";
      else if (obj.removed)
        out += colors[char]().underline(TITLE("Actual:")) + "\n";
      for (; i < arr.length; i++) {
        tmp = arr[i];
        if (tmp != null) {
          if (prev)
            out += LINE(prev + i, pad);
          out += LOG(char, tmp || "\n");
        }
      }
      return out;
    }
    function arrays(input, expect) {
      let arr = diff.diffArrays(input, expect);
      let i = 0, j = 0, k = 0, tmp, val, char;
      let out = LOG("\xB7\xB7", "[");
      for (; i < arr.length; i++) {
        char = (tmp = arr[i]).removed ? "--" : tmp.added ? "++" : "\xB7\xB7";
        if (tmp.added) {
          out += colors[char]().underline(TITLE("Expected:")) + "\n";
        } else if (tmp.removed) {
          out += colors[char]().underline(TITLE("Actual:")) + "\n";
        }
        for (j = 0; j < tmp.value.length; j++) {
          val = JSON.stringify(tmp.value[j], null, 2).split(/\r?\n/g);
          for (k = 0; k < val.length; k++)
            out += LOG(char, "  " + val[k] + (/^[{}]$/.test(val[k]) ? "" : ","));
        }
      }
      return out + LOG("\xB7\xB7", "]");
    }
    function lines(input, expect, linenum = 0) {
      let i = 0, tmp, output = "";
      let arr = diff.diffLines(input, expect);
      let pad = String(expect.split(/\r?\n/g).length - linenum).length;
      for (; i < arr.length; i++) {
        output += line(tmp = arr[i], linenum, pad);
        if (linenum && !tmp.removed)
          linenum += tmp.count;
      }
      return output;
    }
    function chars(input, expect) {
      let arr = diff.diffChars(input, expect);
      let i = 0, output = "", tmp;
      let l1 = input.length;
      let l2 = expect.length;
      let p1 = PRETTY(input);
      let p2 = PRETTY(expect);
      tmp = arr[i];
      if (l1 === l2) {
      } else if (tmp.removed) {
        let del = tmp.count - arr[i + 1].count;
        if (del == 0) {
        } else if (del > 0) {
          expect = " ".repeat(del) + expect;
          p2 = " ".repeat(del) + p2;
          l2 += del;
        } else if (del < 0) {
          input = " ".repeat(-del) + input;
          p1 = " ".repeat(-del) + p1;
          l1 += -del;
        }
      }
      output += direct(p1, p2, l1, l2);
      if (l1 === l2) {
        for (tmp = "  "; i < l1; i++) {
          tmp += input[i] === expect[i] ? " " : "^";
        }
      } else {
        for (tmp = "  "; i < arr.length; i++) {
          tmp += (arr[i].added || arr[i].removed ? "^" : " ").repeat(Math.max(arr[i].count, 0));
          if (i + 1 < arr.length && (arr[i].added && arr[i + 1].removed || arr[i].removed && arr[i + 1].added)) {
            arr[i + 1].count -= arr[i].count;
          }
        }
      }
      return output + kleur.red(tmp);
    }
    function direct(input, expect, lenA = String(input).length, lenB = String(expect).length) {
      let gutter = 4;
      let lenC = Math.max(lenA, lenB);
      let typeA = typeof input, typeB = typeof expect;
      if (typeA !== typeB) {
        gutter = 2;
        let delA = gutter + lenC - lenA;
        let delB = gutter + lenC - lenB;
        input += " ".repeat(delA) + kleur.dim(`[${typeA}]`);
        expect += " ".repeat(delB) + kleur.dim(`[${typeB}]`);
        lenA += delA + typeA.length + 2;
        lenB += delB + typeB.length + 2;
        lenC = Math.max(lenA, lenB);
      }
      let output = colors["++"]("++" + expect + " ".repeat(gutter + lenC - lenB) + TITLE("(Expected)")) + "\n";
      return output + colors["--"]("--" + input + " ".repeat(gutter + lenC - lenA) + TITLE("(Actual)")) + "\n";
    }
    function sort(input, expect) {
      var k, i = 0, tmp, isArr = Array.isArray(input);
      var keys = [], out = isArr ? Array(input.length) : {};
      if (isArr) {
        for (i = 0; i < out.length; i++) {
          tmp = input[i];
          if (!tmp || typeof tmp !== "object")
            out[i] = tmp;
          else
            out[i] = sort(tmp, expect[i]);
        }
      } else {
        for (k in expect)
          keys.push(k);
        for (; i < keys.length; i++) {
          if (Object.prototype.hasOwnProperty.call(input, k = keys[i])) {
            if (!(tmp = input[k]) || typeof tmp !== "object")
              out[k] = tmp;
            else
              out[k] = sort(tmp, expect[k]);
          }
        }
        for (k in input) {
          if (!out.hasOwnProperty(k)) {
            out[k] = input[k];
          }
        }
      }
      return out;
    }
    function circular() {
      var cache = new Set();
      return function print(key, val) {
        if (!val || typeof val !== "object")
          return val;
        if (cache.has(val))
          return "[Circular]";
        cache.add(val);
        return val;
      };
    }
    function compare(input, expect) {
      if (Array.isArray(expect))
        return arrays(input, expect);
      if (expect instanceof RegExp)
        return chars("" + input, "" + expect);
      if (expect && typeof expect == "object") {
        input = JSON.stringify(sort(input, expect), circular(), 2);
        expect = JSON.stringify(expect, circular(), 2);
      }
      if (/\r?\n/.test(String(expect))) {
        return lines(input, expect);
      }
      if (typeof expect == "string") {
        return chars(input, expect);
      }
      return direct(input, expect);
    }
    exports2.arrays = arrays;
    exports2.chars = chars;
    exports2.circular = circular;
    exports2.compare = compare;
    exports2.direct = direct;
    exports2.lines = lines;
    exports2.sort = sort;
  }
});

// node_modules/.pnpm/uvu@0.1.0/node_modules/uvu/assert/index.js
var require_assert = __commonJS({
  "node_modules/.pnpm/uvu@0.1.0/node_modules/uvu/assert/index.js"(exports2) {
    var dequal = require_dequal();
    var { compare, direct, lines } = require_diff();
    function dedent(str) {
      let arr = str.match(/^[ \t]*(?=\S)/gm);
      let min = !!arr && Math.min(...arr.map((x) => x.length));
      return !arr || !min ? str : str.replace(new RegExp(`^[ \\t]{${min}}`, "gm"), "");
    }
    var Assertion = class extends Error {
      constructor(opts = {}) {
        super(opts.message);
        this.name = "Assertion";
        this.code = "ERR_ASSERTION";
        if (Error.captureStackTrace) {
          Error.captureStackTrace(this, this.constructor);
        }
        this.details = opts.details || false;
        this.generated = !!opts.generated;
        this.operator = opts.operator;
        this.expects = opts.expects;
        this.actual = opts.actual;
      }
    };
    function assert2(bool, actual, expects, operator, detailer, backup, msg) {
      if (bool)
        return;
      let message = msg || backup;
      if (msg instanceof Error)
        throw msg;
      let details = detailer && detailer(actual, expects);
      throw new Assertion({ actual, expects, operator, message, details, generated: !msg });
    }
    function ok(val, msg) {
      assert2(!!val, false, true, "ok", false, "Expected value to be truthy", msg);
    }
    function is(val, exp, msg) {
      assert2(val === exp, val, exp, "is", direct, "Expected values to be strictly equal:", msg);
    }
    function equal(val, exp, msg) {
      assert2(dequal(val, exp), val, exp, "equal", compare, "Expected values to be deeply equal:", msg);
    }
    function unreachable(msg) {
      assert2(false, true, false, "unreachable", false, "Expected not to be reached!", msg);
    }
    function type(val, exp, msg) {
      let tmp = typeof val;
      assert2(tmp === exp, tmp, exp, "type", false, `Expected "${tmp}" to be "${exp}"`, msg);
    }
    function instance(val, exp, msg) {
      let name = "`" + (exp.name || exp.constructor.name) + "`";
      assert2(val instanceof exp, val, exp, "instance", false, `Expected value to be an instance of ${name}`, msg);
    }
    function snapshot(val, exp, msg) {
      val = dedent(val);
      exp = dedent(exp);
      assert2(val === exp, val, exp, "snapshot", lines, "Expected value to match snapshot:", msg);
    }
    var lineNums = (x, y) => lines(x, y, 1);
    function fixture(val, exp, msg) {
      val = dedent(val);
      exp = dedent(exp);
      assert2(val === exp, val, exp, "fixture", lineNums, "Expected value to match fixture:", msg);
    }
    function throws(blk, exp, msg) {
      if (!msg && typeof exp === "string") {
        msg = exp;
        exp = null;
      }
      try {
        blk();
        assert2(false, false, true, "throws", direct, "Expected function to throw", msg);
      } catch (err) {
        if (err instanceof Assertion)
          throw err;
        if (typeof exp === "function") {
          assert2(exp(err), false, true, "throws", false, "Expected function to throw matching exception", msg);
        } else if (exp instanceof RegExp) {
          let tmp = "`" + String(exp) + "`";
          assert2(exp.test(err.message), false, true, "throws", false, `Expected function to throw exception matching ${tmp} pattern`, msg);
        }
      }
    }
    function not(val, msg) {
      assert2(!val, true, false, "not", false, "Expected value to be falsey", msg);
    }
    not.ok = not;
    is.not = function(val, exp, msg) {
      assert2(val !== exp, val, exp, "is.not", false, "Expected values not to be strictly equal", msg);
    };
    not.equal = function(val, exp, msg) {
      assert2(!dequal(val, exp), val, exp, "not.equal", false, "Expected values not to be deeply equal", msg);
    };
    not.type = function(val, exp, msg) {
      let tmp = typeof val;
      assert2(tmp !== exp, tmp, exp, "not.type", false, `Expected "${tmp}" not to be "${exp}"`, msg);
    };
    not.instance = function(val, exp, msg) {
      let name = "`" + (exp.name || exp.constructor.name) + "`";
      assert2(!(val instanceof exp), val, exp, "not.instance", false, `Expected value not to be an instance of ${name}`, msg);
    };
    not.snapshot = function(val, exp, msg) {
      val = dedent(val);
      exp = dedent(exp);
      assert2(val !== exp, val, exp, "not.snapshot", false, "Expected value not to match snapshot", msg);
    };
    not.fixture = function(val, exp, msg) {
      val = dedent(val);
      exp = dedent(exp);
      assert2(val !== exp, val, exp, "not.fixture", false, "Expected value not to match fixture", msg);
    };
    not.throws = function(blk, exp, msg) {
      if (!msg && typeof exp === "string") {
        msg = exp;
        exp = null;
      }
      try {
        blk();
      } catch (err) {
        if (typeof exp === "function") {
          assert2(!exp(err), true, false, "not.throws", false, "Expected function not to throw matching exception", msg);
        } else if (exp instanceof RegExp) {
          let tmp = "`" + String(exp) + "`";
          assert2(!exp.test(err.message), true, false, "not.throws", false, `Expected function not to throw exception matching ${tmp} pattern`, msg);
        } else if (!exp) {
          assert2(false, true, false, "not.throws", false, "Expected function not to throw", msg);
        }
      }
    };
    exports2.Assertion = Assertion;
    exports2.equal = equal;
    exports2.fixture = fixture;
    exports2.instance = instance;
    exports2.is = is;
    exports2.not = not;
    exports2.ok = ok;
    exports2.snapshot = snapshot;
    exports2.throws = throws;
    exports2.type = type;
    exports2.unreachable = unreachable;
  }
});

// math.js
var require_math = __commonJS({
  "math.js"(exports2) {
    exports2.sum = (a, b) => a + b;
    exports2.div = (a, b) => a / b;
    exports2.mod = (a, b) => a % b;
  }
});

// node_modules/.pnpm/@modfy+estester-client@0.1.0/node_modules/@modfy/estester-client/src/client.tsx
var relayTestResults, sendDebugMsg, runTestInBrowser;
var init_client = __esm({
  "node_modules/.pnpm/@modfy+estester-client@0.1.0/node_modules/@modfy/estester-client/src/client.tsx"() {
    relayTestResults = async (data) => {
      console.log(JSON.stringify(data));
      await fetch("http://localhost:8080/log", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      console.log("Sent log!");
    };
    sendDebugMsg = async (testName, debugMsg) => {
      const data = {
        debugMsg,
        testName,
        debug: true
      };
      await fetch("http://localhost:8080/log", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    };
    runTestInBrowser = async (groupName, tests, testSelectors) => {
      const runTest = async () => {
        const testGroupResult = {
          passed: 0,
          failed: 0,
          total: 0,
          errors: [],
          testName: groupName
        };
        document.title = `\u{1F9EA} ${groupName}`;
        console.log(`\u{1F9EA} Running test group: ${groupName}`);
        try {
          const beforeAllResult = await (tests.beforeAll && tests.beforeAll()) || void 0;
          const afterAll = tests.afterAll;
          const beforeEach = tests.beforeEach;
          const afterEach = tests.afterEach;
          for (const [name, test] of Object.entries(tests)) {
            if (name === "beforeAll" || name === "afterAll") {
              continue;
            }
            if (testSelectors) {
              if (!testSelectors[`${groupName}.${name}`])
                continue;
            }
            const beforeEachResult = beforeEach ? await beforeEach() : void 0;
            testGroupResult.total++;
            try {
              console.log(`\u23F0 Running: ${name}`);
              if (test)
                await test({ ...beforeAllResult, ...beforeEachResult });
              testGroupResult.passed++;
              console.log(`\u2705 Test passed: ${name}`);
            } catch (err) {
              console.log(`\u274C Test failed: ${name}`);
              const errorMessage = `Error in test '${name}': ` + JSON.stringify(err.message);
              testGroupResult.errors.push(errorMessage);
              testGroupResult.failed++;
              console.error(err);
            }
            if (afterEach)
              await afterEach({ ...beforeAllResult, ...beforeEachResult });
          }
          if (afterAll)
            await afterAll({ ...beforeAllResult });
          await relayTestResults(testGroupResult);
        } catch (err) {
          testGroupResult.errors.push(JSON.stringify(err.message));
          testGroupResult.failed++;
          console.error(err);
          await relayTestResults(testGroupResult);
        }
      };
      await runTest();
      window.close();
    };
  }
});

// node_modules/.pnpm/@modfy+estester-client@0.1.0/node_modules/@modfy/estester-client/src/index.ts
var src_exports = {};
__export(src_exports, {
  relayTestResults: () => relayTestResults,
  runTestGroup: () => runTestGroup,
  runTestInBrowser: () => runTestInBrowser,
  runTests: () => runTests,
  sendDebugMsg: () => sendDebugMsg,
  verifyGroups: () => verifyGroups
});
var runTestGroup, verifyGroups, runTests;
var init_src = __esm({
  "node_modules/.pnpm/@modfy+estester-client@0.1.0/node_modules/@modfy/estester-client/src/index.ts"() {
    init_client();
    runTestGroup = async (groupName, tests, testSelectors, exit) => {
      const testGroupResult = {
        passed: 0,
        failed: 0,
        total: 0
      };
      console.log(`\u{1F9EA} Running test group: ${groupName}`);
      const beforeAllResult = await (tests.beforeAll && tests.beforeAll()) || void 0;
      const beforeEach = tests.beforeEach;
      const afterEach = tests.afterEach;
      const afterAll = tests.afterAll;
      for (const [name, test] of Object.entries(tests)) {
        if (name === "beforeAll") {
          continue;
        }
        if (testSelectors) {
          if (!testSelectors[`${groupName}.${name}`])
            continue;
        }
        const beforeEachResult = beforeEach ? await beforeEach() : void 0;
        testGroupResult.total++;
        console.log(`\u{1F3C3}\u200D\u2642\uFE0F Running test: ${name}`);
        try {
          if (test)
            await test({ ...beforeAllResult, ...beforeEachResult });
          testGroupResult.passed++;
          console.log(`\u2705 Test passed: ${name}`);
        } catch (err) {
          console.log(`\u274C Test failed: ${name}`);
          console.error(err);
          testGroupResult.failed++;
        }
        if (afterEach)
          afterEach({ ...beforeAllResult, ...beforeEachResult });
      }
      if (afterAll)
        afterAll({ ...beforeAllResult });
      if (exit) {
        if (testGroupResult.failed > 0) {
          process.exit(1);
        }
        process.exit(0);
      }
      return testGroupResult;
    };
    verifyGroups = (results) => {
      for (const result of results) {
        if (result.failed > 0) {
          process.exit(1);
        }
      }
    };
    runTests = async (testManifest, options) => {
      const { name, groups } = testManifest;
      console.log(`\u{1F680} Running tests: ${name}`);
      let testSelectors = null;
      if (options?.tests) {
        testSelectors = {};
        options.tests.forEach((key) => {
          if (testSelectors)
            testSelectors[key] = null;
        });
      }
      for (const groupName of Object.keys(groups)) {
        console.log(`Running test group: ${groupName}`);
        const result = await runTestGroup(groupName, groups[groupName], testSelectors);
        console.log(`Result for group: ${groupName}`);
        console.log(`\u2714 Passed: ${result.passed}, Failed: ${result.failed}, Total ${result.total}`);
      }
      console.log(`\u2714 Finished tests: ${name}`);
    };
  }
});

// suites/modfy-tester/second.test.ts
var assert = require_assert();
var math = require_math();
var { runTestGroup: runTestGroup2 } = (init_src(), src_exports);
runTestGroup2("Basic bench", {
  "sum": () => {
    assert.type(math.sum, "function");
    assert.is(math.sum(1, 2), 3);
    assert.is(math.sum(-1, -2), -3);
    assert.is(math.sum(-1, 1), 0);
  },
  "div": () => {
    assert.type(math.div, "function");
    assert.is(math.div(1, 2), 0.5);
    assert.is(math.div(-1, -2), 0.5);
    assert.is(math.div(-1, 1), -1);
  },
  "mod": () => {
    assert.type(math.mod, "function");
    assert.is(math.mod(1, 2), 1);
    assert.is(math.mod(-3, -2), -1);
    assert.is(math.mod(7, 4), 3);
  }
});
