// code your solution here
function superbowlWin(record) {
    const win = record.find(obj => obj.result === "W");
    return win ? win.year : undefined;
}