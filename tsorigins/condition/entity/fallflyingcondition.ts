import { EntityConditionType } from "./entitycondition.ts";

export class FallFlyingCondition extends EntityConditionType {
    public override type: string = "origins:fall_flying";

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