import { useState } from "react";
import { Box } from "./Box";

interface BrickProps {
    box: Box;
}

export function Brick({ box }: BrickProps) {

    let points = 10;

    return (
            <div className="brick"
                style={{
                    left: `${box.x}px`,
                    top: `${box.y}px`,
                    width: `${box.w}px`,
                    height: `${box.h}px`,
                    display: `${box.alive ? "block" : "none"}`,
                }} />
        ) ;
}
