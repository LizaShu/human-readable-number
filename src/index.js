module.exports = function toReadable (number) {

    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',  'nineteen'];
    let b = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
   
    if(number < 20) return a[number];
  
   
    if(number >= 20 && number < 100) {
  
      if(number % 10 === 0) return b[Math.floor(number/10)]; 
  
      return b[Math.floor(number/10)] + ' ' + a[number % 10]; 
    }
  
    
    if(number >= 100 && number < 1000){
  
        if(number % 100 === 0) return a[Math.floor(number/100)] + ' hundred'; 
  
        if(number % 10 === 0) return a[Math.floor(number/100)] + ' hundred ' + b[(number % 100)/10]; 
  
        if(number % 100 < 20) return a[Math.floor(number/100)] + ' hundred ' + a[number%100]; 
         return a[Math.floor(number/100)] + ' hundred ' + b[Math.floor((number % 100)/10)] + ' ' + a[(number % 100) % 10] 
    }
}