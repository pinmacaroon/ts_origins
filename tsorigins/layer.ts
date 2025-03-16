/* layer class */
// TODO do normal layers pretty please :3

import { Origin } from "./origin.ts";

export class Layer {

}

export class DefaultLayer extends Layer {
    public origins: Origin[];
    public namespacedid: string = "origins:origins";

    constructor(
        origins: Origin[],
    ) {
        super();
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
