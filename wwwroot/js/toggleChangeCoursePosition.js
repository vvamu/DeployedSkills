function toggleChangeCoursePosition() {

    const mainPageProps = document.querySelectorAll('.div_ChangeCoursePosition');

    if (mainPageProps.length == 0) {
        $.ajax({
            url: '/Course/GetCoursesEditor',
            success: function (data) {
                $('#dataChangeCoursePosition').append(data);
                
            }
        });
    } else {
        $('#dataChangeCoursePosition').empty();
    }
    mainPageProps.forEach(element => {
        if (element.hasAttribute('hidden')) {

            element.removeAttribute('hidden');
            $.ajax({
                url: '/Course/GetCoursesEditor',
                success: function (data) {
                    $('#dataChangeCoursePosition').append(data);
                    
                }
            });
        }
        else if (!element.hasAttribute('hidden')) {
            element.setAttribute('hidden', 'true');
            return;
        }
    });



}

