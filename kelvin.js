function convertor(kelvin , tip){
  let kelvinToCelsius = kelvin-273;
if(tip === "Fahrenheit"){
let fahrenheit  = kelvinToCelsius * (9/5) + 32;
  return "TEMPERATURE IS " + Math.floor(fahrenheit)  +" Farinhate" ;
  }
else if (tip === "Celsius")  {
  
  return "TEMPERATURE IS " + Math.floor(kelvinToCelsius) +" Celsius";
  }
}

console.log(convertor(500.4, "Fahrenheit" ))

console.log(convertor(2.4, "Celsius" ))
