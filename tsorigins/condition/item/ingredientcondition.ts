import { ItemConditionType } from "./itemconditiontype.ts";

export class IngredientItemCondition extends ItemConditionType{
    public override type: string = "origins:ingredient";
    public ingredient: object | object[];

    constructor(
        ingredient: object | object[],
        inverted? : boolean
    ) {
        super(inverted);
        this.ingredient = ingredient;
    }

    public override compile(): object {
        return {
            type: this.type,
            ingredient: this.ingredient,
            inverted: this.inverted
        }
    }
}