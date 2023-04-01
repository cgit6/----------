averagePair2([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5);

// 方法二
function averagePair2(arr, lb_avg) {
  // 初始位置: left 與 right 
  let start_pointer = 0;
  let end_pointer = arr.length - 1;
  let solution = [];

  while (start_pointer > end_pointer) {
    // 如果當前平均值>
    let temp_avg = (arr[start_pointer] + arr[end_pointer]) / 2;
    if (temp_avg > lb_avg) {
      // start_poinnter 向右移動
      start_pointer--;
    } else if (temp_avg < lb_avg) {
      // end_poimter 向左移動
      end_pointer++;
    } else if (temp_avg == lb_avg) {
      solution.push([arr[start_pointer], arr[end_pointer]]);
      start_pointer--;
      end_pointer++;
    }
  }

  console.log(solution);
  return solution;
}

// O(N)