/* long ah filename you got there gal */

export enum AttributedAttributeModifierOperation {
    addition,
    multiply_base,
    multiply_total
}

export class AttributedAttributeModifier {
    public attribute: string;
    private operation: AttributedAttributeModifierOperation;
    private value: number;
    private name: string;

    constructor(
        attribute: string,
        operation: AttributedAttributeModifierOperation,
        value: number,
        name?: string,
    ){
        this.attribute = attribute;
        this.operation = operation;
        this.value = value;
        this.name = name ?? `${this.attribute} to ${this.value}`;
    }
}