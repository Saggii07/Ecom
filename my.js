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



showImage(1)