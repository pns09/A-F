var data = [
    { "name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    { "name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    { "name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    { "name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    { "name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    { "name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    { "name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
]


function onload(data) {
    var getdata = document.getElementById('getTasks');
    getdata.innerHTML = '';

    for(var i = 0; i < data.length; i++) {
        var name = data[i].name;
        var date = data[i].date;
        var assign = data[i].assigned;

        getdata = "<div class='block'>" +
            "<h3 class='form-control'>" + name + "</h3>" +
            "<h3 class='form-control'>" + date + "</h3>" +
            "<h3 class='form-control'>" + assign + "</h3>" +
            "</div>";
        document.getElementById('getTasks').innerHTML = getdata;
    }
}
document.onload = onload(data);

// Adding new form data to the side-container
function newTask() {
    var name = document.getElementById('name').value;
    var date = document.getElementById('date').value;
    var assign = document.getElementById('assign').value;

    var postdata = '<div class="block"> \
        <h3 class="form-control">' + name + '</h3>\
        <h3 class="form-control">' + date + '</h3>\
        <h3 class="form-control">' + assign + '</h3>\
        </div>';
    document.getElementById('getTasks').innerHTML += postdata;

}
document.getElementById('submitData').addEventListener("click", function () {
    newTask();
    event.preventDefault();
});
