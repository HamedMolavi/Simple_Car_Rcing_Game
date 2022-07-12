let racingCells = Number(prompt("Enter No. of Racing Cells:", "10"));
while (!racingCells || racingCells < 10) {
    racingCells = Number(prompt("Please enter a valid number fo No. of Racing Cells (more than 9)", "10"));
};

for (let i = 0; i < Math.ceil(racingCells / 10); i++) {
    const rowId = addRow(i);
    let cells;
    if ((racingCells - 10 * i) >= 10) cells = 10;
    else cells = racingCells - 10 * i;
    for (let j = 0; j < cells; j++) {
        addCell(j, rowId);
    };
};






function addRow(id) {
    $('#raceField').append(`<div id="row-${id}" class="row justify-content-center"></div>`);
    return `row-${id}`;
};
function addCell(id, parentId) {
    $(`#${parentId}`).append(`<div id="${id}" class="col-1 bg-road text-center border border-success border-1 rounded-2 p-2 border-opacity-50"></div>`)
};