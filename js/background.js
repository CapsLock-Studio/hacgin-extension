var data = []
var content = "";
$.each($("p, pre"), function(k, v) {
    var text = $(v).text();
    var m;
    if (m = text.match(/[0-9a-fA-F]{40}/gi)) {
        for (var sub_key in m) {
            data.push(m[sub_key]);
        }
    }
});

if (data.length != 0) {
    for (var key in data) {
        var number = parseInt(key) + 1
        var link = '<a target="_blank" href="magnet:?xt=urn:btih:' + data[key] + '">下載 ' + number + '</a><br>';
        content += link;
    }

    $("body").append($("<div id='dialog' style='text-align: center;'>" + content + "</div>"));
    $("#dialog").dialog();
}