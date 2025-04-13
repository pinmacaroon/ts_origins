import { ItemConditionType } from "../item/itemconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class UsingItemCondition extends EntityConditionType {
    public override type: string = "origins:using_item";
    public itemcondition?: ItemConditionType | MetaConditionType;

    constructor(
        itemcondition?: ItemConditionType | MetaConditionType,
        inverted?: boolean,
    ) {
        super(inverted);
        this.itemcondition = itemcondition;
    }

    public override compile(): object {
        if (this.itemcondition) {
            return {
                type: this.type,
                item_condition: this.itemcondition.compile(),
                inverted: this.inverted,
            };
        } else {
            return {
                type: this.type,
                inverted: this.inverted,
            };
        }
    }
}
