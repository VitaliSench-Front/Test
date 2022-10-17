const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => {
    const date = new Date(currentDate).getTime()
    const expDate = new Date(expirationDate).getTime()
    
    return (date - expDate > 0 || enteredCode !== correctCode) ? false : true
  }