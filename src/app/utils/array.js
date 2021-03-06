/**
 * Created by sven on 2017/6/16.
 */
// Array.prototype.distinct = function () {
//   return this.reduce(function (new_array, old_array_value) {
//     if (new_array.indexOf(old_array_value) == -1) new_array.push(old_array_value);
//     return new_array; //最终返回的是 prev value 也就是recorder
//   }, []);
// };

//数组去重-使用Set+Array
function uniqueArray1(arr) {
  return Array.from(new Set(arr));
}

//数组去重-使用splice
function uniqueArray2(arr){
  for(var i = 0; i < arr.length - 1; i++){
    for(var j = i + 1; j < arr.length; j++){
      if(arr[j] === arr[i]){
        arr.splice(j--, 1);
      }
    }
  }
  return arr;
}

//数组去重-使用Array
function uniqueArray(arr){
  var retArray = [];
  for(var i = 0; i < arr.length; i++){
    if(retArray.indexOf(arr[i]) < 0){
      retArray.push(arr[i]);
    }
  }
  return retArray;
}

//数组分类
function classifyArr (arr,key){
  let newArr = arr
    .map(item => [item[key]])
    .reduce((a,b) => a.concat(b))
    .distinct()
    .map(item => ({
      name:item,
      children:[]
    }));
    arr.map(item => {
      newArr.map(newItem => {
        if(item[key] === newItem[key]){
          newItem.children.push({item});
        }
      })
    });
    return newArr
}

export function judgeEmptyArr(data) {
  return (data instanceof Array && data.length!==0);
}
