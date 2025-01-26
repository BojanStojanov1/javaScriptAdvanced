$(document).ready(function () {
    $("#fetchData").click(function () {
        $.ajax({
            url: "https://api.openaq.org/v1/cities",
            method: "GET",
            success: function (response) {
                const cities = response.results.slice(0, 10); 
                $("#dataList").empty(); 
                cities.forEach(city => {
                    $("#dataList").append(`<li>${city.name}, Country: ${city.country}</li>`);
                });
            },
            error: function () {
                console.log("Falling back to PokeAPI due to CORS issues.");
                $.ajax({
                    url: "https://pokeapi.co/api/v2/pokemon",
                    method: "GET",
                    success: function (response) {
                        const pokemons = response.results.slice(0, 10); 
                        $("#dataList").empty(); 
                        pokemons.forEach(pokemon => {
                            $("#dataList").append(`<li>${pokemon.name}</li>`);
                        });
                    },
                    error: function () {
                        alert("Failed to fetch data from both APIs.");
                    }
                });
            }
        });
    });
});