
function showDialog(promptStr) {
    if(1==1){
        alert(promptStr);
        return
    }
}

function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
Array.prototype.delete = function (arr) {
    var b = [];
    for (var i = 0; i < this.length; i++) {
        if (arr.indexOf(this[i]) < 0) {
            b.push(this[i]);
        }
    }
    return b;
}
function GetRandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    return (Min + Math.round(Rand * Range));
}