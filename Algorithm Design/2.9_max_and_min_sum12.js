// sliding window 算法 求極大極小值

maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28

function maxSum(arr, size) {
  // 先給一個極差的解
  let max_value = -Infinity;
  // 檢查size 有無大於 arr 長度
  if (size > arr.length) {
    // 不存在
    return null;
  }
  // 如果沒有大於arr 長度
  // 則
  for (let i = 0; i <= arr.length - size; i++) {
    // 
    let sub_list_sum = 0;
    let sub_list_window = [];
    // 從當前起始位置往後推size-1格做加總
    for (let j = i; j < i + size; j++) {
      // sub_list
      sub_list_window.push(arr[j]);
      // sublist sum
      sub_list_sum += arr[j];
    }
    console.log(sub_list_window)
    console.log(sub_list_sum)

    // 貪婪算法的概念
    if (sub_list_sum > max_value) {
      max_value = sub_list_sum;
    }
  }

  console.log(max_value);
  return max_value;
}

// 求極小
function minSum(arr, size) {
  let min_value = Infinity;

  if (size > arr.length) {
    return null;
  }

  for (let i = 0; i <= arr.length - size; i++) {
    let sub_list_sum = 0;
    for (let j = i; j < i + size; j++) {
      sub_list_sum += arr[j];
    }
    // 貪婪算法
    if (sub_list_sum < min_value) {
      min_value = sub_list_sum;
    }
  }

  console.log(min_value);
  return min_value;
}
