import { EntityConditionType } from "./entitycondition.ts";

export class OnFireCondition extends EntityConditionType {
    public override type: string = "origins:on_fire";

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