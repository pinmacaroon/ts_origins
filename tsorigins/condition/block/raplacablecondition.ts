import { BlockConditionType } from "./blockconditiontype.ts";

export class ReplacableCondition extends BlockConditionType {
    public override type: string = "origins:replacable";

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