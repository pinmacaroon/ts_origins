/* datapack and related classes def file */

import { Origin } from "./origin.ts";
import { Power } from "./power/power.ts";
import { Function } from "./function.ts";
import { DefaultLayer, Layer } from "./layer.ts";

import fs from "node:fs";

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

    public build(workspacepath: string){
        fs.mkdir(workspacepath, {recursive: true}, function(error){
            if (error) console.log(error.message);
        })
    }
}

export class Mcmeta {
    public description: string;
    public packformat: number;

    constructor(
        description: string,
        packformat: number
    ){
        this.description = description;
        this.packformat = packformat;
    }

    public compile(): object {
        return {
            pack: {
                description: this.description,
                pack_format: this.packformat
            }
        }
    }
}

export const packformat = {
    v1_15_to_v1_16_1: 5,
    v_1_16_2_to_v1_
}