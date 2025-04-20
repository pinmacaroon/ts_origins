import { ItemConditionType } from "./itemconditiontype.ts";

export class FireproofItemCondition extends ItemConditionType{
    public override type: string = "origins:fireproof";

    constructor(
        inverted? : boolean
    ) {
        super(inverted);
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        }
    }
}