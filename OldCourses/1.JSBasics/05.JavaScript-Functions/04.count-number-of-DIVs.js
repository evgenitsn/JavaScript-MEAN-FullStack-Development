/**
 * Created by evgeni.tsn on 04-Apr-16.
 */

var input = "<!DOCTYPE html>\
    <html>\
    <head lang=\"en\">\
    <meta charset=\"UTF-8\">\
    <title>index</title>\
    <script src=\"/yourScript.js\" defer></script>\
</head>\
<body>\
<div id=\"outerDiv\">\
    <div\
class=\"first\">\
    <div><div>hello</div></div>\
    </div>\
    <div>hi<div></div></div>\
    <div>I am a div</div>\
</div>\
</body>\
</html>\
";

var pattern = /(<div)/g;

var found = input.match(pattern);
console.log(found.length);

