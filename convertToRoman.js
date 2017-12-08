
function convertToRoman(num) {
 var romans = "";
  
 var decimalVal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romanVal = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  for(var i = 0; i < decimalVal.length; i++) {
    //Check if current decimal value can be subtracted from passed in value
    while(num - decimalVal[i] >= 0) {
      //Subtract the decimal value from the passed in value
      num -= decimalVal[i];
      //Convert the appropriate roman numeral and append to return value
      romans += romanVal[i];
    }
  }
  
 return romans;
}

//Expected Output: "MMMCMXCIX"
convertToRoman(3999);

//Expected Output: "MV"
convertToRoman(1005);

//Expected Output: "III"
convertToRoman(3);

//Expected Output: "XCIX"
convertToRoman(99);