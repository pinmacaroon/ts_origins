import { EntityConditionType } from "./entitycondition.ts";

export class ClimbingCondition extends EntityConditionType {
    public override type: string = "origins:climbing";

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