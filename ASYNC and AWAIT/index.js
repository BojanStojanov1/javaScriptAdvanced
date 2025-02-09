async function getBorderingCountries(countryCode) {
    try {
        let response = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
        if (!response.ok) {
            throw new Error("Failed to fetch country data");
        }
        
        let [countryData] = await response.json();
        console.log("Country:", countryData);
        if (!countryData.borders || countryData.borders.length === 0) {
            console.log("No bordering countries.");
            return;
        }
        let borderCodes = countryData.borders.join(",");
        let borderResponse = await fetch(`https://restcountries.com/v3.1/alpha?codes=${borderCodes}`);
        if (!borderResponse.ok) {
            throw new Error("Failed to fetch neighboring countries");
        }
        let borderCountries = await borderResponse.json();
        console.log("Neighbours:", ...borderCountries);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getBorderingCountries("MKD");
