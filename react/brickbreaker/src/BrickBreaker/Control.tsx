import { TouchEvent } from 'react';

interface ControlProps {
    left: (e: TouchEvent<HTMLDivElement>) => void;
    right: (e: TouchEvent<HTMLDivElement>) => void;
}

export function Control({ left, right }: ControlProps) {
    return (
        <div className="control">
            <div className="left" onTouchStart={e => left(e)}></div>
            <div className="right" onTouchStart={e => right(e)}></div>
        </div>
    );
}
