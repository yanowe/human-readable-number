module.exports = function toReadable (number) {
  let arrStr = [];
  let str;
  let arr = String(number).split('').reverse();
  let arr1 = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
  let arr10 = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if (number == 0) return('zero');
    if (number < 20) return(arr1[number]);
    if (arr.length == 2) {
      arrStr.push(arr10[arr[1]]);
      arrStr.push(arr1[arr[0]]);
    }
    if (arr.length == 3) {
      arrStr.push(arr1[arr[2]]);
      arrStr.push('hundred');
      if (arr[1] == 1) arrStr.push(arr1['1' + arr[0]])
      else if (arr[1] == 0) arrStr.push(arr1[arr[0]])
      else {
        arrStr.push(arr10[arr[1]]);
        arrStr.push(arr1[arr[0]]);
      };
    }
    return arrStr.join(' ').trim();
}
