// isSubsequence("hello", "hello Dear"); // true
isSubsequence("book", "broasoklyn"); // true
// isSubsequence("abc", "bac"); // false (order matters)
// isSubsequence("", "abc"); // true

function isSubsequence(str1, str2) {
  if (str1.length == 0) {
    console.log(true);
    return true;
  }
  // 指針位置
  let pointer1 = 0;
  let pointer2 = 0;
  
  // 若pointer2 < str2長度
  while (pointer2 < str2.length) {
    // 如果str1的第i個位置等於str2第j個位置
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    // 如果pointer1 大於等於str1長度代表找完了
    if (pointer1 >= str1.length) {
      console.log(true);
      return true;
    }
    pointer2++;
  }

  console.log(false);
  return false;
}

// O(str2)