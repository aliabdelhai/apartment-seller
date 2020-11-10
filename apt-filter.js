//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate, parking) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
    )

    immediate = !immediate[0].checked
    parking = !parking[0].checked

    if(!parking && !immediate)
    {
        let x = immediate ? relevantApts : relevantApts.filter(a => (a.immediate));
        return parking ? relevantApts : x.filter(a => (a.parking)) 
        
    }
    if(!parking)
    {   
        return parking ? relevantApts : relevantApts.filter(a => (a.parking)) 

    }
    if(!immediate)
    {
        return immediate ? relevantApts : relevantApts.filter(a => (a.immediate)) 
    }

    return immediate ? relevantApts : relevantApts.filter(a => (a.immediate)) 



}