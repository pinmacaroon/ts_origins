import { EquipmentSlot } from "../../enum/equipmentslot.ts";
import { ItemConditionType } from "../item/itemconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class EquippedItemCondition extends EntityConditionType {
    public override type: string = "origins:equipped_item";
    public equipmentslot: EquipmentSlot;
    public itemcondition: ItemConditionType | MetaConditionType;

    constructor(
        equipmentslot: EquipmentSlot,
        itemcondition: ItemConditionType | MetaConditionType,
        inverted?: boolean
    ){
        super(inverted);
        this.equipmentslot = equipmentslot;
        this.itemcondition = itemcondition;
    }

    public override compile(): object {
        return {
            type: this.type,
            equipment_slot: EquipmentSlot[this.equipmentslot],
            item_condition: this.itemcondition.compile(),
            inverted: this.inverted
        };
    }
}