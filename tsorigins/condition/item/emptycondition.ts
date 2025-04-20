import { ItemConditionType } from "./itemconditiontype.ts";

export class EmptyItemCondition extends ItemConditionType{
    public override type: string = "origins:empty";

    constructor(
        inverted? : boolean
    ) {
        super(inverted);
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        }
    }
}