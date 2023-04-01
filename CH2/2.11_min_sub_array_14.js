// 
function minSubArray(arr, sum) {
  // 初始階段(初始化參數)
  let start_pointer = 0;
  let end_pointer = 0;
  let sub_list_sum = 0;
  let min_length = Infinity;

  // 迭代階段(尋優)
  // start < arr.length
  while (start_pointer < arr.length) {
    // 擴張長度
    if (sub_list_sum < sum && end_pointer < arr.length) {
      sub_list_sum += arr[end_pointer];
      end_pointer++;
    }
    // 搜縮長度 
    else if (sub_list_sum >= sum) {
      // 計算當前長度
      let currentLength = end_pointer - start_pointer;
      if (min_length > currentLength) {
        // 比較最小長度值
        min_length = currentLength;
      }
      // start_pointer 往右一格
      sub_list_sum -= arr[start_pointer];
      start_pointer++;
    }
    // 迭代的中止條件
    else if (end_pointer >= arr.length) {
      break;
    }
  }
  // 輸出最優解
  if (min_length === Infinity) {
    // 完全找不到可行解
    console.log("Cannot find subarray that can sum up to the given number");
    return 0;
  } else {
    console.log(min_length);
    return min_length;
  }
}
// minSubArray(arr,n) 給定一個值n與長度為m 的陣列找出該陣列中最短連續組合
minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60);
