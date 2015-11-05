function win(n){
    var arr = [
        [1, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ];
    var count = 0;
    var i = 0;
    //check horizontal
    for(var x = 0; x<arr.length; x++){
        for(var j = 0; j<arr.length; j++){
            if(arr[x][j]===n){
                count+=1;
            }
        }
        if(count===arr.length){
            return 'win';
        }else{
            count = 0;
        }
    }
    //check vertical 
    while(i<arr.length){
        for(var y = 0; y<arr.length;y++){
            if(arr[y][i]===n){
                count+=1;
            }
        }
        if(count===arr.length){
            return 'win';
        }else{
            count = 0;
            i+=1;
        }
    }

    i=0;
    //check diagnol left to right
    for(var z = 0; z<arr.length;z++){
        console.log('i  ' + i);
        console.log(arr[z][i]);
        if(arr[z][i]===n){
            count+=1;
        }
        i+=1;
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i=arr.length-1; //make i=2 so we go backwards on the next check
    }
    //check diagnol right to left
    for(var k = 0; k<arr.length;k++){
        if(arr[k][i]===n){
            count+=1;
        }
        i-=1;
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i=0;
    }

}

win(0);

