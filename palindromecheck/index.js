function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  if (str.trim() === '') return 'string kosong';

  return cleanedStr === reversedStr ? `benar "${str}" adalah palindrome (${reversedStr})` : `"${str}" bukan palindrome ${reversedStr}`;
}

console.log(isPalindrome('mobil'));
console.log(isPalindrome('KaTak'));
console.log(isPalindrome('A man, a plan, a canal, Panama!'));
