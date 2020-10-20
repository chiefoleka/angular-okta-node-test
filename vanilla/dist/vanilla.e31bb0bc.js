// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/@salte-auth/salte-auth/dist/salte-auth.min.js":[function(require,module,exports) {
var define;
/**
 * @salte-auth/salte-auth JavaScript Library v3.1.1
 *
 * @license MIT (https://github.com/salte-auth/salte-auth/blob/master/LICENSE)
 *
 * Made with ♥ by Nick Woodward <nick@salte.io>, Dave Woodward <dave@salte.io>
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).salte = e.salte || {}, e.salte.auth = {}));
}(this, function (e) {
  "use strict";

  function t(e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }

  var n = t(function (e) {
    var t = function (e) {
      var t = Object.prototype,
          n = t.hasOwnProperty,
          r = "function" == typeof Symbol ? Symbol : {},
          o = r.iterator || "@@iterator",
          i = r.asyncIterator || "@@asyncIterator",
          c = r.toStringTag || "@@toStringTag";

      function a(e, t, n, r) {
        var o = t && t.prototype instanceof l ? t : l,
            i = Object.create(o.prototype),
            c = new b(r || []);
        return i._invoke = function (e, t, n) {
          var r = "suspendedStart";
          return function (o, i) {
            if ("executing" === r) throw new Error("Generator is already running");

            if ("completed" === r) {
              if ("throw" === o) throw i;
              return _();
            }

            for (n.method = o, n.arg = i;;) {
              var c = n.delegate;

              if (c) {
                var a = w(c, n);

                if (a) {
                  if (a === s) continue;
                  return a;
                }
              }

              if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw r = "completed", n.arg;
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = u(e, t, n);

              if ("normal" === l.type) {
                if (r = n.done ? "completed" : "suspendedYield", l.arg === s) continue;
                return {
                  value: l.arg,
                  done: n.done
                };
              }

              "throw" === l.type && (r = "completed", n.method = "throw", n.arg = l.arg);
            }
          };
        }(e, n, c), i;
      }

      function u(e, t, n) {
        try {
          return {
            type: "normal",
            arg: e.call(t, n)
          };
        } catch (e) {
          return {
            type: "throw",
            arg: e
          };
        }
      }

      e.wrap = a;
      var s = {};

      function l() {}

      function f() {}

      function h() {}

      var p = {};

      p[o] = function () {
        return this;
      };

      var d = Object.getPrototypeOf,
          v = d && d(d(R([])));
      v && v !== t && n.call(v, o) && (p = v);
      var y = h.prototype = l.prototype = Object.create(p);

      function g(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }

      function m(e, t) {
        var r;

        this._invoke = function (o, i) {
          function c() {
            return new t(function (r, c) {
              !function r(o, i, c, a) {
                var s = u(e[o], e, i);

                if ("throw" !== s.type) {
                  var l = s.arg,
                      f = l.value;
                  return f && "object" == typeof f && n.call(f, "__await") ? t.resolve(f.__await).then(function (e) {
                    r("next", e, c, a);
                  }, function (e) {
                    r("throw", e, c, a);
                  }) : t.resolve(f).then(function (e) {
                    l.value = e, c(l);
                  }, function (e) {
                    return r("throw", e, c, a);
                  });
                }

                a(s.arg);
              }(o, i, r, c);
            });
          }

          return r = r ? r.then(c, c) : c();
        };
      }

      function w(e, t) {
        var n = e.iterator[t.method];

        if (void 0 === n) {
          if (t.delegate = null, "throw" === t.method) {
            if (e.iterator.return && (t.method = "return", t.arg = void 0, w(e, t), "throw" === t.method)) return s;
            t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return s;
        }

        var r = u(n, e.iterator, t.arg);
        if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, s;
        var o = r.arg;
        return o ? o.done ? (t[e.resultName] = o.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, s) : o : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, s);
      }

      function k(e) {
        var t = {
          tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }

      function x(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t;
      }

      function b(e) {
        this.tryEntries = [{
          tryLoc: "root"
        }], e.forEach(k, this), this.reset(!0);
      }

      function R(e) {
        if (e) {
          var t = e[o];
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;

          if (!isNaN(e.length)) {
            var r = -1,
                i = function t() {
              for (; ++r < e.length;) if (n.call(e, r)) return t.value = e[r], t.done = !1, t;

              return t.value = void 0, t.done = !0, t;
            };

            return i.next = i;
          }
        }

        return {
          next: _
        };
      }

      function _() {
        return {
          value: void 0,
          done: !0
        };
      }

      return f.prototype = y.constructor = h, h.constructor = f, h[c] = f.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;
        return !!t && (t === f || "GeneratorFunction" === (t.displayName || t.name));
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, c in e || (e[c] = "GeneratorFunction")), e.prototype = Object.create(y), e;
      }, e.awrap = function (e) {
        return {
          __await: e
        };
      }, g(m.prototype), m.prototype[i] = function () {
        return this;
      }, e.AsyncIterator = m, e.async = function (t, n, r, o, i) {
        void 0 === i && (i = Promise);
        var c = new m(a(t, n, r, o), i);
        return e.isGeneratorFunction(n) ? c : c.next().then(function (e) {
          return e.done ? e.value : c.next();
        });
      }, g(y), y[c] = "Generator", y[o] = function () {
        return this;
      }, y.toString = function () {
        return "[object Generator]";
      }, e.keys = function (e) {
        var t = [];

        for (var n in e) t.push(n);

        return t.reverse(), function n() {
          for (; t.length;) {
            var r = t.pop();
            if (r in e) return n.value = r, n.done = !1, n;
          }

          return n.done = !0, n;
        };
      }, e.values = R, b.prototype = {
        constructor: b,
        reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e) for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
        },
        stop: function () {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function (e) {
          if (this.done) throw e;
          var t = this;

          function r(n, r) {
            return c.type = "throw", c.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r;
          }

          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var i = this.tryEntries[o],
                c = i.completion;
            if ("root" === i.tryLoc) return r("end");

            if (i.tryLoc <= this.prev) {
              var a = n.call(i, "catchLoc"),
                  u = n.call(i, "finallyLoc");

              if (a && u) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              } else if (a) {
                if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");
                if (this.prev < i.finallyLoc) return r(i.finallyLoc);
              }
            }
          }
        },
        abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];

            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;
              break;
            }
          }

          i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
          var c = i ? i.completion : {};
          return c.type = e, c.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(c);
        },
        complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;
          return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), s;
        },
        finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), s;
          }
        },
        catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];

            if (n.tryLoc === e) {
              var r = n.completion;

              if ("throw" === r.type) {
                var o = r.arg;
                x(n);
              }

              return o;
            }
          }

          throw new Error("illegal catch attempt");
        },
        delegateYield: function (e, t, n) {
          return this.delegate = {
            iterator: R(e),
            resultName: t,
            nextLoc: n
          }, "next" === this.method && (this.arg = void 0), s;
        }
      }, e;
    }(e.exports);

    try {
      regeneratorRuntime = t;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(t);
    }
  });

  function r(e, t, n, r, o, i, c) {
    try {
      var a = e[i](c),
          u = a.value;
    } catch (e) {
      return void n(e);
    }

    a.done ? t(u) : Promise.resolve(u).then(r, o);
  }

  var o = function (e) {
    return function () {
      var t = this,
          n = arguments;
      return new Promise(function (o, i) {
        var c = e.apply(t, n);

        function a(e) {
          r(c, o, i, a, u, "next", e);
        }

        function u(e) {
          r(c, o, i, a, u, "throw", e);
        }

        a(void 0);
      });
    };
  };

  var i = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  };

  function c(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }

  var a = function (e, t, n) {
    return t && c(e.prototype, t), n && c(e, n), e;
  };

  var u = function (e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  },
      s = t(function (e) {
    function t(n, r) {
      return e.exports = t = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
      }, t(n, r);
    }

    e.exports = t;
  });

  var l = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && s(e, t);
  },
      f = t(function (e) {
    function t(n) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function (e) {
        return typeof e;
      } : e.exports = t = function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, t(n);
    }

    e.exports = t;
  });

  var h = function (e, t) {
    return !t || "object" !== f(t) && "function" != typeof t ? u(e) : t;
  },
      p = t(function (e) {
    function t(n) {
      return e.exports = t = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
      }, t(n);
    }

    e.exports = t;
  });

  var d = function (e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e;
  };

  function v(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var y = function (e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]");
  };

  var g = function () {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (e) {
      return !1;
    }
  },
      m = t(function (e) {
    function t(n, r, o) {
      return g() ? e.exports = t = Reflect.construct : e.exports = t = function (e, t, n) {
        var r = [null];
        r.push.apply(r, t);
        var o = new (Function.bind.apply(e, r))();
        return n && s(o, n.prototype), o;
      }, t.apply(null, arguments);
    }

    e.exports = t;
  });

  function w(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var k = function (e) {
    l(n, e);
    var t = w(n);

    function n(e) {
      var r,
          o = e.message,
          c = e.code;
      return i(this, n), r = t.call(this, o), d(u(r), "code", void 0), r.code = c, r;
    }

    return n;
  }(t(function (e) {
    function t(n) {
      var r = "function" == typeof Map ? new Map() : void 0;
      return e.exports = t = function (e) {
        if (null === e || !y(e)) return e;
        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");

        if (void 0 !== r) {
          if (r.has(e)) return r.get(e);
          r.set(e, t);
        }

        function t() {
          return m(e, arguments, p(this).constructor);
        }

        return t.prototype = Object.create(e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), s(t, e);
      }, t(n);
    }

    e.exports = t;
  })(Error)),
      x = function () {
    function e(t) {
      i(this, e), this.config = t || {};
    }

    return a(e, [{
      key: "required",
      value: function () {
        for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];

        var o = n.filter(function (t) {
          return void 0 === e.config[t];
        });
        if (o.length > 0) throw new k({
          code: "missing_required_properties",
          message: "Missing the following required fields. (".concat(o.join(", "), ")")
        });
      }
    }]), e;
  }(),
      b = function () {
    function e() {
      i(this, e);
    }

    return a(e, null, [{
      key: "setup",
      value: function (t) {
        this.hasSetup && !t || (this.hasSetup = !0, this.interceptors = [], this.real || (this.real = window.fetch), window.fetch && (window.fetch = function () {
          var t = o(n.mark(function t(r, o) {
            var i, c, a;
            return n.wrap(function (t) {
              for (;;) switch (t.prev = t.next) {
                case 0:
                  i = r instanceof Request ? r : new Request(r, o), c = 0;

                case 2:
                  if (!(c < e.interceptors.length)) {
                    t.next = 9;
                    break;
                  }

                  return a = e.interceptors[c], t.next = 6, Promise.resolve(a(i));

                case 6:
                  c++, t.next = 2;
                  break;

                case 9:
                  return t.abrupt("return", e.real.call(this, i));

                case 10:
                case "end":
                  return t.stop();
              }
            }, t, this);
          }));
          return function (e, n) {
            return t.apply(this, arguments);
          };
        }()));
      }
    }, {
      key: "add",
      value: function (e) {
        this.setup(), this.interceptors.push(e);
      }
    }]), e;
  }();

  d(b, "real", void 0), d(b, "hasSetup", !1), d(b, "interceptors", void 0);
  var R = !1,
      _ = [];

  function O() {
    _.forEach(function (e) {
      return e();
    });
  }

  var S = function () {
    function e() {
      i(this, e);
    }

    return a(e, null, [{
      key: "route",
      value: function (e) {
        R || (window.addEventListener("popstate", O, {
          passive: !0
        }), window.addEventListener("click", O, {
          passive: !0
        }), setTimeout(O), R = !0), _.push(e);
      }
    }, {
      key: "create",
      value: function (e, t) {
        var n = document.createEvent("Event");
        return n.initEvent(e, t.bubbles || !1, t.cancelable || !0), n.detail = t.detail, n;
      }
    }, {
      key: "isCrossDomainError",
      value: function (e) {
        return e instanceof DOMException || "Permission denied" === e.message;
      }
    }]), e;
  }(),
      E = function () {
    function e() {
      i(this, e);
    }

    return a(e, null, [{
      key: "setup",
      value: function (t) {
        if (!this.hasSetup || t) {
          this.hasSetup = !0, this.interceptors = [], this.realOpen || (this.realOpen = XMLHttpRequest.prototype.open), this.realSend || (this.realSend = XMLHttpRequest.prototype.send);
          var n = XMLHttpRequest.prototype;
          n.open = function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];

            var o = n[1];
            return this.$url = o, e.realOpen.apply(this, n);
          }, n.send = function (t) {
            for (var n = this, r = [], o = 0; o < e.interceptors.length; o++) {
              var i = e.interceptors[o];
              r.push(i(this, t));
            }

            Promise.all(r).then(function () {
              e.realSend.call(n, t);
            }).catch(function (e) {
              n.dispatchEvent(S.create("error", {
                detail: e
              }));
            });
          };
        }
      }
    }, {
      key: "add",
      value: function (e) {
        this.setup(), this.interceptors.push(e);
      }
    }]), e;
  }();

  d(E, "realOpen", void 0), d(E, "realSend", void 0), d(E, "hasSetup", !1), d(E, "interceptors", void 0);
  var P = Object.freeze({
    __proto__: null,
    Fetch: b,
    XHR: E
  });

  var D = function (e) {
    if (Array.isArray(e)) return e;
  };

  var j = function (e, t) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var c, a = e[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !t || n.length !== t); r = !0);
      } catch (e) {
        o = !0, i = e;
      } finally {
        try {
          r || null == a.return || a.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }
  };

  var T = function (e, t) {
    (null == t || t > e.length) && (t = e.length);

    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];

    return r;
  };

  var L = function (e, t) {
    if (e) {
      if ("string" == typeof e) return T(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
    }
  };

  var $ = function () {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  };

  var A,
      q,
      U,
      I = function (e, t) {
    return D(e) || j(e, t) || L(e, t) || $();
  },
      C = function () {
    function e() {
      i(this, e);
    }

    return a(e, null, [{
      key: "resolve",
      value: function (e) {
        return A || (A = document.implementation.createHTMLDocument("url"), q = A.createElement("base"), U = A.createElement("a"), A.head.appendChild(q)), q.href = window.location.protocol + "//" + window.location.host, U.href = e.replace(/ /g, "%20"), U.href.replace(/\/$/, "");
      }
    }, {
      key: "match",
      value: function (e, t) {
        var n = this;

        if (t instanceof Array) {
          var r = this.resolve(e),
              o = N.find(t, function (e) {
            return e instanceof RegExp ? !!r.match(e) : 0 === r.indexOf(n.resolve(e));
          });
          return !!o;
        }

        return !0 === t;
      }
    }, {
      key: "parse",
      value: function (e) {
        var t = e.search,
            n = e.hash,
            r = [];
        t && (r = r.concat(t.replace("?", "").split("&"))), n && (r = r.concat(n.replace("#", "").split("&")));
        var o = {};
        return N.forEach(r, function (e) {
          var t = e.split("="),
              n = I(t, 2),
              r = n[0],
              i = n[1];
          o[r] = i;
        }), o;
      }
    }, {
      key: "url",
      value: function (e, t) {
        var n = e;
        return N.forEach(t, function (e, t) {
          N.includes([void 0, null, ""], e) || (n += "".concat(-1 === n.indexOf("?") ? "?" : "&").concat(t, "=").concat(encodeURIComponent(e)));
        }), n;
      }
    }, {
      key: "origin",
      get: function () {
        return "".concat(location.protocol, "//").concat(location.host);
      }
    }]), e;
  }(),
      M = {},
      N = function () {
    function e() {
      i(this, e);
    }

    var t;
    return a(e, null, [{
      key: "includes",
      value: function (e, t) {
        return -1 !== e.indexOf(t);
      }
    }, {
      key: "forEach",
      value: function (e, t) {
        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) t(e[n], n);else for (var r in e) t(e[r], r);
      }
    }, {
      key: "find",
      value: function (e, t) {
        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
          var r = e[n];
          if (t(r, n)) return r;
        } else for (var o in e) {
          var i = e[o];
          if (t(i, o)) return i;
        }
        return null;
      }
    }, {
      key: "assign",
      value: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

        return this.forEach(n, function (t) {
          for (var n in t) e[n] = t[n];
        }), e;
      }
    }, {
      key: "defaults",
      value: function (e) {
        for (var t = this, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];

        return this.forEach(r, function (n) {
          for (var r in n) t.isObject(e[r]) && t.isObject(n[r]) ? e[r] = t.defaults(e[r], n[r]) : void 0 === e[r] && (e[r] = n[r]);
        }), e;
      }
    }, {
      key: "isObject",
      value: function (e) {
        return "object" === f(e) && !Array.isArray(e);
      }
    }, {
      key: "iframe",
      value: (t = o(n.mark(function e(t) {
        var r,
            o,
            i,
            c,
            a = this;
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return r = t.url, o = t.redirectUrl, i = t.visible, (c = document.createElement("iframe")).setAttribute("owner", "@salte-auth/salte-auth"), i ? (this.assign(c.style, {
                border: "none",
                bottom: 0,
                height: "100%",
                left: 0,
                position: "fixed",
                right: 0,
                top: 0,
                width: "100%",
                zIndex: 9999,
                opacity: 0,
                transition: "0.5s opacity"
              }), setTimeout(function () {
                return c.style.opacity = "1";
              })) : c.style.display = "none", c.src = r, document.body.appendChild(c), e.abrupt("return", new Promise(function (e, t) {
                var n = setInterval(function () {
                  try {
                    var r = c.contentWindow.location;
                    if (0 !== r.href.indexOf(o)) return;
                    var i = C.parse(r);
                    a.removeIframe(c), clearInterval(n), e(i);
                  } catch (e) {
                    if (S.isCrossDomainError(e)) return;
                    a.removeIframe(c), clearInterval(n), t(e);
                  }
                });
              }));

            case 7:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), function (e) {
        return t.apply(this, arguments);
      })
    }, {
      key: "removeIframe",
      value: function (e) {
        e.parentElement && e.parentElement.removeChild(e);
      }
    }, {
      key: "debounce",
      value: function (e, t, n) {
        clearTimeout(M[e]), M[e] = window.setTimeout(function () {
          delete M[e], t();
        }, n);
      }
    }]), e;
  }(),
      H = function () {
    function e(t) {
      i(this, e), d(this, "baseKey", void 0), this.baseKey = t;
    }

    return a(e, [{
      key: "has",
      value: function (e) {
        return !N.includes([void 0, null], this.get(e));
      }
    }, {
      key: "key",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return this.baseKey && -1 === e.indexOf(this.baseKey) ? "".concat(this.baseKey, ".").concat(e) : e;
      }
    }], [{
      key: "supported",
      value: function () {
        return !0;
      }
    }]), e;
  }();

  function F(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var z = function (e) {
    l(n, e);
    var t = F(n);

    function n() {
      return i(this, n), t.apply(this, arguments);
    }

    return a(n, [{
      key: "get",
      value: function (e, t) {
        var n = document.cookie.match(new RegExp("".concat(this.key(e), "=([^;]+)"))),
            r = n && n[1].trim();
        return N.includes([void 0, null], r) ? N.includes([void 0, null], t) ? null : t : r;
      }
    }, {
      key: "set",
      value: function (e, t) {
        N.includes([void 0, null], t) ? this.delete(e) : document.cookie = "".concat(this.key(e), "=").concat(t, "; SameSite=Lax");
      }
    }, {
      key: "delete",
      value: function (e) {
        document.cookie = "".concat(this.key(e), "=; expires=").concat(new Date(0).toUTCString());
      }
    }, {
      key: "clear",
      value: function () {
        var e = this,
            t = this.key(),
            n = document.cookie.split(";");
        N.forEach(n, function (n) {
          var r = n.trim().split("="),
              o = I(r, 1)[0];
          0 === o.indexOf(t) && e.delete(o);
        });
      }
    }], [{
      key: "supported",
      value: function () {
        return !0 === navigator.cookieEnabled;
      }
    }]), n;
  }(H);

  function G(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var X = function (e) {
    l(n, e);
    var t = G(n);

    function n() {
      return i(this, n), t.apply(this, arguments);
    }

    return a(n, [{
      key: "get",
      value: function (e, t) {
        var n = localStorage.getItem(this.key(e));
        return N.includes([void 0, null], n) ? N.includes([void 0, null], t) ? null : t : n;
      }
    }, {
      key: "set",
      value: function (e, t) {
        N.includes([void 0, null], t) ? this.delete(e) : localStorage.setItem(this.key(e), t);
      }
    }, {
      key: "delete",
      value: function (e) {
        localStorage.removeItem(this.key(e));
      }
    }, {
      key: "clear",
      value: function () {
        var e = this.key();

        for (var t in localStorage) 0 === t.indexOf(e) && this.delete(t);
      }
    }]), n;
  }(H);

  function B(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var K = function (e) {
    l(n, e);
    var t = B(n);

    function n() {
      return i(this, n), t.apply(this, arguments);
    }

    return a(n, [{
      key: "get",
      value: function (e, t) {
        var n = sessionStorage.getItem(this.key(e));
        return N.includes([void 0, null], n) ? N.includes([void 0, null], t) ? null : t : n;
      }
    }, {
      key: "set",
      value: function (e, t) {
        N.includes([void 0, null], t) ? this.delete(e) : sessionStorage.setItem(this.key(e), t);
      }
    }, {
      key: "delete",
      value: function (e) {
        sessionStorage.removeItem(this.key(e));
      }
    }, {
      key: "clear",
      value: function () {
        var e = this.key();

        for (var t in sessionStorage) 0 === t.indexOf(e) && this.delete(t);
      }
    }]), n;
  }(H),
      V = {
    cookie: z,
    local: X,
    session: K
  },
      Y = Object.freeze({
    __proto__: null,
    StorageTypes: V,
    CookieStorage: z,
    LocalStorage: X,
    SessionStorage: K
  }),
      J = function () {
    function e(t, n, r) {
      i(this, e), d(this, "raw", void 0), d(this, "expiration", void 0), d(this, "type", void 0), this.raw = t, this.expiration = N.includes([void 0, null], n) ? null : Number(n), this.type = r;
    }

    return a(e, [{
      key: "expired",
      get: function () {
        return !this.raw || this.expiration <= Date.now();
      }
    }]), e;
  }(),
      W = function () {
    function e(t) {
      i(this, e), d(this, "raw", void 0), d(this, "user", void 0), this.raw = t, this.user = e.parse(this.raw);
    }

    return a(e, [{
      key: "expired",
      get: function () {
        return !this.user || 1e3 * this.user.exp <= Date.now();
      }
    }], [{
      key: "parse",
      value: function (e) {
        try {
          var t = e.split(".");
          if (3 !== t.length) throw new k({
            code: "invalid_id_token",
            message: "ID Token didn't match the desired format. ({header}.{payload}.{validation})"
          });
          return JSON.parse(atob(t[1].replace(/-/g, "+").replace(/_/g, "/")));
        } catch (e) {
          return null;
        }
      }
    }]), e;
  }(),
      Q = function () {
    function e(t, n) {
      i(this, e), d(this, "name", void 0), d(this, "level", void 0), this.name = t, this.level = "string" == typeof n ? this.toLevel(n) : n;
    }

    return a(e, [{
      key: "trace",
      value: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

        this.log.apply(this, ["trace", e].concat(n));
      }
    }, {
      key: "info",
      value: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

        this.log.apply(this, ["info", e].concat(n));
      }
    }, {
      key: "warn",
      value: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

        this.log.apply(this, ["warn", e].concat(n));
      }
    }, {
      key: "error",
      value: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

        this.log.apply(this, ["error", e].concat(n));
      }
    }, {
      key: "log",
      value: function (e, t) {
        if (this.enabled(e)) {
          for (var n, r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];

          (n = console).log.apply(n, ["".concat(e, ": ").concat(t)].concat(o));
        }
      }
    }, {
      key: "enabled",
      value: function (e) {
        return !1 !== this.level && (!0 === this.level || this.level <= this.toLevel(e));
      }
    }, {
      key: "toLevel",
      value: function (t) {
        return N.find(e.levels, function (e, n) {
          return n === t;
        });
      }
    }]), e;
  }();

  d(Q, "levels", {
    trace: 0,
    info: 1,
    warn: 2,
    error: 3
  });

  var Z = function () {
    function e() {
      i(this, e);
    }

    return a(e, null, [{
      key: "dedupe",
      value: function () {
        var e = {};
        return function (t, n) {
          return e[t] || (e[t] = n().then(function (n) {
            return delete e[t], n;
          }).catch(function (n) {
            throw delete e[t], n;
          })), e[t];
        };
      }
    }]), e;
  }(),
      ee = Object.freeze({
    __proto__: null,
    Interceptors: P,
    StorageHelpers: Y,
    AccessToken: J,
    IDToken: W,
    Common: N,
    Events: S,
    URL: C,
    Logger: Q,
    Dedupe: Z
  });

  function te(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var ne = ["cookie", "session", "local"],
      re = function (e) {
    l(n, e);
    var t = te(n);

    function n(e) {
      var r;
      i(this, n), r = t.call(this, e), d(u(r), "storage", void 0), r.config = N.defaults(r.config, {
        storage: N.find(ne, function (e) {
          return V[e].supported();
        })
      });
      var o = V[r.config.storage];
      if (!o) throw new k({
        code: "invalid_storage",
        message: "Storage doesn't exist for the given value. (".concat(r.config.storage, ")")
      });
      return r.storage = new o(r.key), r;
    }

    return a(n, [{
      key: "key",
      get: function () {
        return "salte.auth";
      }
    }]), n;
  }(x);

  function oe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  function ie(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  for (var ce = function (e) {
    l(n, e);
    var t = ie(n);

    function n(e) {
      var r;
      return i(this, n), (r = t.call(this, e)).config = N.defaults(r.config, {
        redirectUrl: location.origin,
        level: "warn"
      }), r;
    }

    return a(n, [{
      key: "redirectUrl",
      value: function (e) {
        return "string" == typeof this.config.redirectUrl ? this.config.redirectUrl : this.config.redirectUrl[e];
      }
    }]), n;
  }(function (e) {
    l(n, e);
    var t = oe(n);

    function n() {
      var e;
      i(this, n);

      for (var r = arguments.length, o = new Array(r), c = 0; c < r; c++) o[c] = arguments[c];

      return e = t.call.apply(t, [this].concat(o)), d(u(e), "listeners", new Map()), e;
    }

    return a(n, [{
      key: "on",
      value: function (e, t) {
        this.listeners.has(e) || this.listeners.set(e, []), this.listeners.get(e).push(t);
      }
    }, {
      key: "off",
      value: function (e, t) {
        if (this.listeners.has(e)) {
          var n = this.listeners.get(e);

          if (n.length) {
            var r = n.indexOf(t);
            -1 !== r && n.splice(r, 1);
          }
        }
      }
    }, {
      key: "emit",
      value: function (e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];

        if (this.listeners.has(e)) {
          var o = this.listeners.get(e);
          N.forEach(o, function (e) {
            return e.apply(void 0, n);
          });
        }
      }
    }]), n;
  }(re)), ae = self.crypto || self.msCrypto, ue = "-_", se = 36; se--;) ue += se.toString(36);

  for (se = 36; se-- - 10;) ue += se.toString(36).toUpperCase();

  var le = function (e) {
    var t = "",
        n = ae.getRandomValues(new Uint8Array(e || 21));

    for (se = e || 21; se--;) t += ue[63 & n[se]];

    return t;
  };

  function fe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var he = function (e) {
    l(n, e);
    var t = fe(n);

    function n(e) {
      var r;
      return i(this, n), r = t.call(this, e), d(u(r), "logger", void 0), d(u(r), "url", C.url), d(u(r), "dedupe", Z.dedupe()), r.config = N.defaults(r.config, {
        validation: !0,
        level: "warn"
      }), r.logger = new Q("@salte-auth/salte-auth:providers/".concat(r.$name), r.config.level), r;
    }

    return a(n, [{
      key: "validation",
      value: function (e) {
        return "object" === f(this.config.validation) ? !0 === this.config.validation[e] : !0 === this.config.validation;
      }
    }, {
      key: "$name",
      get: function () {
        return this.config.name || this.name;
      }
    }, {
      key: "key",
      get: function () {
        return "salte.auth.provider.".concat(this.$name);
      }
    }, {
      key: "logout",
      get: function () {
        throw new k({
          code: "logout_not_supported",
          message: "This provider doesn't support logout."
        });
      }
    }]), n;
  }(ce);

  function pe(e, t) {
    var n = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function de(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? pe(Object(n), !0).forEach(function (t) {
        d(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pe(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }

    return e;
  }

  function ve(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var ye = function (e) {
    l(c, e);
    var t,
        r = ve(c);

    function c(e) {
      var t;
      return i(this, c), t = r.call(this, e), d(u(t), "accessToken", void 0), t.sync(), t;
    }

    return a(c, [{
      key: "connected",
      value: function () {
        this.required("clientID", "responseType");
      }
    }, {
      key: "secure",
      value: (t = o(n.mark(function e(t) {
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if ("token" !== this.config.responseType) {
                e.next = 13;
                break;
              }

              if (!this.accessToken.expired) {
                e.next = 3;
                break;
              }

              return e.abrupt("return", "login");

            case 3:
              if (!t) {
                e.next = 13;
                break;
              }

              if (!(t instanceof Request)) {
                e.next = 8;
                break;
              }

              t.headers.set("Authorization", "Bearer ".concat(this.accessToken.raw)), e.next = 13;
              break;

            case 8:
              if (!(t instanceof XMLHttpRequest)) {
                e.next = 12;
                break;
              }

              t.setRequestHeader("Authorization", "Bearer ".concat(this.accessToken.raw)), e.next = 13;
              break;

            case 12:
              throw new k({
                code: "unknown_request",
                message: "Unknown request type. (".concat(t, ")")
              });

            case 13:
              return e.abrupt("return", !0);

            case 14:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), function (e) {
        return t.apply(this, arguments);
      })
    }, {
      key: "$validate",
      value: function (e) {
        try {
          if (!e) throw new k({
            code: "empty_response",
            message: "The response provided was empty, this is most likely due to the configured handler not providing it."
          });
          if (e.error) throw new k({
            code: e.error,
            message: "".concat(e.error_description ? e.error_description : e.error).concat(e.error_uri ? " (".concat(e.error_uri, ")") : "")
          });
          var t = e.code,
              n = e.access_token,
              r = e.state,
              o = e.expires_in,
              i = e.token_type;
          if (this.validation("state") && this.storage.get("state") !== r) throw new k({
            code: "invalid_state",
            message: "State provided by identity provider did not match local state."
          });
          var c = this.storage.get("response-type", "").split(" ");

          if (N.includes(c, "code")) {
            if (!t) throw new k({
              code: "invalid_code",
              message: "Expected a code to be returned by the Provider."
            });
          } else if (N.includes(c, "token") && !n) throw new k({
            code: "invalid_access_token",
            message: "Expected an access token to be returned by the Provider."
          });

          t ? (this.storage.set("code.raw", t), this.storage.delete("access-token.raw"), this.storage.delete("access-token.expiration"), this.storage.delete("access-token.type")) : n && (this.storage.set("access-token.raw", n), this.storage.set("access-token.expiration", Date.now() + 1e3 * Number(o)), this.storage.set("access-token.type", i), this.storage.delete("code.raw"));
        } finally {
          this.storage.delete("state");
        }
      }
    }, {
      key: "validate",
      value: function (e) {
        this.logger.trace("[validate] (options): ", e);

        try {
          this.$validate(e);
        } catch (e) {
          throw this.emit("login", e), e;
        } finally {
          this.sync();
        }

        this.emit("login", null, this.code || this.accessToken);
      }
    }, {
      key: "$login",
      value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = "".concat(this.$name, "-state-").concat(le()),
            n = e.responseType || this.config.responseType;
        return this.storage.set("state", t), this.storage.set("response-type", n), this.url(this.login, de(de({}, this.config.queryParams && this.config.queryParams("login")), {}, {
          client_id: this.config.clientID,
          response_type: n,
          redirect_uri: this.config.redirectUrl,
          scope: this.config.scope,
          state: t
        }));
      }
    }, {
      key: "sync",
      value: function () {
        this.logger.trace("[sync] updating access token"), this.accessToken = new J(this.storage.get("access-token.raw"), this.storage.get("access-token.expiration"), this.storage.get("access-token.type"));
      }
    }, {
      key: "code",
      get: function () {
        return this.storage.get("code.raw");
      }
    }]), c;
  }(he);

  var ge = function (e, t) {
    for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = p(e)););

    return e;
  },
      me = t(function (e) {
    function t(n, r, o) {
      return "undefined" != typeof Reflect && Reflect.get ? e.exports = t = Reflect.get : e.exports = t = function (e, t, n) {
        var r = ge(e, t);

        if (r) {
          var o = Object.getOwnPropertyDescriptor(r, t);
          return o.get ? o.get.call(n) : o.value;
        }
      }, t(n, r, o || n);
    }

    e.exports = t;
  });

  function we(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var ke = function (e) {
    l(c, e);
    var t,
        r = we(c);

    function c(e) {
      var t;
      return i(this, c), t = r.call(this, e), d(u(t), "idToken", void 0), t.config.renewal = "object" === f(t.config.renewal) ? t.config.renewal : {
        type: t.config.renewal
      }, t.config = N.defaults(t.config, {
        responseType: "id_token",
        scope: "openid",
        renewal: {
          type: "auto",
          buffer: 6e4
        }
      }), t.sync(), t;
    }

    return a(c, [{
      key: "secure",
      value: (t = o(n.mark(function e(t) {
        var r = this;
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (!N.includes(["id_token", "id_token token", "token"], this.config.responseType)) {
                e.next = 17;
                break;
              }

              if (!this.idToken.expired) {
                e.next = 4;
                break;
              }

              return this.logger.trace("[secure]: ID Token has expired, requesting login..."), e.abrupt("return", "login");

            case 4:
              if (!this.accessToken.expired) {
                e.next = 7;
                break;
              }

              return e.next = 7, this.dedupe("access-token", o(n.mark(function e() {
                var t;
                return n.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return r.logger.info("[secure]: Expired access token detected, retrieving..."), e.next = 3, N.iframe({
                        redirectUrl: r.redirectUrl("login"),
                        url: r.$login({
                          prompt: "none",
                          responseType: "token"
                        })
                      });

                    case 3:
                      t = e.sent, r.logger.info("[secure]: Access token retrieved! Validating..."), r.validate(t);

                    case 6:
                    case "end":
                      return e.stop();
                  }
                }, e);
              })));

            case 7:
              if (!t) {
                e.next = 17;
                break;
              }

              if (!(t instanceof Request)) {
                e.next = 12;
                break;
              }

              t.headers.set("Authorization", "Bearer ".concat(this.accessToken.raw)), e.next = 17;
              break;

            case 12:
              if (!(t instanceof XMLHttpRequest)) {
                e.next = 16;
                break;
              }

              t.setRequestHeader("Authorization", "Bearer ".concat(this.accessToken.raw)), e.next = 17;
              break;

            case 16:
              throw new k({
                code: "unknown_request",
                message: "Unknown request type. (".concat(t, ")")
              });

            case 17:
              return e.abrupt("return", !0);

            case 18:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), function (e) {
        return t.apply(this, arguments);
      })
    }, {
      key: "$validate",
      value: function (e) {
        try {
          me(p(c.prototype), "$validate", this).call(this, e);
          var t = this.storage.get("response-type", "").split(" ");

          if (N.includes(t, "id_token")) {
            var n = e.id_token,
                r = W.parse(n);
            if (!r) throw new k({
              code: "invalid_id_token",
              message: "Failed to parse user information due to invalid id token."
            });
            if (this.validation("nonce") && this.storage.get("nonce") !== r.nonce) throw new k({
              code: "invalid_nonce",
              message: "Nonce provided by identity provider did not match the local nonce."
            });
            this.storage.set("id-token.raw", n);
          } else N.includes(t, "code") && this.storage.delete("id-token.raw");
        } finally {
          this.storage.delete("nonce");
        }
      }
    }, {
      key: "validate",
      value: function (e) {
        this.logger.trace("[validate] (options): ", e);

        try {
          this.$validate(e);
        } catch (e) {
          throw this.emit("login", e), e;
        } finally {
          this.sync();
        }

        var t = this.storage.get("response-type", ""),
            n = t.split(" ");
        if (N.includes(n, "id_token")) this.emit("login", null, this.idToken);else if (N.includes(n, "token")) this.emit("login", null, this.accessToken);else {
          if (!N.includes(n, "code")) throw new k({
            code: "invalid_response_type",
            message: "Unknown Response Type (".concat(t, ")")
          });
          this.emit("login", null, this.code);
        }
      }
    }, {
      key: "$login",
      value: function (e) {
        var t = "".concat(this.$name, "-nonce-").concat(le());
        return this.storage.set("nonce", t), this.url(me(p(c.prototype), "$login", this).call(this, e), {
          prompt: e && e.prompt,
          nonce: t
        });
      }
    }, {
      key: "sync",
      value: function () {
        me(p(c.prototype), "sync", this).call(this), this.logger.trace("[sync] updating id token"), this.idToken = new W(this.storage.get("id-token.raw"));
      }
    }]), c;
  }(ye);

  function xe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var be = function (e) {
    l(n, e);
    var t = xe(n);

    function n(e) {
      var r;
      return i(this, n), (r = t.call(this, e)).required("login"), r;
    }

    return a(n, [{
      key: "name",
      get: function () {
        return "generic.oauth2";
      }
    }, {
      key: "login",
      get: function () {
        return this.config.login.apply(this);
      }
    }]), n;
  }(ye),
      Re = function (e) {
    l(n, e);
    var t = xe(n);

    function n(e) {
      var r;
      return i(this, n), (r = t.call(this, e)).required("login", "logout"), r;
    }

    return a(n, [{
      key: "name",
      get: function () {
        return "generic.openid";
      }
    }, {
      key: "login",
      get: function () {
        return this.config.login.apply(this);
      }
    }, {
      key: "logout",
      get: function () {
        return this.config.logout.apply(this);
      }
    }]), n;
  }(ke),
      _e = Object.freeze({
    __proto__: null,
    OAuth2: be,
    OpenID: Re
  });

  function Oe(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var Se = function (e) {
    l(n, e);
    var t = Oe(n);

    function n(e) {
      var r;
      return i(this, n), r = t.call(this, e), d(u(r), "logger", void 0), r.config = N.defaults(r.config, {
        navigate: "reload",
        level: "warn"
      }), r.logger = new Q("@salte-auth/salte-auth:handlers/".concat(r.$name), r.config.level), r;
    }

    return a(n, [{
      key: "navigate",
      value: function (e) {
        "history" === this.config.navigate && 0 === e.indexOf(C.origin) && history.pushState("", document.title, e), location.href = e;
      }
    }, {
      key: "$name",
      get: function () {
        return this.config.name || this.name;
      }
    }, {
      key: "key",
      get: function () {
        return "salte.auth.handler.".concat(this.$name);
      }
    }]), n;
  }(re);

  function Ee(e) {
    var t = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = p(e);

      if (t) {
        var o = p(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return h(this, n);
    };
  }

  var Pe = function (e) {
    l(f, e);
    var t,
        r,
        c,
        s = Ee(f);

    function f(e) {
      var t;
      i(this, f), t = s.call(this, e), d(u(t), "logger", void 0), d(u(t), "mixin", void 0), t.required("providers", "handlers"), t.config = N.defaults(t.config, {
        validation: !0,
        level: "warn"
      }), t.logger = new Q("@salte-auth/salte-auth:core", t.config.level), N.forEach(t.config.providers, function (e) {
        e.connected && e.connected(), e.on("login", function (n, r) {
          t.emit("login", n, {
            provider: e.$name,
            data: r
          });
        }), e.on("logout", function (n) {
          t.emit("logout", n, {
            provider: e.$name
          });
        });
      });
      var r,
          c = t.storage.get("action"),
          a = c ? t.provider(t.storage.get("provider")) : null,
          h = c ? t.storage.get("handler") : null;
      if (!N.includes([void 0, null, "login", "logout"], c)) throw new k({
        code: "unknown_action",
        message: "Unable to finish redirect due to an unknown action! (".concat(c, ")")
      });
      return N.forEach(t.config.handlers, function (e) {
        e.connected && (e.$name === h ? a.dedupe(c, o(n.mark(function r() {
          var o;
          return n.wrap(function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return t.logger.trace("[constructor]: wrapping up authentication for ".concat(e.$name, "...")), n.next = 3, new Promise(function (e) {
                  return setTimeout(e);
                });

              case 3:
                o = e.connected({
                  action: c
                }), "login" === c ? (a.validate(o), t.logger.info("[constructor]: login complete")) : (a.storage.clear(), a.sync(), a.emit("logout"), t.logger.info("[constructor]: logout complete"));

              case 5:
              case "end":
                return n.stop();
            }
          }, r);
        }))) : e.connected({
          action: null
        }));
      }), t.storage.delete("action"), t.storage.delete("provider"), t.storage.delete("handler"), b.add(function () {
        var e = o(n.mark(function e(r) {
          var o, i;
          return n.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                o = 0;

              case 1:
                if (!(o < t.config.providers.length)) {
                  e.next = 9;
                  break;
                }

                if (i = t.config.providers[o], !C.match(r.url, i.config.endpoints)) {
                  e.next = 6;
                  break;
                }

                return e.next = 6, t.$secure(i, r);

              case 6:
                o++, e.next = 1;
                break;

              case 9:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }()), E.add(function () {
        var e = o(n.mark(function e(r) {
          var o, i;
          return n.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                o = 0;

              case 1:
                if (!(o < t.config.providers.length)) {
                  e.next = 9;
                  break;
                }

                if (i = t.config.providers[o], !C.match(r.$url, i.config.endpoints)) {
                  e.next = 6;
                  break;
                }

                return e.next = 6, t.$secure(i, r);

              case 6:
                o++, e.next = 1;
                break;

              case 9:
              case "end":
                return e.stop();
            }
          }, e);
        }));
        return function (t) {
          return e.apply(this, arguments);
        };
      }()), S.route(o(n.mark(function e() {
        var r, o;
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              r = 0;

            case 1:
              if (!(r < t.config.providers.length)) {
                e.next = 9;
                break;
              }

              if (o = t.config.providers[r], !C.match(location.href, o.config.routes)) {
                e.next = 6;
                break;
              }

              return e.next = 6, t.$secure(o);

            case 6:
              r++, e.next = 1;
              break;

            case 9:
            case "end":
              return e.stop();
          }
        }, e);
      }))), t.mixin = (r = u(t), function (e) {
        return function (e) {
          l(n, e);
          var t = v(n);

          function n() {
            var e;
            i(this, n);

            for (var o = arguments.length, c = new Array(o), a = 0; a < o; a++) c[a] = arguments[a];

            return e = t.call.apply(t, [this].concat(c)), d(u(e), "auth", void 0), e.auth = r, e.auth.on("login", function () {
              e.requestUpdate && e.requestUpdate("auth");
            }), e.auth.on("logout", function () {
              e.requestUpdate && e.requestUpdate("auth");
            }), e;
          }

          return n;
        }(e);
      }), t;
    }

    return a(f, [{
      key: "login",
      value: (c = o(n.mark(function e(t) {
        var r,
            i,
            c = this;
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return r = "string" == typeof t ? {
                provider: t
              } : t, i = this.provider(r.provider), e.abrupt("return", i.dedupe("login", o(n.mark(function e() {
                var t, o;
                return n.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return t = c.handler(r.handler), e.prev = 1, c.storage.set("action", "login"), c.storage.set("provider", i.$name), c.storage.set("handler", t.$name), c.logger.info("[login]: logging in with ".concat(i.$name, " via ").concat(t.$name, "...")), e.next = 8, t.open({
                        redirectUrl: i.redirectUrl("login"),
                        url: i.$login()
                      });

                    case 8:
                      o = e.sent, c.logger.trace("[login]: validating response...", o), i.validate(o), c.logger.info("[login]: login complete");

                    case 12:
                      return e.prev = 12, c.storage.delete("action"), c.storage.delete("provider"), c.storage.delete("handler"), e.finish(12);

                    case 17:
                    case "end":
                      return e.stop();
                  }
                }, e, null, [[1,, 12, 17]]);
              }))));

            case 3:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), function (e) {
        return c.apply(this, arguments);
      })
    }, {
      key: "logout",
      value: (r = o(n.mark(function e(t) {
        var r,
            i,
            c = this;
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              return r = "string" == typeof t ? {
                provider: t
              } : t, i = this.provider(r.provider), e.abrupt("return", i.dedupe("logout", o(n.mark(function e() {
                var t;
                return n.wrap(function (e) {
                  for (;;) switch (e.prev = e.next) {
                    case 0:
                      return e.prev = 0, t = c.handler(r.handler), c.storage.set("action", "logout"), c.storage.set("provider", i.$name), c.storage.set("handler", t.$name), c.logger.info("[logout]: logging out with ".concat(i.$name, " via ").concat(t.$name, "...")), e.next = 8, t.open({
                        redirectUrl: i.redirectUrl("logout"),
                        url: C.url(i.logout, i.config.queryParams && i.config.queryParams("logout"))
                      });

                    case 8:
                      i.storage.clear(), i.sync(), i.emit("logout"), c.logger.info("[logout]: logout complete"), e.next = 18;
                      break;

                    case 14:
                      throw e.prev = 14, e.t0 = e.catch(0), i.emit("logout", e.t0), e.t0;

                    case 18:
                      return e.prev = 18, c.storage.delete("action"), c.storage.delete("provider"), c.storage.delete("handler"), e.finish(18);

                    case 23:
                    case "end":
                      return e.stop();
                  }
                }, e, null, [[0, 14, 18, 23]]);
              }))));

            case 3:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), function (e) {
        return r.apply(this, arguments);
      })
    }, {
      key: "provider",
      value: function (e) {
        var t = N.find(this.config.providers, function (t) {
          return t.$name === e;
        });
        if (!t) throw new k({
          code: "invalid_provider",
          message: "Unable to locate provider with the given name. (".concat(e, ")")
        });
        return t;
      }
    }, {
      key: "handler",
      value: function (e) {
        var t = void 0 === e ? N.find(this.config.handlers, function (e) {
          return Boolean(e.config.default);
        }) : N.find(this.config.handlers, function (t) {
          return t.$name === e;
        });
        if (!t) throw new k({
          code: "invalid_handler",
          message: "Unable to locate handler with the given name. (".concat(e, ")")
        });
        return t;
      }
    }, {
      key: "$secure",
      value: (t = o(n.mark(function e(t, r) {
        var o, i;
        return n.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              o = this.handler(), i = null;

            case 2:
              if (!0 === i) {
                e.next = 13;
                break;
              }

              return e.next = 5, t.secure(r);

            case 5:
              if ("login" !== (i = e.sent)) {
                e.next = 11;
                break;
              }

              if (o.auto) {
                e.next = 9;
                break;
              }

              throw new k({
                code: "auto_unsupported",
                message: "The default handler doesn't support automatic authentication! (".concat(o.$name, ")")
              });

            case 9:
              return e.next = 11, this.login({
                provider: t.$name,
                handler: o.$name
              });

            case 11:
              e.next = 2;
              break;

            case 13:
            case "end":
              return e.stop();
          }
        }, e, this);
      })), function (e, n) {
        return t.apply(this, arguments);
      })
    }]), f;
  }(ce);

  e.Generic = _e, e.Handler = Se, e.OAuth2Provider = ye, e.OpenIDProvider = ke, e.Provider = he, e.SalteAuth = Pe, e.SalteAuthError = k, e.Utils = ee, Object.defineProperty(e, "__esModule", {
    value: !0
  });
});
},{}],"node_modules/@salte-auth/auth0/dist/auth0.min.js":[function(require,module,exports) {
var define;
/**
 * @salte-auth/auth0 JavaScript Library v3.0.2
 *
 * @license MIT (https://github.com/salte-auth/auth0/blob/master/LICENSE)
 *
 * Made with ♥ by Nick Woodward <nick@salte.io>, Dave Woodward <dave@salte.io>
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@salte-auth/salte-auth")) : "function" == typeof define && define.amd ? define(["exports", "@salte-auth/salte-auth"], e) : e(((t = t || self).salte = t.salte || {}, t.salte.auth = t.salte.auth || {}, t.salte.auth.auth0 = {}), t.salte.auth);
}(this, function (t, e) {
  "use strict";

  var n = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };

  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  var o = function (t, e, n) {
    return e && r(t.prototype, e), n && r(t, n), t;
  };

  function u(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var i = u(function (t) {
    function e(n, r) {
      return t.exports = e = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, e(n, r);
    }

    t.exports = e;
  });

  var c = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && i(t, e);
  },
      f = u(function (t) {
    function e(n) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function (t) {
        return typeof t;
      } : t.exports = e = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, e(n);
    }

    t.exports = e;
  });

  var a = function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  };

  var s = function (t, e) {
    return !e || "object" !== f(e) && "function" != typeof e ? a(t) : e;
  },
      l = u(function (t) {
    function e(n) {
      return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, e(n);
    }

    t.exports = e;
  });

  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  var y = function (t) {
    c(u, t);
    var e,
        r = (e = u, function () {
      var t,
          n = l(e);

      if (p()) {
        var r = l(this).constructor;
        t = Reflect.construct(n, arguments, r);
      } else t = n.apply(this, arguments);

      return s(this, t);
    });

    function u(t) {
      return n(this, u), r.call(this, t);
    }

    return o(u, [{
      key: "name",
      get: function () {
        return "auth0";
      }
    }, {
      key: "login",
      get: function () {
        return this.url("".concat(this.config.url, "/authorize"), {
          audience: this.config.audience
        });
      }
    }, {
      key: "logout",
      get: function () {
        return this.url("".concat(this.config.url, "/v2/logout"), {
          returnTo: this.redirectUrl("logout"),
          client_id: this.config.clientID
        });
      }
    }]), u;
  }(e.OpenIDProvider);

  t.Auth0 = y, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{"@salte-auth/salte-auth":"node_modules/@salte-auth/salte-auth/dist/salte-auth.min.js"}],"node_modules/@salte-auth/okta/dist/okta.min.js":[function(require,module,exports) {
var define;
/**
 * @salte-auth/okta JavaScript Library v3.0.2
 *
 * @license MIT (https://github.com/salte-auth/okta/blob/master/LICENSE)
 *
 * Made with ♥ by Nick Woodward <nick@salte.io>, Dave Woodward <dave@salte.io>
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@salte-auth/salte-auth")) : "function" == typeof define && define.amd ? define(["exports", "@salte-auth/salte-auth"], e) : e(((t = t || self).salte = t.salte || {}, t.salte.auth = t.salte.auth || {}, t.salte.auth.okta = {}), t.salte.auth);
}(this, function (t, e) {
  "use strict";

  var o = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };

  function r(t, e) {
    for (var o = 0; o < e.length; o++) {
      var r = e[o];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  var n = function (t, e, o) {
    return e && r(t.prototype, e), o && r(t, o), t;
  };

  function u(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var i = u(function (t) {
    function e(o, r) {
      return t.exports = e = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, e(o, r);
    }

    t.exports = e;
  });

  var c = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && i(t, e);
  },
      f = u(function (t) {
    function e(o) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function (t) {
        return typeof t;
      } : t.exports = e = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, e(o);
    }

    t.exports = e;
  });

  var a = function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  };

  var s = function (t, e) {
    return !e || "object" !== f(e) && "function" != typeof e ? a(t) : e;
  },
      l = u(function (t) {
    function e(o) {
      return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, e(o);
    }

    t.exports = e;
  });

  function p(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var o,
          r = l(t);

      if (e) {
        var n = l(this).constructor;
        o = Reflect.construct(r, arguments, n);
      } else o = r.apply(this, arguments);

      return s(this, o);
    };
  }

  var y = function (t) {
    c(r, t);
    var e = p(r);

    function r(t) {
      return o(this, r), e.call(this, t);
    }

    return n(r, [{
      key: "name",
      get: function () {
        return "okta";
      }
    }, {
      key: "login",
      get: function () {
        return this.url("".concat(this.config.url, "/oauth2/v1/authorize"));
      }
    }, {
      key: "logout",
      get: function () {
        return this.url("".concat(this.config.url, "/oauth2/v1/logout"), {
          id_token_hint: this.idToken.raw,
          post_logout_redirect_uri: this.redirectUrl("logout")
        });
      }
    }]), r;
  }(e.OpenIDProvider);

  t.Okta = y, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{"@salte-auth/salte-auth":"node_modules/@salte-auth/salte-auth/dist/salte-auth.min.js"}],"node_modules/@salte-auth/azure/dist/azure.min.js":[function(require,module,exports) {
var define;
/**
 * @salte-auth/azure JavaScript Library v3.0.3
 *
 * @license MIT (https://github.com/salte-auth/azure/blob/master/LICENSE)
 *
 * Made with ♥ by Nick Woodward <nick@salte.io>, Dave Woodward <dave@salte.io>
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@salte-auth/salte-auth")) : "function" == typeof define && define.amd ? define(["exports", "@salte-auth/salte-auth"], e) : e(((t = t || self).salte = t.salte || {}, t.salte.auth = t.salte.auth || {}, t.salte.auth.azure = {}), t.salte.auth);
}(this, function (t, e) {
  "use strict";

  var r = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };

  function o(t, e) {
    for (var r = 0; r < e.length; r++) {
      var o = e[r];
      o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
    }
  }

  var n = function (t, e, r) {
    return e && o(t.prototype, e), r && o(t, r), t;
  };

  function u(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var i = u(function (t) {
    function e(r, o) {
      return t.exports = e = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, e(r, o);
    }

    t.exports = e;
  });

  var c = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && i(t, e);
  },
      f = u(function (t) {
    function e(r) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function (t) {
        return typeof t;
      } : t.exports = e = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, e(r);
    }

    t.exports = e;
  });

  var a = function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  };

  var s = function (t, e) {
    return !e || "object" !== f(e) && "function" != typeof e ? a(t) : e;
  },
      l = u(function (t) {
    function e(r) {
      return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, e(r);
    }

    t.exports = e;
  });

  function p() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;

    try {
      return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
    } catch (t) {
      return !1;
    }
  }

  var y = function (t) {
    c(u, t);
    var e,
        o = (e = u, function () {
      var t,
          r = l(e);

      if (p()) {
        var o = l(this).constructor;
        t = Reflect.construct(r, arguments, o);
      } else t = r.apply(this, arguments);

      return s(this, t);
    });

    function u(t) {
      return r(this, u), o.call(this, t);
    }

    return n(u, [{
      key: "name",
      get: function () {
        return "azure";
      }
    }, {
      key: "login",
      get: function () {
        return this.url("".concat(this.config.url, "/oauth2/v2.0/authorize"));
      }
    }, {
      key: "logout",
      get: function () {
        return this.url("".concat(this.config.url, "/oauth2/logout"), {
          post_logout_redirect_uri: this.redirectUrl("logout")
        });
      }
    }]), u;
  }(e.OpenIDProvider);

  t.Azure = y, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{"@salte-auth/salte-auth":"node_modules/@salte-auth/salte-auth/dist/salte-auth.min.js"}],"node_modules/@salte-auth/redirect/dist/redirect.min.js":[function(require,module,exports) {
var define;
/**
 * @salte-auth/redirect JavaScript Library v3.0.2
 *
 * @license MIT (https://github.com/salte-auth/redirect/blob/master/LICENSE)
 *
 * Made with ♥ by Nick Woodward <nick@salte.io>, Dave Woodward <dave@salte.io>
 */
!function (t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports, require("@salte-auth/salte-auth")) : "function" == typeof define && define.amd ? define(["exports", "@salte-auth/salte-auth"], e) : e(((t = t || self).salte = t.salte || {}, t.salte.auth = t.salte.auth || {}, t.salte.auth.redirect = {}), t.salte.auth);
}(this, function (t, e) {
  "use strict";

  var n = function (t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  };

  function r(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
    }
  }

  var o = function (t, e, n) {
    return e && r(t.prototype, e), n && r(t, n), t;
  };

  function i(t, e) {
    return t(e = {
      exports: {}
    }, e.exports), e.exports;
  }

  var u = i(function (t) {
    function e(n, r) {
      return t.exports = e = Object.setPrototypeOf || function (t, e) {
        return t.__proto__ = e, t;
      }, e(n, r);
    }

    t.exports = e;
  });

  var c = function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
      constructor: {
        value: t,
        writable: !0,
        configurable: !0
      }
    }), e && u(t, e);
  },
      f = i(function (t) {
    function e(n) {
      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = e = function (t) {
        return typeof t;
      } : t.exports = e = function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      }, e(n);
    }

    t.exports = e;
  });

  var a = function (t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  };

  var s = function (t, e) {
    return !e || "object" !== f(e) && "function" != typeof e ? a(t) : e;
  },
      l = i(function (t) {
    function e(n) {
      return t.exports = e = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      }, e(n);
    }

    t.exports = e;
  });

  function p(t) {
    var e = function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;

      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (t) {
        return !1;
      }
    }();

    return function () {
      var n,
          r = l(t);

      if (e) {
        var o = l(this).constructor;
        n = Reflect.construct(r, arguments, o);
      } else n = r.apply(this, arguments);

      return s(this, n);
    };
  }

  var y = function (t) {
    c(i, t);
    var r = p(i);

    function i(t) {
      var o;
      return n(this, i), (o = r.call(this, t)).config = e.Utils.Common.defaults(o.config, {
        timeout: 1e4
      }), o;
    }

    return o(i, [{
      key: "connected",
      value: function (t) {
        var n = t.action;

        if (n) {
          var r = this.storage.get("origin");

          if (r && (this.storage.delete("origin"), "login" === n)) {
            var o = e.Utils.URL.parse(location);
            return this.navigate(r), o;
          }
        }
      }
    }, {
      key: "open",
      value: function (t) {
        var n = t.url,
            r = t.timeout,
            o = void 0 === r ? this.config.timeout : r;
        return this.storage.set("origin", location.href), this.navigate(n), new Promise(function (t, n) {
          setTimeout(function () {
            n(new e.SalteAuthError({
              code: "redirect_timeout",
              message: "Timed out while redirecting."
            }));
          }, o);
        });
      }
    }, {
      key: "name",
      get: function () {
        return "redirect";
      }
    }, {
      key: "auto",
      get: function () {
        return !0;
      }
    }]), i;
  }(e.Handler);

  t.Redirect = y, Object.defineProperty(t, "__esModule", {
    value: !0
  });
});
},{"@salte-auth/salte-auth":"node_modules/@salte-auth/salte-auth/dist/salte-auth.min.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _salteAuth = require("@salte-auth/salte-auth");

var _auth = require("@salte-auth/auth0");

var _okta = require("@salte-auth/okta");

var _azure = require("@salte-auth/azure");

var _redirect = require("@salte-auth/redirect");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var auth = new _salteAuth.SalteAuth({
  providers: [new _auth.Auth0({
    url: 'https://salte-os.auth0.com',
    clientID: '9JTBXBREtckkFHTxTNBceewrnn7NeDd0'
  }), new _okta.Okta({
    url: 'https://dev-7822099.okta.com',
    clientID: '0oa8qcwsmjfxmV7OK5d5',
    redirectUrl: window.origin,
    scope: 'openid profile email'
  }), new _azure.Azure({
    url: 'https://login.microsoftonline.com/ed5bb696-a18c-4507-a0ec-5acdc9fa0f0a',
    clientID: 'cc57da3d-e7be-4bae-83d6-b4ce0808f146',
    redirectUrl: window.origin,
    scope: 'openid profile email'
  })],
  handlers: [new _redirect.Redirect({
    default: true
  })]
});
var tokens = auth.config.providers.reduce(function (output, provider) {
  output[provider.name] = provider.idToken || provider.accessToken || provider.code;
  return output;
}, {});

var createOrFindElement = function createOrFindElement(id, options) {
  options = _objectSpread({
    parent: document.body,
    type: 'div'
  }, options);
  var element = document.getElementById(id);

  if (!element) {
    element = document.createElement(options.type);
    element.id = id;
    options.parent.appendChild(element);
  }

  if (options.text) {
    element.innerText = options.text;
  }

  if (options.onClick) {
    element.onclick = options.onClick;
  }

  if ([false, true].includes(options.disabled)) {
    element.disabled = options.disabled;
  }

  return element;
};

var refreshUI = function refreshUI() {
  var _loop = function _loop() {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        provider = _Object$entries$_i[0],
        token = _Object$entries$_i[1];

    console.log(provider, token);
    var expired = !token || token.expired === true;
    var container = createOrFindElement(provider);
    createOrFindElement("".concat(provider, "-header"), {
      parent: container,
      type: 'h2',
      text: provider
    });
    createOrFindElement("".concat(provider, "-login"), {
      parent: container,
      type: 'button',
      text: 'Login',
      disabled: !expired,
      onClick: function onClick() {
        return auth.login(provider);
      }
    });
    createOrFindElement("".concat(provider, "-logout"), {
      parent: container,
      type: 'button',
      text: 'Logout',
      disabled: expired,
      onClick: function onClick() {
        return auth.logout(provider);
      }
    });
    createOrFindElement("".concat(provider, "-user"), {
      parent: container,
      type: 'code',
      text: JSON.stringify(token && token.user, null, 2)
    });
  };

  for (var _i = 0, _Object$entries = Object.entries(tokens); _i < _Object$entries.length; _i++) {
    _loop();
  }
};

var onAuth = function onAuth(error, _ref) {
  var provider = _ref.provider,
      data = _ref.data;
  if (error) console.error(error);else {
    var _auth$provider = auth.provider(provider),
        idToken = _auth$provider.idToken,
        accessToken = _auth$provider.accessToken,
        code = _auth$provider.code;

    tokens[provider] = idToken || accessToken || code || null;
    refreshUI();
  }
};

auth.on('login', onAuth);
auth.on('logout', onAuth);
refreshUI();
},{"@salte-auth/salte-auth":"node_modules/@salte-auth/salte-auth/dist/salte-auth.min.js","@salte-auth/auth0":"node_modules/@salte-auth/auth0/dist/auth0.min.js","@salte-auth/okta":"node_modules/@salte-auth/okta/dist/okta.min.js","@salte-auth/azure":"node_modules/@salte-auth/azure/dist/azure.min.js","@salte-auth/redirect":"node_modules/@salte-auth/redirect/dist/redirect.min.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "42613" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/vanilla.e31bb0bc.js.map