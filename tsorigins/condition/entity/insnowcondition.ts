import { EntityConditionType } from "./entitycondition.ts";

export class InSnowCondition extends EntityConditionType {
    public override type: string = "origins:in_snow";

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