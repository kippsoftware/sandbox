interface ScoreProps {
    score : number;
}

export function Score({score} : ScoreProps) {
    return (
        <div className="score">{score}</div>
    )
}
