import { useState, TouchEvent } from "react";
import { Score } from "./Score";
import { Pit } from "./Pit";
import { Control } from "./Control";

export function BrickBreaker() {

    let width = 500;
    let height = 500;

    const [score, setScore] = useState(0);

    function addPoints(points: number) {
        setScore(score => score + points);
    }

    function left(e: TouchEvent<HTMLDivElement>) {
        console.log(`left ${e}`);
    }

    function right(e: TouchEvent<HTMLDivElement>) {
        console.log(`right ${e}`);
    }

    return (
        <div className="brickbreaker">
            <h1>BrickBreaker</h1>
            <Score score={score} />
            <Pit width={width} height={height} addPoints={addPoints} />
            <Control left={left} right={right} />
        </div>
    );
}
