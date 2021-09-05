var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

//Create a function to remove duplicates
console.log(groceries.length);

var deleteDuplicates = function (list) {
  var cleanList = [];
  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

//Check the length of the new array
var newGroceries = deleteDuplicates(groceries);
console.log(newGroceries.length);

//Create a numbered list of grocery items
newGroceries.forEach(function (item, index) {
  console.log(`#${index + 1} ${item}`);
});
