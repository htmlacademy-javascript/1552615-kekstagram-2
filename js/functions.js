function isStringValid(str, maxLength) {
  if(!str || !str.length || maxLength < 1) {
    return false;
  }

  return str.length <= maxLength;
}

function isPalindromSimple(str) {
  if(!str || !str.length) {
    return false;
  }

  const lower = str.toLowerCase();
  return lower === lower.split('').reverse().join('');
}

function isPalindromHard(str) {
  if(!str || !str.length) {
    return false;
  }

  const joinedStr = str.toLowerCase().replaceAll(' ', '');
  return joinedStr === joinedStr.split('').reverse().join('');
}

isStringValid('проверяемая строка', 20);
isPalindromSimple('топот');
isPalindromHard('Лёша на полке клопа нашёл ');
