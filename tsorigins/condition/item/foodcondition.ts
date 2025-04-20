import { ItemConditionType } from "./itemconditiontype.ts";

export class FoodItemCondition extends ItemConditionType{
    public override type: string = "origins:food";

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