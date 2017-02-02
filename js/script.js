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
}

function ingredientsAutocomplete(data) { 
    var keys = Object.keys(data);
    console.log(keys)
    //test
    $("#ingredient").autocomplete({
        source: keys
    });
}