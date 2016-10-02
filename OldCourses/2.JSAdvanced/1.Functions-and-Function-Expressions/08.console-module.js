/**
 * Created by evgeni.tsn on 4/15/2016.
 */

var myConsole = (function () {

    function replaceParams(message, parameters) {

        var pattern = /{(\d+)}/g;

        var match = pattern.exec(message);

        while (match) {
            var placeholder = match[0];
            var index = parseInt(match[1]);

            var replacement = parameters[index];

            if (replacement === undefined) {
                writeError("Incorrect number of parameters provided!");
                return null;
            }

            if (replacement === null) {
                replacement = "";
            }

            message = message.replace(placeholder, replacement.toString());

            match = pattern.exec(message);
        }

        return message;
    }

    function writeLine() {
        var message = arguments[0];

        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.log(message);
        }
    }

    function writeError() {
        var message = arguments[0];
        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.error(message);
        }
    }

    function writeWarning() {
        var message = arguments[0];
        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.warn(message);
        }
    }

    function writeInfo() {
        var message = arguments[0];
        Array.prototype.shift.apply(arguments);

        message = replaceParams(message, arguments);

        if (message !== null) {
            console.info(message);
        }
    }

    return {
        writeLine: writeLine,
        writeError: writeError,
        writeWarning: writeWarning,
        writeInfo: writeInfo
    };
})();

// print messages
myConsole.writeLine("Message: Hello Console!");
myConsole.writeLine("Message: {0}", "Hello Console!");
myConsole.writeLine("Object: {0}", { name: "Test", toString: function() { return this.name; }});
myConsole.writeInfo("Info: {0}", "FYI: this works!");
myConsole.writeLine("{0} - {1}", "zero", "one");

myConsole.writeError("Error: {0}", "A fatal error has occurred.");
myConsole.writeWarning("Warning: {0}", "Access denied!");

myConsole.writeError("Error object: {0}", { msg: "An error occurred...", toString: function () { return this.msg; }});
myConsole.writeLine("{0} - {2}", "zero", "one");
console.log("\n\n");