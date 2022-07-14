let numberOfCars;//total number of cars in a race
let cars = [];//cars information
let pos = [];//positions of cars in each time step
let myTimeout = setTimeout(() => { }, 1);//Initializing a setTimeout variable to re asign later

let racingCells = Number(prompt("Enter No. of Racing Cells:", "10"));
while (!racingCells || racingCells < 10) {
    racingCells = Number(prompt("Please enter a valid number fo No. of Racing Cells (more than 9)", "10"));
};
for (let i = 0; i < Math.ceil(racingCells / 10); i++) { //Each row of the road
    const rowId = addRow(i, 'raceField'); //making the row in raceField division
    let cells; //road cells in each row
    if ((racingCells - 10 * i) >= 10) cells = 10; //still have a full row
    else cells = racingCells - 10 * i; //not a complete row (the last row maybe)
    for (let j = 0; j < cells; j++) {// Each cell of the row 
        addCell(10 * i + j, rowId);// making the cell in last made row
    };
};
window.scroll(0,9000000000);//Scrolling to the bottom of the page
