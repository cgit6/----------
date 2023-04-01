maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3); // 12

function maxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  // 優化
  // 第i個sub_list 與第 i+1 個window的元素有交集所以在算法上可以優化
  let maxValue = 0;
  for (let i = 0; i < size; i++) {
    // 初始解
    maxValue += arr[i];
  }
  // 當前最佳值
  let temValue = maxValue;
  
  // 計算
  for (let j = size; j < arr.length; j++) {
    // 第i個sub_list 為第i-1 個sub_list減掉第一項，再加入新的元素=>arr[j]
    temValue = temValue + arr[j] - arr[j - size];
    // 如果比較好接受(貪婪)
    if (temValue > maxValue) {
      maxValue = temValue;
    }
  }

  console.log(maxValue);
  return maxValue;
}
