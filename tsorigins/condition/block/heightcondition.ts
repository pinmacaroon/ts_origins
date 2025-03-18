import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { BlockConditionType } from "./blockconditiontype.ts";

export class HeightBlockCondition extends BlockConditionType {
    public override type: string = "origins:height";
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        comparison: ComparisonOperator,
        compareto: number,
        inverted?: boolean,
    ){
        super(inverted);
        this.compareto = compareto;
        this.comparison = comparison;
    }

    public override compile(): object {
        return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        };
    }
}