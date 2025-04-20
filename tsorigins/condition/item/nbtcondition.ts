import { ItemConditionType } from "./itemconditiontype.ts";

export class NBTItemCondition extends ItemConditionType{
    public override type: string = "origins:nbt";
    public nbt: string | object;

    constructor(
        nbt: string | object,
        inverted? : boolean
    ) {
        super(inverted);
        this.nbt = nbt;
    }

    public override compile(): object {
        return {
            type: this.type,
            nbt: this.nbt,
            inverted: this.inverted
        }
    }
}