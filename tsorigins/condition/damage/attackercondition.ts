import { EntityConditionType } from "../entity/entitycondition.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { DamageConditionType } from "./damagecondition.ts";

export class AttackerCondition extends DamageConditionType{
    public override type: string = "origins:attacker";
    public condition?: EntityConditionType | MetaConditionType;

    constructor(
        condition?: EntityConditionType | MetaConditionType,
        inverted? : boolean
    ) {
        super(inverted);
        this.condition = condition;
    }

    public override compile(): object {
        if(this.condition){
            return {
                type: this.type,
                entity_condition: this.condition.compile(),
                inverted: this.inverted
            }
        } else {
            return {
                type: this.type,
                inverted: this.inverted
            }
        }
    }
}