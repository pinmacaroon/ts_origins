import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class ScoreboardCondition extends EntityConditionType {
    public override type: string = "origins:scoreboard";
    public comparison: ComparisonOperator;
    public compareto: number;
    public name?: string;
    public objective: string;

    constructor(
        objective: string,
        comparison: ComparisonOperator,
        compareto: number,
        name: string,
        inverted?: boolean,
    ) {
        super(inverted);
        this.comparison = comparison;
        this.compareto = compareto;
        this.objective = objective;
        this.name = name;
    }

    public override compile(): object {
        if (name) {
            return {
                type: this.type,
                objective: this.objective,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto,
                inverted: this.inverted,
                name: this.name
            };
        } else {
            return {
                type: this.type,
                objective: this.objective,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto,
                inverted: this.inverted,
            };
        }
    }
}
