import { EntityConditionType } from "./entitycondition.ts";

export class SubmergedInCondition extends EntityConditionType {
    public override type: string = "origins:submerged_in";
    public fluid: string;

    constructor(
        fluid: string,
        inverted?: boolean
    ){
        super(inverted);
        this.fluid = fluid;
    }

    public override compile(): object {
        return {
            fluid: this.fluid,
            type: this.type,
            inverted: this.inverted
        };
    }
}