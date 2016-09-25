function DrawPyramid(totalrows) {
    var currentRow, spaceCount, starCount;
    var spacestr, starstr, finalstr;
    for (currentRow = 0; currentRow < totalrows; currentRow++) {
        spacestr = "";
        starstr = "";
        finalstr = ""; //若不在循环内定义，每一行的串前会显示undefine
        for (spaceCount = 0; spaceCount < (totalrows - currentRow - 1); spaceCount++) {
            spacestr = spacestr + " "; //组合空格串
        }
        for (starCount = 0; starCount < (2 * currentRow + 1); starCount++) {
            starstr = starstr + "*"; //组合星号串
        }
        finalstr = spacestr + starstr;
        console.log(finalstr); //两串组合作为一行输出
    }
}
window.onload = function () {
    DrawPyramid(5);
};
//# sourceMappingURL=main.js.map