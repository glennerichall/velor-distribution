import {
    getProvider
} from "velor-services/application/services/baseServices.mjs";

import {
    s_clientProvider,
    s_keyStore,
    s_messageBuilder,
    s_messageQueue,
    s_messageStreamHandler,
    s_pubSub,
    s_rpcSignaling,
    s_sync,
} from "./serviceKeys.mjs";

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

export function getSynchronizer(services) {
    return getProvider(services)[s_sync]();
}

export function getStreamHandler(services) {
    return getProvider(services)[s_messageStreamHandler]();
}
