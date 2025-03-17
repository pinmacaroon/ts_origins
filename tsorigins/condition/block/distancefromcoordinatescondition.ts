import { ComparisonOperator } from "../../enum/comparisonoperator.ts";
import { Reference } from "../../enum/reference.ts";
import { Shape } from "../../enum/shape.ts";
import { Space } from "../../enum/space.ts";
import { SpaceVector } from "../../spacevector.ts";
import { BlockConditionType } from "./blockconditiontype.ts";

export class DistanceFromCoordinates extends BlockConditionType {
    public reference: Reference;
    public offset: SpaceVector;
    public ignorex: boolean;
    public ignorey: boolean;
    public ignorez: boolean;
    public shape: Shape;
    public scalereferencetodimension: boolean;
    public resultonthewrongdimension?: boolean;
    public roundtodigit?: number;
    public comparison: ComparisonOperator;
    public compareto: number;
    public override type: string = "origins:distance_from_coordinates";

    constructor(
        comparison: ComparisonOperator,
        compareto: number,
        inverted?: boolean,
        reference?: Reference,
        offset?: SpaceVector,
        ignorex?: boolean,
        ignorey?: boolean,
        ignorez?: boolean,
        shape?: Shape,
        scalereferencetodimension?: boolean,
        resultonthewrongdimension?: boolean,
        roundtodigit?: number,
    ){
        super(inverted);
        this.reference = reference ?? Reference.world_origin;
        this.offset = offset ?? new SpaceVector(0, 0, 0, Space.local);
        this.ignorex = ignorex ?? false;
        this.ignorey = ignorey ?? false;
        this.ignorez = ignorez ?? false;
        this.shape = shape ?? Shape.cube;
        this.scalereferencetodimension = scalereferencetodimension ?? true;
        this.resultonthewrongdimension = resultonthewrongdimension;
        this.roundtodigit = roundtodigit;
        this.comparison = comparison;
        this.compareto = compareto;
    }

    public override compile(): object {
        if(this.resultonthewrongdimension && this.roundtodigit){
            return {
                reference: this.reference,
                offset: {
                    x: this.offset.x,
                    y: this.offset.y,
                    z: this.offset.z,
                },
                ignorex: this.ignorex,
                ignorey: this.ignorey,
                ignorez: this.ignorez,
                shape: Shape[this.shape],
                scale_reference_to_dimension: this.scalereferencetodimension,
                result_on_the_wrong_dimension: this.resultonthewrongdimension,
                round_to_digit: this.roundtodigit,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto
            };
        } else if(this.resultonthewrongdimension){
            return {
                reference: this.reference,
                offset: {
                    x: this.offset.x,
                    y: this.offset.y,
                    z: this.offset.z,
                },
                ignorex: this.ignorex,
                ignorey: this.ignorey,
                ignorez: this.ignorez,
                shape: Shape[this.shape],
                scale_reference_to_dimension: this.scalereferencetodimension,
                result_on_the_wrong_dimension: this.resultonthewrongdimension,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto
            };
        } else if(this.roundtodigit){
            return {
                reference: this.reference,
                offset: {
                    x: this.offset.x,
                    y: this.offset.y,
                    z: this.offset.z,
                },
                ignorex: this.ignorex,
                ignorey: this.ignorey,
                ignorez: this.ignorez,
                shape: Shape[this.shape],
                scale_reference_to_dimension: this.scalereferencetodimension,
                round_to_digit: this.roundtodigit,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto
            };
        } else {
            return {
                reference: this.reference,
                offset: {
                    x: this.offset.x,
                    y: this.offset.y,
                    z: this.offset.z,
                },
                ignorex: this.ignorex,
                ignorey: this.ignorey,
                ignorez: this.ignorez,
                shape: Shape[this.shape],
                scale_reference_to_dimension: this.scalereferencetodimension,
                comparison: ComparisonOperator[this.comparison],
                compare_to: this.compareto
            };
        }
    }
}