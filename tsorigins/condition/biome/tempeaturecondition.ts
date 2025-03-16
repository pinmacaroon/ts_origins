import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { BiomeConditionType } from "./biomecondition.ts";

export class TemperatureCondition extends BiomeConditionType {
    public override type: string = "origins:temperature";
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        comparison: ComparisonOperator,
        compareto: number,
        inverted?: boolean,
    ){
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
        };
    }
}