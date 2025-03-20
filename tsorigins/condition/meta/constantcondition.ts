import { MetaCondition } from "./metacondition.ts";

export class ConstantCondition extends MetaCondition {
    public override type: string = "origins:constant";
    public value: boolean;

    constructor(
        value: boolean
    ){
        super();
        this.value = value;
    }

    public override compile(): object {
        return {
            type: this.type,
            value: this.value
        };
    }
}