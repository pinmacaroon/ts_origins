/* power badge definition file */

export class Badge {
    public type: string = "origins:tooltip";
    private sprite: string;
    private text: string;

    constructor(
        sprite: string,
        text: string,
    ) {
        this.sprite = sprite;
        this.text = text;
    }

    public tostring(): string {
        return `Badge of type ${this.type}: '${this.text}'`;
    }

    public compile(): object {
        return {
            type: this.type,
            sprite: this.sprite,
            text: this.text
        }
    }
}
