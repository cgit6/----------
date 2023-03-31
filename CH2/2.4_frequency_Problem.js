// 問題: 對兩組字串判斷是否出現頻率相同，並return boolean

function same_frequency(str1, str2 ) {
  // 先把str 換成 arr
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  // 先確認字數是否相同
  if (arr1.length !== arr2.length) {
    return false;
  }
  // 創造一個obj 
  let counter1 = {};
  let counter2 = {};
  // counter arr1 frequency
  for (let i = 0; i < arr1.length; i++) {
    // 如果 counter1[arr1[i]] 存在
    if (counter1[arr1[i]]) {
      counter1[arr1[i]]++;
    } else {
      counter1[arr1[i]] = 1;
    }
  }
  // counter arr2 frequency
  for (let i = 0; i < arr2.length; i++) {
    // 如果 counter1[arr1[i]] 存在
    if (counter2[arr2[i]]) {
      counter2[arr2[i]]++;
    } else {
      counter2[arr2[i]] = 1;
    }
  }
    console.log(counter1, counter2);
    
    // 比較兩陣列是否元素出現的次數一致
    for (let property in counter1) {
        if (!counter2[property]) {
            return false;
        }
        if (counter2[property] !== counter1[property]) {
            return false;
        }
    }
        return true;
}

str1 = "abbc"
str2 = "aabc"

let frequency = same_frequency(str1, str2)
console.log(frequency)