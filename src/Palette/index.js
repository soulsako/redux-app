import amber from './amber';
import blue from './blue';
import blueGrey from './blueGrey';
import brand from './brand';
import brown from './brown';
import brownGrey from './brownGrey';
import common from './common';
import cyan from './cyan';
import darkGrey from './darkGrey';
import deepGreen from './deepGreen';
import deepGrey from './deepGrey';
import deepOrange from './deepOrange';
import deepPurple from './deepPurple';
import green from './green';
import grey from './grey';
import indigo from './indigo';
import lightBlue from './lightBlue';
import lightGreen from './lightGreen';
import lightPurple from './lightPurple';
import lightRed from './lightRed';
import lime from './lime';
import orange from './orange';
import pink from './pink';
import purple from './purple';
import red from './red';
import social from './social';
import teal from './teal';
import yellow from './yellow';

export { default as amber } from './amber';
export { default as blue } from './blue';
export { default as blueGrey } from './blueGrey';
export { default as brand } from './brand';
export { default as brown } from './brown';
export { default as brownGrey } from './brownGrey';
export { default as common } from './common';
export { default as cyan } from './cyan';
export { default as darkGrey } from './darkGrey';
export { default as deepGreen } from './deepGreen';
export { default as deepGrey } from './deepGrey';
export { default as deepOrange } from './deepOrange';
export { default as deepPurple } from './deepPurple';
export { default as green } from './green';
export { default as grey } from './grey';
export { default as indigo } from './indigo';
export { default as lightBlue } from './lightBlue';
export { default as lightGreen } from './lightGreen';
export { default as lightPurple } from './lightPurple';
export { default as lightRed } from './lightRed';
export { default as lime } from './lime';
export { default as orange } from './orange';
export { default as pink } from './pink';
export { default as purple } from './purple';
export { default as red } from './red';
export { default as social } from './social';
export { default as teal } from './teal';
export { default as yellow } from './yellow';

const allColorsArray = {
  amber,
  blue,
  blueGrey,
  brand,
  brown,
  brownGrey,
  common,
  cyan,
  darkGrey,
  deepGreen,
  deepGrey,
  deepOrange,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  lightGreen,
  lightPurple,
  lightRed,
  lime,
  orange,
  pink,
  purple,
  red,
  social,
  teal,
  yellow,
};

/**
 * Converts the Name with dash to camel case
 * @param {string} str Palette Color with Dash like Deep-Orange
 * @return {string} str in camel case
 * @author Gil Alvaro
 */
export const dashToCamel = (str) => {
  let temp;
  if (undefined === str || '' === str) {
    console.log(`ERROR, COLOR OR COLOR VARIATION NOT FOUND ON THE PALETTE! ${str}`);
    temp = undefined;
  } else {
    temp = str
      .replace('-', ' ')
      .replace(/\s(.)/g, $1 => $1.toUpperCase())
      .replace(/\s/g, '')
      .replace(/^(.)/, $1 => $1.toLowerCase());
  }
  return temp;
};

/**
 * Converts the Name with dash to camel case
 * @param {number} value Why? The global isNaN coerces non-numbers to numbers,
 * returning true for anything that coerces to NaN. If this behavior is desired,
 * make it explicit.
 * @return {string} str HEX Colour
 * @author Gil Alvaro
 */
export const isNumber = value => !Number.isNaN(parseFloat(value));

/**
 * Converts the Name with dash to camel case
 * @param {string} str Palette Color with Dash like Deep-Orange
 * @param {string} variation Color Variation Ex.: 100, 200, 300, warning...
 * @return {string} str HEX Colour
 * @author Gil Alvaro
 */
export const searchColor = (str, variation) => {
  let finalVariation;
  let camelStr;
  if (str) {
    if (!variation || undefined === variation || '' === variation) {
      finalVariation = 500;
    } else if (isNumber(variation)) {
      finalVariation = variation;
    } else if ('A' === variation.substring(0, 1)) {
      finalVariation = variation;
    } else {
      finalVariation = dashToCamel(variation);
    }
    camelStr = allColorsArray[dashToCamel(str)];
  }
  return camelStr[finalVariation];
};
