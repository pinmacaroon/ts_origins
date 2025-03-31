import { EntityConditionType } from "./entitycondition.ts";

export class ExposedToSunCondition extends EntityConditionType {
    public override type: string = "origins:exposed_to_sun";

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