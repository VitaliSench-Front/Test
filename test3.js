function ascendDescend(length, minimum, maximum) {
    if (length < 1 || maximum < minimum) {
      return "";
    }
  
    let result_string = '';
    let is_limit_reached = false;
  
    while (!is_limit_reached) {
      for (let i = minimum; i < maximum; i++) {
        result_string += i;
  
        if (result_string.length == length) {
          is_limit_reached = true;
  
          break;
        }
      }
  
      if (is_limit_reached) {
        break;
      }
  
      for (let i = maximum; i > minimum; i--) {
        result_string += i;
  
        if (result_string.length == length) {
          is_limit_reached = true;
  
          break;
        }
      }
    }
  
    return result_string;
  }