import { BlockConditionType } from "../block/blockconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class BlockCollisonCondition extends EntityConditionType {
    public override type: string = "origins:block_collision";
    public blockcondition: BlockConditionType | MetaConditionType;
    public offsetx: number;
    public offsety: number;
    public offsetz: number;

    constructor(
        blockcondition: BlockConditionType | MetaConditionType,
        offsetx?: number,
        offsety?: number,
        offsetz?: number,
        inverted?: boolean,
    ){
        super(inverted);
        this.blockcondition = blockcondition;
        this.offsetx = offsetx ?? 0;
        this.offsety = offsety ?? 0;
        this.offsetz = offsetz ?? 0;
    }

    public override compile(): object {
        return {
            type: this.type,
            block_condition: this.blockcondition.compile(),
            offset_x: this.offsetx,
            offset_y: this.offsety,
            offset_z: this.offsetz,
            inverted: this.inverted
        };
    }
}