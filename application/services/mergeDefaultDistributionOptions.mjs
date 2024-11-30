import {distributionFactories} from "./distributionFactories.mjs";

export function mergeDefaultDistributionOptions(options = {}) {
    let {
        factories = {},
    } = options;

    return {
        ...options,

        factories: {
            ...distributionFactories,
            ...factories
        }
    };
}