let searchbtn = document.getElementById("searchbtn");
let countryInp = document.getElementById("country-inp");
searchbtn.addEventListener("click", () => {
  let countryName = countryInp.value;
  let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(finalURL);
  fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
      //    console.log(data[0]);
      //    console.log(data[0].capital[0]);
      //    console.log(data[0].population);
      //    console.log(data[0].subregion);
      //    console.log(data[0].population);
      //    console.log(Object.keys(data[0].currencies)[0]);
      //    console.log(data[0].timezones);
      //    console.log(data[0].numericCode);
      //  console.log(data[0].languages).toString().split(",").join(",");
      result.innerHTML = `
    <img src="${data[0].flags.svg}" 
    class="flag-img">
<h2>${data[0].name.common}</h2>
<div class="wrapper">
    <div-class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
</div>
</div>



<div class="wrapper">
<div class="data-wrapper">
<h3>Continent:</h3>
<span>${data[0].continents[0]}</span>
</div>
</div>


<div className="wrapper>
<div class="data-wrapper">
<h4>Currencies:</h4>
<span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${
        Object.keys(data[0].currencies)[0]
      }</span>
</div>
</div>


<div class="wrapper">
<div class="data-wrapper">
<h4>Common Languages:</h4>
<span>${Object.values(data[0].languages).join(",")}
</span>

</div>

</div>
`;
    })


    .catch(() => {
      if (countryName.length === 0) {
        result.innerHTML = `<h4>The input field cannot be empty</h4>`;
      } else {
        result.innerHTML = `<h3>Please enter a valid country</h3>`;
      }
    });
});
