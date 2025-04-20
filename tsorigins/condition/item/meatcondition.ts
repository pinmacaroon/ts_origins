import { ItemConditionType } from "./itemconditiontype.ts";

export class MeatItemCondition extends ItemConditionType{
    public override type: string = "origins:meat";

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