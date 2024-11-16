import {PubSubMessageFactory} from "../messaging/PubSubMessageFactory.mjs";
import {publishPubSubMessage} from "../actions/publishPubSubMessage.mjs";
import {getMessageBuilder} from "../../application/services/distributionServices.mjs";

export async function requestUnsubscription(services, channelsToTarget, channelsToSubscribe) {
    const messageBuilder = getMessageBuilder(services);
    const message = new PubSubMessageFactory(messageBuilder).unsubscribe(...channelsToSubscribe);
    return publishPubSubMessage(services, message, ...channelsToTarget);
}
