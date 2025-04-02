import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class ResourceCondition extends EntityConditionType{
    public override type: string = "origins:resource";
    public comparison: ComparisonOperator;
    public compareto: number;
    public resource: string;

    constructor(
        resource: string,
        comparison: ComparisonOperator,
        compareto: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.resource = resource;
    }

    public override compile(): object {
        return {
            type: this.type,
            resource: this.resource,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        }
    }
}