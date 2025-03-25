import { EntityConditionType } from "./entitycondition.ts";

export class CollidedHorizontallyCondition extends EntityConditionType {
    public override type: string = "origins:collided_horizontally";

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