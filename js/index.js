let mcChoosed = false;
$("#optionsMc").on("click", () => {
  if (mcChoosed == false) {
    $("#Mcs").show("fast");
    mcChoosed = true;
  } else {
    $("#Mcs").hide("fast");
    mcChoosed = false;
  }

});
let start = false;
let tableIsHidden = true;
$(".pieItems").on("click", () => {
  $("#barCharts").hide();
  $("#pieCharts").show();
})

$(".barItems").on("click", () => {
  $("#pieCharts").hide();
  $("#barCharts").show();
})

const hideIntroduction = function() {
  if (start === false) {
    start = true;
    $("#introduction").hide();
  }
}
let itemName = [];
let itemCalories = [];
const hideDiv = function() {
  itemName = [];
  itemCalories = [];
  thisCal = [];
  thisItemName = [];
  totalCal = 0;
  pieColorAxis = "";
  $("#pieAxis span").remove();
  $("#breakfastOptions").hide();
  $("#breakfastOptions svg").remove();
  $("#breakfastOptions div").remove();
  $("#normalOptions").hide();
  $("#normalOptions svg").remove();
  $("#normalOptions div").remove();
  $("#snackOptions").hide();
  $("#snackOptions svg").remove();
  $("#snackOptions div").remove();
  $("#drinkOptions").hide();
  $("#drinkOptions svg").remove();
  $("#drinkOptions div").remove();
  $("#coffeeOptions").hide();
  $("#coffeeOptions svg").remove();
  $("#coffeeOptions div").remove();
}

const colorAxis = `<div id="color">
  <p><span id="light"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span> 小於300大卡</span> </p>
  <p><span id="medium"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span> 300~500大卡</span> </p>
  <p><span id="fat"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span> 大於500大卡</span> </p>
</div>`;