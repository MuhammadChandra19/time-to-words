// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  if (time === '0:00') {
    return 'midnight';
  }

  // if it's above 12 => hours - 12
  const wordMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
  };

  const [hour, minutes] = time.split(':');
  let parsedHour = parseInt(hour);
  let parsedMinutes = parseInt(minutes);

  if (parsedHour === 0 && parsedMinutes === 0) {
    return 'midnight';
  }

  if (parsedHour === 12 && parsedMinutes === 0) {
    return 'midday';
  }

  if (parsedHour > 12) {
    parsedHour %= 12;
  }

  if (parsedMinutes === 0) {
    return `${wordMap[parsedHour]} o'clock`;
  }

  if (parsedMinutes === 30) {
    return `half past ${wordMap[parsedHour]}`;
  }

  if (parsedMinutes > 30) {
    parsedMinutes = 60 - parsedMinutes;
    return `${wordMap[parsedMinutes]} to ${wordMap[parsedHour + 1]}`;
  }

  return `${wordMap[parsedMinutes]} past ${wordMap[parsedHour]}`;
}

module.exports = { convertTimeToWords };
