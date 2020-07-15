'use strict';

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var index = {
  install: function install(Vue) {
    // takes a {} object and returns a FormData object
    var OTF = function OTF(obj, form, namespace) {
      var fd = form || new FormData();
      var formKey = null;

      for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
          formKey = namespace ? "".concat(namespace, "[").concat(property, "]") : property;
          /**
           * if the property is an object, but not a File.
           * use recursivity.
           * if it's a file add it
           * else
           * add the normal key
           */

          if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
            OTF(obj[property], fd, formKey);
          } else if (obj[property] instanceof File) {
            fd.append(formKey, obj[property]);
          } else {
            // if it's a string
            var value = obj[property]; // if boolean send 1, 0

            if (value === 'true' || value === 'false' || value === true || value === false) {
              value = value === 'true' || value === true ? 1 : 0;
            }

            fd.append(formKey, value);
          }
        }
      }

      return fd;
    };

    Vue.prototype.$objectToFD = function (obj, form, namespace) {
      return OTF(obj, form, namespace);
    };
  }
};

module.exports = index;
