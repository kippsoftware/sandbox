import { Box } from "./Box";

interface PaddleProps {
    box : Box;
}

export function Paddle({box} : PaddleProps) {
    return box.render();
}
