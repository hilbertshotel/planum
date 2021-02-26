"use strict";
const addTitle = (main) => {
    // functions
    const addTile = (main, l, t) => {
        const tile = document.createElement("div");
        tile.className = "titleTile";
        tile.style.left = `${l}px`;
        tile.style.top = `${t}px`;
        main.appendChild(tile);
    };
    const addChar = (l, t, c) => {
        const char = document.createElement("div");
        char.className = "titleChar";
        char.style.left = `${l}px`;
        char.style.top = `${t}px`;
        char.innerHTML = c;
        return char;
    };
    const moveLeft = 75;
    const moveTop = 25;
    // PLANUM
    let l = 0;
    let t = 120;
    for (let i = 0; i < 6; i++) {
        addTile(main, l, t);
        l += moveLeft;
        t -= moveTop;
    }
    l = 0;
    t = 120;
    let text = "PLANUM";
    for (let i = 0; i < 6; i++) {
        const char = addChar(l + 22, t - 22, text[i]);
        char.id = "planum";
        main.appendChild(char);
        l += moveLeft;
        t -= moveTop;
    }
    // ISOMETRIC
    l = 0;
    t = 170;
    for (let i = 0; i < 9; i++) {
        addTile(main, l, t);
        l += moveLeft;
        t -= moveTop;
    }
    l = 0;
    t = 170;
    text = "isometric";
    for (let i = 0; i < 9; i++) {
        const char = addChar(l + 35, t + 15, text[i]);
        char.id = "isometric";
        main.appendChild(char);
        l += moveLeft;
        t -= moveTop;
    }
    // TILE LUNACY
    l = 0;
    t = 220;
    for (let i = 0; i < 13; i++) {
        addTile(main, l, t);
        l += moveLeft;
        t -= moveTop;
    }
    l = 0;
    t = 220;
    text = "calendar tool";
    for (let i = 0; i < 13; i++) {
        const char = addChar(l + 35, t + 15, text[i]);
        char.id = "calendar";
        main.appendChild(char);
        l += moveLeft;
        t -= moveTop;
    }
};
