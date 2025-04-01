import { Power } from "./power.ts";

export class UserDefinedPowerType extends Power {
    public override type: string = "custom";

    public data: object;

    constructor(
        namespacedid: string,
        data: object
    ){
        super(namespacedid);
        this.data = data;
    }

    public override compile(): object {
        return this.data;
    }
}