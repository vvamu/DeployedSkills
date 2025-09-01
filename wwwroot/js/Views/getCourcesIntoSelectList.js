function getCourcesNamesList() {
    var studentsList = $("#courcesNames");
    var studentsList2 = $("#courcesNames2");
    $.ajax({
        url: "/Cource/GetCourcesNamesAsync?IsDeleted=false",
        type: "GET",
        dataType: "json",
        success: function (data) {
            data = JSON.parse(data);
            if (Array.isArray(data)) {


                data.forEach(function (item, i, arr) {

                    var appendedLine = "";


                    appendedLine = "<option class='list-group-item' name='courceId' asp-for='CourceId' value='" + item.Id + "'>" + item.Name;

                    //appendedLine += "<input type='checkbox' name='itemValue' asp-route-itemValue='this.value'  style='margin-right:5px;' value='" + item.Id + "'  /> ";
                    //appendedLine += item.FirstName + " " + item.LastName + " " + item.Surname;
                    //appendedLine += " (Min age:" + item.MinimumAge + ";Max age:" + item.MaximumAge + ")"
                    appendedLine += "</option>"

                    studentsList.append(appendedLine);
                    studentsList2.append(appendedLine);
                })




            }
        }
    });

}