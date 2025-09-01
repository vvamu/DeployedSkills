function getStudents() {


    var filters = {}
    var orders = {}
    console.log($("#searchByFIO").val())
    try {
        //const searchLessonByTopic = document.getElementById("searchLessonByTopic").value;
        filters = {
            FIO: $("#searchByFIO").val(),
            StudentWorkingDay: $('#studentDayName').val(),
            TeachertWorkingDay: $('#teacherDayName').val(),
            StudentPossibleCource: $('#lessonType-select').val(),
            TeacherPossibleCource: $('#lessonType2-select').val(),
            IsDeleted: $('#search-deleted').val(),
            UserRole: $('#userRole').val()

        };
        console.log("hehe")
        //const order = document.getElementById("courcesNames").value;

        orders = {
            OrderColumn: $('#sort-select').val(),
            OrderType: $('#sort-select-type').val(),
        }

    }
    catch (ex) { console.log(ex); }

    if ($('#userRole').val() == "Teacher") {

        $("#studentDayName").parent().attr("hidden", true);
        $("#courcesNames").parent().attr("hidden", true);
        $("#teacherDayName").parent().attr("hidden", false);
        $("#courcesNames2").parent().attr("hidden", false);
    }
    else if ($('#userRole').val() == "Student") {

        $("#studentDayName").parent().attr("hidden", false);
        $("#courcesNames").parent().attr("hidden", false);
        $("#teacherDayName").parent().attr("hidden", true);
        $("#courcesNames2").parent().attr("hidden", true);

    }
    else if ($('#userRole').val() == "Admin") {

        $("#studentDayName").parent().attr("hidden", true);
        $("#courcesNames").parent().attr("hidden", true);
        $("#teacherDayName").parent().attr("hidden", true);
        $("#courcesNames2").parent().attr("hidden", true);

    }
    else {
        $("#studentDayName").parent().attr("hidden", true);
        $("#courcesNames").parent().attr("hidden", true);
        $("#teacherDayName").parent().attr("hidden", true);
        $("#courcesNames2").parent().attr("hidden", true);
    }

    //------------------------------------------------------------------

    $("#usersList").load("/Account/UsersTableList", { filters: filters, order: orders });

}