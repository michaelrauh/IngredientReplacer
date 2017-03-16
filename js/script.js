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
        var key = $("#ingredient").val();
        renderHTML(data[key]); 
    });
}

function ingredientsAutocomplete(data) { 
    var keys = Object.keys(data);
    $("#ingredient").autocomplete({
        source: function(request, response) {
            var results = $.ui.autocomplete.filter(keys, request.term);
            response(results.slice(0, 10));   
        },
        minLength: 0,
        delay: 0
    });

    $( "#ingredient" ).bind('focus', function(){
        $(this).autocomplete("search");
    });
}



/*
    Rendering results
*/

function renderHTML(data) {
    $data = data;
    results = $("#results");
    renderAmount(data["amount"]);
    if (data["substitution"].length == 1) {
        renderSubstitution(data["substitution"][0]);
    } else {
        data["substitution"].forEach(renderSubstitution);
    }

}

function renderAmount(amount) {
    var amounts = "<div id='results__amount'>"
    amounts += "<h4>Amount</h4>"
    amounts += "<p>" + amount + "</p>"
    amounts += "</div>"
    results.html(amounts);
}

function renderSubstitution(substitution, index, array) { 
    console.log(substitution);
    console.log(index);
    console.log(array);
    substitutionList = "<div class='substitution'>";
    substitutionList = "<h4>Substitution</h4>";
    for (ingredient in substitution) {
        if (substitution.hasOwnProperty(ingredient)) {
            substitutionList += ingredient + " : " + substitution[ingredient] + "<br>"; 
        }
    }
    substitutionList += "</div>";
    results.append(substitutionList);
}