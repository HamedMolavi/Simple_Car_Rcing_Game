function addRow(id, parentId) {
    $(`#${parentId}`).append(`<div id="row-${id}" class="row justify-content-center"></div>`);
    return `row-${id}`;
};
function addCell(id, parentId) {
    $(`#${parentId}`).append(`<div id="${id}" class="col-1 min-height-74 bg-road text-center border border-success border-1 rounded-2 p-2 border-opacity-50"></div>`);
};

function choose() {
    let many = parseInt($('#chooseInput').val());
    if (!!many && many <= racingCells / 10) {
        $('#chooseContainer').html("");
        for (let i = 0; i < many; i++) {
            let rowId = addRow(`c-${i}`, 'chooseContainer'); $(`#${rowId}`).addClass('mt-4');
            addChoose(i, rowId);
        };
        const runBtn = `<div class="row justify-content-center mt-2">
            <button class="btn btn-danger text-warning col-auto" onclick="run()">Run !</button>
            </div>`;
        $('#chooseContainer').append(runBtn);
        numberOfCars = many;
    } else {
        alert('Must be a number more than 1 and equal or less than roadcells / 10', 'danger');
    };
    window.scroll(0, 9000000000);//Scrolling to the bottom of the page
};

function addChoose(id, parentId) {
    const content = `<label for="chooseInput-${id}" class="col-md-auto col-form-label text-danger me-md-3">Car Number ${id}  </label>
    <input id="nameInput-${id}" type="text" class="form-control-sm col-md-1 me-md-4 text-danger" placeholder="Name"
        value="">
    <label for="colorInput-${id}" class="col-md-auto col-form-label text-danger me-md-3">Choose your color:</label>
    <input id="colorInput-${id}" type="color" class="form-control-sm form-control-color bg-transparent border-0"
        value="#563d7c">`;
    $(`#${parentId}`).append(content);
};

function run() {
    for (let i = 0; i < numberOfCars; i++) {
        cars[i] = new Car($(`#nameInput-${i}`).val() || `car number ${i + 1}`, $(`#colorInput-${i}`).val(), Math.ceil(racingCells / 100) + 1, Math.ceil(racingCells / 100));
        pos.push(0);
    };
    console.log(...cars);
    race();
};



function alert(message, alertClass) {
    clearTimeout(myTimeout);
    $('.alert').removeClass('d-none');
    $('.alert').addClass(`alert-${alertClass}`);
    $('#logger').append(`<p>${message}</p>`);
    myTimeout = setTimeout(function () {
        $('.alert').addClass('d-none');
        $('.alert').removeClass(`alert-${alertClass}`);
        $('#logger').text(``);
    }, 2000);
};


function clearRoad() {
    for (let i = 0; i < racingCells; i++) {
        $(`#${i}`).html("");
    };
};

function showResults(winners) {
    console.log(winners[0]);
    clearTimeout(myTimeout);
    $('#logger').html(`<strong>The Winner issss <span class="fs-3">${winners[0].name}</span></strong>`);
    if (winners.length > 1) {
        $('#logger').append(`<p>Other Cars as Their Rank:</p>`);
        for (let i = 1; i < winners.length; i++) {
            $('#logger').append(`<p class = "fw-bold"><span class="fs-3">${winners[i].name}</span></p>`);
        };
    };
    $('.alert').removeClass('d-none');
    $('.alert').addClass(`alert-success`);
    $('.alert').parent().css('opacity', 1)
    myTimeout = setTimeout(function () {
        $('.alert').addClass('d-none');
        $('.alert').removeClass(`alert-success`);
        $('#logger').html(``);
        $('.alert').parent().css('opacity', 0.8)
    }, 10000);
};