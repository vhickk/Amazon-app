(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["links.papareact.com","fakestoreapi.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./src/components/Banner.jsx":
/*!***********************************!*\
  !*** ./src/components/Banner.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "react-responsive-carousel");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\Banner.jsx";




function Banner() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "relative",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "absolute w-full h-32 bg-gradient-to-t from-white to-transparent bottom-0 z-20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, {
      autoPlay: true,
      infiniteLoop: true,
      showStatus: false,
      showIndicators: false,
      showThumbs: false,
      interval: 5000,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          src: "https://m.media-amazon.com/images/I/717OO5QwJnL._SX3000_.jpg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          src: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          src: "https://links.papareact.com/gi1",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          src: "https://links.papareact.com/6ff",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          loading: "lazy",
          src: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg",
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Banner);

/***/ }),

/***/ "./src/components/Header.jsx":
/*!***********************************!*\
  !*** ./src/components/Header.jsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ "@heroicons/react/outline");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ "next-auth/react");
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\Header.jsx";








function Header() {
  const {
    data: session
  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_4__.useSession)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const items = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_slices_basketSlice__WEBPACK_IMPORTED_MODULE_7__.selectItems);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center bg-amazon_blue p-1 flex-grow py-2",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "mt-2 flex items-enter flex-grow sm:flex-grow-0 ",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          onClick: () => router.push('/'),
          src: "https://links.papareact.com/f90",
          width: 150,
          height: 40,
          objectFit: "contain",
          className: "cursor-pointer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 16
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "hidden sm:flex items center h-10 rounded-md flex-grow cursor-pointer bg-yellow-500 hover:bg-yellow-600",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          className: "p-2 h-full w-6 flex-grow flex-shrink rounded l-md focus:outline-none px-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SearchIcon, {
          className: "h-12 p-4"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: !session ? next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signIn : next_auth_react__WEBPACK_IMPORTED_MODULE_4__.signOut,
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: [" ", session ? `Hello, ${session.user.name} ` : "Sign In"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pp", {
            className: "font-extrabold md: text-sm",
            children: "Accounts & Lists"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: "Returns"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "font-extrabold  md: text-sm",
            children: "& Orders"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          onClick: () => router.push('/checkout'),
          className: "link relative flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-500 text-center rounded-full text-black font-bold",
            children: items.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.ShoppingCartIcon, {
            className: "h-10"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 17
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "hidden md:inline font-extrabold  md:text-sm mt-2",
            children: "Basket"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MenuIcon, {
          className: "h-6 mr-1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, this), "All"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link ",
        children: " Prime Video"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link ",
        children: " Today's Deals"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link ",
        children: " Customer Service"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link ",
        children: " Registry"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link ",
        children: "Gift Cards"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link ",
        children: " Sell"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: " Electronics"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: " Food & Grocery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: " Buy Again"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: " Shopper Toolkit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: " Health & Personal Care"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "link hidden lg:inline-flex",
        children: "Prime"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Product.jsx":
/*!************************************!*\
  !*** ./src/components/Product.jsx ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/solid */ "@heroicons/react/solid");
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-currency-formatter */ "react-currency-formatter");
/* harmony import */ var react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_currency_formatter__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\Product.jsx";





 // THIS CONTROLS THE RATING OF PRODUCTS

const Max_Rating = 5;
const Min_Rating = 1;

function Product({
  id,
  title,
  price,
  description,
  category,
  image
}) {
  //ACCESSES THE DISPATCH STATE FROM REDUX
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)(); //ACCESSES THE USE STAE HOOK TO SAVE AND UPDATE THE RATING

  const {
    0: rating
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)( //JAVASCRIPT TO GENERATE A RANDOM NUMBER FROM MIN RATING TO MAXIMUM RATING
  Math.floor(Math.random() * (Max_Rating - Min_Rating + 1)) + Min_Rating); //USE THE USESTATE HOOK TO SAVE AND UPDATE USERS WITH PRIME

  const {
    0: hasPrime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Math.random() < 0.5); //

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
      hasPrime,
      rating
    }; // Dispatching an Item(product)  as an action to the Redux Store using the Basket slice

    dispatch((0,_slices_basketSlice__WEBPACK_IMPORTED_MODULE_6__.addToBasket)(product));
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "  relative flex flex-col  m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "absolute top-2 right-2 text-xs italic text-gray-400 ",
      children: category
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: "my-3",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: Array(rating).fill().map((_, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.StarIcon, {
        className: "h-6 text-yellow-500"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-xs my-2",
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_currency_formatter__WEBPACK_IMPORTED_MODULE_4___default()), {
      quantity: price,
      currency: "USD"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }, this), hasPrime && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex items-center space-x-2 -mt-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "w-12",
        src: "https://links.papareact.com/fdw",
        alt: ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: "text-xs text-gray-500",
        children: "Free Next-Day DElivery"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: addItemToBasket,
      className: "mt-auto button",
      children: "Add to Basket "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Product);

/***/ }),

/***/ "./src/components/ProductFeed.jsx":
/*!****************************************!*\
  !*** ./src/components/ProductFeed.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./src/components/Product.jsx");

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\components\\ProductFeed.jsx";



function ProductFeed({
  products
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 md:-mt-52 mx-auto",
    children: products.map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, {
      id: id,
      title: title,
      price: price,
      description: description,
      category: category,
      image: image
    }, id, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (ProductFeed);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; },
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Banner */ "./src/components/Banner.jsx");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.jsx");
/* harmony import */ var _components_ProductFeed__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductFeed */ "./src/components/ProductFeed.jsx");

var _jsxFileName = "C:\\Users\\VICT0R\\Desktop\\Amazon-app\\Amazon\\src\\pages\\index.js";




function Home({
  products
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Amazon 2.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: "max-w-screen-2xl mx-auto",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductFeed__WEBPACK_IMPORTED_MODULE_4__.default, {
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ "./src/slices/basketSlice.js":
/*!***********************************!*\
  !*** ./src/slices/basketSlice.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basketSlice": function() { return /* binding */ basketSlice; },
/* harmony export */   "addToBasket": function() { return /* binding */ addToBasket; },
/* harmony export */   "removeFromBasket": function() { return /* binding */ removeFromBasket; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; },
/* harmony export */   "selectTotal": function() { return /* binding */ selectTotal; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
 //An empty array showin the state of my slice

const initialState = {
  items: []
}; // The basic functions my slic can do
// Adding to basket
// Removing from Basket

const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //spread whatever the current items( copy the current store) then add the payload that contains the product the dispatch function just passed in 
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      //SEARCH FOR THE INDEX OF THE FILE TO BE REMOVED
      //see if the index of the item exists by usng the state.items
      //we go through every single itemin the basket checking against the basket id if it is equal to the id passed in coming through bs tha action.payload
      const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id); // create a new basket(make a copy of it that can be changed)

      let newBasket = [...state.items];

      if (index >= 0) {
        //remove the item from the basket by splicing it.......
        //cuts the item by 1
        newBasket.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the basket`); //finally update the new items into the basket
      }

      state.items = newBasket;
    }
  }
});
const {
  addToBasket,
  removeFromBasket
} = basketSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.basket.items; //selectTotal gets the state from state.basket.items
//the reduce function then goes ahead to loops through the items in the global store creating a total thst can be used when we call our selector
//totl starts at a price of zero before iteration

const selectTotal = state => state.basket.items.reduce((total, item) => total + item.price, 0);
/* harmony default export */ __webpack_exports__["default"] = (basketSlice.reducer);

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css":
/*!****************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css ***!
  \****************************************************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@heroicons/react/outline");;

/***/ }),

/***/ "@heroicons/react/solid":
/*!*****************************************!*\
  !*** external "@heroicons/react/solid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@heroicons/react/solid");;

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/react");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-currency-formatter":
/*!*******************************************!*\
  !*** external "react-currency-formatter" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-currency-formatter");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react-responsive-carousel":
/*!********************************************!*\
  !*** external "react-responsive-carousel" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-responsive-carousel");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uLi9jbGllbnQvaW1hZ2UudHN4Iiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL2NvbXBvbmVudHMvQmFubmVyLmpzeCIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIuanN4Iiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3QuanN4Iiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC8uL3NyYy9jb21wb25lbnRzL1Byb2R1Y3RGZWVkLmpzeCIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9zcmMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0Ly4vc3JjL3NsaWNlcy9iYXNrZXRTbGljZS5qcyIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvZXh0ZXJuYWwgXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvZXh0ZXJuYWwgXCJAaGVyb2ljb25zL3JlYWN0L3NvbGlkXCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwiQHJlZHV4anMvdG9vbGtpdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcIm5leHQtYXV0aC9yZWFjdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly93aXRoLXJlZHV4LXRvb2xraXQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0LWN1cnJlbmN5LWZvcm1hdHRlclwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vd2l0aC1yZWR1eC10b29sa2l0L2V4dGVybmFsIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiIiwid2VicGFjazovL3dpdGgtcmVkdXgtdG9vbGtpdC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbnNvbGUiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwib3B0aW9ucyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiY2FsbGJhY2siLCJCYW5uZXIiLCJIZWFkZXIiLCJkYXRhIiwic2Vzc2lvbiIsInVzZVNlc3Npb24iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpdGVtcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0SXRlbXMiLCJwdXNoIiwic2lnbkluIiwic2lnbk91dCIsInVzZXIiLCJuYW1lIiwibGVuZ3RoIiwiTWF4X1JhdGluZyIsIk1pbl9SYXRpbmciLCJQcm9kdWN0IiwidGl0bGUiLCJwcmljZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJpbWFnZSIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJyYXRpbmciLCJ1c2VTdGF0ZSIsImZsb29yIiwicmFuZG9tIiwiaGFzUHJpbWUiLCJhZGRJdGVtVG9CYXNrZXQiLCJwcm9kdWN0IiwiYWRkVG9CYXNrZXQiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJfIiwiUHJvZHVjdEZlZWQiLCJwcm9kdWN0cyIsIkhvbWUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInByb3BzIiwiaW5pdGlhbFN0YXRlIiwiYmFza2V0U2xpY2UiLCJjcmVhdGVTbGljZSIsInJlZHVjZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwicmVtb3ZlRnJvbUJhc2tldCIsImluZGV4IiwiZmluZEluZGV4IiwiYmFza2V0SXRlbSIsIm5ld0Jhc2tldCIsInNwbGljZSIsIndhcm4iLCJhY3Rpb25zIiwiYmFza2V0Iiwic2VsZWN0VG90YWwiLCJyZWR1Y2UiLCJ0b3RhbCIsIml0ZW0iLCJyZWR1Y2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFNQTs7QUFFQSxJQUFJLE1BQStCO0FBQ2pDO0FBQUVBLFFBQUQsc0JBQUNBLEdBQUQsSUFBQ0E7QUFHSjs7QUFBQSxNQUFNQyxvQkFBb0IsR0FBRyxrQkFBN0IsU0FBNkIsQ0FBN0I7QUFhQSxNQUFNQyxPQUFPLEdBQUcsUUFHZCxDQUNBLFVBREEsV0FDQSxDQURBLEVBRUEsZUFGQSxnQkFFQSxDQUZBLEVBR0EsV0FIQSxZQUdBLENBSEEsRUFJQSxZQVBGLGFBT0UsQ0FKQSxDQUhjLENBQWhCO0FBVUEsTUFBTUMsbUJBQW1CLEdBQUcsNkNBQTVCLFNBQTRCLENBQTVCO0FBc0NBLE1BQU07QUFDSkMsYUFBVyxFQURQO0FBRUpDLFlBQVUsRUFGTjtBQUdKQyxRQUFNLEVBSEY7QUFJSkMsTUFBSSxFQUpBO0FBS0pDLFNBQU8sRUFMSDtBQUFBLElBT0ZDLGtNQUF5REMsYUFQ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V0FBVyxDQUFDYSxPQUF0RCxDLENBRVA7O0FBQ08sTUFBTXJELFdBQVcsR0FBSTJDLEtBQUQsSUFBV0EsS0FBSyxDQUFDVyxNQUFOLENBQWF4RCxLQUE1QyxDLENBRVA7QUFDQTtBQUNBOztBQUVPLE1BQU15RCxXQUFXLEdBQUlaLEtBQUQsSUFBV0EsS0FBSyxDQUFDVyxNQUFOLENBQWF4RCxLQUFiLENBQW1CMEQsTUFBbkIsQ0FBMEIsQ0FBQ0MsS0FBRCxFQUFRQyxJQUFSLEtBQWlCRCxLQUFLLEdBQUdDLElBQUksQ0FBQy9DLEtBQXhELEVBQStELENBQS9ELENBQS9CO0FBRVAsK0RBQWU2QixXQUFXLENBQUNtQixPQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFQSwyR0FBK0M7Ozs7Ozs7Ozs7OztBQ0EvQyxzRDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9oZWFkJ1xuaW1wb3J0IHsgdG9CYXNlNjQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NCdcbmltcG9ydCB7XG4gIEltYWdlQ29uZmlnLFxuICBpbWFnZUNvbmZpZ0RlZmF1bHQsXG4gIExvYWRlclZhbHVlLFxuICBWQUxJRF9MT0FERVJTLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgOyhnbG9iYWwgYXMgYW55KS5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlXG59XG5cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gWydsYXp5JywgJ2VhZ2VyJywgdW5kZWZpbmVkXSBhcyBjb25zdFxudHlwZSBMb2FkaW5nVmFsdWUgPSB0eXBlb2YgVkFMSURfTE9BRElOR19WQUxVRVNbbnVtYmVyXVxuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChyZXNvbHZlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXJQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgd2lkdGg6IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG59XG5cbnR5cGUgRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMgPSBJbWFnZUxvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcDxcbiAgTG9hZGVyVmFsdWUsXG4gIChwcm9wczogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuPihbXG4gIFsnaW1naXgnLCBpbWdpeExvYWRlcl0sXG4gIFsnY2xvdWRpbmFyeScsIGNsb3VkaW5hcnlMb2FkZXJdLFxuICBbJ2FrYW1haScsIGFrYW1haUxvYWRlcl0sXG4gIFsnZGVmYXVsdCcsIGRlZmF1bHRMb2FkZXJdLFxuXSlcblxuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgJ2ZpbGwnLFxuICAnZml4ZWQnLFxuICAnaW50cmluc2ljJyxcbiAgJ3Jlc3BvbnNpdmUnLFxuICB1bmRlZmluZWQsXG5dIGFzIGNvbnN0XG50eXBlIExheW91dFZhbHVlID0gdHlwZW9mIFZBTElEX0xBWU9VVF9WQUxVRVNbbnVtYmVyXVxuXG50eXBlIEltZ0VsZW1lbnRTdHlsZSA9IE5vbk51bGxhYmxlPEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ11bJ3N0eWxlJ10+XG5cbmV4cG9ydCB0eXBlIEltYWdlUHJvcHMgPSBPbWl0PFxuICBKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddLFxuICAnc3JjJyB8ICdzcmNTZXQnIHwgJ3JlZicgfCAnd2lkdGgnIHwgJ2hlaWdodCcgfCAnbG9hZGluZycgfCAnc3R5bGUnXG4+ICYge1xuICBzcmM6IHN0cmluZ1xuICBsb2FkZXI/OiBJbWFnZUxvYWRlclxuICBxdWFsaXR5PzogbnVtYmVyIHwgc3RyaW5nXG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2FkaW5nPzogTG9hZGluZ1ZhbHVlXG4gIHVub3B0aW1pemVkPzogYm9vbGVhblxuICBvYmplY3RGaXQ/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdEZpdCddXG4gIG9iamVjdFBvc2l0aW9uPzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RQb3NpdGlvbiddXG59ICYgKFxuICAgIHwge1xuICAgICAgICB3aWR0aD86IG5ldmVyXG4gICAgICAgIGhlaWdodD86IG5ldmVyXG4gICAgICAgIC8qKiBAZGVwcmVjYXRlZCBVc2UgYGxheW91dD1cImZpbGxcImAgaW5zdGVhZCAqL1xuICAgICAgICB1bnNpemVkOiB0cnVlXG4gICAgICB9XG4gICAgfCB7IHdpZHRoPzogbmV2ZXI7IGhlaWdodD86IG5ldmVyOyBsYXlvdXQ6ICdmaWxsJyB9XG4gICAgfCB7XG4gICAgICAgIHdpZHRoOiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIgfCBzdHJpbmdcbiAgICAgICAgbGF5b3V0PzogRXhjbHVkZTxMYXlvdXRWYWx1ZSwgJ2ZpbGwnPlxuICAgICAgfVxuICApXG5cbmNvbnN0IHtcbiAgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzLFxuICBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzLFxuICBsb2FkZXI6IGNvbmZpZ0xvYWRlcixcbiAgcGF0aDogY29uZmlnUGF0aCxcbiAgZG9tYWluczogY29uZmlnRG9tYWlucyxcbn0gPVxuICAoKHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIGFzIGFueSkgYXMgSW1hZ2VDb25maWcpIHx8IGltYWdlQ29uZmlnRGVmYXVsdFxuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFsuLi5jb25maWdEZXZpY2VTaXplcywgLi4uY29uZmlnSW1hZ2VTaXplc11cbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuYWxsU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5cbmZ1bmN0aW9uIGdldFdpZHRocyhcbiAgd2lkdGg6IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZSxcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxuKTogeyB3aWR0aHM6IG51bWJlcltdOyBraW5kOiAndycgfCAneCcgfSB7XG4gIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbLi4uc2l6ZXMubWF0Y2hBbGwoLyhefFxccykoMT9cXGQ/XFxkKXZ3L2cpXS5tYXAoKG0pID0+XG4gICAgICBwYXJzZUludChtWzJdKVxuICAgIClcbiAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxXG4gICAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcihcbiAgICAgICAgICAocykgPT4gcyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgKSxcbiAgICAgICAga2luZDogJ3cnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyB3aWR0aHM6IGFsbFNpemVzLCBraW5kOiAndycgfVxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8XG4gICAgbGF5b3V0ID09PSAnZmlsbCcgfHxcbiAgICBsYXlvdXQgPT09ICdyZXNwb25zaXZlJ1xuICApIHtcbiAgICByZXR1cm4geyB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLCBraW5kOiAndycgfVxuICB9XG5cbiAgY29uc3Qgd2lkdGhzID0gW1xuICAgIC4uLm5ldyBTZXQoXG4gICAgICAvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICBbd2lkdGgsIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi9dLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgbG9hZGVyOiBJbWFnZUxvYWRlclxuICB3aWR0aD86IG51bWJlclxuICBxdWFsaXR5PzogbnVtYmVyXG4gIHNpemVzPzogc3RyaW5nXG59XG5cbnR5cGUgR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHNyY1NldDogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxuICBsb2FkZXIsXG59OiBHZW5JbWdBdHRyc0RhdGEpOiBHZW5JbWdBdHRyc1Jlc3VsdCB7XG4gIGlmICh1bm9wdGltaXplZCkge1xuICAgIHJldHVybiB7IHNyYywgc3JjU2V0OiB1bmRlZmluZWQsIHNpemVzOiB1bmRlZmluZWQgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcylcbiAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxXG5cbiAgcmV0dXJuIHtcbiAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICBzcmNTZXQ6IHdpZHRoc1xuICAgICAgLm1hcChcbiAgICAgICAgKHcsIGkpID0+XG4gICAgICAgICAgYCR7bG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogdyB9KX0gJHtcbiAgICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICAgIH0ke2tpbmR9YFxuICAgICAgKVxuICAgICAgLmpvaW4oJywgJyksXG5cbiAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICBzcmM6IGxvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KSxcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRJbnQoeDogdW5rbm93bik6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4geFxuICB9XG4gIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApXG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2Uoe1xuICBzcmMsXG4gIHNpemVzLFxuICB1bm9wdGltaXplZCA9IGZhbHNlLFxuICBwcmlvcml0eSA9IGZhbHNlLFxuICBsb2FkaW5nLFxuICBjbGFzc05hbWUsXG4gIHF1YWxpdHksXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIG9iamVjdEZpdCxcbiAgb2JqZWN0UG9zaXRpb24sXG4gIGxvYWRlciA9IGRlZmF1bHRJbWFnZUxvYWRlcixcbiAgLi4uYWxsXG59OiBJbWFnZVByb3BzKSB7XG4gIGxldCByZXN0OiBQYXJ0aWFsPEltYWdlUHJvcHM+ID0gYWxsXG4gIGxldCBsYXlvdXQ6IE5vbk51bGxhYmxlPExheW91dFZhbHVlPiA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYydcbiAgbGV0IHVuc2l6ZWQgPSBmYWxzZVxuICBpZiAoJ3Vuc2l6ZWQnIGluIHJlc3QpIHtcbiAgICB1bnNpemVkID0gQm9vbGVhbihyZXN0LnVuc2l6ZWQpXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0Wyd1bnNpemVkJ11cbiAgfSBlbHNlIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0XG5cbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ2xheW91dCddXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmICghc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyB3aWR0aCwgaGVpZ2h0LCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFxuICAgICAgICAgIFN0cmluZ1xuICAgICAgICApLmpvaW4oJywnKX0uYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHVuc2l6ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGRlcHJlY2F0ZWQgXCJ1bnNpemVkXCIgcHJvcGVydHksIHdoaWNoIHdhcyByZW1vdmVkIGluIGZhdm9yIG9mIHRoZSBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eWBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaXNMYXp5ID1cbiAgICAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpXG4gIGlmIChzcmMgJiYgc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgIHVub3B0aW1pemVkID0gdHJ1ZVxuICAgIGlzTGF6eSA9IGZhbHNlXG4gIH1cblxuICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9IHVzZUludGVyc2VjdGlvbjxIVE1MSW1hZ2VFbGVtZW50Pih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgICBkaXNhYmxlZDogIWlzTGF6eSxcbiAgfSlcbiAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkXG5cbiAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpXG4gIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpXG4gIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSlcblxuICBsZXQgd3JhcHBlclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN0eWxlOiBKU1guSW50cmluc2ljRWxlbWVudHNbJ2RpdiddWydzdHlsZSddIHwgdW5kZWZpbmVkXG4gIGxldCBzaXplclN2Zzogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIGxldCBpbWdTdHlsZTogSW1nRWxlbWVudFN0eWxlIHwgdW5kZWZpbmVkID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICByaWdodDogMCxcblxuICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgIHBhZGRpbmc6IDAsXG4gICAgYm9yZGVyOiAnbm9uZScsXG4gICAgbWFyZ2luOiAnYXV0bycsXG5cbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgIHdpZHRoOiAwLFxuICAgIGhlaWdodDogMCxcbiAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgbWF4SGVpZ2h0OiAnMTAwJScsXG5cbiAgICBvYmplY3RGaXQsXG4gICAgb2JqZWN0UG9zaXRpb24sXG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCAhPT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50XG4gICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgXG4gICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0geyBkaXNwbGF5OiAnYmxvY2snLCBib3hTaXppbmc6ICdib3JkZXItYm94JywgcGFkZGluZ1RvcCB9XG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICB9XG4gICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gXG4gICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnQsXG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiB3aWR0aEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgaGVpZ2h0SW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIGxheW91dCA9PT0gJ2ZpbGwnXG4gICkge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG5cbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIHJpZ2h0OiAwLFxuXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGltZ0F0dHJpYnV0ZXM6IEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICAgIHNyYzpcbiAgICAgICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgIHNpemVzOiB1bmRlZmluZWQsXG4gIH1cblxuICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgc3JjLFxuICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICBsYXlvdXQsXG4gICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgc2l6ZXMsXG4gICAgICBsb2FkZXIsXG4gICAgfSlcbiAgfVxuXG4gIGlmICh1bnNpemVkKSB7XG4gICAgd3JhcHBlclN0eWxlID0gdW5kZWZpbmVkXG4gICAgc2l6ZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIGltZ1N0eWxlID0gdW5kZWZpbmVkXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt3cmFwcGVyU3R5bGV9PlxuICAgICAge3NpemVyU3R5bGUgPyAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3NpemVyU3R5bGV9PlxuICAgICAgICAgIHtzaXplclN2ZyA/IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHshaXNWaXNpYmxlICYmIChcbiAgICAgICAgPG5vc2NyaXB0PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICAgICAgey4uLmdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgc3JjPXtzcmN9XG4gICAgICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgICAgIHNpemVzPXtzaXplc31cbiAgICAgICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICApfVxuICAgICAgPGltZ1xuICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgey4uLmltZ0F0dHJpYnV0ZXN9XG4gICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgcmVmPXtzZXRSZWZ9XG4gICAgICAgIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgIC8+XG4gICAgICB7cHJpb3JpdHkgPyAoXG4gICAgICAgIC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAgICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e1xuICAgICAgICAgICAgICAnX19uaW1nLScgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyYyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zaXplc1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgICBhcz1cImltYWdlXCJcbiAgICAgICAgICAgIGhyZWY9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmN9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzcmNzZXQ9e2ltZ0F0dHJpYnV0ZXMuc3JjU2V0fVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZVxuICAgICAgICAgICAgaW1hZ2VzaXplcz17aW1nQXR0cmlidXRlcy5zaXplc31cbiAgICAgICAgICA+PC9saW5rPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICApIDogbnVsbH1cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vL0JVSUxUIElOIExPQURFUlNcblxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9mb3JtYXQ9YXV0byZmaXQ9bWF4Jnc9MzAwXG4gIGNvbnN0IHBhcmFtcyA9IFsnYXV0bz1mb3JtYXQnLCAnZml0PW1heCcsICd3PScgKyB3aWR0aF1cbiAgbGV0IHBhcmFtc1N0cmluZyA9ICcnXG4gIGlmIChxdWFsaXR5KSB7XG4gICAgcGFyYW1zLnB1c2goJ3E9JyArIHF1YWxpdHkpXG4gIH1cblxuICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgIHBhcmFtc1N0cmluZyA9ICc/JyArIHBhcmFtcy5qb2luKCcmJylcbiAgfVxuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfSR7cGFyYW1zU3RyaW5nfWBcbn1cblxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCB9OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gXG59XG5cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICBjb25zdCBwYXJhbXMgPSBbJ2ZfYXV0bycsICdjX2xpbWl0JywgJ3dfJyArIHdpZHRoLCAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKV1cbiAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLydcbiAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YFxufVxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtcbiAgcmVxdWVzdElkbGVDYWxsYmFjayxcbiAgY2FuY2VsSWRsZUNhbGxiYWNrLFxufSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxudHlwZSBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQgPSBQaWNrPEludGVyc2VjdGlvbk9ic2VydmVySW5pdCwgJ3Jvb3RNYXJnaW4nPlxudHlwZSBVc2VJbnRlcnNlY3Rpb24gPSB7IGRpc2FibGVkPzogYm9vbGVhbiB9ICYgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG50eXBlIE9ic2VydmVDYWxsYmFjayA9IChpc1Zpc2libGU6IGJvb2xlYW4pID0+IHZvaWRcbnR5cGUgT2JzZXJ2ZXIgPSB7XG4gIGlkOiBzdHJpbmdcbiAgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG4gIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxufVxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFZpc2libGUodHJ1ZSkpXG4gICAgICAgIHJldHVybiAoKSA9PiBjYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbik6ICgpID0+IHZvaWQge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKTogdm9pZCB7XG4gICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpXG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxzdHJpbmcsIE9ic2VydmVyPigpXG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQpOiBPYnNlcnZlciB7XG4gIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnXG4gIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpXG4gIGlmIChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZVxuICB9XG5cbiAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz4oKVxuICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldClcbiAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMFxuICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpXG4gICAgICB9XG4gICAgfSlcbiAgfSwgb3B0aW9ucylcblxuICBvYnNlcnZlcnMuc2V0KFxuICAgIGlkLFxuICAgIChpbnN0YW5jZSA9IHtcbiAgICAgIGlkLFxuICAgICAgb2JzZXJ2ZXIsXG4gICAgICBlbGVtZW50cyxcbiAgICB9KVxuICApXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwnXHJcbmltcG9ydCBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWwvbGliL3N0eWxlcy9jYXJvdXNlbC5taW4uY3NzXCJcclxuXHJcbmZ1bmN0aW9uIEJhbm5lcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlJz5cclxuICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSB3LWZ1bGwgaC0zMiBiZy1ncmFkaWVudC10by10IGZyb20td2hpdGUgdG8tdHJhbnNwYXJlbnQgYm90dG9tLTAgei0yMCcvPlxyXG4gICAgICAgIDxDYXJvdXNlbFxyXG4gICAgICAgICAgICBhdXRvUGxheVxyXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3BcclxuICAgICAgICAgICAgc2hvd1N0YXR1cyA9IHtmYWxzZX1cclxuICAgICAgICAgICAgc2hvd0luZGljYXRvcnM9IHtmYWxzZX1cclxuICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGludGVydmFsPXs1MDAwfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIHNyYz1cImh0dHBzOi8vbS5tZWRpYS1hbWF6b24uY29tL2ltYWdlcy9JLzcxN09PNVF3Sm5MLl9TWDMwMDBfLmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgbG9hZGluZz0nbGF6eScgc3JjPVwiaHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFEVU8wTnF5eUwuX1NYMzAwMF8uanBnXCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGxvYWRpbmc9J2xhenknIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9naTFcIiBhbHQ9XCJcIiAvPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBzcmM9XCJodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vNmZmXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZyBsb2FkaW5nPSdsYXp5JyBzcmM9XCJodHRwczovL20ubWVkaWEtYW1hem9uLmNvbS9pbWFnZXMvSS82MWpvdmpkK2Y5TC5fU1gzMDAwXy5qcGdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgXHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXIiLCJpbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgTWVudUljb24sXHJcbiAgU2VhcmNoSWNvbixcclxuICBTaG9wcGluZ0NhcnRJY29uLFxyXG59IGZyb20gICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBzZWxlY3RJdGVtcyB9IGZyb20gJy4uL3NsaWNlcy9iYXNrZXRTbGljZSc7XHJcblxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG5cclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSAgPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgaXRlbXMgPSB1c2VTZWxlY3RvcihzZWxlY3RJdGVtcyk7XHJcblxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBiZy1hbWF6b25fYmx1ZSBwLTEgZmxleC1ncm93IHB5LTInPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBMb2dvICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMiBmbGV4IGl0ZW1zLWVudGVyIGZsZXgtZ3JvdyBzbTpmbGV4LWdyb3ctMCAnPlxyXG4gICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvJyl9XHJcbiAgICAgICAgICAgICAgIHNyYyA9ICdodHRwczovL2xpbmtzLnBhcGFyZWFjdC5jb20vZjkwJ1xyXG4gICAgICAgICAgICAgICB3aWR0aCA9IHsxNTB9XHJcbiAgICAgICAgICAgICAgIGhlaWdodCA9IHs0MH1cclxuICAgICAgICAgICAgICAgb2JqZWN0Rml0ID0gJ2NvbnRhaW4nXHJcbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInXHJcbiAgICAgICAgICAgICAgIC8+IFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiBTZWFyY2ggKi99XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIHNtOmZsZXggaXRlbXMgY2VudGVyIGgtMTAgcm91bmRlZC1tZCBmbGV4LWdyb3cgY3Vyc29yLXBvaW50ZXIgYmcteWVsbG93LTUwMCBob3ZlcjpiZy15ZWxsb3ctNjAwJz5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J3AtMiBoLWZ1bGwgdy02IGZsZXgtZ3JvdyBmbGV4LXNocmluayByb3VuZGVkIGwtbWQgZm9jdXM6b3V0bGluZS1ub25lIHB4LTQnLz5cclxuICAgICAgICAgICAgICA8U2VhcmNoSWNvbiAgY2xhc3NOYW1lPSdoLTEyIHAtNCcvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgIHsvKiBSaWdodCAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQtd2hpdGUgZmxleCBpdGVtcy1jZW50ZXIgdGV4dC14cyBzcGFjZS14LTYgbXgtNiB3aGl0ZXNwYWNlLW5vd3JhcCc+XHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXshc2Vzc2lvbiA/IHNpZ25Jbjogc2lnbk91dH0gY2xhc3NOYW1lPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgPHA+IHtzZXNzaW9uID8gYEhlbGxvLCAke3Nlc3Npb24udXNlci5uYW1lfSBgIDogXCJTaWduIEluXCJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHBwIGNsYXNzTmFtZT0nZm9udC1leHRyYWJvbGQgbWQ6IHRleHQtc20nPkFjY291bnRzICYgTGlzdHM8L3BwPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbGluayc+XHJcbiAgICAgICAgICAgICAgICA8cD5SZXR1cm5zPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LWV4dHJhYm9sZCAgbWQ6IHRleHQtc20nPiYgT3JkZXJzPC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvY2hlY2tvdXQnKX0gY2xhc3NOYW1lPVwibGluayByZWxhdGl2ZSBmbGV4IGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdhYnNvbHV0ZSB0b3AtMCByaWdodC0wIG1kOnJpZ2h0LTEwIGgtNCB3LTQgYmcteWVsbG93LTUwMCB0ZXh0LWNlbnRlciByb3VuZGVkLWZ1bGwgdGV4dC1ibGFjayBmb250LWJvbGQnPiBcclxuICAgICAgICAgICAgICAgIHtpdGVtcy5sZW5ndGh9IFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPFNob3BwaW5nQ2FydEljb24gIGNsYXNzTmFtZT1cImgtMTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdoaWRkZW4gbWQ6aW5saW5lIGZvbnQtZXh0cmFib2xkICBtZDp0ZXh0LXNtIG10LTInPkJhc2tldDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIHsvKiBCb3R0b20gTmF2ICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC0zIHAtMiBwbC02IGJnLWFtYXpvbl9ibHVlLWxpZ2h0IHRleHQtd2hpdGUgdGV4dC1zbSc+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsgZmxleCBpdGVtcy1jZW50ZXInPlxyXG4gICAgICAgICAgICA8TWVudUljb24gY2xhc3NOYW1lPSdoLTYgbXItMScgLz5cclxuICAgICAgICAgICAgQWxsXHJcbiAgICAgICAgICA8L3A+XHJcblxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaW5rICc+IFByaW1lIFZpZGVvPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaW5rICc+IFRvZGF5J3MgRGVhbHM8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsgJz4gQ3VzdG9tZXIgU2VydmljZTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGluayAnPiBSZWdpc3RyeTwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGluayAnPkdpZnQgQ2FyZHM8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsgJz4gU2VsbDwvcD5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4Jz4gRWxlY3Ryb25pY3M8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4Jz4gRm9vZCAmIEdyb2Nlcnk8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9J2xpbmsgaGlkZGVuIGxnOmlubGluZS1mbGV4Jz4gQnV5IEFnYWluPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleCc+IFNob3BwZXIgVG9vbGtpdDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0nbGluayBoaWRkZW4gbGc6aW5saW5lLWZsZXgnPiBIZWFsdGggJiBQZXJzb25hbCBDYXJlPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPSdsaW5rIGhpZGRlbiBsZzppbmxpbmUtZmxleCc+UHJpbWU8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2hlYWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgIEltYWdlIGZyb20gJ25leHQvaW1hZ2UnIFxyXG5pbXBvcnQgeyBTdGFySWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvc29saWQnO1xyXG5pbXBvcnQgQ3VycmVuY3kgZnJvbSAncmVhY3QtY3VycmVuY3ktZm9ybWF0dGVyJztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IGFkZFRvQmFza2V0IH0gZnJvbSAnLi4vc2xpY2VzL2Jhc2tldFNsaWNlJztcclxuXHJcbi8vIFRISVMgQ09OVFJPTFMgVEhFIFJBVElORyBPRiBQUk9EVUNUU1xyXG5cclxuY29uc3QgTWF4X1JhdGluZyA9IDU7XHJcbmNvbnN0IE1pbl9SYXRpbmcgPSAxO1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdCh7aWQsIHRpdGxlLCBwcmljZSwgZGVzY3JpcHRpb24sIGNhdGVnb3J5LCBpbWFnZX0pIFxyXG57XHJcblxyXG4gICAgLy9BQ0NFU1NFUyBUSEUgRElTUEFUQ0ggU1RBVEUgRlJPTSBSRURVWFxyXG5jb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4vL0FDQ0VTU0VTIFRIRSBVU0UgU1RBRSBIT09LIFRPIFNBVkUgQU5EIFVQREFURSBUSEUgUkFUSU5HXHJcbmNvbnN0IFtyYXRpbmddID0gdXNlU3RhdGVcclxuKFxyXG4gICAgLy9KQVZBU0NSSVBUIFRPIEdFTkVSQVRFIEEgUkFORE9NIE5VTUJFUiBGUk9NIE1JTiBSQVRJTkcgVE8gTUFYSU1VTSBSQVRJTkdcclxuICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChNYXhfUmF0aW5nIC0gTWluX1JhdGluZyArIDEpKSsgTWluX1JhdGluZ1xyXG4pO1xyXG5cclxuLy9VU0UgVEhFIFVTRVNUQVRFIEhPT0sgVE8gU0FWRSBBTkQgVVBEQVRFIFVTRVJTIFdJVEggUFJJTUVcclxuY29uc3QgW2hhc1ByaW1lXT0gdXNlU3RhdGVcclxuKFxyXG4gICAgTWF0aC5yYW5kb20oKSA8IDAuNVxyXG4pO1xyXG5cclxuLy9cclxuY29uc3QgYWRkSXRlbVRvQmFza2V0ID0gKCkgPT4gXHJcbntcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBcclxuICAgIHtcclxuICAgICAgICBpZCwgXHJcbiAgICAgICAgdGl0bGUsIFxyXG4gICAgICAgIHByaWNlLCBcclxuICAgICAgICBkZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgY2F0ZWdvcnksIFxyXG4gICAgICAgIGltYWdlLFxyXG4gICAgICAgIGhhc1ByaW1lLFxyXG4gICAgICAgIHJhdGluZ1xyXG4gICAgfTtcclxuICAgIC8vIERpc3BhdGNoaW5nIGFuIEl0ZW0ocHJvZHVjdCkgIGFzIGFuIGFjdGlvbiB0byB0aGUgUmVkdXggU3RvcmUgdXNpbmcgdGhlIEJhc2tldCBzbGljZVxyXG5cclxuICAgIGRpc3BhdGNoKGFkZFRvQmFza2V0KHByb2R1Y3QpKTtcclxufTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPScgIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgIG0tNSBiZy13aGl0ZSB6LTMwIHAtMTAnPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTIgcmlnaHQtMiB0ZXh0LXhzIGl0YWxpYyB0ZXh0LWdyYXktNDAwICc+e2NhdGVnb3J5fTwvcD5cclxuXHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjID0ge2ltYWdlfSBoZWlnaHQgPSB7MjAwfSB3aWR0aCA9IHsyMDB9IG9iamVjdEZpdCA9J2NvbnRhaW4nXHJcbiAgICAgICAgLz5cclxuICAgICAgICBcclxuICAgICAgICA8aDQgY2xhc3NOYW1lPSdteS0zJz57dGl0bGV9PC9oND5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgnPlxyXG4gICAgICAgICAgICB7QXJyYXkocmF0aW5nKVxyXG4gICAgICAgICAgICAuZmlsbCgpXHJcbiAgICAgICAgICAgIC5tYXAoKF8sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxTdGFySWNvbiBjbGFzc05hbWU9J2gtNiB0ZXh0LXllbGxvdy01MDAnIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgbXktMic+e2Rlc2NyaXB0aW9ufTwvcD5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPEN1cnJlbmN5ICBxdWFudGl0eSA9IHtwcmljZX0gY3VycmVuY3kgPSdVU0QnLz5cclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBJZiB5b3UgaGF2ZSBwcmltZSwgdGhlbiByZW5kZXIgdGhpcyAqL31cclxuICAgICAgICB7aGFzUHJpbWUgJiZcclxuICAgICAgICAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTIgLW10LTUnPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3ctMTInIHNyYz1cImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9mZHdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIHRleHQtZ3JheS01MDAnPkZyZWUgTmV4dC1EYXkgREVsaXZlcnk8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkSXRlbVRvQmFza2V0fSBjbGFzc05hbWU9J210LWF1dG8gYnV0dG9uJz5BZGQgdG8gQmFza2V0IDwvYnV0dG9uPlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0JztcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RGZWVkKHtwcm9kdWN0c30pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2dyaWQgZ3JpZC1mbG93LXJvdy1kZW5zZSBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtNCBtZDotbXQtNTIgbXgtYXV0byc+XHJcbiAgICAgICAgXHJcbiAgICAgICAge3Byb2R1Y3RzLm1hcCgoe2lkLCB0aXRsZSwgcHJpY2UsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSwgaW1hZ2V9KSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm9kdWN0XHJcbiAgICAgICAgICAgIGtleSA9IHtpZH1cclxuICAgICAgICAgICAgaWQgPSB7aWR9XHJcbiAgICAgICAgICAgIHRpdGxlID0ge3RpdGxlfVxyXG4gICAgICAgICAgICBwcmljZSA9IHtwcmljZX1cclxuICAgICAgICAgICAgZGVzY3JpcHRpb249IHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgY2F0ZWdvcnkgPSB7Y2F0ZWdvcnl9XHJcbiAgICAgICAgICAgIGltYWdlID0ge2ltYWdlfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIClcclxuICAgICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEZlZWQiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvQmFubmVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBQcm9kdWN0RmVlZCBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0RmVlZFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7cHJvZHVjdHN9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JheS0xMDBcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFtYXpvbiAyLjA8L3RpdGxlPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJtYXgtdy1zY3JlZW4tMnhsIG14LWF1dG9cIj5cclxuICAgICAgICAgIDxCYW5uZXIvPlxyXG5cclxuICAgICAgICAgIDxQcm9kdWN0RmVlZCBwcm9kdWN0cz0ge3Byb2R1Y3RzfS8+XHJcbiAgICAgICAgIFxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcclxuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHMnKS50aGVuKFxyXG4gICAgKHJlcykgPT5yZXMuanNvbigpXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJue1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcblxyXG5cclxuLy9BbiBlbXB0eSBhcnJheSBzaG93aW4gdGhlIHN0YXRlIG9mIG15IHNsaWNlXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IFxyXG57XHJcbiAgaXRlbXM6IFtdLFxyXG59O1xyXG5cclxuLy8gVGhlIGJhc2ljIGZ1bmN0aW9ucyBteSBzbGljIGNhbiBkb1xyXG4vLyBBZGRpbmcgdG8gYmFza2V0XHJcbi8vIFJlbW92aW5nIGZyb20gQmFza2V0XHJcblxyXG5leHBvcnQgY29uc3QgYmFza2V0U2xpY2UgPSBjcmVhdGVTbGljZVxyXG4oe1xyXG4gIG5hbWU6IFwiYmFza2V0XCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBhZGRUb0Jhc2tldDogKHN0YXRlLCBhY3Rpb24pID0+IFxyXG4gICAge1xyXG4gICAgICAvL3NwcmVhZCB3aGF0ZXZlciB0aGUgY3VycmVudCBpdGVtcyggY29weSB0aGUgY3VycmVudCBzdG9yZSkgdGhlbiBhZGQgdGhlIHBheWxvYWQgdGhhdCBjb250YWlucyB0aGUgcHJvZHVjdCB0aGUgZGlzcGF0Y2ggZnVuY3Rpb24ganVzdCBwYXNzZWQgaW4gXHJcbiAgICAgIHN0YXRlLml0ZW1zID0gWy4uLnN0YXRlLml0ZW1zLCBhY3Rpb24ucGF5bG9hZF1cclxuICAgIH0sXHJcbiAgICByZW1vdmVGcm9tQmFza2V0OiAoc3RhdGUsIGFjdGlvbikgPT4gXHJcbiAgICB7XHJcbiAgICAgICAgLy9TRUFSQ0ggRk9SIFRIRSBJTkRFWCBPRiBUSEUgRklMRSBUTyBCRSBSRU1PVkVEXHJcbiAgICAgICAgLy9zZWUgaWYgdGhlIGluZGV4IG9mIHRoZSBpdGVtIGV4aXN0cyBieSB1c25nIHRoZSBzdGF0ZS5pdGVtc1xyXG4gICAgICAgIC8vd2UgZ28gdGhyb3VnaCBldmVyeSBzaW5nbGUgaXRlbWluIHRoZSBiYXNrZXQgY2hlY2tpbmcgYWdhaW5zdCB0aGUgYmFza2V0IGlkIGlmIGl0IGlzIGVxdWFsIHRvIHRoZSBpZCBwYXNzZWQgaW4gY29taW5nIHRocm91Z2ggYnMgdGhhIGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5maW5kSW5kZXhcclxuICAgICAgICAoXHJcbiAgICAgICAgICAoYmFza2V0SXRlbSkgPT5iYXNrZXRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgICAvLyBjcmVhdGUgYSBuZXcgYmFza2V0KG1ha2UgYSBjb3B5IG9mIGl0IHRoYXQgY2FuIGJlIGNoYW5nZWQpXHJcblxyXG4gICAgICAgIGxldCBuZXdCYXNrZXQgPSBbLi4uc3RhdGUuaXRlbXNdO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPj0wKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vcmVtb3ZlIHRoZSBpdGVtIGZyb20gdGhlIGJhc2tldCBieSBzcGxpY2luZyBpdC4uLi4uLi5cclxuICAgICAgICAgIC8vY3V0cyB0aGUgaXRlbSBieSAxXHJcbiAgICAgICAgICBuZXdCYXNrZXQuc3BsaWNlKGluZGV4LCAxKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgQ2FuJ3QgcmVtb3ZlIHByb2R1Y3QgKGlkOiAke2FjdGlvbi5wYXlsb2FkLmlkfSkgYXMgaXQncyBub3QgaW4gdGhlIGJhc2tldGApO1xyXG5cclxuICAgICAgICAgIC8vZmluYWxseSB1cGRhdGUgdGhlIG5ldyBpdGVtcyBpbnRvIHRoZSBiYXNrZXRcclxuICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0YXRlLml0ZW1zICA9IG5ld0Jhc2tldDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRUb0Jhc2tldCwgcmVtb3ZlRnJvbUJhc2tldCB9ID0gYmFza2V0U2xpY2UuYWN0aW9ucztcclxuXHJcbi8vIFNlbGVjdG9ycyAtIFRoaXMgaXMgaG93IHdlIHB1bGwgaW5mb3JtYXRpb24gZnJvbSB0aGUgR2xvYmFsIHN0b3JlIHNsaWNlXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RJdGVtcyA9IChzdGF0ZSkgPT4gc3RhdGUuYmFza2V0Lml0ZW1zO1xyXG5cclxuLy9zZWxlY3RUb3RhbCBnZXRzIHRoZSBzdGF0ZSBmcm9tIHN0YXRlLmJhc2tldC5pdGVtc1xyXG4vL3RoZSByZWR1Y2UgZnVuY3Rpb24gdGhlbiBnb2VzIGFoZWFkIHRvIGxvb3BzIHRocm91Z2ggdGhlIGl0ZW1zIGluIHRoZSBnbG9iYWwgc3RvcmUgY3JlYXRpbmcgYSB0b3RhbCB0aHN0IGNhbiBiZSB1c2VkIHdoZW4gd2UgY2FsbCBvdXIgc2VsZWN0b3JcclxuLy90b3RsIHN0YXJ0cyBhdCBhIHByaWNlIG9mIHplcm8gYmVmb3JlIGl0ZXJhdGlvblxyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRvdGFsID0gKHN0YXRlKSA9PiBzdGF0ZS5iYXNrZXQuaXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlLCAwKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFza2V0U2xpY2UucmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhlcm9pY29ucy9yZWFjdC9zb2xpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1jdXJyZW5jeS1mb3JtYXR0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=