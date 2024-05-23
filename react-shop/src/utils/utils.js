/**
 * Counts the number of items and their quanitities, then updates the global cart number.
 * @param {function} updateCartFunc function that updates the cart number
 * @returns {null}
 */
export const updateCartNumber = (updateCartFunc) => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  let cartLength = 0
  Object.keys(currentOrder).forEach((item, i) => {
    cartLength = cartLength + currentOrder[item].quantity
  });
  updateCartFunc(cartLength)
}

/**
 * A simple display function for readable prices
 * @param {number} num function that updates the cart number
 * @returns {string}
 */
export const displayPrice = (num) => {
  return "$" + (num/100).toFixed(2) ;
}

/**
 * Pulls the current cart from localStorage, then adds a new item to localStorage and the CartContext.
 * Assigns the new item an id because an object structure is a lot easier for CRUDing specific items
 * (aka no finding/sorting).
 * Also adds the quantity field.
 *
 * @param {object} item the item to be added to the order
 * @param {function} updateCartFunc function that updates the global cart
 * @param {function} optionalCallback Anything you want, mainly used to show success messages.
 * @returns {null}
 */
export const addItemToCart = (item, updateCartFunc, optionalCallback = undefined) => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder")) || {}; // get order from localStorage.
  const timeID= Date.now(); // using this for id of each item. Need it later to delete items! See docs for more info.
  currentOrder[timeID] = {quantity: 1, ...item}; // add new item to existing order
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder)); // set new order in localStorage

  updateCartNumber(updateCartFunc); // update cart number for StoreHeader

  typeof optional === 'function' && optionalCallback(); // execute optionalCallback if it exists
}

/**
 * Pulls the current cart from localStorage, then adds 1 to the specified item's quantity.
 * Then, sends it back to localStorage and the CartContext.
 *
 * @param {object} item the item to be updated
 * @param {number} id the id of the item to be updated to match it to the localStorage entry
 * @param {function} updateCartFunc function that updates the global cart
 * @param {function} updateCartNumberFunc function that updates the global number of items in the cart.
 * @returns {null}
 */
export const increaseQuantity = (item, id, updateCartFunc, updateCartNumberFunc) => {
  item["quantity"] = item["quantity"] + 1;
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  currentOrder[id] = item;
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder));
  updateCartFunc(currentOrder);
  updateCartNumber(updateCartNumberFunc);
}

/**
 * Pulls the current cart from localStorage, then subtracts 1 to the specified item's quantity (unless it's already 1).
 * Then, sends it back to localStorage and the CartContext.
 *
 * @param {object} item the item to be updated
 * @param {number} id the id of the item to be updated to match it to the localStorage entry
 * @param {function} updateCartFunc function that updates the global cart
 * @param {function} updateCartNumberFunc function that updates the global number of items in the cart.
 * @returns {null}
 */
export const decreaseQuantity = (item, id, updateCartFunc, updateCartNumberFunc) => {
  if (item["quantity"] > 1) {
    item["quantity"] = item["quantity"] - 1;
  }
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  currentOrder[id] = item;
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder));
  updateCartFunc(currentOrder);
  updateCartNumber(updateCartNumberFunc);
}

/**
 * Pulls the current cart from localStorage, then finds and removes the specified item.
 * Then, sends it back to localStorage and the CartContext.
 *
 * @param {object} item the item to be removed
 * @param {number} id the id of the item to be updated to match it to the localStorage entry
 * @param {function} updateCartFunc function that updates the global cart
 * @param {function} updateCartNumberFunc function that updates the global number of items in the cart.
 * @param {function} optionalCallback Anything you want, mainly used to show success messages.
 * @returns {null}
 */
export const deleteItem = (item, id, updateCartFunc, updateCartNumberFunc, optionalCallback) => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  delete currentOrder[id];
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder));
  updateCartFunc(currentOrder);
  updateCartNumber(updateCartNumberFunc);

  typeof optional === 'function' && optionalCallback();
}

/**
 * Calculates the total price of the order from localStorage and returns it.
 *
 * @returns {string}
 */
export const calculateTotal = () => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  let totalPrice = 0
  Object.keys(currentOrder).forEach((item, i) => {
    totalPrice = totalPrice + (currentOrder[item].price * currentOrder[item].quantity)
  });
  return displayPrice(totalPrice)
}

/**
 * Calculates the total price of the order from localStorage and returns it.
 * @param {function} updateCartFunc function that updates the global cart
 * @param {function} updateCartNumberFunc function that updates the global number of items in the cart.
 * @param {function} navigate function that brings you to the checkout page upon success.
 * @returns {null}
 */
export const placeOrder = ( updateCartFunc, updateCartNumberFunc, navigate ) => {
  localStorage.removeItem("IansSantaMonicaCurrentOrder");
  updateCartFunc({});
  updateCartNumberFunc(0);
  navigate("/thank-you");
}
