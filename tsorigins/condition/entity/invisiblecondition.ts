import { EntityConditionType } from "./entitycondition.ts";

export class InvisibleCondition extends EntityConditionType {
    public override type: string = "origins:in_thunderstorm";

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