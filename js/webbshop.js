$(document).ready(function() {
    console.log("fungerar?");

    fetch("./webbshop.json")
    .then(function(response) {$(document).ready(function() {
        console.log("fungerar?");
        var mainCategories = [];
        var createCard ="";
        var subCategories = "";
        var subCat = "";
    
        fetch("json/huvudkategorier.json")
        .then(function(response) {
            return response.json();
        })
    
        .then(function(data) {
            var mainCategories = data;
           // console.log(mainCategories);
        
        
           for (i = 0; i < mainCategories.length; i++) {
            console.log("fungerar här med?");
            console.log("id: " + mainCategories[i].id);
            console.log("mainCat: " + mainCategories[i].mainCat);
            
            $(".mainCategory").text(mainCategories[i].mainCat);
            /* var listOfMainCategories = "<h1>" + diary[i].rubrik.toUpperCase() + "</h1><h3>" + diary[i].datum + "</h3><p>" + diary[i].text + "</p>"; */
        }
    
        /*  $("body").append('<div class="wrapper" label="wrapper"> WRAPPER </div>');*/
        });
    
        fetch("json/underkategorier.json")
        .then(function(response) {
            return response.json();
        })
    
        .then(function(data) {
            var subCategories = data;
            console.log("subCat: " + subCategories[i].subCat);
    
            for (i = 0; i < subCategories.length; i++) {
            //console.log("fungerar här med?");
            //console.log("id: " + subCategories[i].id);
            //console.log("subCat: " + subCategories[i].subCat);
            //console.log("huvudkategori: " + subCategories[i].huvudkategori);
            
            $(".subCategory").text(subCategories[i].subCat); 
            }
        })
        
    });
        return response.json();
    })
    .then(function(products) {
        listOfProducts = products;
        createUIFromLoadedProducts();
    });
    
    $("body").append('<div class="wrapper" label="wrapper"> WRAPPER </div>');


});