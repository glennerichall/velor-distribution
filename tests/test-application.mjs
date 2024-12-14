import {setupTestContext} from "velor-utils/test/setupTestContext.mjs";
import {createAppServicesInstance} from "velor-services/injection/ServicesContext.mjs";
import {mergeDefaultDistributionOptions} from "../application/services/mergeDefaultDistributionOptions.mjs";
import {
    getKeyStore,
    getMessageBuilder,
    getMessageQueue,
    getPubSub,
    getRpcSignaling,
    getStreamHandler,
    getSynchronizer
} from "../application/services/services.mjs";

const {
    expect,
    test,
    describe,
    afterEach,
    beforeEach,
    it,
} = setupTestContext();

describe('application', () => {
    it('should create services', async () => {
        let services = createAppServicesInstance(
            mergeDefaultDistributionOptions()
        );

        expect(services).to.not.be.undefined;
    })

    it('should have service factories', async () => {
        let services = createAppServicesInstance(
            mergeDefaultDistributionOptions()
        );

        getMessageQueue(services);
        getKeyStore(services);
        getMessageBuilder(services);
        getPubSub(services);
        getRpcSignaling(services);
        getSynchronizer(services);
        getStreamHandler(services);
    })
})