const updateCartNumber = (updateCartFunc) => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  let cartLength = 0
  Object.keys(currentOrder).forEach((item, i) => {
    cartLength = cartLength + currentOrder[item].quantity
  });
  updateCartFunc(cartLength)
}

export const displayPrice = (num) => {
  return "$" + (num/100).toFixed(2) ;
}

export const addItemToCart = (item, updateCartFunc, optionalCallback = undefined) => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder")) || {};
  const timeID= Date.now(); // using this for id of each item. Need it later to delete items!
  currentOrder[timeID] = {quantity: 1, ...item};
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder));

  updateCartNumber(updateCartFunc);

  typeof optional === 'function' && optionalCallback();
}

export const increaseQuantity = (item, id, updateCartFunc, updateCartNumberFunc) => {
  item["quantity"] = item["quantity"] + 1;
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  currentOrder[id] = item;
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder));
  updateCartFunc(currentOrder);
  updateCartNumber(updateCartNumberFunc);
}

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

export const deleteItem = (item, id, updateCartFunc, updateCartNumberFunc, optionalCallback) => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  delete currentOrder[id];
  localStorage.setItem("IansSantaMonicaCurrentOrder", JSON.stringify(currentOrder));
  updateCartFunc(currentOrder);
  updateCartNumber(updateCartNumberFunc);

  typeof optional === 'function' && optionalCallback();
}

export const calculateTotal = () => {
  const currentOrder = JSON.parse(localStorage.getItem("IansSantaMonicaCurrentOrder"));
  let totalPrice = 0
  Object.keys(currentOrder).forEach((item, i) => {
    totalPrice = totalPrice + (currentOrder[item].price * currentOrder[item].quantity)
  });
  return displayPrice(totalPrice)
}

export const placeOrder = ( updateCartFunc, updateCartNumberFunc, navigate ) => {
  localStorage.removeItem("IansSantaMonicaCurrentOrder");
  updateCartFunc({});
  updateCartNumberFunc(0);
  navigate("/thank-you");
}
