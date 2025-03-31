import { EntityConditionType } from "./entitycondition.ts";

export class GlowingCondition extends EntityConditionType {
    public override type: string = "origins:glowing";

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