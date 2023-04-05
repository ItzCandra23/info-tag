"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoTagMain = void 0;
const path = require("path");
const fs = require("fs");
const addon_1 = require("./src/addon");
const launcher_1 = require("bdsx/launcher");
const message_1 = require("./src/utils/message");
const event_1 = require("bdsx/event");
let config = {
    tag: "&c{health}/{max_health} &8|&r {colorping}ms",
    tick: 500,
};
const configPath = path.join(__dirname, "config.json");
try {
    config = require(configPath);
}
catch (err) { }
var InfoTagMain;
(function (InfoTagMain) {
    function setTag(value) {
        config.tag = value;
    }
    InfoTagMain.setTag = setTag;
    function setTick(tick) {
        if (tick < 0)
            config.tick = 0;
        config.tick = tick;
    }
    InfoTagMain.setTick = setTick;
    function getTag() {
        return config.tag;
    }
    InfoTagMain.getTag = getTag;
    function getTick() {
        if (config.tick < 0)
            return 0;
        return config.tick;
    }
    InfoTagMain.getTick = getTick;
    function getPlayerTag(player) {
        let results = getTag();
        for (let [i, addon] of addon_1.InfoTagAddon.getAddons(player).entries()) {
            results = results.replace(new RegExp(addon[0], "g"), `${addon[1]}`);
        }
        return results;
    }
    InfoTagMain.getPlayerTag = getPlayerTag;
    function updatePlayerTag(player) {
        player.setScoreTag(getPlayerTag(player));
    }
    InfoTagMain.updatePlayerTag = updatePlayerTag;
    function updatePlayersTag() {
        for (const player of launcher_1.bedrockServer.serverInstance.getPlayers()) {
            if (!player.isPlayer())
                return;
            updatePlayerTag(player);
        }
    }
    InfoTagMain.updatePlayersTag = updatePlayersTag;
    function save(message = false) {
        fs.writeFile(configPath, JSON.stringify(config, null, 2), "utf8", (err) => {
            if (message) {
                if (err) {
                    message_1.send.error(`config.json ${err}`);
                    throw err;
                }
                else
                    message_1.send.success(`config.json Saved!`);
            }
        });
    }
    InfoTagMain.save = save;
})(InfoTagMain = exports.InfoTagMain || (exports.InfoTagMain = {}));
event_1.events.serverOpen.on(() => {
    require("./src");
    message_1.send.success("Started!");
});
event_1.events.serverClose.on(() => {
    InfoTagMain.save(true);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw2QkFBNkI7QUFDN0IseUJBQXlCO0FBRXpCLHVDQUEyQztBQUMzQyw0Q0FBOEM7QUFDOUMsaURBQTJDO0FBQzNDLHNDQUFvQztBQUVwQyxJQUFJLE1BQU0sR0FHTjtJQUNBLEdBQUcsRUFBRSw2Q0FBNkM7SUFDbEQsSUFBSSxFQUFFLEdBQUc7Q0FDWixDQUFDO0FBRUYsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFFdkQsSUFBSTtJQUNBLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDaEM7QUFBQyxPQUFNLEdBQUcsRUFBRSxHQUFFO0FBRWYsSUFBaUIsV0FBVyxDQW9EM0I7QUFwREQsV0FBaUIsV0FBVztJQUV4QixTQUFnQixNQUFNLENBQUMsS0FBYTtRQUNoQyxNQUFNLENBQUMsR0FBRyxHQUFDLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRmUsa0JBQU0sU0FFckIsQ0FBQTtJQUVELFNBQWdCLE9BQU8sQ0FBQyxJQUFZO1FBQ2hDLElBQUksSUFBSSxHQUFHLENBQUM7WUFBRSxNQUFNLENBQUMsSUFBSSxHQUFDLENBQUMsQ0FBQztRQUM1QixNQUFNLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBSGUsbUJBQU8sVUFHdEIsQ0FBQTtJQUVELFNBQWdCLE1BQU07UUFDbEIsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ3RCLENBQUM7SUFGZSxrQkFBTSxTQUVyQixDQUFBO0lBRUQsU0FBZ0IsT0FBTztRQUNuQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDO0lBSGUsbUJBQU8sVUFHdEIsQ0FBQTtJQUVELFNBQWdCLFlBQVksQ0FBQyxNQUFvQjtRQUM3QyxJQUFJLE9BQU8sR0FBVyxNQUFNLEVBQUUsQ0FBQztRQUUvQixLQUFLLElBQUksQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksb0JBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDN0QsT0FBTyxHQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNyRTtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ25CLENBQUM7SUFSZSx3QkFBWSxlQVEzQixDQUFBO0lBRUQsU0FBZ0IsZUFBZSxDQUFDLE1BQW9CO1FBQ2hELE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUZlLDJCQUFlLGtCQUU5QixDQUFBO0lBRUQsU0FBZ0IsZ0JBQWdCO1FBQzVCLEtBQUssTUFBTSxNQUFNLElBQUksd0JBQWEsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQUUsT0FBTztZQUMvQixlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBTGUsNEJBQWdCLG1CQUsvQixDQUFBO0lBRUQsU0FBZ0IsSUFBSSxDQUFDLFVBQW1CLEtBQUs7UUFDekMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ3RFLElBQUksT0FBTyxFQUFFO2dCQUNULElBQUksR0FBRyxFQUFFO29CQUNMLGNBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxNQUFNLEdBQUcsQ0FBQztpQkFDYjs7b0JBQ0ksY0FBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQzNDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBVmUsZ0JBQUksT0FVbkIsQ0FBQTtBQUNMLENBQUMsRUFwRGdCLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBb0QzQjtBQUVELGNBQU0sQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QixDQUFDLENBQUMsQ0FBQztBQUVILGNBQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRTtJQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQyxDQUFDIn0=