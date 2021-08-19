let peso = 6;
let altura = 3;
const AlturaPonte1 = 5.5;
const AlturaPonte2 = 5;
const AlturaPonte3 = 4.5;
const PesoPonte1 = 24;
const PesoPonte2 = 16;
const PesoPonte3 = 7;


//Altura
if(altura < AlturaPonte3){
    console.log("Voce pode passar por baixo das pontes 1, 2 e 3 ");
}
else if(altura < AlturaPonte2){
    console.log("Voce pode passar por baixo das pontes 1 e 2 ");
}
else if(altura < AlturaPonte1){
    console.log("Voce pode passar por baixo das pontes 1 ");
}

//Peso
if( peso < PesoPonte3){
    console.log("Voce pode passar por cima das pontes 1, 2 e 3 ");
}
else if( peso < PesoPonte2){
    console.log("Voce pode passar por cima das pontes 1 e 2 ");
}
else if( peso < PesoPonte1){
    console.log("Voce pode passar por cima das pontes 1 ");
}
