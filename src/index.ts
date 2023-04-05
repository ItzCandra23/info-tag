import { CommandPermissionLevel } from "bdsx/bds/command";
import { command } from "bdsx/command";
import { events } from "bdsx/event";
import { bedrockServer } from "bdsx/launcher";
import { CxxString } from "bdsx/nativetype";
import { InfoTagMain } from "..";
import { sendMessage } from "./utils/message";

command.register("setinfotag", "Customize player tag.", CommandPermissionLevel.Operator)
.overload((p, o) => {
    const actor = o.getEntity()?.getNetworkIdentifier().getActor();
    if (actor === null) return;
    const send = new sendMessage(actor);

    if (p.value === "") {
        send.error(`Invalid name!`);
        return;
    }

    send.success(`Set ${InfoTagMain.getTag()}&r to ${p.value}`);
    InfoTagMain.setTag(p.value);
}, {
    value: CxxString,
});

const interval = setInterval(() => {
    for (const player of bedrockServer.serverInstance.getPlayers()) {
        InfoTagMain.updatePlayerTag(player);
    }
}, InfoTagMain.getTick());

events.serverStop.on(() => {
    clearInterval(interval);
});