(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.materialSmartBanner = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = require('./util/dom');

var _throwIfMissing = require('./util/throwIfMissing');

var _throwIfMissing2 = _interopRequireDefault(_throwIfMissing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Banner = function () {
  function Banner() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    _classCallCheck(this, Banner);

    var _options$namespace = options.namespace;
    var namespace = _options$namespace === undefined ? null : _options$namespace;
    var _options$parentEl = options.parentEl;
    var parentEl = _options$parentEl === undefined ? document.querySelector('body') : _options$parentEl;
    var _options$name = options.name;
    var name = _options$name === undefined ? options.name || 'APP NAME NOT FOUND' : _options$name;
    var _options$closeIcon = options.closeIcon;
    var closeIcon = _options$closeIcon === undefined ? options.closeIcon || '⨯' : _options$closeIcon;
    var _options$subText = options.subText;
    var subText = _options$subText === undefined ? options.subText || 'GET — On the Play Store' : _options$subText;
    var _options$linkText = options.linkText;
    var linkText = _options$linkText === undefined ? options.linkText || 'View' : _options$linkText;
    var _options$linkUrl = options.linkUrl;
    var linkUrl = _options$linkUrl === undefined ? options.linkUrl || "http://google.com/play" : _options$linkUrl;
    var _options$icon = options.icon;
    var icon = _options$icon === undefined ? options.icon || 'https://unsplash.it/80/80?image=404' : _options$icon;

    this.settings = { namespace: namespace, parentEl: parentEl, name: name, closeIcon: closeIcon, subText: subText, linkText: linkText, linkUrl: linkUrl, icon: icon };
    this.el = this._buildElement();
  }

  _createClass(Banner, [{
    key: '_buildClasses',
    value: function _buildClasses(suffix) {
      var classes = ['msb-' + suffix];
      var ns = this.settings.namespace;
      if (ns) {
        classes.push(ns + '-' + suffix);
      }
      return classes;
    }
  }, {
    key: '_buildElement',
    value: function _buildElement() {
      var settings = this.settings;

      // Root
      this.el = document.createElement('div');
      (0, _dom.addClasses)(this.el, this._buildClasses('root'));

      // Inner
      var innerEl = document.createElement('div');
      (0, _dom.addClasses)(innerEl, this._buildClasses('inner'));

      // Close Link
      var bannerCloseContainer = document.createElement('div');
      var bannerCloseLink = document.createElement('a');
      bannerCloseLink.href = "#";
      bannerCloseLink.innerHTML = settings.closeIcon;
      bannerCloseContainer.appendChild(bannerCloseLink);
      (0, _dom.addClasses)(bannerCloseContainer, this._buildClasses('inner-cell-close'));

      // Icon
      var appIconContainer = document.createElement('div');
      var appIcon = document.createElement('img');
      appIcon.src = settings.icon;
      appIcon.width = 60;
      appIcon.height = 60;
      appIconContainer.appendChild(appIcon);
      (0, _dom.addClasses)(appIconContainer, this._buildClasses('inner-cell-icon'));

      // Description
      var appDescriptionContainer = document.createElement('div');
      var appDescriptionHeadline = document.createElement('h1');
      var appDescriptionSubText = document.createElement('p');

      appDescriptionHeadline.innerHTML = settings.name;
      appDescriptionSubText.innerHTML = settings.subText;
      appDescriptionContainer.appendChild(appDescriptionHeadline);
      appDescriptionContainer.appendChild(appDescriptionSubText);
      (0, _dom.addClasses)(appDescriptionContainer, this._buildClasses('inner-cell-description'));

      // Link
      var appLinkContainer = document.createElement('div');
      var appLink = document.createElement('a');
      appLink.href = settings.linkUrl;
      appLink.target = "_blank";
      appLink.innerHTML = settings.linkText;
      appLinkContainer.appendChild(appLink);
      (0, _dom.addClasses)(appLinkContainer, this._buildClasses('inner-cell-link'));

      innerEl.appendChild(bannerCloseContainer);
      innerEl.appendChild(appIconContainer);
      innerEl.appendChild(appDescriptionContainer);
      innerEl.appendChild(appLinkContainer);
      this.el.appendChild(innerEl);

      settings.parentEl.appendChild(this.el);

      return this.el;
    }
  }, {
    key: 'show',
    value: function show() {
      var el = this.el;
      var className = this._buildClasses('root--is-open');
      if (el.classList) {
        el.classList.toggle(className);
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);

        el.className = classes.join(' ');
      }
    }
  }]);

  return Banner;
}();

exports.default = Banner;

},{"./util/dom":4,"./util/throwIfMissing":7}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dom = require('./util/dom');

var _getMetaContentByName = require('./util/getMetaContentByName');

var _parseEqualList = require('./util/parseEqualList');

var _injectBaseStylesheet = require('./injectBaseStylesheet');

var _injectBaseStylesheet2 = _interopRequireDefault(_injectBaseStylesheet);

var _Banner = require('./Banner');

var _Banner2 = _interopRequireDefault(_Banner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function materialSmartBanner(trigger) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    _classCallCheck(this, materialSmartBanner);

    this.isOpen = false;
    this.trigger = trigger;
    var _options$injectBaseSt = options.injectBaseStyles;
    var injectBaseStyles = _options$injectBaseSt === undefined ? true : _options$injectBaseSt;


    this.options = {
      injectBaseStyles: injectBaseStyles
    };

    try {
      if (this.options.injectBaseStyles) {
        (0, _injectBaseStylesheet2.default)();
      }
      this._buildBanner(this._getOptions());
    } catch (e) {
      throw new Error("You've added MaterialSmartBanner to your page but haven't added a meta tag, either remove this script or edit your meta tag!");
    }

    this.showDemo = this._showDemo;
  }

  _createClass(materialSmartBanner, [{
    key: '_buildBanner',
    value: function _buildBanner(options) {
      this.banner = new _Banner2.default(options);
    }
  }, {
    key: '_getOptions',
    value: function _getOptions() {
      var options = (0, _getMetaContentByName.getMetaContentByName)('material-smart-banner').split(',').map(function (str) {
        return (0, _parseEqualList.parseEqualList)(str);
      }).reduce(function (acc, x) {
        for (var key in x) {
          acc[key] = x[key];
        }return acc;
      }, {});
      return options;
    }
  }, {
    key: '_showDemo',
    value: function _showDemo() {
      console.log(this.banner);
      this.banner.show();
    }
  }]);

  return materialSmartBanner;
}();

},{"./Banner":1,"./injectBaseStylesheet":3,"./util/dom":4,"./util/getMetaContentByName":5,"./util/parseEqualList":6}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = injectBaseStylesheet;
var RULES = '\n\n.msb-root {\n  font-family: \'Roboto\', \'Helvetica Neue\', arial, san-serif;\n  padding: 6px;\n  color: #999;\n  box-shadow: 0 2px 5px rgba(0,0,0,0.26);\n  background: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-sizing: border-box;\n  transform: translateY(-100px);\n  transition: transform .35s ease;\n}\n\n.msb-root--is-open {\n  transform: translateY(0);\n}\n\n.msb-root a {\n  text-decoration: none;\n  color: inherit;\n}\n\n.msb-inner {\n  display: table;\n  table-layout: fixed;\n  width: 100%;\n}\n\n.msb-inner-cell-close,\n.msb-inner-cell-icon,\n.msb-inner-cell-description,\n.msb-inner-cell-link {\n  display: table-cell;\n  vertical-align: middle;\n  padding: 0 10px;\n}\n\n.msb-inner-cell-close {\n  text-align: center;\n  width: 16px;\n}\n\n.msb-inner-cell-close a {\n  text-decoration: none;\n  font-size: 32px;\n  line-height: 0;  \n}\n\n.msb-inner-cell-link {\n  width: 80px;\n  text-align: right;\n}\n\n.msb-inner-cell-link a {\n  color: #4285F4;\n}\n\n.msb-inner-cell-icon {\n  width: 60px;\n}\n\n.msb-inner-cell-icon > img {\n  border-radius: 6px;\n  width: 60px;\n  height: 60px;\n}\n\n.msb-inner-cell-description h1 {\n  color: #222;\n  margin: 0;\n  margin-bottom: 0 !important;\n  font-size: 16px !important;\n  font-weight: bold !important;\n}\n\n.msb-inner-cell-description p {\n  margin: 0;\n  font-size: 14px;\n}\n';

function injectBaseStylesheet() {
  var styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.classList.add('msb-base-styles');
  styleEl.appendChild(document.createTextNode(RULES));
  var head = document.head;
  head.insertBefore(styleEl, head.firstChild);
}

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.isDOMElement = isDOMElement;
exports.addClasses = addClasses;
exports.removeClasses = removeClasses;
// This is not really a perfect check, but works fine.
// From http://stackoverflow.com/questions/384286
var HAS_DOM_2 = (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object';

function isDOMElement(obj) {
  return HAS_DOM_2 ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string';
}

function addClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.add(className);
  });
}

function removeClasses(el, classNames) {
  classNames.forEach(function (className) {
    el.classList.remove(className);
  });
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.getMetaContentByName = getMetaContentByName;
function getMetaContentByName(name) {
   return document.querySelector('meta[name=\'' + name + '\']').getAttribute('content');
}

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEqualList = parseEqualList;
function parseEqualList(str) {
  var pos = str.indexOf('=');
  var key = str.slice(0, pos++).trim();
  var value = str.slice(pos--, str.length).trim();
  var obj = {};
  obj[key] = value;
  return obj;
}

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throwIfMissing;
function throwIfMissing() {
  throw new Error('Missing parameter');
}

},{}]},{},[2])(2)
});