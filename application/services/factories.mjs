import {createLocalPubSubInstance} from "../factories/createLocalPubSubInstance.mjs";
import {
    LocalAsyncKeyStore
} from "../../distribution/impl/LocalKeyStore.mjs";
import {createMessageQueueInstance} from "../factories/createMessageQueueInstance.mjs";
import {
    s_keyStore,
    s_messageBuilder,
    s_messageQueue,
    s_messageStreamHandler,
    s_pubSub,
    s_rpcSignaling,
    s_sync,
} from "./serviceKeys.mjs";
import {Synchronizer} from "velor-utils/utils/sync.mjs";
import {createRpcSignalingManager} from "../factories/createRpcSignalingManager.mjs";
import {ReadStreamHandler} from "velor-messaging/messaging/managers/ReadStreamHandler.mjs";
import {createMessageBuilderInstance} from "velor-api/api/application/factories/createMessageBuilderInstance.mjs";
import {s_messageCoder} from "velor-api/api/application/services/serviceKeys.mjs";
import {createMessageCoderInstance} from "velor-api/api/application/factories/createMessageCoderInstance.mjs";

export const factories = {
    [s_pubSub]: createLocalPubSubInstance,
    [s_keyStore]: LocalAsyncKeyStore,
    [s_messageQueue]: createMessageQueueInstance,
    [s_messageBuilder]: createMessageBuilderInstance,
    [s_messageCoder]: createMessageCoderInstance,
    [s_sync]: Synchronizer,
    [s_rpcSignaling]: createRpcSignalingManager,
    [s_messageStreamHandler]: ReadStreamHandler,
};
