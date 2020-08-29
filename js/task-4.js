'use strict';
function formatString(string, maxLength = 40) {
  const stringLength = string.split('');
  const theEnd = '...';
  if (stringLength.length > maxLength) {
    stringLength.length = maxLength;
    return stringLength.join('') + theEnd;
  } else {
    return stringLength.join('');
  }

  // Write code under this line
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
