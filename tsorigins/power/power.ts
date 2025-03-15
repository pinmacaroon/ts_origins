/* base power class definition file */
import { 
    AttributedAttributeModifier
} from "../attributedattributemodifier.ts";
import { Badge } from "./badge.ts";

export class Power {
    public id: string;
    public path: string;
    public namespace: string;

    public type: string = "origins:simple";
    public name: string;
    private description: string;
    private hidden: boolean;
    private badges: Badge[];
    private loadingpriority: number;

    constructor(
        namespacedid: string, // "namespace:path/to/power" no .json
        name?: string, // optional
        description?: string, // optional
        hidden?: boolean, // optional
        badges?: Badge[], // optional
        loadingpriority?: number, // optional or positive whole number
    ) {
        const namespacedsplit: string[] = namespacedid.split(/:|\//);
        this.namespace = namespacedsplit[0];
        this.id = namespacedsplit[namespacedsplit.length - 1];
        this.path = namespacedid.split(/:/)[1];

        this.name = name ?? "";
        this.description = description ?? "";
        this.hidden = hidden ?? false;
        this.badges = badges ?? [];
        this.loadingpriority = loadingpriority ?? 0;
    }

    public tostring(): string {
        return `Power of type ${this.type}: '${this.id}' in '${this.namespace}:${this.path}'`;
    }

    public compile(): object {
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
        };
        return compiled;
    }
}