export class Mcmeta {
    public description: string;
    public packformat: number;

    constructor(
        description: string,
        packformat: number,
    ) {
        this.description = description;
        this.packformat = packformat;
    }

    public compile(): object {
        return {
            pack: {
                description: this.description,
                pack_format: this.packformat,
            },
        };
    }
}
