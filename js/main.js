const TEXT_FOR_MESSAGE = 'Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!';
const NAMES = ['Валико', 'Мизандари', 'Рубик Хачикян', 'Папишвили', 'Галина Ивановна'];
const DESCRIPTIONS = ['Золотой закат над морем.', 'Утро на пустой улице.', 'Пар поднимается из чашки.', 'Смех и ветер в горах.', 'Ковер из осенних листьев.', 'Роса на паутине сверкает.', 'Мудрые морщины вокруг глаз.', 'Огни города в лужах.', 'Бумажный змей в небе.', 'Одинокий корабль в тумане.'];
const MAX_PHOTO_INFO_COUNT = 25;
const MAX_COMMENTS_COUNT = 30;
const messages = TEXT_FOR_MESSAGE.split('. ');

function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function createComments() {
  const result = [];
  const generateId = createRandomIdFromRangeGenerator(1, 500);
  const maxCount = getRandomInteger(0, MAX_COMMENTS_COUNT);

  for (let i = 0; i <= maxCount - 1; i++) {
    result.push({
      'id': generateId(),
      'avatar': `img/avatar-${getRandomInteger(1, 6)}.svg`,
      'message': messages[getRandomInteger(0, messages.length - 1)],
      'name': NAMES[getRandomInteger(0, NAMES.length - 1)]
    });
  }

  return result;
}

function createPhotoInfo() {
  const result = [];
  const generateId = createRandomIdFromRangeGenerator(1, MAX_PHOTO_INFO_COUNT);
  const generatePhotoId = createRandomIdFromRangeGenerator(1, MAX_PHOTO_INFO_COUNT);

  for (let i = 0; i <= MAX_PHOTO_INFO_COUNT - 1; i++) {
    result.push({
      'id': generateId(),
      'url': `photos/${generatePhotoId()}.jpg`,
      'description': DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      'comments': createComments()
    });
  }

  return result;
}
createPhotoInfo();
