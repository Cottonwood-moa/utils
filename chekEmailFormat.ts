/**
 * @param entireObj (string) 대상 이메일
 * @return (boolean)이메일 유효성 통과 여부 
 * @description 파라미터로 전달 받은 이메일의 유효성을 검사.
*/
function checkEmailFormat(email) {
    if (email === null) {
      return false;
    }
    if (email instanceof String || !email) {
      return false;
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  }

// typescript
/*   function checkEmailFormat(email: string) {
    if (email === null) {
      return false;
    }
    if (email || !email) {
      return false;
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  } 
  
  TESTESTESTESTSETE
  */
/* 
test
*/