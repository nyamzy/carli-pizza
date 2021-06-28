//business logic
var pizza = {
  size: ["small", "medium", "large"],
  crust: ["crispy", "stuffed", "glutten-free"],
  toppings: ["bacon", "pineapple", "ham", "mushrooms"],
};

pizza.size[0] = 500;
pizza.size[1] = 750;
pizza.size[2] = 1000;

pizza.crust[0] = 50;
pizza.crust[1] = 100;
pizza.crust[2] = 150;

pizza.toppings[0] = 150;
pizza.toppings[1] = 100;
pizza.toppings[2] = 120;
pizza.toppings[3] = 80;


//user interface logic
$(document).ready(function() {
  $("#deliver").click(function() {
    $(alert("Delivery within Nairobi is Kshs. 300/="));
  });


  var inputtedSize = $("input#size").val();
  alert(inputtedSize);
  var inputtedCrust = $("input#crust").val();
  var inputtedToppings = $("input#toppings").val();
  var inputtedQuantity = $("input#quantity").val();

  //if (inputtedSize && inputtedCrust) {
    price =

  $(".total h2").append("Total charge is: " + price);


  event.preventDefault();
});
