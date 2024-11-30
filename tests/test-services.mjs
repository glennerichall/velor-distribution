import {setupTestContext} from "velor-utils/test/setupTestContext.mjs";
import {createAppServicesInstance} from "velor-services/injection/ServicesContext.mjs";
import {mergeDefaultDistributionOptions} from "../application/services/mergeDefaultDistributionOptions.mjs";
import {getProvider} from "velor-services/injection/baseServices.mjs";
import {
    getKeyStore,
    getMessageBuilder,
    getMessageQueue,
    getPubSub,
    getRpcSignaling,
    getStreamHandler,
    getSynchronizer
} from "../application/services/distributionServices.mjs";
import {PubSubMixin} from "../distribution/impl/PubSubMixin.mjs";
import {LocalPubSub} from "../distribution/impl/LocalPubSub.mjs";
import {LocalAsyncKeyStore} from "../distribution/impl/LocalKeyStore.mjs";
import {BullMessageQueue} from "../distribution/impl/BullMessageQueue.mjs";
import {MessageBuilder} from "velor-messaging/messaging/message/MessageBuilder.mjs";
import {Synchronizer} from "velor-utils/utils/sync.mjs";
import {RpcSignalingManager} from "velor-messaging/messaging/managers/RpcSignalingManager.mjs";
import {ReadStreamHandler} from "velor-messaging/messaging/managers/ReadStreamHandler.mjs";

const {
    expect,
    test,
    describe,
    afterEach,
    beforeEach,
    it,
} = setupTestContext();

describe('distribution services', () => {
    let services;

    beforeEach(() => {
        services = createAppServicesInstance(
            mergeDefaultDistributionOptions()
        );
    })

    it('should provide pubSub', () => {
        expect(getPubSub(services)).to.be.an.instanceOf(LocalPubSub);
    })

    it('should provide key store', () => {
        expect(getKeyStore(services)).to.be.an.instanceOf(LocalAsyncKeyStore);
    })

    it('should provide message queue', () => {
        expect(getMessageQueue(services)).to.be.an.instanceOf(BullMessageQueue);
    })

    it('should provide message builder', () => {
        expect(getMessageBuilder(services)).to.be.an.instanceOf(MessageBuilder);
    })

    it('should provide synchronize', () => {
        expect(getSynchronizer(services)).to.be.an.instanceOf(Synchronizer);
    })

    it('should provide rpc signaling', () => {
        expect(getRpcSignaling(services)).to.be.an.instanceOf(RpcSignalingManager);
    })

    it('should provide read stream handler', () => {
        expect(getStreamHandler(services)).to.be.an.instanceOf(ReadStreamHandler);
    })
});