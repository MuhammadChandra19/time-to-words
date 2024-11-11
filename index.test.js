const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });
  it('Handles times after 11:12', () => {
    const timeInWords = convertTimeToWords('11:12');
    expect(timeInWords).toBe('twelve past eleven');
  });
  it('Handles times after 2:16', () => {
    const timeInWords = convertTimeToWords('2:16');
    expect(timeInWords).toBe('sixteen past two');
  });
  it('Handles times after 2:03', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });
  it('Handles times after 2:33', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty seven to three');
  });
  it('Handles times after 14:02', () => {
    const timeInWords = convertTimeToWords('14:02');
    expect(timeInWords).toBe('two past two');
  });
  it('Handles times after 14:59', () => {
    const timeInWords = convertTimeToWords('14:59');
    expect(timeInWords).toBe('one to three');
  });
});

