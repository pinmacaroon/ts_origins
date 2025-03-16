import { Precipitation } from "../../enum/precipitation.ts";
import { BiomeConditionType } from "./biomecondition.ts";

export class PrecipitationCondition extends BiomeConditionType {
    public override type: string = "origins:precipitation";
    public precipitation: Precipitation;

    constructor(
        precipitation: Precipitation,
        inverted?: boolean,
    ) {
        super(inverted);
        this.precipitation = precipitation;
    }

    public override compile(): object {
        return {
            inverted: this.inverted,
            tag: Precipitation[this.precipitation],
            type: this.type
        };
    }
}
