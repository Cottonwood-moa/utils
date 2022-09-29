const array = [
    {
        name: 'Cottonwood',
        age: 28,
        friend: [
            { name: '친구1' },
            { name: '친구2' },
            { name: '친구3' },
            { name: '친구4' },
            { name: '친구5' },
        ],
        eMail: 'geon0529@na0ver.com',
    },
    {
        name: '박건우',
        age: 28,
        friend: [
            { name: '친구1' },
            { name: '친구2' },
            { name: '친구3' },
            { name: '친구4' },
            { name: '친구5' },
        ],
        eMail: 'geon0529@naver.com',
    },
    {name: '정재욱'}
]
enum FIND_TYPE {
    FIRST = "first",
    LAST = "last",
    ALL = "all"
}
/**
 * @param entireObj 대상 객체 또는 배열
 * @param key 찾으려는 value의 key
 * @param value 찾으려는 value
 * @param type 해당 값을 가지고 있는 객체 전부 -> "all"
 * 
 * 첫번째 객체 -> "first"
 * 
 * 마지막 객체 -> "last"
 * 
 * @return 해당 객체
 * @description JSON.stringfy는 중첩된 형태의 객체 또는 배열을 직렬화 하기 때문에 자연스런 재귀적 특성을 가지고 있다.
 * 문자열 화 프로세스 동안 각 중첩된 객체에서 실행되는 대체함수를 전달한다.
 * 
 * stringfy의 callback
 * @param _ 대상 obj의 key
 * @param nestedValue 대상 obj의 value
*/
function deepFind<O,V>(entireObj: O, key: string, value: V, type: FIND_TYPE) {
    let foundObj: any;
    JSON.stringify(entireObj, (_, nestedValue) => {
        switch(type) {
            case FIND_TYPE.FIRST: {
                if (!foundObj && nestedValue && nestedValue[key] === value) {
                    foundObj = nestedValue;
                  }
                return nestedValue;
            }
            case FIND_TYPE.LAST: {
                if (nestedValue && nestedValue[key] === value) {
                    foundObj = nestedValue;
                  }
                  return nestedValue;
            }
            case FIND_TYPE.ALL: { 
                if (nestedValue && nestedValue[key] === value) {
                    foundObj = foundObj ? foundObj.concat([nestedValue]) : [nestedValue];
                  }
                  return nestedValue;
            }
        }
    });
    return foundObj;
  };


const result = deepFind(array, 'name', '정재욱', FIND_TYPE.FIRST);

console.log(result)
