/* base power class definition file */

export class Power {
    public id: string;
    public path: string;
    public namespace: string;

    public type: string = "origins:simple";
    public name: string;
    public description: string;
    public hidden: boolean;
    public badges: object[];
    public loadingpriority: number;

    constructor(
        namespacedid: string, // "namespace:path/to/power" no .json
        name?: string, // optional
        description?: string, // optional
        hidden?: boolean, // optional
        badges?: object[], // optional
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
            badge: object,
        ) {
            badges.push(badge);
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