import { PlayerAbility } from "../../enum/playerability.ts";
import { EntityCondition } from "./entitycondition.ts";

export class AbilityCondition extends EntityCondition {
    public override type: string = "origins:ability";
    public ability: PlayerAbility;

    constructor(
        ability: PlayerAbility,
        inverted? : boolean
    ) {
        super(inverted);
        this.ability = ability;
    }

    public override compile(): object {
        return {
            type: this.type,
            ability: PlayerAbility[this.ability],
            inverted: this.inverted
        };
    }
}