import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { LightType } from "../../enum/lighttype.ts";
import { BlockConditionType } from "./blockconditiontype.ts";

export class LightLevelBlockCondition extends BlockConditionType{
    public override type: string = "origins:blast_resistance";
    public comparison: ComparisonOperator;
    public compareto: number;
    public lighttype?: LightType;
    
    constructor(
        comparison: ComparisonOperator,
        compareto: number,
        lighttype?: LightType,
        inverted?: boolean
    ){
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.lighttype = lighttype;
    }

    public override compile(): object {
        if(this.lighttype) return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted,
            lighttype: LightType[this.lighttype]
        };
        else return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        };
    }
}