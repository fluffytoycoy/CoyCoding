(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("$(document).ready(function () {\n  var startingDegArr = [200, 180, 160, 140, 120, 100, 80];\n  var index = 0;\n  var numOfCircles = $('.circle').length;\n  var spinInterval = setInterval(spin, 1);\n\n  function spin() {\n    for (index; index < numOfCircles; index++) {\n      switch (index) {\n        case 0:\n          circle1(index, 2);\n          break;\n\n        case 1:\n          circle1(index, 2);\n          break;\n\n        case 2:\n          circle1(index, 2);\n          break;\n\n        case 3:\n          circle1(index, 2);\n          break;\n\n        case 4:\n          circle1(index, 2);\n          break;\n\n        case 5:\n          circle1(index, 2);\n          break;\n\n        case 6:\n          circle1(index, 2);\n          break;\n      }\n    }\n\n    index = 0;\n  }\n\n  function circle1(index) {\n    let num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;\n    let reverse = arguments.length > 2 ? arguments[2] : undefined;\n\n    if (Math.abs(startingDegArr[index] / 360) === 3) {\n      if (index === 6) {\n        clearInterval(spinInterval);\n      }\n    } else {\n      $('.circle').eq(index).css({\n        transform: 'rotate(' + startingDegArr[index] + 'deg)'\n      });\n\n      if (reverse) {\n        startingDegArr[index] = startingDegArr[index] - num;\n      } else {\n        startingDegArr[index] = startingDegArr[index] + num;\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});