import { EntityConditionType } from "../entity/entitycondition.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { BiEntityCondition } from "./bientityconditiontype.ts";

export class ActorCondition extends BiEntityCondition {
    public override type: string = "origins:actor_condition";
    public condition: EntityConditionType | MetaConditionType;

    constructor(
        condition: EntityConditionType | MetaConditionType,
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