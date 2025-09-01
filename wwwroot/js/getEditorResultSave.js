//------------------------ LOAD COURSES






function getEditor(id) {

    let course = $("#div" + id);
    let substringToFind = ">save</button></div>"
    let str = (course.html()).toString()
    let index = str.indexOf(substringToFind);

    if (index !== -1) {
        let result = str.substring(index + substringToFind.length);

        $.ajax({
            url: "/Home/GetEditorHtml?html=" + result + "&id=" + id,
            type: "GET",
            dataType: "html",
            success: function (data) {
                course.empty();
                course.append(data);
            },
            error: function (err) {
                console.log(err)
            }
        });
    }

}

function getResult(id) {

    let course = $("#div" + id);
    let res = $("#textArea" + id);
    let str = "<div style=\"display:flex\"><button onclick='getEditor(\"" + id + "\")'>change to editor view</button><button onclick=\"saveChanges('" + id + "')\">save</button></div><br/>";

    $.ajax({
        url: "/Home/ToHtml?editorValue=" + res.val(),
        type: "GET",
        dataType: "html",
        success: function (data) {
            course.empty();
            course.append(str)
            course.append(data);

        },
        error: function (err) {
            console.log(err)
            console.log("hello err GET_RESULT")

        }

    });


}

function saveChanges(id) {

    let course = $("#div" + id);
    console.log(course.html())

    let substringToFind = ">save</button></div>"
    let str = (course.html()).toString()
    let index = str.indexOf(substringToFind);

    if (index !== -1) {
        let result = str.substring(index + substringToFind.length);
        console.log("result")
        console.log(result)

        $.ajax({
            url: "/Home/SaveDescriptionOnMainPage?courseId=" + id + "&html=" + result,
            type: "POST",
            dataType: "html",
            success: function (data) {
                alert("success")

            },
            error: function (err) {
                alert(err.responseJSON.error)
            }

        });
    }
}

//for course.html
var loadFile = function (event, imgId) {
    console.log("loadfile")

    var output = document.getElementById(imgId);
    console.log(output.src)
    output.src = "";
    output.src = window.URL.createObjectURL(event.target.files[0]);
    console.log(output.src)

}

function uploadImage(uploadFileId, itemId) {

    var data = new FormData();
    data.append("ImagesFiles", $(uploadFileId)[0].files[0]);
    data.append("Id", itemId)


    $.ajax({
        type: 'post',
        url: "/Course/UploadImage",
        data: data,
        processData: false,
        contentType: false,
        success: function (data) {

            alert("success")
        },
        error: function (err) {

            alert(err.responseJSON.error)
        }
    });

}

function uploadIcon(uploadFileId, itemId) {

    var data = new FormData();
    data.append("IconsFiles", $(uploadFileId)[0].files[0]);
    data.append("Id", itemId)

    $.ajax({
        type: 'post',
        url: "/Course/UploadIcon",
        data: data,
        processData: false,
        contentType: false,
        success: function (data) {

            alert("success")
        },
        error: function (err) {

            alert(err.responseJSON.error)
        }
    }).then(() => {
        loadIcons();
    });



}


function ChangeCourse(courseId, selectId, isVisibleId) {
    let selectVal = $("#" + selectId).val();
    let isVisibleVal = $("#" + isVisibleId)[0];

    $.ajax({
        url: '/Course/ChangeCourseVisability?id=' + courseId + '&position=' + selectVal + '&isVisible=' + isVisibleVal.checked,
        method: "get",
        success: function (data) {
            alert("success")

            $('#courses-all').empty();
            loadIcons().then(() => {
                return loadCourses();
            }).then(() => {
                console.log("END")
                $('#flexSwitchCheckDefault').prop('disabled', false);
                if ($('#btnToggleEditMode').length) {
                    $('#btnToggleEditMode').prop('disabled', false);
                }
            });

        }
    }).fail(function () {
        alert("error");
    })
        .done(function (data) {

        });

}
