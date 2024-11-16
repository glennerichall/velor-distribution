import {
    getProvider
} from "velor-services/injection/baseServices.mjs";

import {
    s_clientProvider,
    s_keyStore,
    s_messageBuilder,
    s_messageQueue,
    s_messageStreamHandler,
    s_pubSub,
    s_rpcSignaling,
} from "./distributionServiceKeys.mjs";

export function getMessageQueue(services) {
    return getProvider(services)[s_messageQueue]();
}

export function getKeyStore(services) {
    return getProvider(services)[s_keyStore]();
}

export function getMessageBuilder(services) {
    return getProvider(services)[s_messageBuilder]();
}

export function getClientProvider(services) {
    return getProvider(services)[s_clientProvider]();
}

export function getPubSub(services) {
    return getProvider(services)[s_pubSub]();
}

export function getRpcSignaling(services) {
    return getProvider(services)[s_rpcSignaling]();
}

export function getStreamHandler(services) {
    return getProvider(services)[s_messageStreamHandler]();
}
