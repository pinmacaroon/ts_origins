import { DamageNames } from "../../enum/damagename.ts";
import { DamageConditionType } from "./damagecondition.ts";

export class NameDamageCondition extends DamageConditionType{
    public override type: string = "origins:name";
    public name: DamageNames;

    constructor(
        name: DamageNames,
        inverted? : boolean
    ) {
        super(inverted);
        this.name = name;
    }

    public override compile(): object {
        return {
            type: this.type,
            name: DamageNames[this.name],
            inverted: this.inverted
        }
    }
}