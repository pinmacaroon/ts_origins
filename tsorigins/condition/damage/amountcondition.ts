import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { DamageConditionType } from "./damagecondition.ts";

export class AmountDamageCondition extends DamageConditionType{
    public override type: string = "origins:amount";
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