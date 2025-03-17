import { BlockConditionType } from "./blockconditiontype.ts";

export class AttachableCondition extends BlockConditionType {
    public override type: string = "origins:attachable";

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