import { EntityConditionType } from "./entitycondition.ts";

export class ExposedToSkyCondition extends EntityConditionType {
    public override type: string = "origins:exposed_to_sky";

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