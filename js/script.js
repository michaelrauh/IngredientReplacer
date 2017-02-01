$.getJSON("data/ingredients.json", function(json) { 
    console.log("test!");
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
    //test
    $("#ingredient").autocomplete({
        source: data
    });
}