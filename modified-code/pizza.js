// Write your Pizza Builder JavaScript in this file.
$(".btn-pepperonni").click(function(e) {
    $(".pep").toggle();
});

$(".btn-mushrooms").click(function(e) {
    $(".mushroom").toggle();
});

$(".btn-green-peppers").click(function(e) {
    $(".green-pepper").toggle();
});

$(".btn-sauce").click(function(e) {
    $(".crust section:nth-child(2)").toggle("sauce-white");
});

$(".btn-crust").click(function(e) {
    $(".crust").toggle("crust-gluten-free");
});