/* origin class definiton file*/
// TODO add upgrades https://origins.readthedocs.io/en/latest/json/upgrade/
/* TODO add ItemStack 
    https://origins.readthedocs.io/en/latest/types/data_types/item_stack/ */

import { Power } from "./power/power.ts";

export class Origin {
    public id: string;
    public path: string;
    public namespace: string;

    private name: string;
    private description: string;
    private impact: number;
    private icon: string; // TODO make an ItemStack class
    private unchoosable: boolean;
    public order: number;
    private loadingpriority: number;

    public powers: Power[];

    constructor(
        namespacedid: string, // "namespace:path/to/origin" no .json
        powers?: Power[], // list of Power or desendants
        name?: string, // optional
        description?: string, // optional
        impact?: number, // must be 0, 1, 2, 3 or optional,
        icon?: string, // icon item, soon to use ItemStack class
        unchoosable?: boolean, // optional
        order?: number, // optional or positive whole number
        loadingpriority?: number, // optional or positive whole number
    ) {
        const namespacedsplit: string[] = namespacedid.split(/:|\//);
        this.namespace = namespacedsplit[0];
        this.id = namespacedsplit[namespacedsplit.length - 1];
        this.path = namespacedid.split(/:/)[1];
        
        this.powers = powers ?? [];
        this.name = name ?? "";
        this.description = description ?? "";
        this.impact = impact ?? 0;
        this.icon = icon ?? "minecraft:air";
        this.unchoosable = unchoosable ?? false;
        this.order = order ?? 6969;
        this.loadingpriority = loadingpriority ?? 0;
    }

    public tostring(): string {
        return `Origin: '${this.id}' in '${this.namespace}:${this.path}'`;
    }

    public devpowerlist(): string {
        let list: string = `${this.id} has ${this.powers.length} powers:`
        this.powers.forEach(function(
            power: Power,
            index: number,
        ){
            list += `\n    ${index}: '${power.id}' of type ${power.type}`;
        })
        return list;
    }

    public compile(): object {
        const powerlist: string[] = [];
        this.powers.forEach(function(
            power: Power
        ){
            powerlist.push(`${power.namespace}:${power.path}`);
        })
        const compiled: object = {
            powers: powerlist,
            icon: {
                item: this.icon
            },
            unchoosable: this.unchoosable,
            order: this.order,
            impact: this.impact,
            name: this.name,
            description: this.description,
            upgrades: [], // TODO add upgrades
            loading_priority: this.loadingpriority
        };
        return compiled;
    }
}
