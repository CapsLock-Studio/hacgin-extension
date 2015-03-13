var data = []
var content = "";
$.each($("p, pre"), function(k, v) {
    var text = $(v).text();
    var m;
    if (m = text.match(/[0-9a-fA-F]{40}/gi)) {
        if (m[0] != undefined) {
            data.push(m[0]);
        }
    }
});

if (data.length != 0) {
    for (var key in data) {
        var link = '<a target="_blank" href="magnet:?xt=urn:btih:' + data[key] + '">下載 ' + (key + 1) + '</a>';
        content += link;
    }

    $("body").append($("<div id='dialog'>" + link + "</div>"));
    $("#dialog").dialog();
}