var users = {
    admin: {name: 'admin', password: 'admin'}
};
$(document).ready(function() {
    console.log("fungerar?");
		if(sessionStorage.user)
	{
		$(".logState").html("LOGGA UT");
	}
	else
	{
		$(".logState").html("LOGGA IN");
    }

        fetch("json/users.json")
            .then(function (response) {
                return response.json();
            })

            .then(function (data) {
                users = data;
                console.log(users);
            });

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

        var productCartArray = [];
    var counter = 0;
    fetch("json/produkter.json")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
			productCartArray = JSON.parse(sessionStorage.getItem("cart")).sort(function (a, b) { return a - b });				
			var numberOfAddedProducts = productCartArray.length;
			document.getElementById("counter").innerText = numberOfAddedProducts;
			
            console.log(productCartArray);
            var products = data;
            var sum = 55;
            for (i = 0; i < productCartArray.length; i++) {
                sum += products[productCartArray[i] - 1].prodPrice;
                if (productCartArray[i] === previous || i === 0) {
                    counter++;

                }
                else {
                    var divString = '<div class="cart-tab">\n<div class="text">'
                        + products[productCartArray[i - 1] - 1].prodName
                        + '</div>\n<div class="num">'
                        + counter
                        + '</div>\n<div class="num">'
                        + products[productCartArray[i - 1] - 1].prodPrice + ':-'
                        + '</div>\n</div>';
                    $('.tre').append(divString);
                    console.log(products[productCartArray[i - 1] - 1].prodName + "\t" + counter);
                    counter = 1;
                }
                var previous = productCartArray[i];
            }
            var lastProductString = '<div class="cart-tab">\n<div class="text">'
                + products[productCartArray[productCartArray.length - 1] - 1].prodName
                + '</div>\n<div class="num">'
                + counter
                + '</div>\n<div class="num">'
                + products[productCartArray[productCartArray.length - 1] - 1].prodPrice + ':-'
                + '</div>\n</div>';
            $('.tre').append(lastProductString);
            var freightString = '<div class="cart-tab">\n<div class="text">'
                + 'Frakt'
                + '</div>\n<div class="num">'
                + '</div>\n<div class="num">'
                + '55:-'
                + '</div>\n</div>';
            $('.tre').append(freightString);
            var totalString = '<div class="cart-tab header">\n<div class="text">'
                + 'Total'
                + '</div>\n<div class="num">'
                + '</div>\n<div class="num">'
                + sum + ':-'
                + '</div>\n</div>';
            $('.tre').append(totalString);
            console.log(products[productCartArray[productCartArray.length - 1] - 1].prodName + "\t" + counter);
            console.log(sum);
        });

});

var showMessage = function(status, message) {
    $(window).scrollTop(0);
    $('#message').html('<div class="'+status+'">'+message+'</div>');
    $('#message div').slideDown(400);
    $('.'+status).delay(4000).slideUp(400, function(){ $(this).remove(); });
};

function submitOrder() {
    if (sessionStorage.user != null) {
        sendOrder(sessionStorage.getItem("cart"));
        sessionStorage.removeItem("cart");
        window.location.href = "thanks.html";
    } else {
        var title = 'Logga in';
        var content = '<form><label>Användarnamn</label>';
        content += '<input id="username" type="text" />';
        content += '<label>Lösenord</label>';
        content += '<input id="password" type="password" />';
        content += '<div class="button2" onclick="signIn()">Logga in</div><div onclick="createAccount()">eller <a class="createAccount" href="#">Skapa konto</a></div><form>';
        showModal(title, content);
    }
    console.log("Submit Order");

}

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

var closeModal = function(){
	$('.modal').remove(); 
    $("header").show();
    $(".tre").show();
    $(".order").show();
    $("footer").show();
};

var signIn = function() {
    var username = $('#username').val().toLowerCase().trim();
    if(users[username]) {
        var password = $('#password').val();
        
        if(users[username].password == password) {
            sessionStorage.setItem('user', username);
			$(".logState").html("LOGGA UT");
            window.location.reload();
            
        } else 
		{
			console.log('error, Fel lösenord.');
			 showMessage('error', 'Fel lösenord.');
		}
        
     } else
	 {
		console.log('error, Fel användarnamn.');
		showMessage('error', 'Fel användarnamn.');
		 
	 }		
};

var signOut = function() {
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

function sendOrder(orderString) {
    //function för att spara ordern till JSON-fil
}

$(".logInButton").click(function () {

    if (ourUser == $(".userName").val() && ourPassword == $(".passwordUser").val()) {
        showCorrectLogIn();


    } else {

        // Dölj helloForm, visa forgotLogin
        showForgotLogin();
    }

});






