import { EntityConditionType } from "./entitycondition.ts";

export class NBTEntityCondition extends EntityConditionType {
    public override type: string = "origins:nbt";
    public nbt: string;

    constructor(
        nbt: string,
        inverted?: boolean
    ){
        super(inverted);
        this.nbt = nbt;
    }

    public override compile(): object {
        return {
            type: this.type,
            nbt: this.nbt,
            inverted: this.inverted
        };
    }
}