function SendMessage() {
    var valData = $("#sendMessage").serialize(); // Serialize form data

    $.ajax({
        url: "/Account/SendMessage",
        type: "POST",
        data: valData, // Sending serialized form data
        success: function (data) {
            alert("Сообщение было отправлено!")
            toggleCollapseAdmin();
            toggleCollapseAdmin();
            if (Array.isArray(data)) {
                // Handle response data if it's an array
            } else {
                // Handle response data if it's not an array
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Сообщение некорректно.")
        }
    });
}