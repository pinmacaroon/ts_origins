import { DamageConditionType } from "./damagecondition.ts";

export class TypeDamageCondition extends DamageConditionType{
    public override type: string = "origins:type";
    public damagetype: string;

    constructor(
        damagetype: string,
        inverted? : boolean
    ) {
        super(inverted);
        this.damagetype = damagetype;
    }

    public override compile(): object {
        return {
            type: this.type,
            damage_type: this.damagetype,
            inverted: this.inverted
        }
    }
}