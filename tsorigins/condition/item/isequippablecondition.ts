import { Slot } from "../../enum/slot.ts";
import { ItemConditionType } from "./itemconditiontype.ts";

export class IsEquippableItemCondition extends ItemConditionType {
    public override type: string = "origins:is_equippable";
    public equipmentslot?: Slot;

    constructor(
        equipmentslot?: Slot,
        inverted?: boolean,
    ) {
        super(inverted);
        this.equipmentslot = equipmentslot;
    }

    public override compile(): object {
        if (this.equipmentslot) {
            return {
                type: this.type,
                equipment_slot: Slot[this.equipmentslot],
                inverted: this.inverted,
            };
        } else {
            return {
                type: this.type,
                inverted: this.inverted,
            };
        }
    }
}
