const startDiscountFrom = 10000;
const discount = 10;

const discountValue= (100 - discount) / 100;

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
  return products[productNumber - 1];
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

showProducts();
const productNumber = getProductNumber();
const productsAmount = getProductAmount();
const selectedProd = selectedProduct(productNumber);
const initialPrice = calculatePrice(productsAmount, selectedProd);
calculatePriceWithDiscount(initialPrice);