function letterCombinations(digits) {
  if (digits.length === 0) {
    return [];
  }

  const digitToLetters = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz'],
  ]);

  const combinations = [];

  function generateCombination(currentIndex, currentCombination) {
    if (currentIndex === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[currentIndex];
    const letters = digitToLetters.get(currentDigit);

    for (let i = 0; i < letters.length; i++) {
      generateCombination(
        currentIndex + 1,
        currentCombination + letters[i]
      );
    }
  }

  generateCombination(0, '');

  return combinations.sort();
}