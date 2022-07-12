let racingCells = Number(prompt("Enter No. of Racing Cells:", "10"));
while (!racingCells || racingCells < 10) {
    racingCells = Number(prompt("Please enter a valid number fo No. of Racing Cells (more than 9)", "10"));
};

for (let i = 0; i < Math.ceil(racingCells / 10); i++) {
    const rowId = addRow(i, 'raceField');
    let cells;
    if ((racingCells - 10 * i) >= 10) cells = 10;
    else cells = racingCells - 10 * i;
    for (let j = 0; j < cells; j++) {
        addCell(j, rowId);
    };
};






function addRow(id, parentId) {
    $(`#${parentId}`).append(`<div id="row-${id}" class="row justify-content-center"></div>`);
    return `row-${id}`;
};
function addCell(id, parentId) {
    $(`#${parentId}`).append(`<div id="${id}" class="col-1 bg-road text-center border border-success border-1 rounded-2 p-2 border-opacity-50"></div>`)
};

function choose() {
    let many = $('#chooseInput').val();
    if (!!many && many <= racingCells / 10) {
        $('#chooseContainer').html("");
        for (let i = 0; i < many; i++) {
            let rowId = addRow(`c-${i}`, 'chooseContainer'); $(`#${rowId}`).addClass('mt-4');
            addChoose(i, rowId);
        };
        const runBtn = `<div class="row justify-content-center mt-2">
            <button class="btn btn-danger text-warning col-auto">Run !</button>
            </div>`;
        $('#chooseContainer').append(runBtn);
    } else {
        window.alert('Must be a number and equal or less than roadcells / 10');
    };
};

function addChoose(id, parentId) {
    const content = `<label for="chooseInput-${id}" class="col-md-auto col-form-label text-danger me-md-3">Car Number ${id}  </label>
    <input id="nameInput-${id}" type="text" class="form-control-sm col-md-1 me-md-4 text-danger" placeholder="Name"
        value="">
    <label for="colorInput-${id}" class="col-md-auto col-form-label text-danger me-md-3">Choose your color:</label>
    <input id="colorInput-${id}" type="color" class="form-control-sm form-control-color bg-transparent border-0"
        value="#563d7c">`;
    $(`#${parentId}`).append(content);
}
