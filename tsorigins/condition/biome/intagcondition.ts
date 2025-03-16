import { BiomeConditionType } from "./biomecondition.ts";

export class InTagBiomeCondition extends BiomeConditionType {
    public override type: string = "origins:in_tag";
    public tag: string;

    constructor(
        tag: string,
        inverted?: boolean
    ) {
        super(inverted);
        this.tag = tag;
    }

    public override compile(): object {
        return {
            type: this.type,
            tag: this.tag,
            inverted: this.inverted
        };
    }
}
