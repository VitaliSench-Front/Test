const vaporcode = (string) => {
    return string.split('').filter(s => s.trim().length > 0).join('  ').toUpperCase();
  };