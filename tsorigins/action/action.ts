export class Action {
    public type: string = "origins:nothing";

    constructor(){

    }

    public compile(): object {
        return {
            type: this.type
        };
    }

    public tostring(): string {
        return `Action of type ${this.type}.`;
    }
}