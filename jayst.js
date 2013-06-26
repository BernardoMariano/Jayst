;(function(window){
    var Jayst = Function();
    Jayst.register = Jayst.prototype;
    Jayst.testsPassed = 0;
    Jayst.testsFailed = 0;
    Jayst.prototype.assert = function (condition, expected, message) {
        try {
            var result = condition == expected;
            if (condition == expected) {
                console.log('.');
                Jayst.testsPassed++;
            } else {
                console.error('Uncaught AssertionError: ' + condition + ' != ' + expected);
                Jayst.testsFailed++;
            }
        } catch (e) {
            console.error('E');
            Jayst.testsFailed++;
        }
    };
    Jayst.prototype.run = function (file_name) {
        this[file_name].prototype = new Jayst();
        console.log('================ tests session start ================');
        console.group(file_name);
        console.time('Finished in');
        var dontRun = ['assert', 'run', 'setUp', 'tearDown', 'testsPassed', 'testsFailed'];
        for (Jayst in (new this[file_name])) {
            if (dontRun.indexOf(Jayst) < 0) {
                try { new this[file_name]().setUp(); } catch (e) {};
                new this[file_name]()[Jayst]();
                try { new this[file_name]().tearDown(); } catch (e) {};
            }
        }
        console.timeEnd('Finished in');
        console.groupEnd();
        console.log('================ ' + Jayst.testsFailed + ' failed, ' + Jayst.testsPassed + ' passed ================');
    }
    window.Jayst = Jayst;
}(window));
