import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { ItemConditionType } from "./itemconditiontype.ts";

export class EnchantmentItemCondition extends ItemConditionType {
    public override type: string = "origins:enchantment";
    public comparison: ComparisonOperator;
    public compareto: number;
    public enchantment?: string;
    public usemodifications: boolean;

    constructor(
        comparison: ComparisonOperator,
        compareto: number,
        enchantment?: string,
        usemodifications?: boolean,
        inverted?: boolean,
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.enchantment = enchantment;
        this.usemodifications = usemodifications ?? true;
    }

    public override compile(): object {
        if (this.enchantment) {
            return {
                type: this.type,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto,
                enchantment: this.enchantment,
                use_modifications: this.usemodifications,
                inverted: this.inverted,
            };
        } else {
            return {
                type: this.type,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto,
                use_modifications: this.usemodifications,
                inverted: this.inverted,
            };
        }
    }
}
