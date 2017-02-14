$.getJSON("data/ingredients.json", function(json) { 
    console.log("loaded!");
    setup(json);
});

function setup(data) { 
    $( document ).ready(function () {
        render(data);
    });
}

function render(data) { 
    setupEventHandlers(data); 
}

/* 
    Event Handlers
    1. Searchable field Handlers
*/

function setupEventHandlers(data) { 
    ingredientsAutocomplete(data);
    $("#submit").click(function () { 
        key = $("#ingredient").val();
        console.log(data[key]);
        constructResultsTable(data[key]); 
    });
}

function ingredientsAutocomplete(data) { 
    var keys = Object.keys(data);
    //test
    $("#ingredient").autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(keys, request.term);
            response(results.slice(0, 10));
        }
    });
}

/*
    Rendering results
*/

function constructResultsTable(data) {
    var table = "<table>";
    table += "<tr>";
    table += "<td>" + "Amount" + "<td>";
    counter = 0; 
    data["substitution"].forEach(function(sub, amount) {
        counter += 1;
        table += "<td>" + "Substitution" + "#" + counter + "</td>";
        table += "<td>" + "Amount" + "#" + counter + "</td>";
    });

    $("#results").append(table);
}