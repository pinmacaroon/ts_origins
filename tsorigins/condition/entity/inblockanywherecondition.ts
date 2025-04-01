import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { BlockConditionType } from "../block/blockconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class InBlockAnywhereCondition extends EntityConditionType{
    public override type: string = "origins:health";
    public comparison: ComparisonOperator;
    public compareto: number;
    public blockcondition: BlockConditionType | MetaConditionType;

    constructor(
        blockcondition: BlockConditionType | MetaConditionType,
        comparison?: ComparisonOperator,
        compareto?: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison ?? ComparisonOperator[">="];
        this.compareto = compareto ?? 1;
        this.blockcondition = blockcondition;
    }

    public override compile(): object {
        return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted,
            block_condition: this.blockcondition.compile()
        }
    }
}