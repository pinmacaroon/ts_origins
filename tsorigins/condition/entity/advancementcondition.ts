import { EntityConditionType } from "./entitycondition.ts";

export class AdvancementCondition extends EntityConditionType {
    public override type: string = "origins:advancement";
    public advancement: string;

    constructor(
        advancement: string,
        inverted? : boolean
    ) {
        super(inverted);
        this.advancement = advancement;
    }

    public override compile(): object {
        return {
            type: this.type,
            advancement: this.advancement,
            inverted: this.inverted
        };
    }
}