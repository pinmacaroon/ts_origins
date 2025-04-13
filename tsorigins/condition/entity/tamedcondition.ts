import { EntityConditionType } from "./entitycondition.ts";

export class TamedCondition extends EntityConditionType {
    public override type: string = "origins:tamed";

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