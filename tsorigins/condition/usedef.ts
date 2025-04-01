import { MetaConditionType } from "./meta/metacondition.ts";

export class UserDefinedConditionType extends MetaConditionType {
    public override type: string = "custom";
    public override inverted: boolean = false;

    public data: object;

    constructor(
        data: object
    ){
        super(false)
        this.data = data;
    }

    public override compile(): object {
        return this.data;
    }
}