定义和用法
=
reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。  
reduce() 可以作为一个高阶函数，用于函数的 compose。
*注意: reduce() 对于空数组是不会执行回调函数的*


计算数组元素相加后的总和：  
```
var numbers = [65, 44, 12, 4];  
 
function getSum(total, num) {  
    return total + num;  
}  
function myFunction(item) {  
    document.getElementById("demo").innerHTML = numbers.reduce(getSum);  
}  

//125  
```
  
语法  
=
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)  

参数  
=
function(total,currentValue, index,arr)  

total	必需。初始值, 或者计算结束后的返回值。  
currentValue	必需。当前元素  
currentIndex	可选。当前元素的索引  
arr	可选。当前元素所属的数组对象  


more example
=
```
<button onclick="myFunction()">点我</button>  
   
<p>数组元素之和: <span id="demo"></span></p>  
   
<script>  
var numbers = [15.5, 2.3, 1.1, 4.7];  
 
function getSum(total, num) {  
    return total + Math.round(num);  
}  
function myFunction(item) {  
    document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);  
}  
</script>
```
