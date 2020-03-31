/**
 * home.js
 */

import { getText } from './utils/helpers.js';

const onDomReady = () => {
  console.log('We are inside!!');
  console.log(getText());
};

$(document).ready(onDomReady);
