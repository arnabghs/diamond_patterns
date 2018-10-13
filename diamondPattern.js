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
//Filled Diamond --
const generateUpperPart = function (upperPartLines){
  let index = 0;
  let widthOfSpace =(height/2)-1;
  let widthOfStar = 1;
  let result = "";
  let delimeter = "";
  while (index < upperPartLines){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace);
    result += generateLine("*",widthOfStar);
    widthOfSpace -= 1;
    widthOfStar += 2;
    index++;
  }
  return result;
}

const generateLowerPart = function(lowerPartLines){
  let index = 0;
  let widthOfSpace = 1;
  let widthOfStar = height - 3;
  let result = "";
  let delimeter = "";
  while ( index < lowerPartLines){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace);
    result += generateLine("*",widthOfStar);
    widthOfSpace += 1;
    widthOfStar -= 2;
    index ++;
  }
  return result;
}

const makeFilledDiamond = function (height) {
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += generateUpperPart(linesUpper);
  result +="\n"+generateLowerPart(linesLower);
  return result;
}
//Hollow diamond --

const generateHollowUpper = function(upperLines){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace =(height/2)-1;
  let widthOfmidhollow = 0;
  let widthOfStar = 0;
  while (index < upperLines){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace) + "*";
    result += generateLine(" ",widthOfmidhollow);
    result += generateLine("*",widthOfStar);
    widthOfSpace -= 1;
    widthOfmidhollow += 2;
    widthOfStar = 1;
    index ++;
    if (index == 1){
      widthOfmidhollow = 1;
    }
  }
  return result;
}

const generateHollowLower = function(lowerLines){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = 1;
  let widthOfmidhollow = height-5;
  let widthOfStar = 1;
  while (index < lowerLines){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace) + "*";
    result += generateLine(" ",widthOfmidhollow);
    result += generateLine("*",widthOfStar);
    widthOfSpace += 1;
    widthOfmidhollow -= 2;
    widthOfStar = 1;
    index ++;
    if ( index == lowerLines-1){
      widthOfStar = 0;
      widthOfmidhollow = 0;
    }
  }
  return result;
}

const makeHollowDiamond = function (height){
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += generateHollowUpper(linesUpper);
  result +="\n"+generateHollowLower(linesLower);
  return result;
}
// Angled Hollow Diamond --

const makeAngledUpper = function (linesUpper){
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
    result += generateLine(" ",widthOfHollow)+lastCharacter;
    widthOfSpace -= 1;
    firstCharacter = "\/";
    lastCharacter = "\\";
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

const makeAngledLower = function (linesLower){
  let result = "";
  let delimeter = "";
  let index = 0;
  let widthOfSpace = 1;
  let widthOfHollow = height-5;
  let firstCharacter = "\\";
  let lastCharacter = "\/"
  while (index < linesLower){
    result += delimeter;
    delimeter = "\n";
    result += generateLine(" ",widthOfSpace)+firstCharacter;
    result += generateLine(" ",widthOfHollow)+lastCharacter;
    widthOfSpace += 1;
    widthOfHollow -= 2;
    index++;
    if (index == linesLower-1){
      firstCharacter = "*";
      lastCharacter = "";
      widthOfHollow = 0;
    }
  }
  return result;
}

const makeAngledDiamond = function (height){
  linesUpper = height/2;
  linesLower = linesUpper - 1;
  let result = "";
  result += makeAngledUpper(linesUpper);
  result +="\n"+makeAngledLower(linesLower);
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
