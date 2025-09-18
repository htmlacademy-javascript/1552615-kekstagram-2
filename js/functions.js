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

function extractNum(num) {
  if (!num) {
    return NaN;
  }

  const filteredNums = [];

  const nums = num.toString().replaceAll(' ', '').split('');

  for (let i = 0; i <= nums.length; i++) {
    if(isNaN(nums[i])) {
      continue;
    }

    filteredNums.push(nums[i]);
  }

  if (!filteredNums.length) {
    return NaN;
  }

  return parseInt(filteredNums.join(''), 10);
}

isStringValid('проверяемая строка', 20);
isPalindromSimple('топот');
isPalindromHard('Лёша на полке клопа нашёл ');
extractNum('2023 год');
