function showImage(num) {
    var img = document.getElementById('pp');
    if (num == 0){
    document.getElementById("pp").style.visibility = "visible";

    document.getElementById("bp").style.visibility = "hidden";
    

    }else if( num == 1){
        document.getElementById("pp").style.visibility = "hidden";

        document.getElementById("bp").style.visibility = "visible";

    }
}

// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}

const array = [1, 'hello', 5, 8];

const result = getRandomItem(array);
console.log(result);

showImage(1)