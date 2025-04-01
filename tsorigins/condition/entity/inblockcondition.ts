import { BlockConditionType } from "../block/blockconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class InBlockCondition extends EntityConditionType{
    public override type: string = "origins:health";
    public blockcondition: BlockConditionType | MetaConditionType;

    constructor(
        blockcondition: BlockConditionType | MetaConditionType,
        inverted? : boolean
    ) {
        super(inverted);
        this.blockcondition = blockcondition;
    }

    public override compile(): object {
        return {
            type: this.type,
            block_condition: this.blockcondition,
            inverted: this.inverted
        }
    }
}