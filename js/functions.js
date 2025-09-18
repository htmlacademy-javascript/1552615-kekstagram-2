const STRING_MAX_LENGTH = 20;

function isStringValid(str) {
  if(!str || !str.length) {
    return false;
  }

  return str.length <= STRING_MAX_LENGTH;
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
