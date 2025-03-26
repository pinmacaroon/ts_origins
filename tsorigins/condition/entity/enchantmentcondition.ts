import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class EnchantmentEntityCondition extends EntityConditionType {
    public override type: string = "origins:enchantment";
    public comparison: ComparisonOperator;
    public compareto: number;
    public enchantment: string;
    public calculation: string;

    constructor(
        enchantment: string,
        comparison: ComparisonOperator,
        compareto: number,
        calculation?: string,
        inverted?: boolean,
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.enchantment = enchantment;
        this.calculation = calculation ?? "sum";
    }

    public override compile(): object {
        return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            calculation: this.calculation,
            enchantment: this.enchantment,
            inverted: this.inverted,
        };
    }
}
