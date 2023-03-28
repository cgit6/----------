
function intersect(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i])
            }
        }
    }
    return result;
}
arr1 = [1, 2, 3]
arr2 = [5, 16, 1, 3]

let inters = intersect(arr1, arr2);
console.log(inters);

// 目前的時間複雜度為 arr1*arr2

// 如果用counter skill
// 對所有元素出現頻率的紀錄出現超過一次的次數代表有重複
// 新問題:如果第二次出現的時候在同一個arrary 中?
function intersect2(arr1, arr2) {
    let result = [];
    let arr3 = arr1.concat(arr2);
    let counter = {};

    for (let i = 0; i < arr3.length; i++){
        if (!counter[arr3[i]]) {
            counter[arr3[i]] = 1;
        } else {
            counter[arr3[i]]++;
        }
    }
    for (let property in counter) {
        if (counter[property]>=2) {
            result.push(Number(property));
        }
            
    }
    return result;
}

arr1 = [1, 2, 3];
arr2 = [5, 16, 1, 3];

let inters2 = intersect2(arr1, arr2);
console.log(inters2);