function replace(kata, huruf, ganti) {

  let result = kata.replace(new RegExp(huruf, 'g'), ganti);
  return result;
}

let output = replace("sukiharji", "i", "o");
console.log(output);


//benerin lagi