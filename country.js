const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => displayCountries(data))
}
loadCountries();


const displayCountries = countries => {
    // console.log(countries);
    // for (const country of countries) {
    //     console.log(countries);
    // }
    // new kichu korte hobe 

    //     const countriesDiv = document.getElementById('countries');
    //     countries.forEach(country => {
    //         // console.log(country)
    //         const div = document.createElement('div')
    //         const h3 = document.createElement('h3')
    //         h3.innerText = country.name;
    //         // countriesDiv.appendChild(h3);
    //         div.appendChild(h3);
    //         div.classList.add('country')
    //         const p = document.createElement('p')
    //         p.innerText = country.capital;
    //         div.appendChild(p);
    //         countriesDiv.appendChild(div);
    //     });
    // }

    //     const countriesDiv = document.getElementById('countries');
    //     countries.forEach(country => {
    //         // console.log(country)
    //         const div = document.createElement('div')

    //         // countriesDiv.appendChild(h3);

    //         div.classList.add('country')
    //         div.innerHTML = `<h3> ${country.name}</h3>
    //                          <p>${country.capital} </p>`

    //         //// div .inner html nicher er sob delet kore khali append child div rekhe dilei hobe   div.innerHTML = diye` sign diye dynamic vabe sajalei hobe 5              
    //         // const h3 = document.createElement('h3')
    //         // h3.innerText = country.name;
    //         // div.appendChild(h3);
    //         // const p = document.createElement('p')
    //         // p.innerText = country.capital;
    //         // div.appendChild(p);
    //         countriesDiv.appendChild(div);
    //     });
    // }

    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `<h3> ${country.name}</h3>
                         <p>${country.capital} </p>
                         <button onclick="loadCountryByName('${country.name}')">Details </button>`;

        countriesDiv.appendChild(div);
    })
}

const loadCountryByName = name => {
    // name jodi dynamically bosai ta hole 
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    // console.log(name);
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data));
        // o index e jodi console,log kori 
        // .then(data => console.log(data[0]));
        .then(data => displayCountryDetail(data[0]));

}
const displayCountryDetail = country => {
    console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `<h5> ${country.name} </h5>
    <p>population:${country.population} </p>
    <img  width="200px" src="${country.flag}">`

}