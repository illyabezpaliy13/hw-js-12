function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
  }

  function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
  } 
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

const result = makeMessage("Margarita", makePizza);
console.log(result);