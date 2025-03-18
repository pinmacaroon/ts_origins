import { BlockConditionType } from "./blockconditiontype.ts";

export class WaterLoggableCondition extends BlockConditionType {
    public override type: string = "origins:water_loggable";

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