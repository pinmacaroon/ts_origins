import { EntityConditionType } from "./entitycondition.ts";

export class ExistsCondition extends EntityConditionType {
    public override type: string = "origins:equipped_item";

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