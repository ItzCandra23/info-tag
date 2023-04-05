"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/bds/command");
const command_2 = require("bdsx/command");
const event_1 = require("bdsx/event");
const launcher_1 = require("bdsx/launcher");
const nativetype_1 = require("bdsx/nativetype");
const __1 = require("..");
const message_1 = require("./utils/message");
command_2.command.register("setinfotag", "Customize player tag.", command_1.CommandPermissionLevel.Operator)
    .overload((p, o) => {
    var _a;
    const actor = (_a = o.getEntity()) === null || _a === void 0 ? void 0 : _a.getNetworkIdentifier().getActor();
    if (actor === null)
        return;
    const send = new message_1.sendMessage(actor);
    if (p.value === "") {
        send.error(`Invalid name!`);
        return;
    }
    send.success(`Set ${__1.InfoTagMain.getTag()}&r to ${p.value}`);
    __1.InfoTagMain.setTag(p.value);
}, {
    value: nativetype_1.CxxString,
});
const interval = setInterval(() => {
    for (const player of launcher_1.bedrockServer.serverInstance.getPlayers()) {
        __1.InfoTagMain.updatePlayerTag(player);
    }
}, __1.InfoTagMain.getTick());
event_1.events.serverStop.on(() => {
    clearInterval(interval);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEwRDtBQUMxRCwwQ0FBdUM7QUFDdkMsc0NBQW9DO0FBQ3BDLDRDQUE4QztBQUM5QyxnREFBNEM7QUFDNUMsMEJBQWlDO0FBQ2pDLDZDQUE4QztBQUU5QyxpQkFBTyxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsZ0NBQXNCLENBQUMsUUFBUSxDQUFDO0tBQ3ZGLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7SUFDZixNQUFNLEtBQUssR0FBRyxNQUFBLENBQUMsQ0FBQyxTQUFTLEVBQUUsMENBQUUsb0JBQW9CLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDL0QsSUFBSSxLQUFLLEtBQUssSUFBSTtRQUFFLE9BQU87SUFDM0IsTUFBTSxJQUFJLEdBQUcsSUFBSSxxQkFBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXBDLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLEVBQUU7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QixPQUFPO0tBQ1Y7SUFFRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sZUFBVyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQzVELGVBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2hDLENBQUMsRUFBRTtJQUNDLEtBQUssRUFBRSxzQkFBUztDQUNuQixDQUFDLENBQUM7QUFFSCxNQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO0lBQzlCLEtBQUssTUFBTSxNQUFNLElBQUksd0JBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUU7UUFDNUQsZUFBVyxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUN2QztBQUNMLENBQUMsRUFBRSxlQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUUxQixjQUFNLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUU7SUFDdEIsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDIn0=