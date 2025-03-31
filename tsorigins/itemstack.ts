export class ItemStack {
    public item: string;
    public amount?: number;
    public tag?: string;

    constructor(
        item: string,
        amount?: number,
        tag?: string,
    ) {
        this.item = item;
        this.amount = amount;
        this.tag = tag;
    }

    public compile(): object {
        if (this.tag && this.amount) {
            return {
                item: this.item,
                amount: this.amount,
                tag: this.tag
            };
        } else if (this.amount) {
            return {
                item: this.item,
                amount: this.amount
            };
        } else if (this.tag) {
            return {
                item: this.item,
                tag: this.tag
            };
        } else {
            return {
                item: this.item
            };
        }
    }
}
