import { ItemConditionType } from "./itemconditiontype.ts";

export class EnchantableItemCondition extends ItemConditionType{
    public override type: string = "origins:enchantable";

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