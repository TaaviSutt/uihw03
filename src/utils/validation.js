export function validateIdCode(idCode) {
  if (idCode === null || idCode.length !== 11) {
    return {isValid: false, underAge: false};
  }
  if (isNaN(idCode)) {
    return {isValid: false, underAge: false};
  }

  //Sex, use if needed, otherwise comment out.
  //var isMale = ((idCode.substr(0, 1)) % 2 != 0);
  var century = 0;
  // check century
  switch (idCode.substr(0, 1)) {
    case '1':
    case '2':
    {
      century = 1800;
      break;
    }
    case '3':
    case '4':
    {
      century = 1900;
      break;
    }
    case '5':
    case '6':
    {
      century = 2000;
      break;
    }
    default:
    {
      return  {isValid: false, underAge: false};
    }
  }
  // check if birthday is a valid date
  let year = (century + new Number(idCode.substr(1, 2)));
  let month = parseInt(idCode.substr(3, 2));
  let day = parseInt(idCode.substr(5, 2));

  var bd = new Date(year, month, day);
  if ((bd.getMonth() !== month) || (bd.getDate() !== day) || (bd.getFullYear() !== year)) {
    return {isValid: false, underAge: false}
  }

  let sum = Number(idCode.substr(9, 1));
  //0-8
  for (i = 0; i <= 8; i++) {
    sum = sum + Number(idCode.substr(i, 1)) * (i + 1);
  }
  let check = sum % 11;
  // special case, recalculate the checksum
  if (check === 10) {
    sum = 0;
    for (var i = 0; i <= 6; i++) {
      sum = sum + Number(idCode.substr(i, 1)) * (i + 3);
    }
    for (let i = 7; i <= 9; i++) {
      sum = sum + Number(idCode.substr(i, 1)) * (i - 6);
    }
    check = sum % 11;
    check = check % 10;
  }
  if (check !== Number(idCode.substr(10, 1))) {
    return {isValid: false, underAge: false};
  }

  if (bd.getFullYear() > 2000) {
  return {isValid: true, underAge: true};
  } else {
    return {isValid: true, underAge: false};
  }

}
