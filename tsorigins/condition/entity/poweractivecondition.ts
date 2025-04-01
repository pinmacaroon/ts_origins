import { EntityConditionType } from "./entitycondition.ts";

export class OnFireCondition extends EntityConditionType {
    public override type: string = "origins:on_fire";
    public power: string;

    constructor(
        power: string,
        inverted?: boolean
    ){
        super(inverted);
        this.power = power;
    }

    public override compile(): object {
        return {
            type: this.type,
            power: this.power,
            inverted: this.inverted
        };
    }
}