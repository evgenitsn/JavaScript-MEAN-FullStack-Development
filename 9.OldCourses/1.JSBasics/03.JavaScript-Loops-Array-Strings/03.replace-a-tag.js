/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function replaceATag(str) {
    return str.replace(/<a ([\w\W]+)>([\w\W]+)<\/a>/gi, "[URL $1]$2[/URL]");
}
var text = "<ul>\
	<li>\
		<a href=http://softuni.bg>SoftUni</a>\
	</li>\
</ul>";

console.log(replaceATag(text));
