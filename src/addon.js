"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoTagAddon = void 0;
const fs = require("fs");
const path = require("path");
var InfoTagAddon;
(function (InfoTagAddon) {
    function getAddonFiles() {
        let file_names = [];
        const folderPath = path.join(__dirname, "..", "addons");
        const files = fs.readdirSync(folderPath);
        files.forEach((file) => {
            if (file.endsWith(".js")) {
                if (!file_names.includes(file))
                    file_names.push(file);
            }
        });
        return file_names;
    }
    InfoTagAddon.getAddonFiles = getAddonFiles;
    function getAddons(player) {
        const files = getAddonFiles();
        let data = [];
        files.forEach((file) => {
            const addonPath = path.join(__dirname, "..", "addons", file);
            let addon = [];
            try {
                addon = require(addonPath).getProcessedTags(player);
            }
            catch (err) { }
            addon.forEach((v) => {
                if (!data.includes(v))
                    data.push(v);
            });
        });
        return data;
    }
    InfoTagAddon.getAddons = getAddons;
})(InfoTagAddon = exports.InfoTagAddon || (exports.InfoTagAddon = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhZGRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSx5QkFBeUI7QUFDekIsNkJBQTZCO0FBSTdCLElBQWlCLFlBQVksQ0FpQzVCO0FBakNELFdBQWlCLFlBQVk7SUFDekIsU0FBZ0IsYUFBYTtRQUN6QixJQUFJLFVBQVUsR0FBYSxFQUFFLENBQUM7UUFFOUIsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELE1BQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ25CLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDekQ7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFaZSwwQkFBYSxnQkFZNUIsQ0FBQTtJQUNELFNBQWdCLFNBQVMsQ0FBQyxNQUFvQjtRQUMxQyxNQUFNLEtBQUssR0FBRyxhQUFhLEVBQUUsQ0FBQztRQUM5QixJQUFJLElBQUksR0FBZ0IsRUFBRSxDQUFDO1FBRTNCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNuQixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdELElBQUksS0FBSyxHQUFnQixFQUFFLENBQUM7WUFFNUIsSUFBSTtnQkFDQSxLQUFLLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZEO1lBQUMsT0FBTSxHQUFHLEVBQUUsR0FBRTtZQUVmLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtnQkFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO29CQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFsQmUsc0JBQVMsWUFrQnhCLENBQUE7QUFDTCxDQUFDLEVBakNnQixZQUFZLEdBQVosb0JBQVksS0FBWixvQkFBWSxRQWlDNUIifQ==