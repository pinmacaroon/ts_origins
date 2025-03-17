import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { BlockConditionType } from "./blockconditiontype.ts";

export class CommandBlockCondition extends BlockConditionType {
    public override type: string = "origins:command";
    public command: string;
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        command: string,
        comparison: ComparisonOperator,
        compareto: number,
        inverted?: boolean
    ){
        super(inverted);
        this.command = command;
        this.comparison = comparison;
        this.compareto = compareto;
    }

    public override compile(): object {
        return {
            type: this.type,
            command: this.command,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        };
    }
}