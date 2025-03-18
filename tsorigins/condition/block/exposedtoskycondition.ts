import { BlockConditionType } from "./blockconditiontype.ts";

export class ExposedToSky extends BlockConditionType {
    public override type: string = "origins:exposed_to_sky";

    constructor(
        inverted?: boolean
    ){
        super(inverted);
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        };
    }
}