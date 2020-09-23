// RE-CREATING 10 OF THE MOST IMPORTANT METHODS FROM THE lODASH LIBRARY.

const _ = {
  /*The clamp method of Lodash library can also be made with the
  help of Math.max() and Math.min() instead of using conditionals.*/
  clamp(number, lowerBound, upperBound) {
    if (number < lowerBound) {
      return lowerBound;
    } else if (number > upperBound) {
      return upperBound;
    } else {
      return number;
    }
  },
  // This method is almost similar to lodash library.
  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    }
    if (startValue > endValue) {
      let tmp = endValue;
      endValue = startValue;
      startValue = tmp;
    }
    if (number >= endValue || number < startValue) {
      return false;
    } else {
      return true;
    }
  },
  // Easy method.Use split() instead of this.
  words(sentence) {
    return sentence.split(" ");
  },
  // Add padding to both side of string. Extra padding goes to left side of the string.
  pad(stringValue, Length) {
    if (Length > stringValue.length) {
      const space = " ";
      let padlength = Length - stringValue.length;
      if (padlength % 2 === 0) {
        stringValue = `${space.repeat(Math.floor(padlength/2))}${stringValue}`;
        stringValue = `${stringValue}${space.repeat(Math.floor(padlength/2))}`;
        return stringValue;
      } else {
        stringValue = `${space.repeat(Math.floor(padlength/2))}${stringValue}`;
        stringValue = `${stringValue}${space.repeat(Math.floor(padlength/2) + 1)}`;
        return stringValue;
      }
    } else {
      return stringValue;
    }
  },

  // Easy method .hasOwnProperty() does the same thing.

  has(obj, key) {
    if (obj[key] !== undefined) {
      return true;
    } else {
      return false;
    }
  },
  // This can be used for inverting [key:value] pairs of a given object.

  invert(objects) {
    let invertedObject = {};
    for (var [key, value] of Object.entries(objects)) {
      invertedObject[value] = key;
    }
    return invertedObject;
  },
  // Find the key of the first element that satisfies the given condition.
  findkey(objects, functions) {
    let resultantKey;
    for (var [key, value] of Object.entries(objects)) {
      let result = functions(value);
      if (result === true) {
        resultantKey = key;
        break;
      }
    }
    if (resultantKey === undefined) {
      return undefined;
    } else {
      return resultantKey;
    }
  },
  // Remove element equal to the number of specified elemets to be removed.
  drop(arrays, droppingElement) {
    if (droppingElement === undefined) {
      droppingElement = 1;
    }
    arrays = arrays.slice(droppingElement, arrays.length);
    return arrays;
  },
  // Remove element from beginning till a false value is returned by the given predicate function.
  dropWhile(arrays, functions) {
    let result;
    for (var i = 0; i < arrays.length; i++) {
      result = functions(arrays[i], i, arrays);
      if (result === false) {
        result = i;
        break;
      }
    }
    let droppedArray = this.drop(arrays, result);
    return droppedArray;
  },
  // Divides an array into sub-arrays having size specified by given arguments.

  chunk(arrays, size) {
    if (size === undefined) {
      size = 1;
    }
    let chunkedArray = [],
      chunk = [],
      j = 1;
    for (var i = 0; i < arrays.length; i++) {
      if (j <= size) {
        chunk[j - 1] = arrays[i];
        j++;
      }
      if (j > size && i !== arrays.length - 1) {
        j = 1;
        chunkedArray.push(chunk);
        chunk = [];
      }

    }
    chunkedArray.push(chunk);
    return chunkedArray;
  }
}
