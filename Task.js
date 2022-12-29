let array = [];
let count=0;
let stringArray = [];
array = ["Hello","254","bye","HomeTask","2"];
for(i=0;i<array.length;i++){
if (array[i].length<=3){stringArray[count]=array[i];
count ++}
continue;
}
console.log(stringArray);