function concatenateAndReverse(arr) {
  let allStrings = arr.join('');
  let chars = Array.from(allStrings);
  let revChars = chars.reverse();
  return revChars.join('');
}

concatenateAndReverse(['I', 'am', 'student'])
