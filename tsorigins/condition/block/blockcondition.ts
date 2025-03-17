import { BlockConditionType } from "./blockconditiontype.ts";

export class BlockCondition extends BlockConditionType {
    public override type: string = "origins:block";
    public block: string;

    constructor(
        block: string,
        inverted?: boolean
    ){
        super(inverted);
        this.block = block;
    }

    public override compile(): object {
        return {
            type: this.type,
            block: this.block,
            inverted: this.inverted
        };
    }
}