import { Space } from "./enum/space.ts";

export class SpaceVector {
    public x: number;
    public y: number;
    public z: number;
    public space: Space;

    constructor(
        x?: number,
        y?: number,
        z?: number,
        space?: Space
    ){
        this.x = x ?? 0;
        this.y = y ?? 0;
        this.z = z ?? 0;
        this.space = space ?? Space.world;
    }

    public compile(): object {
        return {
            x: this.x,
            y: this.y,
            z: this.z,
            space: this.space
        };
    }
}