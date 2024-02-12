import axios from "axios";

/**
 * This is a sample connection that requests data from the express proxy application sample.
 */
class ExpressConnectionExample {
  /**
   * The URL from your express proxy application.
   */
  _proxyUrl = "http://localhost:3001/api";

  /**
   * The instance URL of your Salesforce Org
   */
  instanceUrl = "instance_url";

  /**
   * The namespace of your package.
   * This sample connection uses a fake namespace that is replaced
   * in the express proxy server.
   */
  namespace = "omnistudio";

  /**
   * The request method that will get the data from the express proxy
   * @param {string} url
   * @param {Object} data
   * @param {Promise}
   */
  request(url, data) {
    return axios({
      method: "post",
      url: this._proxyUrl,
      data: {
        url,
        data,
      },
    }).then(function (response) {
      return response.data;
    });
  }
}

export { ExpressConnectionExample };
