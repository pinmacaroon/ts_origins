import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { ItemConditionType } from "./itemconditiontype.ts";

export class ArmorValueItemCondition extends ItemConditionType{
    public override type: string = "origins:armor_value";
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