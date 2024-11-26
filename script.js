
document.querySelector('form').onsubmit = function(){

fetch('https://api.exchangeratesapi.io/v1/latest?access_key=dcc19ea9b65ed653d817259282033bf4&format=1')
.then(Response => Response.json())
.then(data => {
   const currency = document.querySelector('#currency').value.toUpperCase() ;
   const rate = data.rates[currency];
   if (rate !== undefined){
        document.querySelector('.result').innerHTML = `1  EUR is equal ${rate.toFixed(3)} ${currency}`
   } else {
     document.querySelector('.result').innerHTML = 'invalid currency'
   }
})
    .catch(error=>{
        console.log('error:',error)
    })
    
    return false
}