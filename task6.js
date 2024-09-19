let displayStr = "";

// 6 a)First Strategy: Nested Loop
for (let firstFactor = 1; firstFactor <= 12; firstFactor++) {
    for (let secondFactor = 1; secondFactor <= 12; secondFactor++) {
        let product = firstFactor * secondFactor;
        displayStr += `${firstFactor} * ${secondFactor} = ${product}<br>`;
    }
    displayStr += "<br>--------------<br>";
}

let refToDisplay = document.querySelector(".tables");
refToDisplay.innerHTML += "<h3>Strategy 1: Nested Loop</h3>" + displayStr;

// 6 b) Second Strategy: Calling a function within a loop
const timesTables = (firstFactor) => {
    let displayStr = "";
    for (let secondFactor = 1; secondFactor <= 12; secondFactor++) {
        let product = firstFactor * secondFactor;
        displayStr += `${firstFactor} * ${secondFactor} = ${product}<br>`;
    }
    displayStr += "<br>--------------<br>";
    return displayStr;
};

let fullDisplayStr = "";
for (let firstFactor = 1; firstFactor <= 12; firstFactor++) {
    fullDisplayStr += timesTables(firstFactor);
}

refToDisplay.innerHTML += "<h3>Strategy 2: Function within a loop</h3>" + fullDisplayStr;

// 6 c) Third Strategy: Calling a function that calls another function
const allTables = (delimiter) => {
    let displayStr = "";
    for (let firstFactor = 1; firstFactor <= delimiter; firstFactor++) {
        displayStr += createTables(firstFactor, delimiter);
    }
    return displayStr;
};

const createTables = (firstFactor, delimiter) => {
    let displayStr = "";
    for (let secondFactor = 1; secondFactor <= delimiter; secondFactor++) {
        let product = firstFactor * secondFactor;
        displayStr += `${firstFactor} * ${secondFactor} = ${product}<br>`;
    }
    displayStr += "<br>--------------<br>";
    return displayStr;
};

let finalDisplayStr = allTables(12);
refToDisplay.innerHTML += "<h3>Strategy 3: Function calling another function</h3>" + finalDisplayStr;
