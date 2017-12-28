$(document).ready(function() {
    console.log("fungerar?");

    fetch("./webbshop.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        createUIFromLoadedProducts();
    });
    
    $("body").append('<div class="wrapper" label="wrapper"> WRAPPER </div>');


});