import { Box } from "./Box";

interface BallProps {
    box : Box;
}

export function Ball({box} : BallProps) {
    return box.render();
}
