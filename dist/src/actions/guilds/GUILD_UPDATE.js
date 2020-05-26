"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../../lib/pieces/Action");
const Extender_1 = require("../../lib/util/Extender");
class CoreAction extends Action_1.Action {
    check(data) {
        var _a;
        return (_a = this.client.guilds.get(data.d.id)) !== null && _a !== void 0 ? _a : null;
    }
    build(data) {
        // eslint-disable-next-line @typescript-eslint/camelcase
        return new (Extender_1.extender.get('Guild'))(this.client, data.d, data.shard_id);
    }
    cache(data) {
        if (this.client.options.cache.enabled) {
            this.client.guilds.set(data.id, data);
        }
    }
}
exports.default = CoreAction;
//# sourceMappingURL=GUILD_UPDATE.js.map