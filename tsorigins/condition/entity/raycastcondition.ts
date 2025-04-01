import { FluidHandling } from "../../enum/fluidhandling.ts";
import { ShapeType } from "../../enum/shapetype.ts";
import { Space } from "../../enum/space.ts";
import { SpaceVector } from "../../spacevector.ts";
import { BiEntityCondition } from "../bientity/bientityconditiontype.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { EntityConditionType } from "./entitycondition.ts";
/**
# TODO
*/
export class RaycastCondition extends EntityConditionType {
    public override type: string = "origins:raycast";
    public distance: number;
    public block: boolean;
    public entity: boolean;
    public shapetype: ShapeType;
    public fluidhandling: FluidHandling;
    public space: Space;

    public direction?: SpaceVector;
    public match_bientity_condition?: BiEntityCondition | MetaConditionType;
    public hit_bientity_condition?: BiEntityCondition | MetaConditionType;

    constructor(
        distance: number,
        block: boolean,
        entity: boolean,
        shapetype: ShapeType,
        fluidhandling: FluidHandling,
        space: Space,
        inverted?: boolean
    ){
        super(inverted);
        this.distance = distance;
        this.block = block;
        this.entity = entity;
        this.shapetype = shapetype;
        this.fluidhandling = fluidhandling;
        this.space = space;
    }

    public override compile(): object {
        return {
            type: this.type,
            inverted: this.inverted
        };
    }
}