import * as path from "path";
import * as fs from "fs";
import { ServerPlayer } from "bdsx/bds/player";
import { InfoTagAddon } from "./src/addon";
import { bedrockServer } from "bdsx/launcher";
import { send } from "./src/utils/message";
import { events } from "bdsx/event";

let config: {
    tag: string;
    tick: number;
} = {
    tag: "&c{health}/{max_health} &8|&r {colorping}ms",
    tick: 500,
};

const configPath = path.join(__dirname, "config.json");

try {
    config = require(configPath);
} catch(err) {}

export namespace InfoTagMain {

    export function setTag(value: string): void {
        config.tag=value;
    }

    export function setTick(tick: number): void {
        if (tick < 0) config.tick=0;
        config.tick=tick;
    }

    export function getTag(): string {
        return config.tag;
    }

    export function getTick(): number {
        if (config.tick < 0) return 0;
        return config.tick;
    }

    export function getPlayerTag(player: ServerPlayer): string {
        let results: string = getTag();

        for (let [i, addon] of InfoTagAddon.getAddons(player).entries()) {
            results=results.replace(new RegExp(addon[0], "g"), `${addon[1]}`);
        }

        return results;
    }

    export function updatePlayerTag(player: ServerPlayer): void {
        player.setScoreTag(getPlayerTag(player));
    }

    export function updatePlayersTag(): void {
        for (const player of bedrockServer.serverInstance.getPlayers()) {
            if (!player.isPlayer()) return;
            updatePlayerTag(player);
        }
    }

    export function save(message: boolean = false): void {
        fs.writeFile(configPath, JSON.stringify(config, null, 2), "utf8", (err) => {
            if (message) {
                if (err) {
                    send.error(`config.json ${err}`);
                    throw err;
                }
                else send.success(`config.json Saved!`);
            }
        });
    }
}

events.serverOpen.on(() => {
    require("./src");
    send.success("Started!");
});

events.serverClose.on(() => {
    InfoTagMain.save(true);
});