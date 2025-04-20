import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { ItemConditionType } from "./itemconditiontype.ts";

export class DurabilityItemCondition extends ItemConditionType{
    public override type: string = "origins:fuel";
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        comparison?: ComparisonOperator,
        compareto?: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison ?? ComparisonOperator[">"];
        this.compareto = compareto ?? 0;
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