import { EntityConditionType } from "./entitycondition.ts";

export class InRainCondition extends EntityConditionType {
    public override type: string = "origins:in_rain";

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