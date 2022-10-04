/**
 * @param total(number) '-' 으로 구분되는 전체 묶음 갯수 
 * @param each(number) 묶음 길이
 * @return (string) ex)uniqueKey(8, 4): zc7z-H8U1-c0d4-xV94-kt54-4xhh-9UU4-CbuN
 * @description 
 * a-z : 97 ~ 122(0x61 ~ 0x7A)
 * A-Z : 65 ~ 90(0x41 ~ 0x5A)
 * 0-9 : 48 ~ 57(0x30 ~ 0x39)
*/
function uniqueKey(total: number, each: number): string {
  let uniqueString = '';
  let randomStringType = Math.floor(Math.random() * 2);
  if (randomStringType === 0) {
    uniqueString += String.fromCharCode(Math.random() * 26 + 65);
  } else {
    uniqueString += String.fromCharCode(Math.random() * 26 + 97);
  }
  for (let i = 1; i < each * total; i++) {
    randomStringType = Math.floor(Math.random() * 3);
    switch (randomStringType) {
      case 0: {
        // A-Z
        uniqueString += String.fromCharCode(Math.random() * 26 + 65);
        break;
      }
      case 1: {
        // a-z
        uniqueString += String.fromCharCode(Math.random() * 26 + 97);
        break;
      }
      case 2: {
        // 0-9
        uniqueString += String.fromCharCode(Math.random() * 10 + 48);
        break;
      }
    }
    if ((i % each === each - 1) && (i !== each * total - 1)) {
      uniqueString += '-';
    }
  }
  return uniqueString;
  }

  console.log(uniqueKey(8, 4))