
$(document).ready(function () {
    console.log("fungerar?");
    fetch("json/kunder.json")
        .then(function (response) {
            return response.json();
        })

        .then(function (data) {
            var customers = data;
            var content = "<ul>"
            for (i = 0; i < customers.length; i++) {
                content += "<li>Epost: " + customers[i].email + "<ul><li>Lösenord: " + customers[i].password + "</li></ul></li><li>&nbsp;</li>";
            }
            content += "</ul>";
            $(".tre").append(content);
        });
});
