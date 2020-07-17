
//      FeetToMile       //

function feetToMile(feet){
    var mile = feet/5280 ;
    return mile ;
}

//     FeetToMile     //


//     WoodCalculator    //

function woodCalculator(chair, table, bed){
    var chairWoodCount = chair*1;
    var tableWoodCount = table*3;
    var bedWoodCount = bed*5;
    var TotalWoodCount = chairWoodCount + tableWoodCount + bedWoodCount ;
    return TotalWoodCount;
}

//     woodCalculator     //

//      BrickCalculator    //

function brickCalculator(floor){
    var feet = 0;
    for ( i =1 ; i <=floor; i++ ){
        
        if(i <= 10){
            feet= feet+15;
        }
        else if (i > 10 && i <= 20){
            feet= feet+12;
        }
        else{
            feet= feet+10;
        }
    }
    return feet*1000;
}


//      BrickCalculator    //

//      TinyFriend        //


function tinyFriend(name){
    var min = name[0];
    for(i=0; i<= name.lenght; i++){
        var aftermin=name[i];
        if (aftermin<min) {
            aftermin=min;
        }
    }
    return min;
}

//     tinyFriend     //
