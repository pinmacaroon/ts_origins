import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class SetSizeCondition extends EntityConditionType{
    public override type: string = "origins:set_size";
    public comparison: ComparisonOperator;
    public compareto: number;
    public set: string;

    constructor(
        set: string,
        comparison: ComparisonOperator,
        compareto: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.set = set;
    }

    public override compile(): object {
        return {
            type: this.type,
            set: this.set,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        }
    }
}