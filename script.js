function startGame() {
    document.getElementById('renarverButton').style.display = 'none';
    document.body.classList.remove('game-over');

    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const boxSize = 20;
    let snake = [{x: boxSize * 5, y: boxSize * 5}];
    let direction = {x: boxSize, y: 0};
    let nextDirection = direction;
    let food = {x: boxSize * Math.floor(Math.random() * 15), y: boxSize * Math.floor(Math.random() * 15)};
    let obstacles = [];
    let gameInterval;
    let score = 0;
    const maxScore = 2000;
    let headAnimationCounter = 0;
    let showMessage = false;

    canvas.width = boxSize * 15;
    canvas.height = boxSize * 15;

    // Charger les images
    const snakeHeadImg = new Image();
    snakeHeadImg.src = 'images/snake_head.png?v=1.0.3';
    const foodImg = new Image();
    foodImg.src = 'images/apple.png?v=1.0.3';
    const obstacleImg = new Image();
    obstacleImg.src = 'images/rock.png?v=1.0.3';

    function drawSquare(x, y, img) {
        ctx.drawImage(img, x, y, boxSize, boxSize);
    }

    function drawSnake() {
        if (headAnimationCounter > 0) {
            drawSquare(snake[0].x, snake[0].y, snakeHeadImg);
            headAnimationCounter--;
        } else {
            drawSquare(snake[0].x, snake[0].y, snakeHeadImg);
        }
        snake.slice(1).forEach(segment => drawSquare(segment.x, segment.y, snakeHeadImg));
    }

    function drawFood() {
        drawSquare(food.x, food.y, foodImg);
    }

    function drawObstacles() {
        obstacles.forEach(obstacle => drawSquare(obstacle.x, obstacle.y, obstacleImg));
    }

    // Reste du code...
    // Ajoutez ici le reste du code `moveSnake`, `checkCollision`, `addObstacles`, etc.

    // N'oubliez pas de modifier les requêtes de mouvement du serpent pour utiliser les images au lieu des carrés simples
    // Et ajoutez aussi l'animation de fin si vous souhaitez aller plus loin.

    gameInterval = setInterval(gameLoop, 150);
}

function restartGame() {
    startGame();
}
