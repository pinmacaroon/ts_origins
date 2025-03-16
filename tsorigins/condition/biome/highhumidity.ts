import { BiomeConditionType } from "./biomecondition.ts";

export class HighHumidityCondition extends BiomeConditionType {
    public override type: string = "origins:high_humidity";

    constructor(
        inverted? : boolean
    ) {
        super(inverted);
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        };
    }
}