import { EntityConditionType } from "./entitycondition.ts";

export class DimensionCondition extends EntityConditionType {
    public override type: string = "origins:dimension";
    public dimension: string;

    constructor(
        dimension: string,
        inverted?: boolean
    ){
        super(inverted);
        this.dimension = dimension;
    }

    public override compile(): object {
        return {
            type: this.type,
            dimension: this.dimension,
            inverted: this.inverted
        };
    }
}