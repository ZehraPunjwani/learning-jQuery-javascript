/*
  Written By: Zehra Punjwani
  Date: June 2017
  Details: Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided 
  arrays.
  Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is 
  the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric 
  difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not 
  both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
*/


function sym(args) {
  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {
    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }
    // Run filter function on each array against the other
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1));
  };

  // Reduce all arguments getting the difference of them
  // Run filter function to get the unique values
  return args.reduce(getDiff, []).filter(function(elem, index, self) {
    return index === self.indexOf(elem);
    });
}

sym([1, 2, 3], [5, 2, 1, 4]);

