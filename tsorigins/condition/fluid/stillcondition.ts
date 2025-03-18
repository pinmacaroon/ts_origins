import { FluidConditionType } from "./fluidcondition.ts";

export class StillFluidCondition extends FluidConditionType {
    public override type: string = "origins:still";

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