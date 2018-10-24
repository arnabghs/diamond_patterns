let type = process.argv[2];
let height = +process.argv[3];

if(height%2==1){
  height++;
}

const generateLine = function (character,width){
  let result = "";
  for (digit=0; digit < width; digit++){
    result += character;
  }
  return result;
}

const makeUpperPart = function (linesUpper,firstchar,lastchar,midchars){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = linesUpper - 1;
  let widthOfHollow = 0;
  let firstCharacter = "*";
  let lastCharacter = ""
  while (index < linesUpper){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace)+firstCharacter;
    result += generateLine(midchars,widthOfHollow)+lastCharacter;
    widthOfSpace -= 1;
    firstCharacter = firstchar;
    lastCharacter = lastchar;
    widthOfHollow += 2;
    index++;
    if (index == 1){
      widthOfHollow = 1;
    }
    if (index == linesUpper-1){
      firstCharacter = "*";
      lastCharacter = "*"
    }
  }
  return result;
}

const makeLowerPart = function (linesLower,firstchar,lastchar,midchars){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = 1;
  let widthOfHollow = height-5;
  let firstCharacter = firstchar;
  let lastCharacter = lastchar;
  while (index < linesLower){
    if (index == linesLower-1){
      firstCharacter = "*";
      lastCharacter = "";
      widthOfHollow = 0;
    }
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace)+firstCharacter;
    result += generateLine(midchars,widthOfHollow)+lastCharacter;
    widthOfSpace += 1;
    widthOfHollow -= 2;
    index++;
  }
  return result;
}

const makeFilledDiamond = function (height) {
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeUpperPart(linesUpper,"*","*","*");
  result +="\n"+makeLowerPart(linesLower,"*","*","*");
  return result;
}

const makeHollowDiamond = function (height){
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeUpperPart(linesUpper,"*","*"," ");
  result +="\n"+makeLowerPart(linesLower,"*","*"," ");
  return result;
}

const makeAngledDiamond = function (height){
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeUpperPart(linesUpper,"\/","\\"," ");
  result +="\n"+makeLowerPart(linesLower,"\\","\/"," ");
  return result;
}

if (type=="filled"){
  let diamondToPrint = makeFilledDiamond(height);
  console.log (diamondToPrint);
}
if (type=="hollow"){
  let diamondToPrint = makeHollowDiamond(height);
  console.log (diamondToPrint);
}
if (type=="angled"){
  let diamondToPrint = makeAngledDiamond(height);
  console.log(diamondToPrint);
}
