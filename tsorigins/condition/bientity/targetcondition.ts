import { EntityCondition } from "../entity/entitycondition.ts";
import { MetaCondition } from "../meta/metacondition.ts";
import { BiEntityCondition } from "./bientityconditiontype.ts";

export class TargetCondition extends BiEntityCondition {
    public override type: string = "origins:target_condition";
    public condition: EntityCondition | MetaCondition;

    constructor(
        condition: EntityCondition | MetaCondition,
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