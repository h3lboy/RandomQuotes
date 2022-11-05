//this function generate random number between 0 and 1
function generateRandomNumber(num){
  return num[Math.floor(Math.random() * num.length)]
}


//quotes array
function Quotes(){
 const quotes = ["The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
"If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
"Life is what happens when you're busy making other plans. -John Lennon"]

  return quotes
}


console.log("Hey here are your quotes\n")



console.log(generateRandomNumber(Quotes()))
