$(document).ready(function() {
    console.log("fungerar?");
        
    
    //printa ut huvudkategorier i menyer
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
        
        /*$(".mainCategory").text(mainCategories[i].mainCat);*/
        //nedan: lade huvudkategorierna i ett kort 
        /* var mainCategoryString = "<div class='card'><h2 class='mainCategory'>" +  mainCategories[i].mainCat + "</h2><ul id='" + mainCategories[i].id + "'></div>"; */
         var mainCategoryString = "<li class='showMainCat'><a href='#'>" + mainCategories[i].mainCat + "</a><ul class='subCatString' id='" + mainCategories[i].id + "'></ul></li>";

        console.log(mainCategoryString);
        /* $(".flex").append(mainCategoryString); */
        /* $(".nav").append(mainCategoryString); */
        $("#navShowMainCat").append(mainCategoryString);
    }
    

        
    });

     fetch("json/underkategorier.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var subCategories = data;
        console.log(subCategories);

        for (i = 0; i < subCategories.length; i++) {
        //console.log("fungerar här med?");
        //console.log("id: " + subCategories[i].id);
        //console.log("subCat: " + subCategories[i].subCat);
        //console.log("huvudkategori: " + subCategories[i].huvudkategori);
            var li = document.createElement('li');
            li.className = 'showSubCat';
            li.innerHTML = '<a href="#">' + subCategories[i].subCat + '</a>';
            li.id = subCategories[i].huvudkategori + "_" + subCategories[i].id; 
            $("#" + subCategories[i].huvudkategori).append(li); 
            li.onclick = showSubCat;
        }
    });
   

    //funktion för att printa ut kort med underkategorier när man klickar på undermeny
    function showSubCat() {
        var mainSub = ($(this).attr("id")).split("_");
        printProducts(mainSub[0], mainSub[1]);
        //alert(mainSub[0]);
        //alert($(this).attr("id"));
        //alert($(".showSubCat").index($(this).text()));
    }

        //skriver ut alla produkter
        printProducts(0, 0);
        
        //alert($(".card").length); 

    //printa ut kort produkter på startsidan
    function printProducts(main, sub) {
        //töm div
        alert(main);
        alert(sub);

    fetch("json/produkter.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var products = data;
          
    
       for (i = 0; i < products.length; i++) {
        console.log("fungerar här med?");
        
        if (products[i].mainCat == main && products[i].subKat == sub) {

                 
        var div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = '<img class="imgSmall" src="images/' + products[i].prodImage + '"><h3>' + products[i].prodName + '</h3><h4>' + products[i].prodDesc + '</h4><p>Pris: ' + products[i].prodPrice + '</p><button class="button">Köp nu</button>';
            
             $(".flex").append(div);
    };
       } 
    });
}

});
