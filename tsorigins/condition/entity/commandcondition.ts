import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class CommandCondition extends EntityConditionType{
    public override type: string = "origins:command";
    public comparison: ComparisonOperator;
    public compareto: number;
    public command: string;

    constructor(
        command: string,
        comparison: ComparisonOperator,
        compareto: number,
        inverted? : boolean
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.command = command;
    }

    public override compile(): object {
        return {
            type: this.type,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted,
            command: this.command
        }
    }
}