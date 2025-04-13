import { EntityConditionType } from "./entitycondition.ts";

export class SprintingCondition extends EntityConditionType {
    public override type: string = "origins:sprinting";

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