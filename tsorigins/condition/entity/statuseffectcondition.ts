import { EntityConditionType } from "./entitycondition.ts";

export class StatusEffectCondition extends EntityConditionType {
    public override type: string = "origins:status_effect";
    public effect: string;
    public minamplifier: number;
    public maxamplifier: number;
    public minduration: number;
    public maxduration: number;

    constructor(
        effect: string,
        minamplifier?: number,
        maxamplifier?: number,
        minduration?: number,
        maxduration?: number,
        inverted?: boolean
    ){
        super(inverted);
        this.effect = effect;
        this.minamplifier = minamplifier ?? 0;
        this.maxamplifier = maxamplifier ?? 2147483647;
        this.minduration = minduration ?? -1;
        this.maxduration = maxduration ?? 2147483647;
    }

    public override compile(): object {
        return {
            effect: this.effect,
            min_amplifier: this.minamplifier,
            max_amplifier: this.maxamplifier,
            min_duration: this.minduration,
            max_duration: this.maxduration,
            type: this.type,
            inverted: this.inverted
        };
    }
}