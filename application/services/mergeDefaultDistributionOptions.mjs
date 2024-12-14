import {factories as defaultFactories} from "./factories.mjs";

export function mergeDefaultDistributionOptions(options = {}) {
    let {
        factories = {},
    } = options;

    return {
        ...options,

        factories: {
            ...defaultFactories,
            ...factories
        }
    };
}