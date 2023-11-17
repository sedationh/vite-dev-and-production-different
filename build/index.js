(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.xxx = factory());
})(this, (function () { 'use strict';

  // export const sum = () => {
  //   console.log("sum")
  // }

  function index () {
    console.log("hi");
  }

  return index;

}));
