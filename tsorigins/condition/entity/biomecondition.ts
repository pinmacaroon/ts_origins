import { BiomeConditionType } from "../biome/biomecondition.ts";
import { EntityCondition as EntityConditionType } from "./entitycondition.ts";

export class BiomeCondition extends EntityConditionType {
    public override type: string = "origins:biome";
    public biomes?: string[];
    public condition?: BiomeConditionType;

    constructor(
        biomes?: string[],
        condition?: BiomeCondition,
        inverted? : boolean
    ) {
        super(inverted);
        this.biomes = biomes;
        this.condition = condition;
    }

    public override compile(): object {
        if(this.condition) return {
            type: this.type,
            condition: this.condition.compile(),
            inverted: this.inverted
        };
        else if(this.biomes) return {
            type: this.type,
            biomes: this.biomes,
            inverted: this.inverted
        };
        else return {
            type: this.type,
            inverted: this.inverted
        };
    }
}
