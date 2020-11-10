
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking = $("#park-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    var source = $('#store-template').html();
    var template = Handlebars.compile(source);
    const newHTML = template({apartments});
    $('#results').append(newHTML);
    if(apartments.length == 0) {
        var source2 = $('#no-available').html();
        var template2 = Handlebars.compile(source2);
        const newHTML2 = template2({str: 'NO APARTMENTS AVAILABLE!'});
        $('#results').append(newHTML2);
        
    }

}

renderApts(apartments) //renders apartments when page loads

