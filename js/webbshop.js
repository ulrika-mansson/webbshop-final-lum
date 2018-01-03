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

            $("#" + subCategories[i].huvudkategori).append(li); 
            li.onclick = showSubCat;
        }
    });
   

    //funktion för att printa ut kort med underkategorier när man klickar på undermeny
    function showSubCat() {
        alert($(this).text());
        //alert("test " + $(this).parents(".showMainCat").firstChild.nodeValue);
        //alert($(".showSubCat").index($(this).text()));
    }

    //printa ut produkter på startsidan
    fetch("json/produkter.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var products = data;
          
    
       for (i = 0; i < products.length; i++) {
        console.log("fungerar här med?");
        
        var productCard = "<div class='card'><img class='imgSmall' src='images/" + products[i].prodImage + "'><h3>" + products[i].prodName + "</h3><h3>" + products[i].prodDesc + "</h3><p>Pris: " + products[i].prodPrice + "</p><button>Köp nu</button></div>";

        /*$(".mainCategory").text(mainCategories[i].mainCat);*/
        //nedan: lade huvudkategorierna i ett kort 
        /* var mainCategoryString = "<div class='card'><h2 class='mainCategory'>" +  mainCategories[i].mainCat + "</h2><ul id='" + mainCategories[i].id + "'></div>"; */
        /* $(".flex").append(mainCategoryString); */
        /* $(".nav").append(mainCategoryString); */

        $(".flex").append(productCard);
       } 
    });
    

});
