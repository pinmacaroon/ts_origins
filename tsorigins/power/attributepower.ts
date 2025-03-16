import { 
    AttributedAttributeModifier
} from "../attributedattributemodifier.ts";
import { Badge } from "./badge.ts";
import { Power } from "./power.ts";

export class AttributePower extends Power {
    public override type: string = "origins:attribute";
    public modifiers: AttributedAttributeModifier[];
    public updatehealth: boolean;

    constructor(
        namespacedid: string,
        modifiers: AttributedAttributeModifier[],
        updatehealth?: boolean,
        name?: string,
        description?: string,
        hidden?: boolean,
        badges?: Badge[],
        loadingpriority?: number,
    ) {
        super(
            namespacedid,
            name,
            description,
            hidden,
            badges,
            loadingpriority,
        );
        this.modifiers = modifiers;
        this.updatehealth = updatehealth ?? true;
    }

    public override compile(): object {
        const badges: object[] = [];
        this.badges.forEach(function (
            badge: Badge,
        ) {
            badges.push(badge.compile());
        });
        const modifiers: object[] = [];
        this.modifiers.forEach(function (
            modifier: AttributedAttributeModifier,
        ) {
            modifiers.push(modifier.compile());
        });
        const compiled = {
            type: this.type,
            name: this.name,
            description: this.description,
            hidden: this.hidden,
            loading_priority: this.loadingpriority,
            badges: this.badges,
            modifiers: modifiers,
            updatehealth: this.updatehealth
        };
        return compiled;
    }
}
