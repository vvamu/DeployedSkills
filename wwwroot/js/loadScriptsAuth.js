

function loadDependentScripts() {
    const scripts = {

        "/Scripts/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js": 0,
        "/Scripts/jquery-1.10.2.min.js": 0,
        "/Scripts/jquery-1.10.2.js": 0,

        "/plugins/tables/js/jquery.dataTables.min.js": 2,
        "/plugins/tables/js/datatable/dataTables.bootstrap4.min.js": 2,
        "/plugins/tables/js/datatable-init/datatable-basic.min.js": 2,

        "/plugins/common/common.min.js": 1,
        "/js/custom.min.js": 1,
        "/js/settings.js": 1,
        "/js/gleek.js": 1,
        "/js/sendMessage.js": 1
    };

    loadScripts(scripts,[true,true,false,false])
}

// Запуск
loadDependentScripts();

// Ждем, когда jQuery станет доступен
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