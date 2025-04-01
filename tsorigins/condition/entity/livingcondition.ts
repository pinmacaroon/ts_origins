import { EntityConditionType } from "./entitycondition.ts";

export class LivingCondition extends EntityConditionType {
    public override type: string = "origins:living";

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