// Adding to Cart
var addedCount = document.getElementById('myCart');
var n = localStorage.getItem('counter');
var prevItemValues = localStorage.getItem("counter");
addedCount.innerText = prevItemValues;
console.log(tt);
function addingToCart() {
 

  if (n === null) {
    n = 1;
  } else {
    n++;
  }
  console.log(n);
  localStorage.setItem("counter", n);
  
  addedCount.innerText = n;
}