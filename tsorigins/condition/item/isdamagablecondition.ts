import { ItemConditionType } from "./itemconditiontype.ts";

export class IsDamagableItemCondition extends ItemConditionType{
    public override type: string = "origins:is_damagable";

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