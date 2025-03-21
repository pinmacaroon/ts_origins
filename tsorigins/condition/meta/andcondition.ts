import { Condition } from "../condition.ts";
import { MetaConditionType } from "./metacondition.ts";

export class AndCondition extends MetaConditionType {
    public override type: string = "origins:and";
    public conditions: Condition[];

    constructor(
        conditions: Condition[],
        inverted?: boolean
    ){
        super(inverted);
        this.conditions = conditions;
    }

    public override compile(): object {
        const compconds: object[] = [];
        for(const item in this.conditions){
            compconds.push(this.conditions[item].compile());
        }
        return {
            type: this.type,
            conditions: compconds,
            inverted: this.inverted
        }
    }
}