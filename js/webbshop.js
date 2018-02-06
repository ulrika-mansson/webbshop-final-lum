var users = {
    admin: { name: 'admin', password: 'admin' }
};

$(document).ready(function () {
    console.log("fungerar?");
    fetch("json/users.json")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            users = data;
            console.log(users);
        });

    var numberOfAddedProducts = 0;
<<<<<<< HEAD
    var productCartArray = [];
	if(sessionStorage.cart != null)
	{
		productCartArray = JSON.parse(sessionStorage.getItem("cart"));
		numberOfAddedProducts = productCartArray.length;
		document.getElementById("counter").innerText = numberOfAddedProducts;
	}
	if(sessionStorage.user)
	{
        $(".logState").html("LOGGA UT");
            if (sessionStorage.user === "admin") {
                console.log("admin");
                $("#navShowMainCat").prepend('<li><a href="kundlista.html">Kundlista</a></li>');
                $("#navShowMainCat").prepend('<li><a href="orderlista.html">Orderlista</a></li>');
                $("#navShowMainCat").prepend('<li><a href="epostlista.html">Epostlista</a></li>');

            }

	}
	else
	{
		$(".logState").html("LOGGA IN");
	}

=======
>>>>>>> 636b03204fddc992402a0684c23552848d28b436
    
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

            var img = document.createElement('img');
            img.className = 'imgSmall';
            img.setAttribute("src", "images/" + products[i].prodImage);
            var h3 = document.createElement('h3');
            h3.innerHTML = '<a href="#">' + products[i].prodName + '</a>';
            var h4 = document.createElement('h4');
            h4.innerHTML = '<a href="#">' + products[i].prodDesc + '</a>';
            var p = document.createElement('p');
            p.innerHTML = "Pris: " + products[i].prodPrice;
            var kursiv = document.createElement('i');
            kursiv.className = "fa fa- cart - arrow - down";
            kursiv.setAttribute("area-hidden", "true");
            var knapp = document.createElement('button');
            knapp.className = 'button';
            knapp.appendChild(kursiv);
            knapp.innerText = " Köp nu";
        var div = document.createElement('div');
            div.className = 'card';
            div.id = products[i].id;
<<<<<<< HEAD
            div.appendChild(img);
            div.appendChild(h3);
            div.appendChild(h4);
            div.appendChild(p);
            div.appendChild(knapp);

        //var div = document.createElement('div');
        //    div.className = 'card';
        //    div.id = products[i].id;
            //div.innerHTML = '<img class="imgSmall" src="images/' + products[i].prodImage + '"><h3>' + products[i].prodName + '</h3><h4>'
            //    + products[i].prodDesc + '</h4><p>Pris: ' + products[i].prodPrice
            //    + '</p><button class="button" onclick="addToChart()"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Köp nu</button>';
            console.log("div: " + div.innerHTML);
             $(".flex").append(div);
             img.onclick = showProduct;
             h3.onclick = showProduct;
             h4.onclick = showProduct;
             knapp.onclick = addToChart;
    };
=======
            div.innerHTML = '<img class="imgSmall" src="images/' + products[i].prodImage + '"><h3>' + products[i].prodName + '</h3><h4>' + products[i].prodDesc + '</h4><p>Pris: ' + products[i].prodPrice + '</p><button class="button" onclick="addToCart()"><i class="fa fa-cart-arrow-down" aria-hidden="true"></i> Köp nu</button>';
            
             $(".flex").append(div);
    }
>>>>>>> 636b03204fddc992402a0684c23552848d28b436
       } 
    });
}

<<<<<<< HEAD
    $(".logState").click(function () {
        if (sessionStorage.user) {
            sessionStorage.removeItem("user");
            $(".logState").html("LOGGA IN");

        }
        else {
            var title = 'Logga in';
            var content = '<form><label>Användarnamn</label>';
            content += '<input id="username" type="text" />';
            content += '<label>Lösenord</label>';
            content += '<input id="password" type="password" />';
            content += '<div class="button2" onclick="signIn()">Logga in</div><div onclick="createAccount()">eller <a class="createAccount" href="#">Skapa konto</a></div><form>';
            showModal(title, content);
        }
    });

    function addToChart() {
        console.log("addToChart");
        //console.log("id: " + $(this).parent().closest('div').prop('nodeName'));
        //console.log("id: " + this.parentNode.id);
        //console.log("id: " + $(this).parent().attr("id"));
        numberOfAddedProducts += 1;
        console.log("TESTT" + $(this).parent().attr('id'));
        productCartArray.push($(this).parent().attr('id'));
        var counter = document.getElementById("counter");
        counter.innerText = numberOfAddedProducts;
        document.getElementById("counter").innerText = numberOfAddedProducts;
        var productCartString = JSON.stringify(productCartArray);
        console.log(productCartString);
        sessionStorage.setItem('cart', productCartString);
        console.log(productCartArray);

    }
	


    function showProduct() {
        console.log($(this).parent().attr('id'));
        var i = $(this).parent().attr('id') - 1;
        fetch("json/produkter.json")
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                var products = data;
                $(".flex").remove();
                var flex = document.createElement("div");
                flex.className = "flex";
                $("main").append(flex);

                var img = document.createElement('img');
                img.className = 'imgSmall';
                img.setAttribute("src", "images/_old/xx_" + products[i].prodImage);
                var h3 = document.createElement('h3');
                h3.innerHTML = products[i].prodName;
                var h4 = document.createElement('h4');
                h4.innerHTML = products[i].prodDesc;
                var longDesc = document.createElement('p');
                longDesc.innerHTML = products[i].longDesc;
                var p = document.createElement('p');
                p.innerHTML = "Pris: " + products[i].prodPrice;
                var kursiv = document.createElement('i');
                kursiv.className = "fa fa- cart - arrow - down";
                kursiv.setAttribute("area-hidden", "true");
                var knapp = document.createElement('button');
                knapp.className = 'button';
                knapp.appendChild(kursiv);
                knapp.innerText = " Köp nu";
                var div = document.createElement('div');
                div.className = 'page';
                div.id = products[i].id;
                div.appendChild(img);
                div.appendChild(h3);
                div.appendChild(h4);
                div.appendChild(longDesc);
                div.appendChild(p);
                div.appendChild(knapp);
                $(".flex").append(div);
                knapp.onclick = addToChart;

                //$('img').prop('onclick', null).off('click');
                //$('h3').prop('onclick', null).off('click');
                //$('h4').prop('onclick', null).off('click');
            });
                
    }

});
=======
});

//funktion för att lägga till produkter i varukorgen
var numberOfAddedProducts = 0;
var productCartArray = [];
>>>>>>> 636b03204fddc992402a0684c23552848d28b436

var showModal = function (title, content) {
    var html;
    closeModal();
    $("header").hide();
    $(".tre").hide();
    $(".order").hide();
    $("footer").hide();
    html = '<div class="modal"><div class="mcontent">';
    html += '<div class="mtitle">' + title + '<i class="fa fa-times" onclick="closeModal()"></i></div>';
    html += '<div class="mhtml">' + content + '</div></div></div>';
    $('main').append(html);
};

var closeModal = function () {
    $('.modal').remove();
    $("header").show();
    $(".tre").show();
    $(".order").show();
    $("footer").show();
};

var signIn = function () {
    var username = $('#username').val().toLowerCase().trim();
    if (users[username]) {
        var password = $('#password').val();

        if (users[username].password == password) {
            sessionStorage.setItem('user', username);
            $(".logState").html("LOGGA UT");
            window.location.reload();

        } else {
            console.log('error, Fel lösenord.');
            showMessage('error', 'Fel lösenord.');
        }

    } else {
        console.log('error, Fel användarnamn.');
        showMessage('error', 'Fel användarnamn.');

    }
};

var signOut = function () {
    sessionStorage.removeItem('user');
    window.location.reload();
};

var createAccount = function () {
    console.log("Create Account");
    var title = 'Skapa konto';
    var content = '<form><label>Namn</label>';
    content += '<input id="name" type="text" />';
    content += '<label>Adress</label>';
    content += '<input id="address" type="text" />';
    content += '<label>Email</label>';
    content += '<input id="email" type="text" />';
    content += '<label>Telefonnummer</label>';
    content += '<input id="phone" type="text" />';
    content += '<label>Nyhetsbrev</label>';
    content += '<input type="checkbox" id="newsletter">';
    content += '<div class="button2" onclick="saveForm()">Skapa konto</div><form>';
    showModal(title, content);
};

var saveForm = function () {
    var name = $('#name').val();
    var address = $('#address').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var wantNewsletter = false;
    if ($('#newsletter').is(":checked")) {
        wantNewsletter = true;
    }
    console.log("Name: " + name + "\nAdress: " + address + "\nemail: " + email + "\nTelefonnummer: " + phone + "\nNyhetsbrev: " + wantNewsletter);
    //function för att spara form till JSON-fil
};

<<<<<<< HEAD

=======
function addToCart() {
    console.log("addToCart");
    //console.log("id: " + $(this).parent().closest('div').prop('nodeName'));
    //console.log("id: " + this.parentNode.id);
    //console.log("id: " + $(this).parent().attr("id"));
    numberOfAddedProducts += 1;
    console.log(numberOfAddedProducts);
    var counter = document.getElementById("counter");
    counter.innerText = numberOfAddedProducts;
    document.getElementById("counter").innerText = numberOfAddedProducts;

}

//funktion för att visa inloggningsmodal

function logginModal() {
    console.log("logginModal");
    
    
    var content, title = 'Logga in';
    content  = '<form><label>E-post</label>';
    content += '<input id="email" type="text" />';
    content += '<label>Lösenord</label>';
    content += '<input id="password" type="password" />';
    content += '<div class="button" onclick="signIn()">Logga in</div></form>';
    showModal(title, content);
    console.log(content);
} 

var showModal = function(title, content) {
    var html;
    closeModal();

    html = '<div class="modal"><div class="mcontent">';
    html += '<div class="mtitle">' + title + '<i class="fa fa-times" onclick="closeModal()"></i></div>';
    html += '<div class="mhtml">' + content + '</div></div></div>';
    $('main').prepend(html);
}

var closeModal = function() {
    $('.modal').remove();
}

function signIn() {
    var email = $("#email").val();
    var password = $("#password").val();

    fetch("json/kunder.json")
    .then(function(response) {
        return response.json();
    })

    .then(function(data) {
        var users = data;
        var incorrectLogin = true;

        for (i = 0; i < users.length; i++) {
        if (email === users[i].email && password === users[i].password) {
            closeModal();
            incorrectLogin = false;
        }
        }
        if(incorrectLogin)
        {
            var html = "Felaktigt användarnamn eller lösenord. Försök igen.";            
            $("Form")[0].append(html);    
        }
    });
}
>>>>>>> 636b03204fddc992402a0684c23552848d28b436
