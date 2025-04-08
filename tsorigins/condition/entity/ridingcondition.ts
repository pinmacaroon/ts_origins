import { BiEntityCondition } from "../bientity/bientityconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class RidingCondition extends EntityConditionType {
    public override type: string = "origins:riding";
    public bientitycondition?: BiEntityCondition | MetaConditionType;

    constructor(
        bientitycondition?: BiEntityCondition | MetaConditionType,
        inverted?: boolean,
    ) {
        super(inverted);
        this.bientitycondition = bientitycondition;
    }

    public override compile(): object {
        if (this.bientitycondition) {
            return {
                type: this.type,
                bientity_condition: this.bientitycondition.compile(),
                inverted: this.inverted,
            };
        } else {
            return {
                type: this.type,
                inverted: this.inverted,
            };
        }
    }
}