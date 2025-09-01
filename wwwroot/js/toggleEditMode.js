function toggleEditMode() {
    $('#courses-all').empty();
    $('#flexSwitchCheckDefault').prop('disabled', true);

    if ($('#btnToggleEditMode').length) {
        $('#btnToggleEditMode').prop('disabled', true);
    }

    loadIcons().then(() => {
        try {
            console.log("loadCourss")
            return loadCourss();
        } catch (ex) {
            console.log("loadCourses")
            loadCourses();
        }

    }).then(() => {
        
        $('#flexSwitchCheckDefault').prop('disabled', false);
        if ($('#btnToggleEditMode').length) {
            $('#btnToggleEditMode').prop('disabled', false);
        }
    });

}

try {
    toggleEditMode();
}
catch {
    retryDelay = 3000
    setTimeout(toggleEditMode, retryDelay);
}
