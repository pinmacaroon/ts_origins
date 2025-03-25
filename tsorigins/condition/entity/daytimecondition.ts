import { EntityConditionType } from "./entitycondition.ts";

export class DaytimeCondition extends EntityConditionType {
    public override type: string = "origins:daytime";

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