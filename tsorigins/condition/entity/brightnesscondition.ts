import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class BrightnessCondition extends EntityConditionType{
    public override type: string = "origins:brightness";
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        comparison: ComparisonOperator,
        compareto: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
    }

    public override compile(): object {
        return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        }
    }
}