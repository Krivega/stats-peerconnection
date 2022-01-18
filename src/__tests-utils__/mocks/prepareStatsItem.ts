/**
 * prepareStatsItem
 * @param {Object} data data
 * @returns {Object} prepareStatsItem
 */
const prepareStatsItem = (data) => {
  const result = {
    ...data,
    /**
     * get
     * @param {string} item item
     * @returns {Object} item
     */
    get(item) {
      return this[item];
    },
  };

  return {
    ...data,
    result,
    /**
     * get
     * @param {string} item item
     * @returns {Object} item
     */
    get(item) {
      return this[item];
    },
    /**
     * keys
     * @returns {array} keys
     */
    keys() {
      return Object.keys({ result: 'result' });
    },
  };
};

export default prepareStatsItem;
