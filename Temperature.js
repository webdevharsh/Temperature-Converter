let celsiusInput = document.querySelector('.container .celsius input');
let fehrenheitInput = document.querySelector('.container .fehrenheit-input');
let switchBtn = document.querySelector('.container .fa-right-left');
let formula = document.querySelector('.container .formula-box p');

let gloFehrenValue;
let currCelValue;
let currFerValue;

celsiusInput.addEventListener('input',()=>{
 let celsius = celsiusInput.value;
 let celToFehren = Number(celsius) * (9 / 5) + 32;
 fehrenheitInput.value = celToFehren.toFixed(2);
 formula.innerHTML = `(${celsius}°C × 9/5) + 32 = <span style="font-weight:600">${celToFehren}°F</span>`;
});

switchBtn.addEventListener('click',()=>{
 currCelValue = celsiusInput.value;
 currFerValue = fehrenheitInput.value;
 celsiusInput.value = currFerValue;
 fehrenheitInput.value = currCelValue;
})
