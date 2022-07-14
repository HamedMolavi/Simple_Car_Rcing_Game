
function race() {
    window.scroll(0, 0);//Scrolling to the top of the page
    let win = [];//cars ranking after finishing race
    alert('<strong>The match will be started in 2 seconds:)</strong>', 'success');
    $('#chooseContainer').html("");//Empty choosing container
    let timer = setInterval(() => {
        for (let i = 0; i < numberOfCars; i++) {
            $(`#${pos[i] - 1}`).html('');
            pos[i] += Math.ceil((Math.random() * 9) + 1); // Moving algorithm
            $(`#${pos[i] - 1}`).append(`<i class="zmdi zmdi-car zmdi-hc-3x" style="color: ${cars[i].color};"></i>`);
            if (cars[i].able > 0) cars[i].able--;
        };
        console.log('init stpe', pos);
        while (Math.max(...pos) >= racingCells) {
            let j = pos.indexOf(Math.max(...pos));
            pos.splice(j, 1);
            win.push(...cars.splice(j, 1));
            numberOfCars--;
            console.log(win);
        };
        //Hitting cars :)
        pos = pos.map((val, index, arr) => {
            let hittingCarIndex = pos.indexOf(val, index + 1);
            if (hittingCarIndex !== -1) {
                // console.log(cars[hittingCarIndex].name, ' hitted ', cars[index].name, '!');
                alert(`${cars[hittingCarIndex].name} hitted ${cars[index].name}!`, 'danger');
                cars[index].nitrogen++;
                cars[index].able = 2;
                $(`#${pos[index] - 1}`).html($(`#${pos[index] - 1}`).html().split(`<i class="zmdi zmdi-car zmdi-hc-3x" style="color: ${cars[index].color};"></i>`).join(''));
                $(`#0`).append(`<i class="zmdi zmdi-car zmdi-hc-3x" style="color: ${cars[index].color};"></i>`);
                return 1;
            } else {
                return val;
            };
        });
        console.log('after hit', ...pos);
        //Nitrogen :)
        let temp = [...pos];
        temp.sort((a, b) => a - b);
        for (let k = 0; k < numberOfCars - 1; k++) {
            if (temp[k] + 10 <= temp[k + 1]) {
                const i = pos.indexOf(temp[k]);
                // console.log('ability of', cars[i].name, 'is', cars[i].able)
                if (cars[i].able === 0 && cars[i].nitrogen > 0) {
                    $(`#${pos[i] - 1}`).html('');
                    pos[i] += 2 * Math.ceil((Math.random() * 9) + 1);
                    $(`#${pos[i] - 1}`).append(`<i class="zmdi zmdi-car zmdi-hc-3x" style="color: ${cars[i].color};"></i>`);
                    cars[i].nitrogen--;
                    // console.log(cars[i].name, ' used nitrogen !');
                    alert(`${cars[i].name} used nitrogen!`, 'success');
                    //Hit after nitrogen
                    let hittedCarIndex;
                    if (pos.indexOf(pos[i]) !== i) {
                        hittedCarIndex = pos.indexOf(pos[i]);
                        pos[hittedCarIndex] = 1;
                        // console.log(cars[i].name, ' hitted ', cars[hittedCarIndex].name, '!');
                        alert(`${cars[i].name} hitted ${cars[hittedCarIndex].name}!`, 'danger');
                    } else if (pos.indexOf(pos[i], i + 1) !== -1) {
                        hittedCarIndex = pos.indexOf(pos[i], i + 1);
                        // console.log(cars[i].name, ' hitted ', cars[hittedCarIndex].name, '!');
                        alert(`${cars[i].name} hitted ${cars[hittedCarIndex].name}!`, 'danger');
                        pos[hittedCarIndex] = 1;
                    };
                };
            };
        };
        console.log('end step', pos);


        if (numberOfCars <= 1) {
            clearInterval(timer);
            showResults(win.concat(...cars));
            clearRoad();
        };
    }, 2000);
};
