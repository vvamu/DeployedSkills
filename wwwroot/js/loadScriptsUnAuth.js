
function loadDelayedIframe() {
    const container = document.getElementById('delayed-iframe');
    container.innerHTML = `
        <iframe src="https://yandex.by/map-widget/v1/?ll=27.586545%2C53.916258&mode=search&oid=195451120062&ol=biz&tab=reviews&z=14.6"  
                frameborder="1" 
                allowfullscreen="true" 
                style="width:100%;height:100%">
        </iframe>
    `;
}

window.addEventListener('load', function () {
    try {
        setTimeout(loadDelayedIframe, 3000);
    }
    catch {

    }
    
   
});


//<script type="text/javascript" src="~/Scripts/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js" async rel="stylesheet"></script>
//    <script type="text/javascript" src="~/Scripts/jquery-1.10.2.min.js" async rel="stylesheet" ></script>
//    <script type="text/javascript" src="~/Scripts/jquery-1.10.2.js" async rel="stylesheet" ></script>


 //<script type="text/javascript" src="~/js/metrics/yandexMetrika.js" rel="stylesheet" async></script>
 //   <script type="text/javascript" src="~/js/metrics/metaPixel.js" rel="stylesheet" async></script>
 //   <script type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=AW-17022741245" async rel="stylesheet" ></script>
 //   <script type="text/javascript" src="~/js/metrics/googleTag.js" defer rel="stylesheet"></script>


function loadDependentScripts() {
    const scripts = {
        "/js/metrics/yandexMetrika.js": 10,
        "/js/metrics/metaPixel.js": 10,
        "/js/metrics/googleTag.js": 10,
        "https://www.googletagmanager.com/gtag/js?id=AW-17022741245":10,


        "/Scripts/bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js": 0,
        "/Scripts/jquery-1.10.2.min.js": 0,
        "/Scripts/jquery-1.10.2.js": 0,
        '/js/loadCoursesAndIcons.js': 1,
        '/js/toggleEditMode.js': 2,
        '/js/getEditorResultSave.js': 2,
        '/js/toggleChangeCoursePosition.js': 2
    };

    loadScripts(scripts,[true,true,true])

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
    setTimeout(function () { clearInterval(jQueryCheckInterval);}, 5000);
}