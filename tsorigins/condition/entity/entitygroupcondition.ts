import { EntityGroup } from "../../enum/entitygroup.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class EntityGroupCondition extends EntityConditionType {
    public override type: string = "origins:entity_group";
    public group: EntityGroup;

    constructor(
        group: EntityGroup,
        inverted?: boolean
    ){
        super(inverted);
        this.group = group;
    }

    public override compile(): object {
        return {
            type: this.type,
            group: EntityGroup[this.group],
            inverted: this.inverted
        };
    }
}