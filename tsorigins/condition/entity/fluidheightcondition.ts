import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class FluidHeightCondition extends EntityConditionType{
    public override type: string = "origins:fall_distance";
    public comparison: ComparisonOperator;
    public compareto: number;
    public fluid: string;

    constructor(
        fluid: string,
        comparison: ComparisonOperator,
        compareto: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.fluid = fluid;
    }

    public override compile(): object {
        return {
            type: this.type,
            fluid: this.fluid,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        }
    }
}