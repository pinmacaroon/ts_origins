import { MetaConditionType } from "../meta/metacondition.ts";
import { BiEntityCondition } from "./bientityconditiontype.ts";

export class BothCondition extends BiEntityCondition {
    public override type: string = "origins:both";
    public condition: BiEntityCondition | MetaConditionType;

    constructor(
        condition: BiEntityCondition | MetaConditionType,
        inverted?: boolean
    ){
        super(inverted);
        this.condition = condition;
    }

    public override compile(): object {
        return {
            type: this.type,
            condition: this.condition.compile(),
            inverted: this.inverted
        };
    }
}