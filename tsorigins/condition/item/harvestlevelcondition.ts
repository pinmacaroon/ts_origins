import { Slot } from "../../enum/slot.ts";
import { ItemConditionType } from "./itemconditiontype.ts";

export class ArmorValueItemCondition extends ItemConditionType{
    public override type: string = "origins:harvest_level";
    public power: string;
    public slot?: Slot;

    constructor(
        power: string,
        slot?: Slot,
        inverted? : boolean
    ) {
        super(inverted);
        this.power = power;
        this.slot = slot;
    }

    public override compile(): object {
        if(this.slot){
            return {
                type: this.type,
                power: this.power,
                slot: Slot[this.slot],
                inverted: this.inverted
            }
        } else {
            return {
                type: this.type,
                power: this.power,
                inverted: this.inverted
            }
        }
    }
}