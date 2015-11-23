var API_BASE_URL = "http://localhost:8080/myapp/file";

function getfiles(url){

    $("#result").text('');

    $.ajax({
        url : url,
        type : 'GET',
        crossDomain : true,
        dataType : 'json',
    }).done(function(data, status, jqxhr){
        var response = data.file;
        var fileCollection = new FileCollection(response);
        var linkHeader = jqxhr.getResponseHeader('Link');
        fileCollection.buildLinks(linkHeader);
        var html = fileCollection.toHTML();
        $("#result").html(html);

    }).fail(function(jqXHR, textStatus) {
        console.log(textStatus);
    });
}
$("#button_list").click(function(e) {
    e.preventDefault();
    getFiles();
});

function getFiles() {
    var url = API_BASE_URL + '/list';
    $("result").text('');

    $.ajax({

        url : url,
        type : 'GET',
        crossDomain : true,
        dataType : 'json',

    }).done(
        function(data, status, jqxhr) {
            var files = data.files;
            $.each(files, function(i, v) {
                var file = v;

                $('<br><strong> CreationDate: </strong> ' + game.creationdate + '<br>').appendTo($('#result'));
                $('<strong> Description: </strong> ' + game.description + '<br>').appendTo($('#result'));
                $('<strong> Name: </strong> ' + game.name + '<br>').appendTo($('#result'));

                $('<strong> Size: </strong> ' + game.size + '<br>').appendTo($('#result'));
                $('<strong> Tags: </strong> ' + game.userlist + '<br>').appendTo($('#result'));


            });
}