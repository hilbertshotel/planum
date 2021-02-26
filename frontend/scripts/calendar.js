"use strict";
const addCalendar = (main) => {
    const addTile = (main, l, t) => {
        const tile = document.createElement("div");
        tile.className = "calendarTile";
        tile.style.left = `${l}px`;
        tile.style.top = `${t}px`;
        main.appendChild(tile);
    };
    const moveLeft = 75;
    const moveTop = 25;
    let leftStart = 300;
    let topStart = 220;
    for (let i = 0; i < 8; i++) {
        let l = leftStart;
        let t = topStart;
        for (let i = 0; i < 8; i++) {
            addTile(main, l, t);
            l += moveLeft;
            t -= moveTop;
        }
        leftStart += moveLeft;
        topStart += moveTop;
    }
};
