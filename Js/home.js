var arrImages = ["Images/1.jpg","Images/11.jpg","Images/14.jpg","Images/7.jpg"];
var counter = 0 ;

var img = document.getElementById("img");
function next()
{
    counter++;
    if (counter>arrImages.length-1)
        counter = 0 ;

    console.log(counter);
    img.src = arrImages[counter];
}
function previous()
{
    counter--;
    if (counter<0)
        counter = arrImages.length-1 ;

    console.log(counter);
    img.src = arrImages[counter];
}

var invest ;
function play()
{
    invest = setInterval(
        function (){
            next();
        },1000);
}
function stop()
{
    clearInterval(invest);
}



/* Filter */


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


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