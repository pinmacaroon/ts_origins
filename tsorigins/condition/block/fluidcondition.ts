import { FluidConditionType } from "../fluid/fluidcondition.ts";
import { MetaCondition } from "../meta/metacondition.ts";
import { BlockConditionType } from "./blockconditiontype.ts";

export class FluidBlockCondition extends BlockConditionType {
    public override type: string = "origins:fluid";
    public fluidcondition: FluidConditionType | MetaCondition;

    constructor(
        fluidcondition: FluidConditionType | MetaCondition,
        inverted?: boolean
    ){
        super(inverted);
        this.fluidcondition = fluidcondition;
    }

    public override compile(): object {
        return {
            type: this.type,
            fluid_condition: this.fluidcondition.compile(),
            inverted: this.inverted
        };
    }
}