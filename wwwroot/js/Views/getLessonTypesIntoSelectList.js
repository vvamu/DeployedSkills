function GetLessonTypes() {

    filters_LessonType = {
        SubjectId: $("#subject-select option:selected").val(),
        CourseId: $("#course-select option:selected").val(),
        GroupTypeId: $("#groupType-select option:selected").val(),
        LocationType: $("#locationType-select option:selected").val(),
        AgeTypeId: $("#ageType-select option:selected").val(),
        IsDeleted: '-'

    }
    orders = {
        OrderColumn: "Id",
        OrderType: "asc",
    }

    var valData = { filters: filters_LessonType, order: orders };
    $.ajax({
        url: '/LessonType/OptionsList',
        type: 'GET',
        data: valData,
        success: function (data) {
            $("#lessonType-select").empty(); // Clear the select element
            $("#lessonType2-select").empty();

            var emptyOption = $('<option value=""></option>')
            var emptyClonedOption = emptyOption.clone();
            $("#lessonType-select").append(emptyOption);
            $("#lessonType2-select").append(emptyClonedOption);

            data.forEach(function (item) {
                if (item.displayName && item.displayName.indexOf(';') !== -1) { // Check if DisplayName is defined before extracting substring

                    var option = $('<option ' + 'title="' + item.displayName + '" ' + 'value="' + item.id + '" >').text(item.status + " - " + item.name + " - " + item.durationText + " - " + item.check);

                    // Check if displayName includes "Не активен" before disabling the option
                    if (item.displayName.includes("Не активен")) {
                        option.prop('disabled', true);
                    }
                    var clonedOption = option.clone(); // Клонируем элемент
                    $("#lessonType-select").append(option);
                    $("#lessonType2-select").append(clonedOption);

                } else {
                    console.error("Missing or invalid displayName for item:", item);
                }
            });
        },
        error: function (xhr, status, error) {
            console.error(error);
        }
    }).then(() => {

    })



    //$("#lessonType-select").load("/LessonType/OptionsList", { filters: filters_LessonType, order: orders, lessonTypeId: $("#lessonType-select option:selected").val() });
}


GetLessonTypes();