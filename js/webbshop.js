$(document).ready(function() {
    console.log("fungerar?");
    var numberOfAddedProducts = 0;
        
    
    //fetch för att hämta huvudkategorier från json
    fetch("json/huvudkategorier.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var mainCategories = data;
       // console.log(mainCategories);
    
    
       for (i = mainCategories.length-1; i >= 0; i--) {
        console.log("fungerar här med?");
        console.log("id: " + mainCategories[i].id);
        console.log("mainCat: " + mainCategories[i].mainCat);
        
        //bygg ul och printa ut huvudkategorer i div med id showMainCat i nav
        
        var a = document.createElement('a');
        a.setAttribute("href", "#");
        a.innerHTML = mainCategories[i].mainCat;
        var ul = document.createElement('ul');
        ul.className = 'subCatString';
        ul.id = mainCategories[i].id;
        var li = document.createElement('li');
        li.className = 'showMainCat';

        li.appendChild(a);
        li.appendChild(ul);

        $("#navShowMainCat").prepend(li);
        a.onclick = showMainCat;
    }
    
    populateSubCategories();

});

    function populateSubCategories() {
    //fetch för att hämta underkategorier från json
     fetch("json/underkategorier.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var subCategories = data;
        console.log(subCategories);

        for (i = 0; i < subCategories.length; i++) {
        console.log("subcat fungerar här med?");
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
   
}

    //funktion för att ta fram info om vilken huvudkategori man klickar på
    function showMainCat() {
        var main = ($(this).next().attr("id"));
        printProducts(main, 0);
    }

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
        //radera flex så att inte nya produkter listas bredvid
        //skapa sedan flex igen
        //innebär att flex raderas varje gång man trycker på huvudkategori
        $(".flex").remove();
        var flex = document.createElement("div");
        flex.className = "flex";
        $("main").append(flex);

    
    fetch("json/produkter.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var products = data;
          
    
       for (i = 0; i < products.length; i++) {
        console.log("fungerar här med?");
        
        if ((products[i].mainCat == main && products[i].subKat == sub) 
        || (products[i].mainCat == main && 0 == sub)
        || (0 == main && 0 == sub)) 
            {

                 
        var div = document.createElement('div');
            div.className = 'card';
            div.id = products[i].id;
            div.innerHTML = '<img class="imgSmall" src="images/' + products[i].prodImage + '"><h3>' + products[i].prodName + '</h3><h4>' + products[i].prodDesc + '</h4><p>Pris: ' + products[i].prodPrice + '</p><button class="button" onclick="addToChart()"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Köp nu</button>';
            
             $(".flex").append(div);
    };
       } 
    });
}




});
var numberOfAddedProducts = 0;
var productCartArray = [];


function addToChart() {
    console.log("addToChart");
    //console.log("id: " + $(this).parent().closest('div').prop('nodeName'));
    //console.log("id: " + this.parentNode.id);
    //console.log("id: " + $(this).parent().attr("id"));
    numberOfAddedProducts += 1;
    console.log(numberOfAddedProducts);
    var counter = document.getElementById("counter");
    counter.innerText = numberOfAddedProducts;
    document.getElementById("counter").innerText = numberOfAddedProducts;

}
