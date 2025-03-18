import { BlockConditionType } from "./blockconditiontype.ts";

export class EmptyFluidCondition extends BlockConditionType {
    public override type: string = "origins:light_blocking";

    constructor(
        inverted?: boolean
    ){
        super(inverted);
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        };
    }
}