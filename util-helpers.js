/**
 * Utility Helpers - A simple JavaScript utility library
 * Version: 1.0.0
 * Author: Your Name
 * License: MIT
 */

(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.UtilHelpers = factory());
  }(this, function() {
    'use strict';
    
    /**
     * Main utility object
     */
    const UtilHelpers = {
      version: '1.0.0',
      
      /**
       * Formats a number with commas as thousands separators
       * @param {number} num - The number to format
       * @return {string} The formatted number
       */
      formatNumber: function(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      },
      
      /**
       * Returns a random integer between min and max (inclusive)
       * @param {number} min - The minimum value
       * @param {number} max - The maximum value
       * @return {number} A random integer
       */
      randomInt: function(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
      
      /**
       * Debounces a function
       * @param {function} func - The function to debounce
       * @param {number} wait - The time to wait in milliseconds
       * @return {function} The debounced function
       */
      debounce: function(func, wait) {
        let timeout;
        return function(...args) {
          const context = this;
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(context, args), wait);
        };
      },
      
      /**
       * Creates a slug from a string
       * @param {string} str - The string to convert
       * @return {string} The slug
       */
      slugify: function(str) {
        return str
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/[\s_-]+/g, '-')
          .replace(/^-+|-+$/g, '');
      },
      
      /**
       * Shuffles an array
       * @param {Array} array - The array to shuffle
       * @return {Array} The shuffled array
       */
      shuffleArray: function(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
      },
      
      /**
       * Gets the current date in YYYY-MM-DD format
       * @return {string} The formatted date
       */
      getCurrentDate: function() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
    };
    
    return UtilHelpers;
  }));