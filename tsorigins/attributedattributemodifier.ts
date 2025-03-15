/* long ah filename you got there fam */

export enum AttributedAttributeModifierOperation {
    addition,
    multiply_base,
    multiply_total
}

export class AttributedAttributeModifier {
    public attribute: string;
    private operation: AttributedAttributeModifierOperation;
}