$(document).ready(function() {
    console.log("fungerar?");
        
    
    //printa ut huvudkategorier i kort på startsidan
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
         var mainCategoryString = "<li class='mainCat' id='" + mainCategories[i].id + "'>" + mainCategories[i].mainCat + "</li>";

        console.log(mainCategoryString);
        /* $(".flex").append(mainCategoryString); */
        $(".nav").append(mainCategoryString);
    }
    

        
    });

/*     fetch("json/underkategorier.json")
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
        
        $("#" + subCategories[i].huvudkategori).append("<li>" + subCategories[i].subCat + "</li>"); 
        }
    });
 */    
    
});