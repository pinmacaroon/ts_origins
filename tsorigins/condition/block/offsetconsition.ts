import { SpaceVector } from "../../spacevector.ts";
import { MetaCondition } from "../meta/metacondition.ts";
import { BlockConditionType } from "./blockconditiontype.ts";

export class OffsetCondition extends BlockConditionType{
    public override type: string = "origins:offset";
    public condition: BlockConditionType | MetaCondition;
    public xyz: SpaceVector;

    constructor(
        condition: BlockConditionType | MetaCondition,
        xyz?: SpaceVector,
        inverted?: boolean
    ){
        super(inverted);
        this.condition = condition;
        this.xyz = xyz ?? new SpaceVector();
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted,
            condition: this.condition.compile(),
            x: this.xyz.x,
            y: this.xyz.y,
            z: this.xyz.z,
        };
    }
}