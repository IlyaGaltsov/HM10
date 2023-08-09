function showProducts() {
  for(let i = 0; i < products.length; i++) {
    console.log(`#${(i + 1)} Product: ${products[i].name} | Price: $${products[i].price}`);
  }
}
function getProductNumber() {
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number which you want to buy:'));
  } while (productNumber < 1 || productNumber > products.length || isNaN(productNumber));
  return productNumber;
}

function getProductAmount() {
  let productsAmount;
  do {
    productsAmount = parseInt(prompt('Enter products amount:'));
  } while (productsAmount < 1 || isNaN(productsAmount));
  return productsAmount;
}

function selectedProduct(productNumber) {
  const selectedProduct = [productNumber - 1];
  return selectedProduct;
}

function calculatePrice(productsAmount, selectedProduct) {
  let initialPrice = selectedProduct.price * productsAmount;
  console.log('Price: $', initialPrice);
  return initialPrice;
}

function calculatePriceWithDiscount(initialPrice) {
  if (initialPrice >= startDiscountFrom) {
    const finalPrice = initialPrice * discountValue;
    console.log('Congratulations! You got a discount, the final price is $' + finalPrice);
  } else {
    console.log('Total Price: $' + initialPrice);
  }
}