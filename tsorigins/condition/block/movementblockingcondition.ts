import { BlockConditionType } from "./blockconditiontype.ts";

export class MovementBlockingCondition extends BlockConditionType {
    public override type: string = "origins:movement_blocking";

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