console.log("><><><><><><><><><><><><><><><><> Answer1 <><><><><><><><><><><><><><><><><");
{
// Variable declearing
let id = 1;//Debunging id of input data
let cars = [[], []];//cars = [[number of cars], [cars' names]]
let pos = [];//positions of cars: each index refers to cars[1][] index
let road = [];
let backUp= [];//backup variable of raw road.
let win = [];//cars ranking after finishing race
let count = 0;
let nitrogen = [];
// Getting inputs and forming initial road
cars[0] = Number(prompt("Enter No. of cars:", "2"));
while (id === 1){
if(isNaN(cars[0]) | cars[0]===0) {cars[0] = Number(prompt("Please enter  a valid number and more than zero:", "2"));
}else{id = 0;}
}
for(let i=0; i<cars[0]; i++){
    cars[1][i] = prompt(`Enter your ${i+1}st car name:`);
    pos[i] = 0;
    nitrogen[i] = 0;
}
for (let i = 0; i<300; i++){
    road[i] = "*";
    backUp[i] = "*";
}


console.log(`The race will be started between: ${[...cars[1]]}`);
console.log(".... Startttt..........");


while(cars[0] !== 0){     //there are still cars in road
    for (let i=0; i<cars[0]; i++){
        pos[i] += Math.ceil( (Math.random() * 9) + 1); // Moving algorithm

        //Nitrogen :)
        let tempNitro = Math.min(...[pos.slice(0, i)]);
        if (tempNitro === 0){tempNitro =  Math.min(...[pos.filter((el)=>{return el !==pos[i]})])}//for first car in the road that is one round ahead: all cars exept i
        if ( tempNitro > pos[i]+8 & nitrogen[i] !== 1) {
            pos[i] += 8; console.log(cars[1][i]," used nitrogen:) "); nitrogen[i] += 1;
            console.log(nitrogen);
        };

        //hitting cars :)
        let temp = pos.slice(i+1);temp.unshift(pos.slice(0, i)[0]);//temp is pos variable without pos[i]
        if( temp.indexOf(pos[i]) >=0 ){//Checks if there is any value in temp equal to pos[i]
            pos[temp.indexOf(pos[i])] = 0; //re-assign zero to the position of hitted car
            console.log(cars[1][i]," hitted ",cars[1][temp.indexOf(pos[i])]);
            nitrogen[temp.indexOf(pos[i])] -= 1;//Another nitrogen cahnce :)
            console.log(nitrogen);
        };

        //removing the car that ended race
        if (pos[i] >= 300){
            win[count] = cars[1][i];
            count++;
            cars[0]--;
            cars[1].splice(i, 1);
            pos.splice(i, 1);
            //nitrogen.splice(i, 1);
        }
        road[pos[i]] = cars[1][i]; // placing cars
    }
    console.log(road.join(" ") );// Showing map
    road = [...backUp];//Back to normal for next displacement
}

// Showing results
console.log(`======================
The winner is : =-=-=-=-=-=- (  ${win[0]}  ) =-=-=-=-=-=-
Other cars are shown by their rank (2nd to last):
${win.slice(1)}
======================`);
}