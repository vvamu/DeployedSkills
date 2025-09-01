function loadDependentScripts() {
    const scripts = {
        "/js/Views/getLessonTypesIntoSelectList.js": 0,
        "/js/Views/getFilteredStudents.js": 0,
        "/js/Views/getCourcesIntoSelectList.js": 0,

    };

    loadScripts(scripts, [true, true, false, false])
}
loadDependentScripts();

if (typeof jQuery === 'undefined') {
    let jQueryCheckInterval = setInterval(function () {
        if (typeof jQuery !== 'undefined') {
            clearInterval(jQueryCheckInterval);
            loadDependentScripts();
        }
    }, 100);

    // Таймаут на случай если jQuery никогда не загрузится
    setTimeout(function () { clearInterval(jQueryCheckInterval); }, 5000);
}

function resetSearch() {

    $('.search-input').val('');
    $('.search-select').prop('selectedIndex', 0);
    getStudents();
}


$(document).ready(function () {

    getStudents();
    //getCourcesNamesList();
});