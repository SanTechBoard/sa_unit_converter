document.getElementById("jscheck").innerHTML = `<br>`;
document.addEventListener("DOMContentLoaded", function () {
    let unit = document.getElementById("unit");
    let unitp = document.getElementById("unitp");
    let from = document.getElementById("from");
    let to = document.getElementById("to");
    let input = document.getElementById("input");
    let result = document.getElementById("result");
    let fromto = document.getElementById("fromto");

    function tempdy() {
        let x = parseInt(from.value);
        let y = parseInt(to.value);
        let inputValue = parseFloat(input.value);

        if (x === 0) {
            fromto.textContent = "Select another option";
        } else {
            fromto.textContent = "";
        }
        if (x === 1) {
            if (y === 0) {
                fromto.textContent = "Select another option";
            } else if (y === 1) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue) + "°C";
                } else {
                    result.textContent = "";
                }
            } else if (y === 2) {
                if (!isNaN(inputValue)) {
                    result.textContent = String((inputValue * 9 / 5) + 32) + "°F";
                } else {
                    result.textContent = "";
                }
            } else if (y === 3) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue + 273.15) + "°K";
                } else {
                    result.textContent = "";
                }
            }
        } else if (x === 2) {
            if (y === 0) {
                fromto.textContent = "Select another option";
            } else if (y === 1) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(5 / 9 * (inputValue - 32)) + "°C";
                } else {
                    result.textContent = "";
                }
            } else if (y === 2) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue) + "°F";
                } else {
                    result.textContent = "";
                }
            } else if (y === 3) {
                if (!isNaN(inputValue)) {
                    result.textContent = String((inputValue + 459.67) * 5 / 9) + "°K";
                } else {
                    result.textContent = "";
                }
            }
        } else if (x === 3) {
            if (y === 0) {
                fromto.textContent = "Select another option";
            } else if (y === 1) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue - 273.15) + "°C";
                } else {
                    result.textContent = "";
                }
            } else if (y === 2) {
                if (!isNaN(inputValue)) {
                    var fahrenheit = (inputValue - 273.15) * 9 / 5 + 32;
                    result.textContent = fahrenheit.toFixed(2) + "°F";
                } else {
                    result.textContent = "";
                }
            } else if (y === 3) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue) + "°K";
                } else {
                    result.textContent = "";
                }
            }
        }
    };

    function lengdy() {
        let x = parseInt(from.value);
        let y = parseInt(to.value);
        let inputValue = parseFloat(input.value);

        if (x === 0) {
            fromto.textContent = "Select another option";
        } else {
            fromto.textContent = "";
        }
        if (x === 1) {
            if (y === 0) {
                fromto.textContent = "Select another option";
            } else if (y === 1) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue) + "m";
                } else {
                    result.textContent = "";
                }
            } else if (y === 2) {
                if (!isNaN(inputValue)) {
                    result.textContent = String((inputValue * 3.28)) + "'";
                } else {
                    result.textContent = "";
                }
            } else if (y === 3) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue * 39.37) + `"`;
                } else {
                    result.textContent = "";
                }
            }
        } else if (x === 2) {
            if (y === 0) {
                fromto.textContent = "Select another option";
            } else if (y === 1) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue / 3.28) + "m";
                } else {
                    result.textContent = "";
                }
            } else if (y === 2) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue) + "'";
                } else {
                    result.textContent = "";
                }
            } else if (y === 3) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue * 12) + `"`;
                } else {
                    result.textContent = "";
                }
            }
        } else if (x === 3) {
            if (y === 0) {
                fromto.textContent = "Select another option";
            } else if (y === 1) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue / 39.37) + "m";
                } else {
                    result.textContent = "";
                }
            } else if (y === 2) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue / 12) + "'";
                } else {
                    result.textContent = "";
                }
            } else if (y === 3) {
                if (!isNaN(inputValue)) {
                    result.textContent = String(inputValue) + `"`;
                } else {
                    result.textContent = "";
                }
            }
        }
    };

    unit.addEventListener("input", function () {
        if (unit.value === "0") {
            unitp.textContent = `Select another option`;
        } else if (unit.value === "1") { // Temperature
            unitp.textContent = ``;
            from.innerHTML = `<option value="0"> </option>
                              <option value="1">Celsius</option>
                              <option value="2">Fahrenheit</option>
                              <option value="3">Kelvin</option>`;
            to.innerHTML = `<option value="0"> </option>
                            <option value="1">Celsius</option>
                            <option value="2">Fahrenheit</option>
                            <option value="3">Kelvin</option>`;
            tempdy();
        } else if (unit.value === "2") { // Length
            unitp.textContent = ``;
            from.innerHTML = `<option value="0"> </option>
                              <option value="1">Meter</option>
                              <option value="2">Foot</option>
                              <option value="3">Inch</option>`;
            to.innerHTML = `<option value="0"> </option>
                            <option value="1">Meter</option>
                            <option value="2">Foot</option>
                            <option value="3">Inch</option>`;
            lengdy();
        } else if (unit.value === "3") {
            unitp.textContent = `Wait for updates, select another option`;
        } else {
            unitp.textContent = `Select any option`;
        }
    });
    unit.addEventListener("change", function(){
        result.textContent = "";
        input.value = "";
    });
    from.addEventListener("input", tempdy);
    to.addEventListener("input", tempdy);
    input.addEventListener("input", tempdy);
    input.addEventListener("change", tempdy);
    from.addEventListener("input", lengdy);
    to.addEventListener("input", lengdy);
    input.addEventListener("input", lengdy);
    input.addEventListener("change", lengdy);
});