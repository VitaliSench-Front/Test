function strCount(str, letter){  
    let arr = str.split("");
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      if (arr[i] === letter) result += 1;
    }
    return result;
  }