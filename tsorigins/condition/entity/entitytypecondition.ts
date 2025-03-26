import { EntityConditionType } from "./entitycondition.ts";

export class EntityTypeCondition extends EntityConditionType {
    public override type: string = "origins:entity_type";
    public entitytype: string;

    constructor(
        entitytype: string,
        inverted?: boolean
    ){
        super(inverted);
        this.entitytype = entitytype;
    }

    public override compile(): object {
        return {
            type: this.type,
            entity_type: this.entitytype,
            inverted: this.inverted
        };
    }
}