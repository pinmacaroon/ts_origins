import { EntityConditionType } from "../entity/entitycondition.ts";
import { MetaConditionType } from "../meta/metacondition.ts";
import { DamageConditionType } from "./damagecondition.ts";

export class ProjectileCondition extends DamageConditionType {
    public override type: string = "origins:projectile";
    public projectile?: string;
    public projectilecondition?: EntityConditionType | MetaConditionType;

    constructor(
        projectile?: string,
        projectilecondition?: EntityConditionType | MetaConditionType,
        inverted?: boolean,
    ) {
        super(inverted);
        this.projectile = projectile;
        this.projectilecondition = projectilecondition;
    }

    public override compile(): object {
        if (this.projectile && this.projectilecondition) {
            return {
                type: this.type,
                projectile: this.projectile,
                projectile_condition: this.projectilecondition.compile(),
                inverted: this.inverted,
            };
        } else if (this.projectile) {
            return {
                type: this.type,
                projectile: this.projectile,
                inverted: this.inverted,
            };
        } else if (this.projectilecondition) {
            return {
                type: this.type,
                projectile_condition: this.projectilecondition.compile(),
                inverted: this.inverted,
            };
        } else {
            return {
                type: this.type,
                inverted: this.inverted,
            };
        }
    }
}
