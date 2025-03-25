import { EntityConditionType } from "./entitycondition.ts";

export class ElytraFlightPossibleCondition extends EntityConditionType {
    public override type: string = "origins:elytra_flight_possible";
    public checkstate: boolean;
    public checkabilities: boolean;

    constructor(
        checkstate?: boolean,
        checkabilities?: boolean,
        inverted?: boolean
    ){
        super(inverted);
        this.checkabilities = checkabilities ?? true;
        this.checkstate = checkstate ?? false;
    }

    public override compile(): object {
        return {
            type: this.type,
            check_state: this.checkstate,
            check_abilities: this.checkabilities,
            inverted: this.inverted
        };
    }
}