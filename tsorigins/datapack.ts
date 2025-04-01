/* datapack and related classes def file */

import { Origin } from "./origin.ts";
import { Power } from "./power/power.ts";
import { Function } from "./function.ts";
import { Layer } from "./layer.ts";

import fs from "node:fs";
import fsextra from "npm:fs-extra";
import { Mcmeta } from "./Mcmeta.ts";

export class Datapack {
    public mcmeta: Mcmeta;
    public origins: Origin[];
    public powers: Power[];
    public functions: Function[];
    public layers: Layer[];

    constructor(
        mcmeta: Mcmeta,
        origins: Origin[],
        powers: Power[],
        functions: Function[],
        layers: Layer[]
    ){
        this.mcmeta = mcmeta;
        this.origins = origins;
        this.powers = powers;
        this.functions = functions;
        this.layers = layers;
    }

    public build(workspacepath: string, indent?: number){
        indent = indent ?? 0;
        fs.mkdirSync(workspacepath, {recursive: true});
        this.origins.forEach(function(
            origin: Origin
        ){
            fsextra.outputFileSync(
                `${workspacepath}data/${origin.namespace}/origins/${origin.path}.json`,
                JSON.stringify(origin.compile(), null, indent)
            );
        });
        
        this.powers.forEach(function(
            power: Power
        ){
            fsextra.outputFileSync(
                `${workspacepath}data/${power.namespace}/powers/${power.path}.json`,
                JSON.stringify(power.compile(), null, indent)
            );
        });
        
        this.functions.forEach(function(
            funct: Function
        ){
            fsextra.outputFileSync(
                `${workspacepath}data/${funct.namespace}/functions/${funct.path}.mcfunction`,
                funct.source
            );
        });
        
        this.layers.forEach(function(
            layer: Layer
        ){
            fsextra.outputFileSync(
                `${workspacepath}data/${layer.namespace}/origin_layers/${layer.path}.json`,
                JSON.stringify(layer.compile(), null, indent)
            );
        });

        fsextra.outputFileSync(
            `${workspacepath}pack.mcmeta`,
            JSON.stringify(this.mcmeta.compile(), null, indent)
        );
    }
}

/* TODO finish */
export const packformat = {
    v1_15_to_v1_16_1: 5,
    v1_16_2_to_v1_16_5: 6,
    v1_17_to_v1_17_1: 7,

}