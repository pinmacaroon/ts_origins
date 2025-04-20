import { ItemConditionType } from "./itemconditiontype.ts";

export class SmeltableItemCondition extends ItemConditionType{
    public override type: string = "origins:smeltable";

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