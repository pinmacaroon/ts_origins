import { MetaActionType } from "./meta/metaactiontype.ts";

export class UserDefinedActionType extends MetaActionType {
    public data: object;
    public override type: string = "custom";

    constructor(
        data: object
    ){
        super();
        this.data = data;
    }

    public override compile(): object {
        return this.data;
    }
}