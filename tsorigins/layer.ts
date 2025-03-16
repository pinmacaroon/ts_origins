/* layer class */
// TODO do normal layers pretty please :3

import { Origin } from "./origin.ts";

export class Layer {
    public namespace: string;
    public path: string;
    public origins: Origin[];
    public id: string;

    constructor(
        namespacedid: string,
        origins: Origin[],
    ) {
        const namespacedsplit: string[] = namespacedid.split(/:|\//);
        this.namespace = namespacedsplit[0];
        this.id = namespacedsplit[namespacedsplit.length - 1];
        this.path = namespacedid.split(/:/)[1];

        this.origins = origins;
    }

    public compile(): object {
        var pathlist: string[] = [];
        this.origins.forEach(function(
            origin: Origin
        ){
            pathlist.push(`${origin.namespace}:${origin.path}`);
        })
        return {
            replace: false,
            origins: pathlist
        }
    }

}

export class DefaultLayer extends Layer {
    public override origins: Origin[];
    public namespacedid: string = "origins:origin";
    public override namespace: string = "origins";
    public override path: string = "origin";

    constructor(
        origins: Origin[],
    ) {
        super(
            "origins:origin",
            origins
        );
        this.origins = origins;
    }
}
