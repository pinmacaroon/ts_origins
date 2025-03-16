/* function */

export class Function {
    public id: string;
    public path: string;
    public namespace: string;

    public source: string;

    constructor(
        namespacedid: string, // "namespace:path/to/function" no .json
        source: string
    ){
        const namespacedsplit: string[] = namespacedid.split(/:|\//);
        this.namespace = namespacedsplit[0];
        this.id = namespacedsplit[namespacedsplit.length - 1];
        this.path = namespacedid.split(/:/)[1];

        this.source = source;
    }
}