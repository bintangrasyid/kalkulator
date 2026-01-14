// Ambil elemen
let tombol = document.querySelector(".container-tombol");
let screen = document.querySelector("#screen");

// STATE (kondisi kalkulator)
let resetScreen = false;   // apakah layar perlu di-reset
let bolehHitung = false;  // apakah sudah ada dua angka
let tmpVal = "";          // angka pertama
let operator = "";        // operator yang dipilih

// Event delegation
tombol.addEventListener("click", function (e) {
    let tombolClick = e.target;
    let nilaiTombol = tombolClick.innerText;

    // Abaikan klik selain tombol
    if (!tombolClick.classList.contains("tombol")) return;

    // CLEAR
    if (nilaiTombol === "C") {
        screen.value = "";
        tmpVal = "";
        operator = "";
        resetScreen = false;
        bolehHitung = false;
    }

    // BACKSPACE
    else if (nilaiTombol === "<") {
        screen.value = screen.value.slice(0, -1);
    }

    // HASIL =
    else if (nilaiTombol === "=") {
        if (bolehHitung) {
            screen.value = eval(tmpVal + operator + screen.value);
            bolehHitung = false;
            resetScreen = true;
        }
    }

    // TITIK DESIMAL
    else if (nilaiTombol === ".") {
        if (!screen.value.includes(".")) {
            screen.value += ".";
        }
    }

    // OPERATOR
    else if (tombolClick.classList.contains("operator")) {

        if (bolehHitung) {
            screen.value = eval(tmpVal + operator + screen.value);
        }

        tmpVal = screen.value;
        operator = nilaiTombol;
        resetScreen = true;
        bolehHitung = false;
    }

    // ANGKA
    else {
        if (resetScreen) {
            screen.value = nilaiTombol;
            resetScreen = false;
            bolehHitung = true;
        } else {
            screen.value += nilaiTombol;
        }
    }
});
