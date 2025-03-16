/* base conditon class definition */

export class Condition {
    public type: string = "origins:nothing";
    public inverted: boolean;

    constructor(inverted?: boolean){this.inverted = inverted ?? false;};

    public tostring(): string {
        return `Condition of type ${this.type}`;
    }

    public compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        };
    }
}
