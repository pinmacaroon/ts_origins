import { Badge } from "./tsorigins/power/badge.ts";
import { Origin } from "./tsorigins/origin.ts";
import { Power } from "./tsorigins/power/power.ts";
import { AttributePower } from "./tsorigins/power/attributepower.ts";
import { 
    AttributedAttributeModifier,
    AttributedAttributeModifierOperation
} from "./tsorigins/attributedattributemodifier.ts";
import { DefaultLayer } from "./tsorigins/layer.ts";
import { Datapack, Mcmeta } from "./tsorigins/datapack.ts";

const power: AttributePower = new AttributePower(
    'pin:test/attributepower',
    [
        new AttributedAttributeModifier(
            'generic.max_health',
            AttributedAttributeModifierOperation.addition,
            4
        )
    ],
    true,
    "Attribute power",
    "gives you more hp for example",
    false
);

const origin: Origin = new Origin(
    "pin:hydra/hydra"
);

//console.log(power.compile());

const layer: DefaultLayer = new DefaultLayer([origin]);

const datapack: Datapack = new Datapack(
    new Mcmeta("oriigiiiin", )
);
console.log(layer.compile());