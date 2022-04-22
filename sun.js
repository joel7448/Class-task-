const getcountries=()=>{
    const j = new XMLHttpRequest();
    j.open("GET","https://restcountries.com/v3.1/all");
    j.send();
    j.responseType ="json";
    j.onload=()=>{
        const countries=j.response;
        // console.log(countries); 
        const countrynames=countries.map((country)=>country.name.common);
         const pop=countries.map((country)=>country.population);
         console.log("population",pop);
        console.log("List of country names",countrynames);
    };
};
getcountries();