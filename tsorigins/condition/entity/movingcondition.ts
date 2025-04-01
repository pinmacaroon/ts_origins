import { EntityConditionType } from "./entitycondition.ts";

export class MovingCondition extends EntityConditionType {
    public override type: string = "origins:moving";
    public horizontally: boolean;
    public vertically: boolean;

    constructor(
        horizontally?: boolean,
        vertically?: boolean,
        inverted?: boolean
    ){
        super(inverted);
        this.horizontally = horizontally ?? true;
        this.vertically = vertically ?? true;
    }

    public override compile(): object {
        return {
            type: this.type,
            horizontally: this.horizontally,
            vertically: this.vertically,
            inverted: this.inverted
        };
    }
}