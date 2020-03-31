"use strict";

var _helpers = require("./utils/helpers.js");

/**
 * home.js
 */
var onDomReady = function onDomReady() {
  console.log('We are inside!!');
  console.log((0, _helpers.getText)());
};

$(document).ready(onDomReady);