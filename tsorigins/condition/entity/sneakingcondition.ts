import { EntityConditionType } from "./entitycondition.ts";

export class SneakingCondition extends EntityConditionType {
    public override type: string = "origins:sneaking";

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