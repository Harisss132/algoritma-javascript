const cleanStr = (str) => str.replace(/[^\w]/g, '').toLowerCase();
const getCharFrequency = (str) => {
  const frequency = {};
  for (const char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  return frequency;
};

function isSameFrequency(freq1, freq2) {
  const key1 = Object.keys(freq1);
  const key2 = Object.keys(freq2);
  if (key1.length !== key2.length) return false;

  for (const key of key1) {
    if (freq1[key] !== freq2[key]) return false;
  }
  return true;
}

function isAnagram(str1, str2) {
  const cleanStr1 = cleanStr(str1);
  const cleanStr2 = cleanStr(str2);

  if (cleanStr1.length !== cleanStr2.length) return false;

  const frequencyStr1 = getCharFrequency(cleanStr1);
  const frequencyStr2 = getCharFrequency(cleanStr2);

  return isSameFrequency(frequencyStr1, frequencyStr2) ? `benar ${str1} dan ${str2} adalah anagram` : `${str1} dan ${str2} bukan anagram`;
}

// console.log(cleanStr('Hello World! '));
// console.log(getCharFrequency('Hello World!'));
console.log(isAnagram('bahu', 'buah'));
console.log(isAnagram('topi', 'kopi'));
