// Write your Pizza Builder JavaScript in this file.
$(document).ready(function() {
    $(".price ul li:nth-child(4)").hide();
    $(".price ul li:nth-child(5)").hide();
    recalculatePrice();
});

$(".btn-pepperonni").click(function(e) {
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price ul li:first-child").toggle();
    recalculatePrice();
});

$(".btn-mushrooms").click(function(e) {
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price ul li:nth-child(2)").toggle();
    recalculatePrice();
});

$(".btn-green-peppers").click(function(e) {
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price ul li:nth-child(3)").toggle();
    recalculatePrice();
});

$(".btn-sauce").click(function(e) {
    $(".crust section:nth-child(2)").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price ul li:nth-child(4)").toggle();
    recalculatePrice();
});

$(".btn-crust").click(function(e) {
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price ul li:nth-child(5)").toggle();
    recalculatePrice();
});

function recalculatePrice() {
    var totalPrice = 10;
    for (var i = 1; i <= 5; i++) {
        if ($(".price ul li:nth-child(" + i + ")").is(":visible")) { 
            var ingredientPrice = $(".price ul li:nth-child(" + i + "):visible").html();
            var ingredientPriceWithSymbol = ingredientPrice.substring(1,2);
            totalPrice += Number(ingredientPriceWithSymbol);
        }
    }
    totalPrice = "$" + totalPrice;
    $(".price strong").html(totalPrice);
}


