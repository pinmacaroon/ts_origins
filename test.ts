import { Badge } from "./tsorigins/badge.ts";
import { Origin } from "./tsorigins/origin.ts";
import { Power } from "./tsorigins/power.ts";

const power: Power = new Power(
    'pin:hydra/heads',
    'Heads',
    'You have multiple heads!',
    false,
    [
        new Badge('origins:textures/gui/badge/star.png', 'Important!')
    ],
);
const power2: Power = new Power(
    'pin:hydra/immortal',
    'Immortal',
    'You cant die!',
    false
);

const origin: Origin = new Origin(
    'pin:hydra/hydra',
    [power, power2],
    'Hydra',
    'Multi headed snake!!',
    3
);
console.log(JSON.stringify(origin.compile(), null, 4));