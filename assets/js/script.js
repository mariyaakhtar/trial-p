<!DOCTYPE html>
<html lang="en">
    <head>
        <title> Snake Game </title>
        <link href="https://fonts.googleapis.com/css?family=Antic+Slab" rel="stylesheet">
    </head>

    <body>
        <div id="score">0</div>
        <canvas id="snakeboard" width="400" height="400"></canvas>

        <style>
        #snakeboard {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        #score {
            text-align: center;
            font-size: 140px;
        }

        </style>
    </body>

    <script>
        const board_border = 'black';
        const board_background = 'white';
        const snake_col = 'lightblue';
        const snake_border = 'darkblue';

        let snake = [ 
            {x: 200, y: 200},
            {x: 190, y: 200},
            {x: 180, y: 200},
            {x: 170, y: 200},
            {x: 160, y: 200},
        ]

        let score = 0;
        let food_x;
        let food_y;
        let dx = 10;
        let dy = 0;

        let changing_direction = false;

        // Get the canvas element
        const snakeboard = document.getElementById("snakeboard");

        // Return a two dimensional drawing context
        const snakeboard_ctx = snakeboard.getContext("2d");

        // Start game
        main();

        gen_food();

        document.addEventListener("keydown", change_direction);

        // main function called repeatedly to keep the game running
        function main() {
            if (has_game_ended()) return;
            changing_direction = false;
            setTimeout(function onTick() {
            clearCanvas();
            drawFood();
            moveSnake();
            drawSnake();

            main();
            },100)
        }

        //draw border around canvas
        function clearCanvas() {
            snakeboard_ctx.fillStyle = board_background;
            snakeboard_ctx.strokestyle = board_border;
            snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
            snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
        }

        function drawSnake()
        {
            snake.forEach(drawSnakePart);
        }

        function drawFood(){
            snakeboard_ctx.fillStyle = 'lightgreen';
            snakeboard_ctx.strokestyle = 'darkgreen';
            snakeboard_ctx.fillRect(food_x, food_y, 10, 10);
            snakeboard_ctx.strokeRect(food_x, food_y, 10, 10);
        }
        
        function drawSnakePart(snakePart)
        {
            snakeboard_ctx.fillStyle = 'lightblue';
            snakeboard_ctx.strokestyle = 'darkblue';
            snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        }

        function has_game_ended() {
            for (let i = 4; i < snake.length; i++) {
                if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
            }
            const hitLeftWall = snake[0].x < 0;
            const hitRightWall = snake[0].x > snakeboard.width - 10;
            const hitTopWall = snake[0].y < 0;
            const hitBottomWall = snake[0].y > snakeboard.height - 10;
            return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall
        }

        function random_food(min, max) {
            return Math.round((Math.random() * (max-min) + min) / 10) * 10;
        }

        function gen_food() {
            food_x = random_food(0, snakeboard.width - 10);
            food_y = random_food(0, snakeboard.height - 10);
            // if the new food location is where the snake currently is, generate a new food location
            snake.forEach(function has_snake_eaten_food(part) {
                const has_eaten = part.x == food_x && part.y == food_y;
                if (has_eaten) gen_food();
            });
        }
    
        function change_direction(event) {
            const LEFT_KEY = 37;
            const RIGHT_KEY = 39;
            const UP_KEY = 38;
            const DOWN_KEY = 40;
      
        // Prevent the snake from reversing
    
        if (changing_direction) return;
        changing_direction = true;
        const keyPressed = event.keyCode;
        const goingUp = dy === -10;
        const goingDown = dy === 10;
        const goingRight = dx === 10;
        const goingLeft = dx === -10;
        if (keyPressed === LEFT_KEY && !goingRight) {
          dx = -10;
          dy = 0;
        }
        if (keyPressed === UP_KEY && !goingDown) {
            dx = 0;
            dy = -10;
        }
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            dx = 10;
            dy = 0;
        }
        if (keyPressed === DOWN_KEY && !goingUp) {
            dx = 0;
            dy = 10;
        }
    }

    function moveSnake() {
        const head = {x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head);
        const has_eaten_food = snake[0].x === food_x && snake[0].y === food_y;
        if (has_eaten_food) {
            score += 10;
            document.getElementById('score').innerHTML = score;
            gen_food();
        } else {
            snake.pop();
        }
    }

    </script>
</html>
