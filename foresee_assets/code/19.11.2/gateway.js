/***************************************
 * @preserve
 * Copyright (c) 2019 Verint Systems, Inc. All rights reserved.
 * ForeSee Web SDK: Gateway Script
 * Version: 19.11.2
 * Built: November 07, 2019, 12:47:06 CST
 ***************************************/
(function () {
/**
 * Holds the global configuration
 * @type {{}}
 */
var globalConfig = {}; // eslint-disable-line prefer-const

var productConfig = {}; // eslint-disable-line prefer-const

/**
 * @preserve
 * [GENERAL_CONFIG]
 */

delete globalConfig._; // so the above comment is not removed


/**
 * Get a product config for a specific product
 * @param {string} product
 * @returns {*} the config for the product
 */

function getProductConfig(product) {


  return productConfig[product];
}
/**
 * For tests (and gateway) only, set the product config.
 * Generally, you would import the product config you would need and then
 * use this method in a beforeEach() to set the product config for your test.
 * @param {string} product
 * @param {*} value config for the product
 */


function setProductConfig(product, value) {


  productConfig[product] = JSON.parse(JSON.stringify(value));
}
/**
 * For tests (and gateway) only, set the global config.
 * Generally, you would import the global config then use this method in
 * a beforeEach() to set the global config for your test.
 * @param {*} config the new global config
 */


function setGlobalConfig(config) {
  globalConfig = JSON.parse(JSON.stringify(config));
}

/*jshint -W030 */

/**
 * DomReady implementation. Compatible with:
 * IE6+
 * Firefox 2+
 * Safari 3+
 * Chrome *
 * Opera *
 * Based on domready 0.3.0 (c) Dustin Diaz 2012 - License MIT
 * https://github.com/ded/domready/tree/v0.3.0
 * Minor changes for hinting and brevity were made.
 */
var domReady = function (ready) {
  var fns = [];

  var _fn2;

  var f = false;
  var doc = document;
  var testEl = doc.documentElement;
  var hack = testEl.doScroll;
  var domContentLoaded = "DOMContentLoaded";
  var addEventListener = "addEventListener";
  var onreadystatechange = "onreadystatechange";
  var readyState = "readyState";
  var loadedRgx = hack ? /^loaded|^c/ : /^loaded|c/;
  var loaded = loadedRgx.test(doc[readyState]);

  function flush(f) {
    loaded = 1;

    do {
      f = fns.shift();

      if (f) {
        f();
      }
    } while (f);
  }

  doc[addEventListener] && doc[addEventListener](domContentLoaded, _fn2 = function fn() {
    doc.removeEventListener(domContentLoaded, _fn2, f);
    flush();
  }, f);
  hack && doc.attachEvent(onreadystatechange, _fn2 = function _fn() {
    if (/^c/.test(doc[readyState])) {
      doc.detachEvent(onreadystatechange, _fn2);
      flush();
    }
  });
  return ready = hack ? function (fn) {
    self != top ? loaded ? fn() : fns.push(fn) : function () {
      try {
        testEl.doScroll("left");
      } catch (e) {
        return setTimeout(function () {
          ready(fn);
        }, 50);
      }

      fn();
    }();
  } : function (fn) {
    loaded ? fn() : fns.push(fn);
  };
}();

// Some global quickreferences
var _W = window;
var _D = _W.document;
var supportsDomStorage = !!_W.sessionStorage;

var _HD = _D.getElementsByTagName("head");

if (_HD && _HD.length > 0) {
  _HD = _HD[0];
} else {
  _HD = _D.body;
}

try {
  if (supportsDomStorage) {
    sessionStorage.setItem("_", "");
    sessionStorage.removeItem("_");
  }
} catch (e) {
  supportsDomStorage = false;
}

/**
 * Some shorthand variable defintions. Many of these
 * are used by our version of requireJS
 */

var op = Object.prototype;
var hasOwn = op.hasOwnProperty;
/**
 * Does an object have a property in its definition?
 * @param obj
 * @param prop
 * @returns {boolean}
 */

var hasProp = function hasProp(obj, prop) {
  return hasOwn.call(obj, prop);
};
/**
 * Cycles over properties in an object and calls a function for each
 * property value. If the function returns a truthy value, then the
 * iteration is stopped.
 */


var eachProp = function eachProp(obj, func) {
  var prop;

  for (prop in obj) {
    if (hasProp(obj, prop)) {
      if (func(obj[prop], prop)) {
        break;
      }
    }
  }
};
/**
 * Test if <tt>obj</tt> is defined, returning either <code>true</code> or <code>false.
 * Since the test is performed against <code>null</code> and is <i>loosely evaluated</i>,
 * a type cast will assure that if <tt>obj</tt> is <code>undefined</code> or <code>null</code>,
 * it will return <code>false</code>.  This test will fail, however, if a second or third level
 * field is tested on an object without first verifying that the hierarchy exists.  So testing
 * to see if <tt>foo.bar.baz</tt> is defined, without first testing <tt>foo</tt> then <tt>bar</tt>
 * will result in an exception even before the method is called.
 * @param obj {Object} The object to test
 * @return {Boolean}
 */


var isDefined = function isDefined(obj) {
  return null !== obj && "undefined" !== typeof obj;
};
/**
 * Test if the given object is a function
 * @param {Object} obj The object to test
 */


var isFunction = function isFunction(obj) {
  return typeof obj == "function";
};
/**
 * Test if the given object is an object
 * @param {Object} obj The object to test
 */


var isObject = function isObject(obj) {
  return typeof obj == "object";
};
/**
 * Test if the given object is an Array
 * @param {Object} obj The object to test
 */


var isArray = function isArray(obj) {
  return Object.prototype.toString.call(obj) == "[object Array]";
};
/**
 * Test if the given object is a NodeList
 * @param {Object} obj The object to test
 */


var isNodeList = function isNodeList(obj) {
  return Object.prototype.toString.call(obj) == "[object NodeList]";
};
/**
 * Test if the given object is a Date
 * @param {Object} obj The object to test
 */


var isDate = function isDate(obj) {
  return obj instanceof Date;
};
/**
 * Is the object a string?
 * @param obj
 * @returns {boolean}
 */


var isString = function isString(obj) {
  return typeof obj == "string";
};
/**
 * To know whether an element is a valid html element or not.
 */


var isElement = function isElement(ele) {
  return ele && ele.nodeType && (ele.nodeType == 1 || ele.nodeType == 11 || ele.nodeType == 9);
};
/**
 * Test if the given object is a plain JavaScript Object
 * @param {Object} obj The object to test
 */


var isPlainObject = function isPlainObject(obj) {
  // Make sure that DOM nodes and window objects don't pass through, as well
  if (!obj || Object.prototype.toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval) {
    return false;
  } // Not own constructor property must be Object


  if (obj.constructor && !hasOwnProperty.call(obj, "constructor") && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf")) {
    return false;
  }

  var plain = true; // Own properties are enumerated firstly

  var key;

  for (key in obj) {
    // Since other libraries might extend Object directly, we need to allow
    // those elements to pass thru and still be a plain object
    if (!plain || key === undefined || hasOwnProperty.call(obj, key) || !hasOwnProperty.call(obj, key) && hasOwnProperty.call(Object.prototype, key)) {
      plain = false;
    }
  }

  return plain;
};
/**
 * Sets the context of a function (taken from underscore.js)
 * @param func
 * @param context The variable that will be passed in and used as 'this'
 * @param arg1, arg2, arg3, etc
 * @returns {Function}
 */


var proxy = function proxy(func, context) {
  return func.bind(context);
};
/**
 * Dispose of all the members of an object. Useful for preventing memory leaks
 * @param obj
 */


var dispose = function dispose(obj) {
  if (obj) {
    if (obj.length) {
      for (var i = obj.length - 1; i >= 0; i--) {
        obj[i] = null;
      }
    }

    for (var prop in obj) {
      var tob = typeof obj[prop];

      if (tob == "function" || tob == "object") {
        obj[prop] = null;
      }
    }
  }

  obj = null;
};
/**
 * Get query string parameters
 * @param parm
 * @returns {string}
 */


var getParam = function getParam(parm) {
  var vars = {};

  _W.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    vars[key] = value;
  });

  var vrl = vars[parm];
  return vrl ? decodeURIComponent(vrl) : vrl;
};
/**
 * Get query string parameters, this cleans up any # values and gets only the value of the key.
 * @param parm
 * @returns {string}
 */


var getQueryString = function getQueryString(parm) {
  var vars = {};

  _W.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    if (value.indexOf("#") > -1) {
      vars[key] = value.substring(0, value.indexOf("#"));
    } else {
      vars[key] = value;
    }
  });

  var vrl = vars[parm];
  return vrl ? decodeURIComponent(vrl) : vrl;
};
/**
 * Run some code at the earliest opportunity out of sync with the current
 * execution cycle.
 * @param cb
 */


var nextTick = function nextTick(cb) {
  return setTimeout(cb, 0);
};
/**
 * Extend one object to include the parameters of the first.
 * If the last argument is a boolean (and false) it will force a surface-level copy.
 * Warning: Arrays are handled like values. ext({a:[1,2]}, {a:[3]}) == {a:[3]}
 */


function ext() {
  var a = arguments;
  var target = a[0] || {};
  var i = 1;
  var lnt = a.length;
  var options;
  var name;
  var copy;
  var surface = arguments[arguments.length - 1] === false; // Handle case when target is a string or something (possible in deep copy)

  if (typeof target !== "object" && typeof target !== "function") {
    target = {};
  } // extend this if only one argument is passed


  if (lnt === i) {
    target = this;
    --i;
  }

  for (; i < lnt; i++) {
    // Only deal with non-null/undefined values
    if (typeof (options = a[i]) != "undefined") {
      // Extend the base object
      for (name in options) {
        copy = options[name]; // Prevent never-ending loop

        if (target === copy) {
          continue;
        } // Don't bring in undefined values


        if (copy !== undefined) {
          if (copy instanceof Array) {
            // Clone the array
            copy = copy.slice(0);
          } else if (copy instanceof Date) {
            copy = new Date(copy.getTime());
          } else if (copy === null) {
            copy = null;
          } else if (typeof copy == "object" && !surface) {
            // Create a deep copy
            copy = ext({}, copy);
          }

          target[name] = copy;
        }
      }
    }
  } // Return the modified object


  return target;
}
/**
 * Compare 2 objects and return the differences.
 * The returned object contains all the properties of objA which
 * are absent or different than of objB.
 * @param objA object to compare
 * @param objB object reference
 * @param stackCache : internally used to block potential circular recursions loop
 * @return obj of all differences
 */


var diff = function diff(objA, objB, stackCache) {
  // keep references of the parent objects to avoid circular recursion loop
  stackCache = stackCache || [];
  var oDiff = {};
  var copy;

  for (var name in objA) {
    copy = objA[name]; // Prevent never-ending loop

    if (copy === objA || copy === undefined) {
      continue;
    } // difference?


    if (!isDefined(objB[name]) || copy !== objB[name]) {
      // go deeper if this is an object
      if (isObject(copy) && !isArray(copy)) {
        // Skip that if it's already one of the parents
        if (stackCache.some(function (c) {
          return c === this;
        }, copy)) {
          continue;
        }

        stackCache.push(copy);
        var childDiff = diff(copy, objB[name], stackCache);

        if (isDefined(childDiff)) {
          // ignore empty objects, strings and arrays
          if (!childDiff.length || childDiff.length > 0) {
            oDiff[name] = childDiff;
          }
        }

        stackCache.pop();
      } else {
        oDiff[name] = copy;
      }
    }
  }

  return oDiff;
};
/**
 * Get/set an attribute
 * @param elm
 * @param atr
 * @returns {*}
 */


var attr = function attr(elm, atr, val) {
  if (isDefined(val)) {
    elm.setAttribute(atr, val);
  }

  return !!elm && elm.getAttribute ? elm.getAttribute(atr) : null;
};
/**
 * Convert a list of parameters and a base URL to a properly qualified URL
 */


var toQueryString = function toQueryString(params, base) {
  var pList = isDefined(base) ? base + (base.indexOf("?") > -1 ? "&" : "?") : "";
  var pm;

  if (params) {
    for (var nm in params) {
      pm = params[nm];

      if (!isString(pm)) {
        pm = JSON.stringify(pm);
      }

      pList += encodeURIComponent(nm) + "=" + encodeURIComponent(pm) + "&";
    }
  }

  return pList;
};
/**
 * Trims the . and .. from an array of path segments.
 * It will keep a leading path segment if a .. will become
 * the first path segment, to help with module name lookups,
 * which act like paths, but can be remapped. But the end result,
 * all paths that use this function should look normalized.
 * NOTE: this method MODIFIES the input array.
 * @param {Array} ary the array of path segments.
 */


function trimDots(ary) {
  var i;
  var part;

  for (i = 0; i < ary.length; i++) {
    part = ary[i];

    if (part === ".") {
      ary.splice(i, 1);
      i -= 1;
    } else if (part === "..") {
      // If at the start, or previous value is still ..,
      // keep them so that when converted to a path it may
      // still work when converted to a path, even though
      // as an ID it is less than ideal. In larger point
      // releases, may be better to just kick out an error.
      if (i === 0 || i == 1 && ary[2] === ".." || ary[i - 1] === "..") {
        continue;
      } else if (i > 0) {
        ary.splice(i - 1, 2);
        i -= 2;
      }
    }
  }
}
/**
 * Compute
 * @param vstr
 * @returns {*}
 */


var compute = function compute(vstr) {
  var f = new [].constructor.constructor(vstr);
  return f.call(_W);
};
/**
 * Safer toLowerCase
 * @param str
 * @returns {*}
 */


var toLowerCase = function toLowerCase(str) {
  if (isString(str)) {
    return str.toLowerCase();
  }

  return "";
};
/**
 * Hide FSR UI Visibility with CSS
 * @param any
 * @returns {*}
 */


var setFSRVisibility = function setFSRVisibility(isVisible) {
  var htmlClassList = document.documentElement.classList;
  var hideClass = "_fsrclientInvokedHide";

  if (isVisible) {
    htmlClassList.add(hideClass);
  } else {
    htmlClassList.remove(hideClass);
  }
};

/**
 * Exposes API methods to the page
 * @type {{_enforceGlobalNS: API._enforceGlobalNS, expose: API.expose}}
 */

var API = {
  /**
   * Sets up the global namespace for API
   * @private
   */
  _enforceGlobalNS: function _enforceGlobalNS() {
    if (!_W.FSR) {
      _W.FSR = {};
    }

    if (!_W.FSFB) {
      _W.FSFB = {};
    }
  },

  /**
   * Expose a function or property onto the API
   * @param name
   * @param obj
   */
  expose: function expose(name, obj) {
    API._enforceGlobalNS(); // We can't add this functionality to trigger/feedback as they
    // shouldn't have knowledge of QA mode, so we add it here by
    // intercepting the definition of clearState and clearStateFeedback


    if (name === "clearState" || name === "clearStateFeedback") {
      obj = interceptClearState(obj);
    }

    _W.FSR[name] = _W.FSFB[name] = obj;
  },

  /**
   * Get an API item
   * @param name
   * @returns {*}
   */
  retrieveFromAPI: function retrieveFromAPI(name) {
    API._enforceGlobalNS();

    return _W.FSR[name];
  }
}; // dependency invert

var interceptions = [];

function addClearStateIntercept(cb) {
  interceptions.push(cb);
}

function interceptClearState(cb) {
  return function () {
    for (var i = 0; i < interceptions.length; i++) {
      interceptions[i]();
    }

    cb();
  };
} // Expose setFSRVisibility across all products instead of individually.


API.expose("setFSRVisibility", setFSRVisibility);

/**
 * Reads the status of a feature flag and execute the provided callbacks.
 * @param {String} flagName
 * @param {Object} [option]
 * @param {Function} [option.on] executed if flag is true. `after` will be passed if an argument is expected
 * @param {Function} [option.off] executed if flag is false. `after` will be passed if an argument is expected
 * @param {Function} [option.after] executed after `on` or `off` are done, or as callback of either
 */

function featureFlag(flagName, option) {
  option = option || {};

  option.after = option.after || function () {};

  if (!flagName) {

    option.after();
    return null;
  }

  if (!globalConfig.featureFlags) {

    option.after();
    return null;
  }

  var flagValue = globalConfig.featureFlags[flagName];

  if (typeof flagValue !== "boolean") {


    option.after();
    return null;
  }

  if (flagValue && typeof option.on === "function") {
    option.on(option.after); // If on() actually doesnt have an argument, call option.after()

    if (option.on.length < 1) {
      option.after();
    }

    return flagValue;
  }

  if (!flagValue && typeof option.off === "function") {
    option.off(option.after); // If off() actually doesnt have an argument, call option.after()

    if (option.off.length < 1) {
      option.after();
    }

    return flagValue;
  }
}

/**
 * Reads commands embedded in hashes in the URL. Returns true or false.
 * @param commandName
 * @returns Boolean
 */
var fsCmd = function fsCmd(commandName) {
  var hv = ("" + location.hash).toLowerCase();
  commandName = (commandName || "").toLowerCase();

  if (/fscommand|fscmd|acscmd|acscommand/.test(hv) && hv.indexOf(commandName) > -1) {
    return true;
  }

  return false;
};

/**
 * Promise polyfill from https://github.com/taylorhakes/promise-polyfill
 *
 * Copyright (c) 2014 Taylor Hakes
 * Copyright (c) 2014 Forbes Lindesay
 *
 * Licensed under MIT license.
 */

var PromisePolyfill = function () {
  /**
   * @this {Promise}
   */
  function finallyConstructor(callback) {
    var constructor = this.constructor;
    return this.then(function (value) {
      return constructor.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return constructor.resolve(callback()).then(function () {
        return constructor.reject(reason);
      });
    });
  }

  function noop() {} // Polyfill for Function.prototype.bind


  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }
  /**
   * @constructor
   * @param {Function} fn
   */


  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError("Promises must be constructed via new");
    if (typeof fn !== "function") throw new TypeError("not a function");
    /** @type {!number} */

    this._state = 0;
    /** @type {!boolean} */

    this._handled = false;
    /** @type {Promise|undefined} */

    this._value = undefined;
    /** @type {!Array<!Function>} */

    this._deferreds = [];
    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }

    if (self._state === 0) {
      self._deferreds.push(deferred);

      return;
    }

    self._handled = true;
    nextTick(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;

      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }

      var ret;

      try {
        // eslint-disable-next-line callback-return
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }

      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError("A promise cannot be resolved with itself.");

      if (newValue && (typeof newValue === "object" || typeof newValue === "function")) {
        var then = newValue.then;

        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === "function") {
          doResolve(bind(then, newValue), self);
          return;
        }
      }

      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      nextTick(function () {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }

    self._deferreds = null;
  }
  /**
   * @constructor
   */


  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === "function" ? onFulfilled : null;
    this.onRejected = typeof onRejected === "function" ? onRejected : null;
    this.promise = promise;
  }
  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */


  function doResolve(fn, self) {
    var done = false;

    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype["catch"] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    // @ts-ignore
    var prom = new this.constructor(noop);
    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.prototype["finally"] = finallyConstructor;

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === "undefined") throw new TypeError("Promise.all accepts an array");
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === "object" || typeof val === "function")) {
            var then = val.then;

            if (typeof then === "function") {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }

          args[i] = val;

          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === "object" && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  };

  return Promise;
}();

var MaybeNativePromise = _W.Promise || PromisePolyfill;
var isIE = /MSIE |Trident/.test(window.navigator.userAgent); // on IE always use our bundled polyfill not a 3rd party. Otherwise try to use
// the browser's Promise implementation (which will be faster).

var Promise = isIE ? PromisePolyfill : MaybeNativePromise;

/**
 * Event Bind
 * @param element
 * @param type
 * @param handler
 * @private
 */

function __eB(element, type, handler) {
  if (element.addEventListener) {
    element.addEventListener(type, handler, false);
  } else {
    element.attachEvent("on" + type, handler);
  }
}
/**
 * Bind to the onload event. Also works if the onload event has already fired
 * @param cb
 */


var winload = function winload(cb) {
  if (_D.readyState === "complete") {
    nextTick(cb);
  } else {
    __eB(_W, "load", cb);
  }
};

var assetLocation = null;
var codeLocation = null;
var embedAttrs = null;
var gwConfigOverride = null;
var hasSSL = null;
var home = null;
var isProduction = null;
var isSelfHosted = null;
var makeAssetURI = null;
var makeURI = null;
var startTS = _W.performance && _W.performance.timing ? _W.performance.timing.responseStart : new Date().getTime();
var tagVersion = globalConfig.codeVer || "";
/**
 * This is called when locator.locateGW() is called. We need
 * to update a few API variables in that case to ensure the API
 * is up to date. This also makes the locator script more testable.
 */

function locatorUpdate(locator) {
  assetLocation = locator.assetOverride;
  codeLocation = locator.rootOverride;
  embedAttrs = locator.tagAttrs;
  gwConfigOverride = locator.productCfgOverride;
  hasSSL = locator.hasSSL;
  home = locator.gatewayLocation;
  isProduction = locator.isProduction;
  isSelfHosted = locator.isSelfHosted;
  makeAssetURI = locator.normalizeAssetUrl;
  makeURI = locator.normalizeUrl;
  tagVersion = globalConfig.codeVer || "";
}

function resetStartTS() {
  startTS = new Date().getTime();
}

/**
 * Helper function to recurse the config heirarchy to a specific key
 */

function getNested(obj, key, unsafe) {
  if (unsafe === void 0) {
    unsafe = false;
  }

  var parts = key.split(".");
  var index = 1;
  var node = obj;
  var len = parts.length;
  var nextkey = parts[0];

  while (index < len) {
    node = node[nextkey];

    if (!node) {
      break;
    }

    nextkey = parts[index++]; // support indexing into an array

    if (isArray(node) && !isNaN(parseFloat(nextkey)) && isFinite(nextkey)) {
      nextkey = +nextkey;
    }
  }

  if (index !== len || !node) {
    if (unsafe) return;
    throw new Error("Can't find config: " + parts.slice(0, index).join("."));
  }

  return {
    obj: node,
    key: nextkey
  };
}

/**
 * FS module for shared common code.
 */
var config = globalConfig; // depricated do not use

var dec = decodeURIComponent;
var enc = encodeURIComponent;

var fs = /*#__PURE__*/Object.freeze({
config: config,
dec: dec,
enc: enc,
getProductConfig: getProductConfig,
get globalConfig () { return globalConfig; },
API: API,
domReady: domReady,
featureFlag: featureFlag,
fsCmd: fsCmd,
Promise: Promise,
get supportsDomStorage () { return supportsDomStorage; },
winReady: winload,
get assetLocation () { return assetLocation; },
get codeLocation () { return codeLocation; },
get embedAttrs () { return embedAttrs; },
get gwConfigOverride () { return gwConfigOverride; },
get hasSSL () { return hasSSL; },
get home () { return home; },
get isProduction () { return isProduction; },
get isSelfHosted () { return isSelfHosted; },
get makeAssetURI () { return makeAssetURI; },
get makeURI () { return makeURI; },
resetStartTS: resetStartTS,
get startTS () { return startTS; },
get tagVersion () { return tagVersion; },
attr: attr,
compute: compute,
diff: diff,
dispose: dispose,
eachProp: eachProp,
ext: ext,
getParam: getParam,
getQueryString: getQueryString,
hasProp: hasProp,
isArray: isArray,
isDate: isDate,
isDefined: isDefined,
isElement: isElement,
isFunction: isFunction,
isNodeList: isNodeList,
isObject: isObject,
isPlainObject: isPlainObject,
isString: isString,
nextTick: nextTick,
proxy: proxy,
setFSRVisibility: setFSRVisibility,
toLowerCase: toLowerCase,
toQueryString: toQueryString,
getNested: getNested
});

/**
 * Module represents an AMD module
 */

var Module =
/*#__PURE__*/
function () {
  /**
   * @param {string} name
   */
  function Module(name) {
    var _this = this;

    /**
     * The name of the module
     * @type {string}
     */
    this.name = name;
    /**
     * The promise of a value for the module
     * @type {Promise<*>}
     */

    this.promise = new Promise(function (resolve) {
      return _this._resolve = resolve;
    });
    this._loaded = false;
  }
  /**
   * Resolve the module to a value
   * @param {*} value The value of the module or a promise for it
   */


  var _proto = Module.prototype;

  _proto.resolve = function resolve(value) {
    if (!this._resolve) {

      return;
    }

    this._resolve(value);

    this._resolve = null;
    this._loaded = true;
  }
  /**
   * Is the module resolved?
   * @returns {Boolean} resolved or not
   */
  ;

  _proto.isResolved = function isResolved() {
    return !this._resolve;
  }
  /**
   * Load the module by script tag
   */
  ;

  _proto.load = function load() {
    var _this2 = this;

    if (this._loaded) return; // can only load modules whose name is a url

    if (this.name.indexOf("/") < 0) {

      return;
    }

    this._loaded = true;

    var tag = _D.createElement("script");

    tag.type = "text/javascript";
    tag.charset = "utf-8";
    tag.async = true;
    tag.setAttribute("data-name", this.name);
    return new Promise(function (resolve, reject) {
      var onload = function onload() {
        cleanup();
        resolve();
      };

      var onerror = function onerror() {
        cleanup();
        reject(new Error("Foresee WebSDK failed to load: " + _this2.name));
      };

      function cleanup() {
        tag.removeEventListener("load", onload, false);
        tag.removeEventListener("error", onerror, false);
        tag.parentNode.removeChild(tag);
      }

      tag.addEventListener("load", onload, false);
      tag.addEventListener("error", onerror, false);
      tag.src = _this2.name;

      _HD.appendChild(tag);
    });
  };

  return Module;
}();
/**
 * A registry of AMD modules.
 */


var Registry =
/*#__PURE__*/
function () {
  function Registry() {
    this._modules = {};
    this._pending = [];
  }
  /**
   * Loads a list of dependencies if they haven't been loaded yet, and
   * provides them as arguments to the userfn provided.
   *
   * Note: if a module is loaded that exports a startup function, that
   * startup function will be called.
   *
   * @param {string[]} deps The list of dependencies
   * @param {Function} [userfn] Optional function to use those dependencies
   */


  var _proto2 = Registry.prototype;

  _proto2.require = function require(deps, userfn) {
    var promises = [];

    for (var i = 0; i < deps.length; i++) {
      if (deps[i] === "exports") {
        // exports module is special
        promises.push({});
      } else {
        var mod = this._getModule(deps[i]);

        promises.push(mod.promise);

        this._load(mod);
      }
    }

    if (userfn) {
      Promise.all(promises).then(function (impls) {
        // nextTick here to ensure errors are not caught by the promise chain
        nextTick(function () {
          return userfn.apply(_W, impls);
        });
      });
    }
  }
  /**
   * Define a module. The name is only optional if the define is in a file
   * just loaded by another module (or the gateway) as a requirement.
   *
   * @param {string} [name] The name of the module to define
   * @param {string[]} deps The list of dependencies for the module
   * @param {Function} implementation Function which returns the module value
   */
  ;

  _proto2.define = function define(name, deps, implementation) {
    var _this3 = this;

    if (isFunction(deps)) {
      implementation = deps;
    }

    if (isArray(name)) {
      deps = name;
      name = null;
    }

    var promise = new Promise(function (resolve) {
      _this3.require(deps, function () {
        for (var _len = arguments.length, impls = new Array(_len), _key = 0; _key < _len; _key++) {
          impls[_key] = arguments[_key];
        }

        // need to call this in nexttick so the promise doesn't swallow
        // any exceptions in the script
        nextTick(function () {
          return resolve(_this3._run(implementation, impls));
        });
      });
    });

    this._register(name, promise);
  }
  /**
   * Get the module, creating it if needed.
   * @private
   */
  ;

  _proto2._getModule = function _getModule(name) {
    this._modules[name] = this._modules[name] || new Module(name);
    return this._modules[name];
  }
  /**
   * Register a module that was defined or loaded
   * @private
   */
  ;

  _proto2._register = function _register(name, value) {
    if (!name) {
      var scriptTag = _D.currentScript;

      if (!scriptTag) {
        this._pending.push(value);

        return;
      }

      name = scriptTag.getAttribute("data-name");
    }

    this._getModule(name).resolve(value);
  }
  /**
   * Runs the implementation function of a module.
   * If the implementation exports a startup function that is called too.
   * @private
   */
  ;

  _proto2._run = function _run(implementation, depimpls) {
    // todo: handle deferred loading here
    var value = implementation.apply(_W, depimpls);

    if (value && value.startup) {
      // call the startup function
      value.startup();
    }

    return value;
  }
  /**
   * Loads a module by temporarily adding a script tag to the page.
   * @private
   */
  ;

  _proto2._load = function _load(mod) {
    var _this4 = this;

    var prom = mod.load();
    if (!prom) return;
    prom.then(function () {
      if (!mod.isResolved()) {
        // do legacy loading on browsers that don't support currentScript
        _this4._legacyLoad(mod);
      }
    }).catch(function (err) {
    });
  }
  /**
   * This is called only on browsers that don't support document.currentScript.
   * This should be safe to remove once all supported browsers support currentScript.
   * @private
   */
  ;

  _proto2._legacyLoad = function _legacyLoad(mod) {
    if (this._pending.length < 1) {

      return;
    } // Presuming that the first script to load was also the first to run


    var pending = this._pending.shift();

    this._register(mod.name, pending);
  };

  return Registry;
}(); // Set up the global registry


var registry = new Registry();
/**
 * Define a module. The name is only optional if the define is in a file
 * just loaded by another module (or the gateway) as a requirement.
 *
 * @param {string} [name] The name of the module to define
 * @param {string[]} deps The list of dependencies for the module
 * @param {Function} implementation Function which returns the module value
 */

var _fsDefine = registry.define.bind(registry);
/**
 * Loads a list of dependencies if they haven't been loaded yet, and
 * provides them as arguments to the userfn provided.
 *
 * Note: if a module is loaded that exports a startup function, that
 * startup function will be called.
 *
 * @param {string[]} deps The list of dependencies
 * @param {Function} [userfn] Optional function to use those dependencies
 */


var _fsRequire = registry.require.bind(registry); // Allow them to be requirements


_fsDefine("define", function () {
  return _fsDefine;
});

_fsDefine("require", function () {
  return _fsRequire;
}); // export globally


_W._fsDefine = _W._acsDefine = _fsDefine;
_W._fsRequire = _W._acsRequire = _fsRequire;

/**
 * Traverses a config object looking to replace the following shape with a window variable:
 *
 *   ```
 *   {
 *     source: "variable",
 *     path: "path.to.variable",
 *     default: "default value"
 *   }
 *   ```
 *
 * @param {*} config the config to traverse
 * @returns config
 */

function dynamicConfigReplacer(config) {
  if (typeof config === "object") {
    eachProp(config, function (val, key) {
      if (typeof val !== "object" || val == null) return; // if it doesn't look like a dynamic config definition

      if (val.source !== "variable" || !isDefined(val.default) || !isDefined(val.path)) {
        // recurse instead
        dynamicConfigReplacer(val);
        return;
      } // retrieve value from window


      var place = getNested(_W, val.path, true);
      var value = place && place.obj[place.key]; // if null or undefined, set to default

      if (!isDefined(value) || value === null) {
        config[key] = val.default;
        return;
      }

      if (typeof value === "function" || typeof value === "object") {
        throw new Error("Cannot replace config setting " + key + " with path " + val.path + " with a " + typeof value);
      } // need to coerce type to be the same as the default


      switch (typeof val.default) {
        case "string":
          value = escapeHTML(String(value));
          break;

        case "number":
          value = parseFloat(value);
          break;

        case "boolean":
          if (String(value) === "false") {
            value = false;
          } else {
            value = Boolean(value);
          }

          break;

        default:
          throw new Error("Default for " + key + " replaced with path " + val.path + " is invalid type " + typeof val.default);
      } // set it


      config[key] = value;
    });
  }

  return config;
}

var htmlEscapeRegex = /[&<>"']/g;
var htmlEscapes = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
/**
 * Escape HTML by replacing with entities
 */

function escapeHTML(v) {
  // testing first should be slightly faster for strings without html
  if (htmlEscapeRegex.test(v)) {
    return v.replace(htmlEscapeRegex, function (m) {
      return htmlEscapes[m];
    });
  }

  return v;
}

/**
 * Locating self
 * @type {{}}
 */

var locator = {};
var skipInit = false;

function reset() {
  skipInit = false;
  /**
   * What environment are we in?
   * @type {string}
   */

  locator.environment = "production";
  locator.isSelfHosted = false;
  locator.hasSSL = true;
  locator.assetOverride = undefined;
  locator.rootOverride = undefined;
  /**
   * Holds all the attributes on the gateway tag
   */

  locator.tagAttrs = {};
  /**
   * Where these files are found
   */

  locator.gatewayLocation = "";
  /**
   * Specifies the environment that this has been deployed to
   * @type {boolean}
   */

  locator.isProduction = false;
  locator.productCfgOverride = null;
  locator.gwScript = null;
  locatorUpdate(locator);
}
/**
 * Subtract from parts of a url
 * @param base
 * @param notches
 * @returns {*}
 */


function subtractFromURL(base, notches) {
  var pref = base.substr(0, base.indexOf("//")) + "//";
  var suff = base.substr(pref.length);
  var dom = suff.substr(suff.indexOf("/") + 1);
  var tail = dom.substr(dom.lastIndexOf("/") + 1);
  dom = dom.substr(0, dom.length - tail.length - 1);
  suff = suff.substr(0, suff.indexOf("/"));
  var bits = dom.split("/");
  bits.length -= Math.min(bits.length, notches);
  return (pref + suff + "/" + bits.join("/") + tail).replace(/\/\/\//g, "//");
}
/**
 * Take any url and product a correct absolute url from it
 */


locator.normalizeUrl = function (url) {
  // This is needed for OLD trigger code
  url = url.replace("foresee/", "trigger/");
  var rooturl = locator.gatewayLocation || "";
  var suff;

  if (url.indexOf("v=") > -1) {
    return url;
  } // First, fix the URL


  if (url.substr(0, 1) == "$") {
    if (locator.rootOverride) {
      var sl = "/";

      if (locator.rootOverride[locator.rootOverride.length - 1] === "/") {
        sl = "";
      }

      return url.replace("$", "" + locator.rootOverride + sl);
    } else {
      suff = ("code/" + globalConfig.codeVer + "/") + url.replace("$", "");
      return rooturl == "/" ? rooturl + suff : subtractFromURL(rooturl, 3) + suff;
    }
  }

  if (url.indexOf("//") == -1) {
    url = rooturl.substr(rooturl.length - 1, 1) == "/" && url.substr(0, 1) == "/" ? rooturl + url.substr(1) : rooturl + url;
  }

  return url;
};
/**
 * Point a url at an asset
 * @param url
 */


locator.normalizeAssetUrl = function (url) {
  if (locator.assetOverride) {
    if (url.substr(0, 1) === "/") {
      // assets in replays start with a slash
      return locator.assetOverride + url.substr(1);
    }

    return locator.assetOverride + url;
  }

  return locator.normalizeUrl(url);
};

locator.locateGW = function () {
  var scrs = _D.getElementsByTagName("script");

  var gwScr;
  var pgwScr;
  var g = "gateway";
  var src;
  var s = "/";
  var gwl;
  var cv;
  var au;
  var svu;
  var asso;
  var rovr;
  var prodcfg;
  var isself;
  var hasssl;

  if (_HD) {
    skipInit = attr(_HD, "data-skipfsinit") == "true";
    gwl = attr(_HD, "data-fsgatewaylocparam");
    cv = attr(_HD, "data-codeversion");
    au = attr(_HD, "data-analyticsurl");
    svu = attr(_HD, "data-surveyurl");
    asso = attr(_HD, "data-product-assets");
    rovr = attr(_HD, "data-codelocation");
    prodcfg = attr(_HD, "data-productconfig");
    isself = attr(_HD, "data-isselfhosted"); // whether or not the host has SSL

    hasssl = attr(_HD, "data-hasssl");

    if (gwl) {
      gwl = getParam(gwl);
    }

    locator.isSelfHosted = false;

    if (isself) {
      locator.isSelfHosted = getParam(isself) == "true";
    }

    locator.hasSSL = true;

    if (hasssl) {
      locator.hasSSL = getParam(hasssl) == "true" || "false";
    }

    if (rovr) {
      locator.rootOverride = getParam(rovr);
    }

    if (asso) {
      locator.assetOverride = getParam(asso);

      if (locator.assetOverride === "undefined") {
        locator.assetOverride = undefined;
      }
    }

    if (prodcfg) {
      locator.productCfgOverride = getParam(prodcfg);
    }

    if (cv) {
      globalConfig.codeVer = getParam(cv);
    }

    if (au) {
      globalConfig.analyticsUrl = getParam(au);
    }

    if (svu) {
      globalConfig.surveyUrl = getParam(svu);
    }
  } // if not yet present, get the site key from the URL (case: Tracker window)


  if (typeof globalConfig.siteKey !== "string" || globalConfig.siteKey.length < 1) {
    globalConfig.siteKey = getParam("sitekey");
  } // Note: document.currentScript may be used instead of all these shenanigans for non-IE browsers


  eachProp(scrs, function (scr, prop) {
    if (prop !== "length") {
      src = attr(scr, "src") || "";
      var dv = attr(scr, "data-vendor");

      if ((dv == "fs" || dv == "acs") && attr(scr, "data-role") == g) {
        // This is definitely the gateway script
        gwScr = scr;
      } else if (src.indexOf(g) > -1) {
        // This is potentially the gateway script
        pgwScr = scr;
      }
    }
  }); // If we didn't get a definite match, then maybe we found a potential match

  if (!gwScr) {
    gwScr = pgwScr;
  }

  if (!gwScr) {

    throw new Error('FSR: No script tag has been found. Expected is a script tag with the following attributes:  data-vendor="fs"  data-role="gateway"  src="[a_path_leading_to]/gateway[.min].js". Aborting loading.');
  }

  for (var i = 0; i < gwScr.attributes.length; i++) {
    var tr = gwScr.attributes[i];
    locator.tagAttrs[tr.name] = tr.value;
  }

  locator.gwScript = gwScr;
  src = gwl || attr(gwScr, "src");
  locator.environment = attr(gwScr, "data-environment") || locator.environment;
  locator.rootOverride = attr(gwScr, "data-codelocation") || locator.rootOverride;
  locator.assetOverride = attr(gwScr, "data-product-assets") || locator.assetOverride;
  locator.isSelfHosted = attr(gwScr, "data-isselfhosted") ? attr(gwScr, "data-isselfhosted") == "true" : locator.isSelfHosted;
  locator.hasSSL = attr(gwScr, "data-hasssl") || locator.hasSSL;

  if (src.indexOf(":/") == -1 && src.substr(0, 1) != s) {
    scrs = ("" + _W.location.href).split(s);

    if (scrs[scrs.length - 1].indexOf(".") > -1 && scrs[scrs.length - 1].toLowerCase() != _W.location.hostname.toLowerCase()) {
      scrs.pop();
    }

    src = scrs.join(s) + (src.substr(0, 1) == s ? "" : s) + src;
  }

  src = src.split(s);
  src.pop();
  trimDots(src);
  locator.gatewayLocation = src.join(s) + s;
  locator.isProduction = locator.gatewayLocation.toLowerCase().indexOf("production") > -1; // make sure the rootOverride and assetOverride end in a slash

  if (locator.rootOverride && locator.rootOverride.substr(locator.rootOverride.length - 1) != s) {
    locator.rootOverride += s;
  }

  if (locator.assetOverride && locator.assetOverride.substr(locator.assetOverride.length - 1) != s) {
    locator.assetOverride += s;
  }

  locatorUpdate(locator);
}; // reset function for tests


reset();
var _fsNormalizeUrl = locator.normalizeUrl;

_W["_fsNormalizeUrl"] = _W["_acsNormalizeUrl"] = locator.normalizeUrl;
_W["_fsNormalizeAssetUrl"] = locator.normalizeAssetUrl;

var QA_CONFIG_OVERRIDE = "fsrQAConfig";
/**
 * Check if we should enter QA mode to configure the SDK
 */

function shouldEnterQAMode() {
  try {
    if (supportsDomStorage && sessionStorage.getItem(QA_CONFIG_OVERRIDE)) {

      return false;
    }
  } catch (e) {// ignore
  }

  return fsCmd("qa") || getParam("fsr-qa-mode");
}
/**
 * If there has been a config override stored in SessionStorage,
 * then apply that override now.
 */


function applyQAOverrides() {
  var overrideStr;
  if (!supportsDomStorage) return;

  try {
    overrideStr = sessionStorage.getItem(QA_CONFIG_OVERRIDE);
  } catch (e) {// ignore
  }

  if (!overrideStr) return;
  var overrides = JSON.parse(overrideStr);
  setGlobalConfig(overrides.global);
  eachProp(ext({
    feedback: null
  }, productConfig), function (originalConfig, name) {
    if (overrides[name]) {
      setProductConfig(name, overrides[name]);
    }
  });
}
/**
 * Make sure on clearState that the QA state is cleared
 */


function clearQAModeConfigs() {
  if (!supportsDomStorage) return;

  try {
    sessionStorage.removeItem(QA_CONFIG_OVERRIDE);
  } catch (e) {// ignore
  }
}

addClearStateIntercept(clearQAModeConfigs);
/**
 * Boot the gateway into a QA mode which allows QA to change
 * the configuration before the SDK fully boots.
 */

function enterQAMode(bootSDK) {

  _fsRequire([_fsNormalizeUrl("$fs.utils.js")], function (utils) {
    defineQAAPI(bootSDK, utils, ext({
      trigger: null,
      feedback: null,
      record: null
    }, productConfig));
  });
}
/**
 * Define the API that QA can use to change the configuration
 */


function defineQAAPI(bootSDK, utils, configs) {
  configs.global = globalConfig;
  /**
   * Expose a QA interface on the api.
   */

  API.expose("QA", {
    /**
     * Get the config at a specific dot-separated key.
     */
    get: get,

    /**
     * Set the config at a specific dot-separated key.
     */
    set: set,

    /**
     * Copy a value from one key to another.
     */
    copy: function copy(fromKey, toKey) {
      var value = JSON.parse(JSON.stringify(get(fromKey)));
      return set(toKey, value);
    },

    /**
     * Remove key from its containing object or array.
     */
    remove: function remove(key) {
      var node = getNested(configs, key);

      if (isArray(node.obj)) {
        node.obj.splice(node.key, 1);
      } else {
        delete node.obj[key];
      }
    },

    /**
     * Insert at a specific index in an array. Use negative
     * index values to count backwards from the end of the array.
     */
    insert: function insert(key, index, value) {
      var arr = get(key);

      if (!isArray(arr)) {
        throw new Error("Expected " + key + " to be an array");
      }

      if (index < 0) {
        index = arr.length + 1 + index;
      }

      arr.splice(index, 0, value);
    },

    /**
     * Get the value of a feature flag
     */
    getFlag: function getFlag(name) {
      return get("global.featureFlags." + name);
    },

    /**
     * Set the value of a feature flag
     */
    setFlag: function setFlag(name, value) {
      return set("global.featureFlags." + name, value);
    },

    /**
     * Get the value of all feature flags
     */
    getAllFlags: function getAllFlags() {
      return get("global.featureFlags");
    },

    /**
     * Set a value to all feature flags
     */
    setAllFlags: function setAllFlags(value) {
      var flags = get("global.featureFlags");
      var flagKeys = Object.keys(flags);
      var len = flagKeys.length;

      for (var index = 0; index < len; index++) {
        set("global.featureFlags." + flagKeys[index], value);
      }
    },

    /**
     * Finished configuring the SDK, now boot it.
     */
    done: function done() {
      // remove QA methods
      delete _W.FSR.QA;
      delete _W.FSFB.QA; // save to session storage

      if (supportsDomStorage) {
        // purposely not wrapping this in a try/catch so that if
        // sessionStorage is broken, hopefully that will break tests
        sessionStorage.setItem(QA_CONFIG_OVERRIDE, JSON.stringify(configs));
      } // exit QA mode


      bootSDK();
    }
  });
  /**
   * Recurse to a key and get the value.
   */

  function get(key) {
    var node = getNested(configs, key);
    return node.obj[node.key];
  }
  /**
   * Recurse to a key and set its value.
   */


  function set(key, value) {
    var node = getNested(configs, key);
    node.obj[node.key] = value;
  }
}

/**
 * Expose a module to the world
 */

_fsDefine("fs", function () {
  return fs;
}); // Backwards compatibility


_fsDefine("_acs", function () {
  return fs;
});

/**
 * To get the gateway to load dependencies in parallel on load, add them
 * here. Otherwise it will get the dependencies from the loaded files.
 */

var productDependencies = {
  record: ["$fs.record.js"],
  feedback: ["$fs.feedback.js", "$fs.survey.js"],
  trigger: ["$fs.trigger.js"]
};

function bootSDK() {
  if (typeof _W.opera !== "undefined" && _W.opera.toString() === "[object Opera]") {
    return;
  }

  if (!JSON || document.documentMode < 10) {
    return;
  }

  if (typeof _W["_fsAlreadyBootedSDK"] !== "undefined") {
    // since this is a serious error, we don't follow our rule about not
    // emitting console messages in production
    console.error("Foresee WebSDK detected its embed code ran more than once.");
    console.error("This is a serious problem, please contact support.");
    return;
  }

  _W["_fsAlreadyBootedSDK"] = true;

  domReady(onDOMReady);
}

function onDOMReady() {
  // Everything has to be done on nextTick to avoid race conditions

  nextTick(function () {
    var dm;
    var i;
    var isself;
    var precfg;
    var fsrd = "fsReady";

    if (locator.gwScript) {
      dm = attr(locator.gwScript, "data-module");
      isself = attr(locator.gwScript, "data-isselfhosted") == "true";

      if (!globalConfig.selfHosted) {
        globalConfig.selfHosted = isself;
      }

      precfg = attr(locator.gwScript, "data-config");

      if (precfg) {
        precfg = JSON.parse(atob(precfg));
        ext(globalConfig, precfg.global);
      }
    } // This is a temporary measure for legacy embed snippets


    if (isDefined(_W["acsReady"])) {
      _W[fsrd] = _W["acsReady"];
    }

    if (!isDefined(_W["acsReady"])) {
      var altR = function altR() {
        var aT = "__" + fsrd + "_stk__";
        _W[aT] = _W[aT] || [];

        _W[aT].push(arguments);
      };

      _W["acsReady"] = _W[fsrd] || altR;
    }

    var dependencies = [];
    /**
     * This will be called at the end regardless
     */

    var finalSetup = function finalSetup() {
      applyQAOverrides(); // Override some configs with values from window variables

      dynamicConfigReplacer(globalConfig);
      dynamicConfigReplacer(productConfig);
      eachProp(productConfig, function (v, name) {
        // skip disabled products
        if (!globalConfig.products[name]) return;
        dependencies = dependencies.concat(productDependencies[name]);
      }); // all products depend on utils

      dependencies.push("$fs.utils.js"); // and utils depends on compress -- TODO: load only on demand?

      dependencies.push("$fs.compress.js");
      eachProp(globalConfig.products, function (isOn, name) {
        if (isOn && !productConfig[name]) {
          // product is missing its config, turn it off
          globalConfig.products[name] = false;
        }
      });

      if (!dm) {

        for (i = 0; i < dependencies.length; i++) {
          dependencies[i] = locator.normalizeUrl(dependencies[i]);
        }

        _fsRequire(dependencies, function () {
          if (!_W["__" + fsrd + "__"]) {
            // Legacy acsReady/fsReady functionality
            _W["__" + fsrd + "__"] = _W["__acsReady__"] = _W["fsReady"] = _W["acsReady"] = function () {
              var args = arguments;
              nextTick(function () {
                for (var p = 0; p < args.length; p++) {
                  if (isFunction(args[p])) {
                    args[p].call(_W);
                  }
                }
              });
            };

            var ns = _W["__" + fsrd + "_stk__"];

            var fnmaker = function fnmaker(cb) {
              return function () {
                for (var p = 0; p < cb.length; p++) {
                  cb[p].call(_W);
                }
              };
            };

            if (ns) {
              for (var _i = 0; _i < ns.length; _i++) {
                nextTick(fnmaker(ns[_i]));
              }

              delete _W["__" + fsrd + "_stk__"];
            }
          }
        });
      } else if (dm) {
        nextTick(function () {

          _fsRequire([_fsNormalizeUrl(dm)], function () {
          });
        });
      }
    }; // Are we in a self-host situation?


    if (globalConfig.selfHosted && !precfg) {

      var requirements = [locator.normalizeUrl("$fs.utils.js"), locator.normalizeUrl("$fs.sanitize.js")];

      _fsRequire(requirements, function (utils, sanitize) {
        var stg = new utils.SeshStorage(globalConfig.siteKey + "_" + locator.environment, false);
        var appSett = stg.get("setts");

        if (!appSett) {
          var includesHostname = globalConfig.configLocation.indexOf("/") != 0;
          var proto = includesHostname ? location.protocol + "//" : "";
          var url = "" + proto + globalConfig.configLocation + "/" + locator.environment + "/config.json";

          var transprt = new utils.AjaxTransport();
          transprt.send({
            method: "GET",
            url: url,
            success: function success(data) {
              if (data) {
                sanitize.checkIntegrity(data).then(function (passed) {
                  if (passed) {
                    stg.set("setts", data);
                    stg.commit();
                    finishSelfHost(data);
                  } else {
                    // helpful message so client knows why their collection stopped
                    console.error("ForeSee WebSDK failed integrity code check on config.json.");
                    console.error("Please contact ForeSee support for an updated integrity code.");
                  }
                }).catch(function (err) {
                });
              }
            }
          });
        } else {
          finishSelfHost(appSett);
        }
        /**
         * finish the self-host setup
         */


        function finishSelfHost(data) {
          var configs = JSON.parse(data);
          configs.global = configs.global || {};
          configs.global.selfHosted = globalConfig.selfHosted;
          configs.global.siteKey = globalConfig.siteKey;
          configs.global.codeVer = globalConfig.codeVer;
          configs.global.gateway = globalConfig.gateway;
          configs.global.configLocation = globalConfig.configLocation;
          setGlobalConfig(configs.global);
          delete configs.global;
          eachProp(configs, function (obj, prop) {
            if (globalConfig.products[prop]) {
              setProductConfig(prop, obj);
            }
          });
          finalSetup();
        }
      });
    } else {
      finalSetup();
    }
  });
} // find the gateway script tag


locator.locateGW();

if (shouldEnterQAMode()) {
  enterQAMode(bootSDK);
} else {
  bootSDK();
}

}());
