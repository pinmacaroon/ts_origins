import { BlockConditionType } from "./blockconditiontype.ts";

export class BlockEntityCondition extends BlockConditionType {
    public override type: string = "origins:block_entity";

    constructor(
        inverted?: boolean
    ) {
        super(inverted);
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        };
    }
}