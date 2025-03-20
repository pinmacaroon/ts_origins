import { Condition } from "../condition.ts";
import { MetaCondition } from "./metacondition.ts";

export class OrCondition extends MetaCondition {
    public override type: string = "origins:or";
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