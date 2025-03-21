import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class AttributeCondition extends EntityConditionType {
    public override type: string = "origins:attribute";
    public attribute: string;
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        attribute: string,
        comparison: ComparisonOperator,
        compareto: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.attribute = attribute;
        this.comparison = comparison;
        this.compareto = compareto;
    }

    public override compile(): object {
        return {
            type: this.type,
            attribute: this.attribute,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        };
    }
}
