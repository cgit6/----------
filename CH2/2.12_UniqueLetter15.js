function uniqueLetterString(str) {
  // 初始化參數
  let start = 0;
  let end = 0;
  let counter = {};
  let maxLength = -Infinity;
  // 迭代階段
  while (end < str.length) {
    console.log(counter);
    // 如果counter[str[end] 存在於counter中
    if (counter[str[end]]) {
      // start_pointer 前進一格
      counter[str[start]]--;
      start++;
    }
    // counter[str[end] 不存在於counter中
    else {
      // end_pointer 前進一格
      counter[str[end]] = 1;
      end++;
    }
  }
    // 如果比較好接受
    if (end - start > maxLength) {
      maxLength = end - start;
    }
  // 輸出當前最佳解
  if (maxLength == -Infinity) {
    console.log("Cannot find unique letters substring.");
    return null;
  }

  console.log(maxLength);
  return maxLength;
}

uniqueLetterString("aaaaaa"); // 6
