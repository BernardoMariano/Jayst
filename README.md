Jayst
=====

Jayst is a Javascript Test Suite, made to be an, as simple as possible, way to test your codes.

Example
--

    <script src="jayst.js"></script>
    <script src="sum.js"></script>
    <script>
    Jayst.register.sum = function () {
        this.test_1_plus_1_should_return_2 = function () {
            var result = sum(1,1);
            this.assert(result, 2);
        }
    }
    var test = new Jayst();
    test.run('sum');
    </script>
