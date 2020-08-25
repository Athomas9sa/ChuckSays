function get(url){
    //Step 1: one fetch data
    return fetch(url)
    .then (function(response){ 
        //Step 2: Run the jon method from the response
        return response.json()
    })
    .then(function (data) {
        //Step3: return the data from the responde.json() method
        return data; 
    });   
}
