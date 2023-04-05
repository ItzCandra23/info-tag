import { ServerPlayer } from "bdsx/bds/player";
import * as fs from "fs";
import * as path from "path";

export type AddonData = [string, number|string];

export namespace InfoTagAddon {
    export function getAddonFiles(): string[] {
        let file_names: string[] = [];

        const folderPath = path.join(__dirname, "..", "addons");
        const files = fs.readdirSync(folderPath);
        files.forEach((file) => {
            if (file.endsWith(".js")) {
                if (!file_names.includes(file)) file_names.push(file);
            }
        });

        return file_names;
    }
    export function getAddons(player: ServerPlayer): AddonData[] {
        const files = getAddonFiles();
        let data: AddonData[] = [];

        files.forEach((file) => {
            const addonPath = path.join(__dirname, "..", "addons", file);
            let addon: AddonData[] = [];

            try {
                addon = require(addonPath).getProcessedTags(player);
            } catch(err) {}

            addon.forEach((v) => {
                if (!data.includes(v)) data.push(v);
            });
        });

        return data;
    }
}
