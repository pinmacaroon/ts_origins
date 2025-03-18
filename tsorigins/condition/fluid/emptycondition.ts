import { FluidConditionType } from "./fluidcondition.ts";

export class EmptyFluidCondition extends FluidConditionType {
    public override type: string = "origins:empty";

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