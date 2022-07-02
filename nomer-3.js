const numberSum = (int) => {
    const intStr = int.toString();
    var sum = 0;
    for (let i = 0; i < intStr.length; i++) {
      sum += parseInt(intStr[i]);
    }
    return sum;
  };

  const search = (string, part) => {
    var result = false;
    for (let i = 0; i < string.length; i++) {
      if (string[i] == part) {
        result = true;
        break;
      }
    }
    return result;
  };

  const bull = (int) => {
    const intStr = int.toString();
    var result = false;
    if (int % 4 == 0 || search(intStr, "4") || numberSum(int) % 4 == 0) {
      result = true;
    }
    return result;
  };

  const dog = (int) => {
    const intStr = int.toString();
    var result = false;
    if (int % 8 == 0 || search(intStr, "8") || numberSum(int) % 8 == 0) {
      result = true;
    }
    return result;
  };

for(let i = 0; i <= 100; i++) {
    if(bull(i) && dog(i)) {
        console.log(`${i} is Bulldog`)
    } else if(bull(i)) {
        console.log(`${i} is Bull`)
    } else if(dog(i)) {
        console.log(`${i} is Dog`)
    } else {
        console.log(i)
    }
}
