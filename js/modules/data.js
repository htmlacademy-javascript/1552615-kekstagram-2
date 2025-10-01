import {getRandomInteger, createRandomIdFromRangeGenerator} from './utils.js';
import {TEXT_FOR_MESSAGE, MAX_COMMENTS_COUNT, NAMES, MAX_PHOTO_INFO_COUNT, DESCRIPTIONS} from './const.js';

const messages = TEXT_FOR_MESSAGE.split('. ');

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

export {createPhotoInfo};
