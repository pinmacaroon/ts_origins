import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { Shape } from "../../enum/shape.ts";
import { BlockConditionType } from "../block/blockconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";

export class BlockInRadiusCondition extends EntityConditionType {
    public override type: string = "origins:block_in_radius";
    public blockcondition: MetaConditionType | BlockConditionType;
    public radius: number;
    public shape: Shape;
    public comparison: ComparisonOperator;
    public compareto: number;

    constructor(
        blockcondition: BlockConditionType | MetaConditionType,
        radius: number,
        shape?: Shape,
        comparison?: ComparisonOperator,
        compareto?: number,
        inverted?: boolean
    ){
        super(inverted);
        this.blockcondition = blockcondition;
        this.radius = radius;
        this.shape = shape ?? Shape.cube;
        this.comparison = comparison ?? ComparisonOperator[">="];
        this.compareto = compareto ?? 1;
    }

    public override compile(): object {
        return {
            type: this.type,
            block_condition: this.blockcondition.compile(),
            radius: this.radius,
            shape: this.shape,
            comparison: ComparisonOperator[this.comparison],
            compare_to: this.compareto,
            inverted: this.inverted
        };
    }
}