interface BoxProps {
    name?: string;
    x?: number;
    y?: number;
    w?: number;
    h?: number;
    dx?: number;
    dy?: number;
    alive?: boolean;
    points?: number;
}

export class Box {
    name = "box";
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    dx = 0;
    dy = 0;
    alive = true;
    points = 0;

    constructor({ name, x, y, w, h, dx, dy, alive, points }: BoxProps) {
        this.name = name ? name : "box";
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.w = w ? w : 0;
        this.h = h ? h : 0;
        this.dx = dx ? dx : 0;
        this.dy = dy ? dy : 0;
        this.alive = alive === undefined ? true : alive;
        this.points = points ? points : 0;
    }

    move() {
        this.x += this.dx;
        this.y += this.dy;
    }

    bounce(x: number, y: number, w: number, h: number) {
        if (this.x < x) {
            this.x = x;
            this.dx = -this.dx;
        }
        if (this.x + this.w > w) {
            this.x = w - this.w;
            this.dx = -this.dx;
        }
        if (this.y < y) {
            this.y = y;
            this.dy = -this.dy;
        }
        if (this.y + this.h > h) {
            this.y = h - this.h;
            this.dy = -this.dy;
        }
    }

    hits(box: Box) {
        if ((this.x + this.w < box.x)
            || (box.x + box.w < this.x)
            || (this.y + this.h < box.y)
            || (box.y + box.h < this.y)) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className={this.name} style={{
                left: `${this.x}px`,
                top: `${this.y}px`,
                width: `${this.w}px`,
                height: `${this.h}px`,
            }}></div>
        )
    }
}
