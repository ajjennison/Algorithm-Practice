
function translatePigLatin(str) {
    var isVowel = /[aeiou]/gi;
    var pigLatin;
    //Find location of first vowel in string
    var firstVowelIndex = str.indexOf(str.match(isVowel)[0]);

    //if first letter is a vowel, add "way" to the end of string
    if (firstVowelIndex === 0) {
        pigLatin = str + "way";
    } else {
        //Move consontant cluster to back of string and add the suffix "ay"
        pigLatin = str.substr(firstVowelIndex) + str.substr(0, firstVowelIndex) + 'ay';
    }

    return pigLatin;
}


//Expected output: "oveglay"
translatePigLatin("glove");

//Expected output: "aliforniacay"
translatePigLatin("california");

//Expected output: "algorithmway"
translatePigLatin("algorithm")