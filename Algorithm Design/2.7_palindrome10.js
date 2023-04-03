// palindrome("tacocat"); // true
// palindrome("amanaplanacanalpanama"); // true
palindrome("asdfsafeaw"); // false

function palindrome(str) {
  // 起始位置
  let left = 0;
  let right = str.length - 1;

  while (left <= right) {
    console.log(str[left], str[right]);
    // 如果第i個位置與倒數第i個位置的字母一樣
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      console.log(false);
      return false;
    }
  }

  console.log(true);
  return true;
}
