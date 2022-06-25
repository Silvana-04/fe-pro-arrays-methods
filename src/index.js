import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => {
  return goods.filter ((good) => {
    return good.brand === brand;
  })
};

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => {
  return goods.filter ((good) => {
    return good.color === color;
  })
};

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => {
  return goods.filter ((good) => {
    return good.model === model;
  })
};

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => {
  return goods.filter ((good) => {
    return good.memory === memory;
  })
};

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => {
  return goods.filter ((good) => {
    return good.price === price;
  })
};

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => {
  return goods.filter ((good) => {
    return good.country === country;
  })
};

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => {
  return goods.filter ((good) => {
    return good.os === os;
  })
};

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => {
  return goods.filter((good) => (good.price >= from && good.price <= to));
};

const minPriceReducer = () => {
  return goods.reduce ((acc, curr) =>{
    return Math.min (acc, curr.price);
  }, Infinity);
};

const maxPriceReducer = () => {
  return goods.reduce ((acc, curr) =>{
    return Math.max (acc, curr.price);
  }, 0);
};

const toMaxSorter = () => {
  return goods.sort((goods1, goods2) =>{
    if (goods1.price < goods2.price) return 1;
    if (goods1.price === goods2.price) return 0;
    if (goods1.price > goods2.price) return -1;
  });
};
const toMinSorter = () => {
  return goods.sort((goods1, goods2) =>{
    if (goods1.price > goods2.price) return 1;
    if (goods1.price === goods2.price) return 0;
    if (goods1.price < goods2.price) return -1;
  });
};

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter,
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer,
};

export const sorters = {
  toMaxSorter,
  toMinSorter,
};
