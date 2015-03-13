$(function() {
    var data = []
    var content = "";
    $.each($("p"), function(k, v) {
        var text = $(v).text();
        var m;
        if (m = text.match(/[0-9a-f]{40}/gi) && m != undefined) {
            data.push(m[0]);
        }
    });

    if (data.length == 0) {
        return false;
    }

    for (var key in data) {
        var link = '<a target="_blank" href="magnet:?xt=urn:btih:' + data[key] + '">下載 ' + (key + 1) + '</a>';
        content += link;
    }

    $("body").append($("<div id='dialog'>" + link + "</div>"));
    $("#dialog").dialog();
});