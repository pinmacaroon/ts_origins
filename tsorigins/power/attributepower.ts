import { 
    AttributedAttributeModifier
} from "../attributedattributemodifier.ts";
import { Badge } from "./badge.ts";
import { Power } from "./power.ts";


export class AttributePower extends Power {
    constructor(
        namespacedid: string,
        modifiers: AttributedAttributeModifier[],
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
            loadingpriority
        );
    }
}
