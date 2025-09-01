function loadCourses() {
    return new Promise((resolve, reject) => {
        
        $.ajax({
            url: "/Course/GetCourses",
            type: "GET",
            dataType: "html",
            success: function (data) {
                $('#courses-all').empty();
                $('#courses-all').append(data);

            },
            error: function (err) {
                console.log(err)
                console.log("hello err GET_RESULT")
            }
        });
    });
}

function loadIcons() {
    return new Promise((resolve, reject) => {
        $("#courses-overview").empty();
        // Insert the loading spinner HTML into the #courses-overview element
        $("#courses-overview").html(`
                    <div id="preloader" class="preloaders-icons" style="display:flex;align-items:center;justify-content:center">
                            <img src="/images/loader.svg" width="60" height="60" alt="image format png" />
                    </div>
                `);

        let isEditMode = document.getElementById('flexSwitchCheckDefault');
        if (isEditMode == null) {
            isEditMode = document.createElement("input");
            isEditMode.type = 'checkbox';
        }

        $("#courses-overview").load("/Course/GetCoursesOverview?isEditMode=" + isEditMode.checked, function () {
            $(".preloaders-icons").remove();
            resolve();
        });

    })
}