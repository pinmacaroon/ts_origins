import { BlockConditionType } from "../block/blockconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class OnBlockCondition extends EntityConditionType {
    public override type: string = "origins:on_block";
    public blockcondition: BlockConditionType | MetaConditionType;

    constructor(
        blockcondition: BlockConditionType | MetaConditionType,
        inverted?: boolean
    ){
        super(inverted);
        this.blockcondition = blockcondition;
    }

    public override compile(): object {
        return {
            type: this.type,
            block_condition: this.blockcondition.compile(),
            inverted: this.inverted
        };
    }
}