import { EntityConditionType } from "./entitycondition.ts";

export class UsingEffectiveToolCondition extends EntityConditionType {
    public override type: string = "origins:using_effective_tool";

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