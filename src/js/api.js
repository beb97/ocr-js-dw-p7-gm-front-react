import config from "./config";

console.log("url: ", config.apiUrlPost);

var Api = {
  addToken(header) {
    const token = localStorage.getItem("token");
    if (!token) return;
    header.Authorization = `Bearer ${token}`;
  },

  addJson(header) {
    header["Content-type"] = "application/json";
  },

  getCurrentUser() {
    const url = config.apiUrlCurrentUser;
    const method = "get";
    const header = {};
    this.addToken(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },

  getPost(id) {
    const url = config.apiUrlPost + "/" + id;
    const method = "get";
    const header = {};
    this.addToken(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },

  getPosts() {
    const url = config.apiUrlPost;
    const method = "get";
    const header = {};
    this.addToken(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },

  getUser(id) {
    const url = config.apiUrlUser + "/" + id;
    const method = "get";
    const header = {};
    this.addToken(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },

  login(pBody) {
    const url = config.apiUrlLogin;
    const method = "post";
    const header = {};
    this.addJson(header);
    const body = pBody;
    return this.sendRequest(url, method, header, body);
  },

  signup(pBody) {
    const url = config.apiUrlSignup;
    const method = "post";
    const header = {};
    this.addJson(header);
    const body = pBody;
    return this.sendRequest(url, method, header, body);
  },

  setPost(pBody) {
    const url = config.apiUrlPost;
    const method = "post";
    const header = {};
    this.addToken(header);
    this.addJson(header);
    const body = pBody;
    return this.sendRequest(url, method, header, body);
  },

  putPost(id, pBody) {
    const url = config.apiUrlPost + "/" + id;
    const method = "PUT";
    const header = {};
    this.addToken(header);
    this.addJson(header);
    const body = pBody;
    return this.sendRequest(url, method, header, body);
  },

  likePost(id) {
    const url = config.apiUrlPost + "/" + id+ "/like";
    const method = "POST";
    const header = {};
    this.addToken(header);
    this.addJson(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },
  
  unlikePost(id) {
    const url = config.apiUrlPost + "/" + id+ "/like";
    const method = "DELETE";
    const header = {};
    this.addToken(header);
    this.addJson(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },

  deletePost(id) {
    const url = config.apiUrlPost + "/" + id;
    const method = "delete";
    const header = {};
    this.addToken(header);
    const body = undefined;
    return this.sendRequest(url, method, header, body);
  },

  async sendRequest(url, method, headers, body) {
    try {
      let response = await fetch(url, {
        method: method,
        ...(headers && { headers: headers }),
        ...(body && { body: JSON.stringify(body) }),
      });
      const status = response.status;
      // console.log("STATUS: ", status);
      response = await response.json();
      response.status = status;
      console.log(method + " : " + url + " : ", response);
      return response;
    } catch (error) {
      console.warn("ERROR: " + method + " : " + url + " : ", error.message);
    }
  },
};

export default Api;
