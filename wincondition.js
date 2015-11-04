function win(n){
    var arr = [
        [0, 1, 0],
        [1, 0, 0],
        [0, 0, 1]
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
    //check vertical index 0

    for(var y = 0; y<arr.length;y++){
        if(arr[y][i]===n){
            console.log(arr[y][i] );
            count+=1;
        }
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i+=1;
    }
    //check vertical index 1

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

    //check vertial index2
    for(var y = 0; y<arr.length;y++){
        if(arr[y][i]===n){
            count+=1;
        }
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i=0;
    }
    //check diagnol left to right
    for(var z = 0; z<arr.length;z++){
        if(arr[z][i]===n){
            count+=1;
        }
        i+=1;
    }
    if(count===arr.length){
        return 'win';
    }else{
        count = 0;
        i=2; //make i=2 so we go backwards on the next check
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

