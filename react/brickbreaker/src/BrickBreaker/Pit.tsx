import { useEffect, useState } from "react";
import { Ball } from "./Ball";
import { Paddle } from "./Paddle";
import { Brick } from "./Brick";
import { Box } from "./Box";


interface PitProps {
    width: number;
    height: number;
    addPoints: (points: number) => void;
}

export function Pit({ width, height, addPoints }: PitProps) {

    let gutter = 10;
    let bricksPerRow = 8;
    let brickWidth = (width - gutter) / bricksPerRow - gutter;
    let brickHeight = 20;

    // Lay the bricks
    function layBricks() {
        let bricks = Array<Box>();
        let x = gutter;
        let y = height / 3;
        while (y > 0) {
            while (x < width) {
                bricks.push(new Box({
                    name: 'brick',
                    x: x,
                    y: y,
                    w: brickWidth,
                    h: brickHeight,
                    points: 10,
                }));
                x += brickWidth + gutter;
            }
            y -= (brickHeight + gutter);
            x = gutter;
        }
        return bricks;
    }
    const [bricks, setBricks] = useState(layBricks());

    // Ball
    const [ball, setBall] = useState(new Box({
        name: 'ball',
        x: width / 3,
        y: height / 2,
        w: 10,
        h: 10,
        dx: 10,
        dy: 10,
    }));

    // Paddle
    const delta = 12;
    const [paddle, setPaddle] = useState(new Box({
        name: 'paddle',
        x: width / 2,
        y: height - 20,
        w: 100,
        h: 10,
    }));

    // Keys
    function left() {
        paddle.dx = -delta;
        setPaddle(paddle);
    }

    function right() {
        paddle.dx = delta;
        setPaddle(paddle);
    }

    function keydown(e: KeyboardEvent) {
        console.log(e.key);
        if (e.key === 'ArrowLeft') {
            left();
        } else if (e.key === 'ArrowRight') {
            right();
        }
    }

    // Clock
    function tick() {
        ball.move();
        ball.bounce(0, 0, width, height);
        paddle.move();
        paddle.bounce(0, 0, width, height);
        if (ball.hits(paddle)) {
            ball.dy = -ball.dy;
        }
        for (const brick of bricks) {
            if (brick.alive && ball.hits(brick)) {
                addPoints(brick.points);
                brick.alive = false;
                ball.dy = -ball.dy;
                break;
            }
        };
        let newBricks = new Array<Box>();
        for (const brick of bricks) {
            newBricks.push(new Box(brick));
        }
        setBricks(newBricks);
        setBall(new Box(ball));
        setPaddle(new Box(paddle));
    }

    useEffect(() => {
        console.log("addEventListener");
        window.addEventListener("keydown", e => keydown(e));

        const clock = setInterval(() => tick(), 50);
        return () => clearInterval(clock);
    }, []);

    return (
        <div className="pit">
            <Ball box={ball} />
            <Paddle box={paddle} />
            {bricks.map((brick, whichBrick) =>
                <Brick key={whichBrick} box={brick} />
            )}
        </div>
    );

}
