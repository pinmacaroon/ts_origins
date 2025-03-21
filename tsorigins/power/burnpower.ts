import { EntityConditionType } from "../condition/entity/entitycondition.ts";
import { MetaConditionType } from "../condition/meta/metacondition.ts";
import { Badge } from "./badge.ts";
import { Power } from "./power.ts";

export class BurnPower extends Power {;
    public override type: string = "origins:burn";
    public interval: number;
    public burnduration: number;
    public condition: EntityConditionType | MetaConditionType;

    constructor(
        namespacedid: string, // "namespace:path/to/power" no .json
        interval: number,
        burnduration: number,
        condition: EntityConditionType | MetaConditionType,
        name?: string, // optional
        description?: string, // optional
        hidden?: boolean, // optional
        badges?: Badge[], // optional
        loadingpriority?: number, // optional or positive whole number
    ) {
        super(
            namespacedid,
            name,
            description,
            hidden,
            badges,
            loadingpriority
        );
        this.interval = interval;
        this.burnduration = burnduration;
        this.condition = condition;
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
            interval: this.interval,
            burn_duration: this.burnduration,
            condition: this.condition.compile()
        };
        return compiled;
    }
}