import { Condition } from "../condition/condition.ts";
import { EntityConditionType } from "../condition/entity/entitycondition.ts";
import { MetaConditionType } from "../condition/meta/metacondition.ts";
import { Badge } from "./badge.ts";
import { Power } from "./power.ts";

export class ClimbPower extends Power {
    public override type: string = "origins:climbing";
    public allowholding: boolean;
    public holdcondition: EntityConditionType | Condition;

    constructor(
        namespacedid: string,
        holdcondition: EntityConditionType | MetaConditionType,
        allowholding?: boolean,
        name?: string, 
        description?: string, 
        hidden?: boolean, 
        badges?: Badge[], 
        loadingpriority?: number
    ){
        super(
            namespacedid,
            name,
            description,
            hidden,
            badges,
            loadingpriority
        );
        this.allowholding = allowholding ?? true;
        this.holdcondition = holdcondition;
    }

    public override compile(): object {
        const badges: object[] = [];
        this.badges.forEach(function (
            badge: Badge,
        ) {
            badges.push(badge.compile());
        });
        const compiled = {
            type: this.type,
            name: this.name,
            description: this.description,
            hidden: this.hidden,
            loading_priority: this.loadingpriority,
            badges: this.badges,
            allow_holding: this.allowholding,
            hold_condition: this.holdcondition.compile()
        };
        return compiled;
    }
}