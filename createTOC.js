(function () {
    let current = null;
    let result = '';
    Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"))
        .filter(h => h.id !== "table-contents" && !!h.id)
        .forEach(function (h, i, arr) {
            let newCurrent = parseInt(h.tagName.replace("H", ""), 10);
            if (current !== null && current < newCurrent) {
                result += '<ul>';
            }
            if (current === newCurrent) {
                result += '</li>';
            }
            if (i === arr.length - 1 || current !== null && current > newCurrent) {
                result += '</li>';
                for (let p = 0; p < Math.abs(current - newCurrent); p++) {
                    result += '</ul></li>';
                }
            }
            result += '<li><a href="#' + h.id + '" title="' + h.innerHTML + '">' + h.innerHTML + '</a>';

            if (i === arr.length - 1) {
                result += '</li>';
                for (let p = 0; p < Math.abs(2 - newCurrent); p++) {
                    result += '</ul></li>';
                }
            }

            current = newCurrent;
        });
    console.log(result);
}());