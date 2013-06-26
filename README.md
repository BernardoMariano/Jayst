Jayst
=====

Jayst is a Javascript Test Suite, made to be an, as simple as possible, way to test your codes.

Initial usage
--

    <script src="jayst.js"></script>
    <script src="sum.js"></script>
    <script>
    Jayst.register.sum = function () {
        this.test_1_plus_1_return_2 = function () {
            var result = sum(1,1);
            this.assert(result, 2);
        }
    }
    var test = new Jayst();
    test.run('sum');
    </script>

setUp & tearDown
--

    <script src="jayst.js"></script>
    <script src="myPlayer.js"></script>
    <script>
    Jayst.register.myPlayer = function () {
        this.setUp = function () {
            // Do not use keyword var here
            player = new myPlayer(200, 350);
        }
        this.test_player_is_an_instance_of_myPlayer = function () {
            var is_instance = player instanceof myPlayer;
            this.assert(is_instance, true);
        }
        this.test_player_width_200px = function () {
            this.assert(player.width, 200);
        }
        this.test_player_height_350px = function () {
            this.assert(player.height, 350);
        }
    }
    var test = new Jayst();
    test.run('myPlayer');
    </script>
