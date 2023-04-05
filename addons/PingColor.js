"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProcessedTags = void 0;
const launcher_1 = require("bdsx/launcher");
function getProcessedTags(player) {
    const ping = launcher_1.bedrockServer.rakPeer.GetAveragePing(player.getNetworkIdentifier().address);
    let color = "§2";
    if (ping > 20)
        color = "§a";
    if (ping > 80)
        color = "§e";
    if (ping > 300)
        color = "§c";
    if (ping > 700)
        color = "§4";
    return [["{colorping}", `${color}${ping}`]];
}
exports.getProcessedTags = getProcessedTags;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiUGluZ0NvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDRDQUE4QztBQUc5QyxTQUFnQixnQkFBZ0IsQ0FBQyxNQUFvQjtJQUNqRCxNQUFNLElBQUksR0FBRyx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekYsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBRWpCLElBQUksSUFBSSxHQUFHLEVBQUU7UUFBRSxLQUFLLEdBQUMsSUFBSSxDQUFDO0lBQzFCLElBQUksSUFBSSxHQUFHLEVBQUU7UUFBRSxLQUFLLEdBQUMsSUFBSSxDQUFDO0lBQzFCLElBQUksSUFBSSxHQUFHLEdBQUc7UUFBRSxLQUFLLEdBQUMsSUFBSSxDQUFDO0lBQzNCLElBQUksSUFBSSxHQUFHLEdBQUc7UUFBRSxLQUFLLEdBQUMsSUFBSSxDQUFDO0lBRTNCLE9BQU8sQ0FBRSxDQUFDLGFBQWEsRUFBRSxHQUFHLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFFLENBQUM7QUFDbEQsQ0FBQztBQVZELDRDQVVDIn0=