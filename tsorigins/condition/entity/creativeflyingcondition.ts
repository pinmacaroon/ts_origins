import { EntityConditionType } from "./entitycondition.ts";

export class CreativeFlyingCondition extends EntityConditionType {
    public override type: string = "origins:creative_flying";

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