import { ServerPlayer } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";
import { AddonData } from "../src/addon";

export function getProcessedTags(player: ServerPlayer): AddonData[] {
    const ping = bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address);
    let color = "§2";

    if (ping > 20) color="§a";
    if (ping > 80) color="§e";
    if (ping > 300) color="§c";
    if (ping > 700) color="§4";

    return [ ["{colorping}", `${color}${ping}`] ];
}