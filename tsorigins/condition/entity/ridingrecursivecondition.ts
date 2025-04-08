import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { BiEntityCondition } from "../bientity/bientityconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class RidingRecursiveCondition extends EntityConditionType {
    public override type: string = "origins:riding_recursive";
    public bientitycondition: BiEntityCondition | MetaConditionType;
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        bientitycondition: BiEntityCondition | MetaConditionType,
        comparison?: ComparisonOperator,
        compareto?: number,
        inverted?: boolean
    ){
        super(inverted);
        this.bientitycondition = bientitycondition;
        this.comparison = comparison ?? ComparisonOperator[">="];
        this.compareto = compareto ?? 1;
    }

    public override compile(): object {
        return {
            type: this.type,
            bientity_condition: this.bientitycondition.compile(),
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        };
    }
}