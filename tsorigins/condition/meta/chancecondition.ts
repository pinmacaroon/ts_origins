import { MetaConditionType } from "./metacondition.ts";

export class ChanceCondition extends MetaConditionType {
    public override type: string = "origins:chance";
    public chance: number;

    constructor(
        chance: number,
        inverted?: boolean
    ){
        super(inverted);
        this.chance = chance;
    }

    public override compile(): object {
        return {
            type: this.type,
            chance: this.chance,
            inverted: this.inverted
        };
    }
}