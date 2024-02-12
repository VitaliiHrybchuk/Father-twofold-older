'use strict';
/**
 * 
 * @param {number} fathersAge Возраст отца
 * @param {number} sonsAge Возраст сына
 * @returns {string} Через сколько лет (или сколько лет назад)
    отец будет (или был) вдвое старше сына
 */
function calcFatherTwiceOlder(fathersAge, sonsAge) {
  // let years = 0;
  if (fathersAge - sonsAge < 15 || sonsAge < 0) {
    return 'Entered wrong information';
  }
  // if (fathersAge / 2 === sonsAge){
  //   return years;

  return fathersAge / sonsAge === 2 ? 0 : fathersAge - sonsAge * 2;
}
const fathersAge = 99;
const sonsAge = 1;
const res = calcFatherTwiceOlder(fathersAge, sonsAge);

let strYear;
switch (Math.abs(res)) {
  case 1:
    strYear = 'год';
    break;
  case 2:
  case 3:
  case 4:
    strYear = 'года';
    break;
    default: strYear = 'лет';
}
if (res < 0) {
  console.log(`Отец был в два раза старше сына ${res * -1} ${strYear} назад`);
} else if (res > 0) {
  console.log(`Отец будет в два раза старше сына через ${res} ${strYear}`);
} else {
  console.log(`Отец сейчас в два раза старше сына`);
}
console.log(calcFatherTwiceOlder());
