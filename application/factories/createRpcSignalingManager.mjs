import {RpcSignalingManager} from "velor-messaging/messaging/managers/RpcSignalingManager.mjs";
import {getProvider} from "velor-services/application/services/baseServices.mjs";
import {s_sync} from "../services/serviceKeys.mjs";

export function createRpcSignalingManager(services) {
    const provider = getProvider(services);

    return new RpcSignalingManager(
        provider[s_sync]()
    );
}