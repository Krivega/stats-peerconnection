import isUndefined from 'lodash/isUndefined';
import specs from './specs';

/**
 * statIsOfType
 * @param {Object} result result
 * @param {string} type type
 * @param {string} direction direction
 * @returns {boolean} statIsOfType
 */
const statIsOfType = (result, type, direction) => {
  return (
    result.type === 'ssrc' &&
    result.stat('mediaType') === type &&
    result.id.search(direction) !== -1
  );
};

/**
 *getTypeStatictic
 * @param {Object} result result
 * @returns {Object} getTypeStatictic
 */
const getTypeStatictic = (result) => {
  if (statIsOfType(result, 'audio', 'send')) {
    return specs['outbound-rtp'];
  }

  if (statIsOfType(result, 'audio', 'recv')) {
    return specs['inbound-rtp'];
  }

  if (statIsOfType(result, 'video', 'send')) {
    return specs['outbound-rtp'];
  }

  if (statIsOfType(result, 'video', 'recv')) {
    return specs['inbound-rtp'];
  }

  return undefined;
};

/**
 * parseResult
 * @param {Object} spec spec
 * @param {Object} result result
 * @returns {Object} parsedResult
 */
const parseResult = (spec, result) => {
  const parsedResult = { ...result };

  Object.keys(spec).forEach((key) => {
    let value = result[key];

    if (value === undefined) {
      value = result.stat(key);
    }

    if (value !== '') {
      parsedResult[key] = value;
    }
  });

  return parsedResult;
};
/* eslint-enable require-jsdoc */

function logRawResults(rawResults) {
  const results = rawResults.result();

  const parsedResults = results
    .map((result) => {
      const spec = getTypeStatictic(result);

      if (spec) {
        return parseResult(spec, result);
      }

      return undefined;
    })
    .filter((item) => {
      return !isUndefined(item);
    });

  return parsedResults;
}

export default logRawResults;
