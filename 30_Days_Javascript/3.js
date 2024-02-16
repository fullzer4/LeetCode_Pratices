/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
  const stateF = (n) => {
    return val % n 
  }
  return {
    toBe: (n) => {
      const state = stateF(n)
      return (state !== 0) ? throw new Error("Not Equal") : true;
    },
    notToBe: (n) => {
      const state = stateF(n)
      return (state !== 0) ? true: throw new Error("Equal");
    }
  }
};

console.log(expect(5).toBe(7)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
