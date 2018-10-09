import axios from "axios";
import { BASEURL } from "./general";

import { token } from "../demo";

export default class Client {
  constructor(token) {
    this.token = token;
  }

  RESOURCES = {
    users: "users",
    events: "events",
    batches: "batches",
    departments: "departments",
    subjects: "subjects"
  };

  async sendRequest(body) {
    try {
      return await axios.request({
        baseURL: BASEURL,
        headers: {
          Authorization: `token ${token}`
        },
        ...body
      });
    } catch (err) {
      return alert("ERROR " + err);
    }
  }

  async getWorking() {
    this.postToken("vikrantgajria@gmail.com", "shinchan");
  }

  async getWorking2() {
    const body = {
      url: "/",
      method: "GET"
    };
    let res = await this.sendRequest(body);
    alert(res.data);
  }

  // ----- User

  async postToken(email, password) {
    const body = {
      url: "/users/token",
      method: "POST",
      data: {
        email,
        password
      }
    };
    let res = await this.sendRequest(body);
    this.token = res.data.token;
    return res.data;
  }

  async getUserList() {
    const body = {
      url: `/users/`,
      method: "GET"
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async getUser(id) {
    const body = {
      url: `/users/${id}`,
      method: "GET"
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async postUser(data) {
    const body = {
      url: `/users/`,
      method: "POST",
      data
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async putUser(id, data) {
    const body = {
      url: `/users/${id}`,
      method: "GET"
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  // -----

  async postResource(label, data) {
    const body = {
      url: `/${label}/`,
      method: "POST",
      data
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async getResourceList(label) {
    const body = {
      url: `/${label}/`,
      method: "GET"
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async getResource(label, id) {
    const body = {
      url: `/${label}/${id}`,
      method: "GET"
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async putResource(label, id, data) {
    const body = {
      url: `/${label}/${id}`,
      method: "PUT",
      data
    };
    let res = await this.sendRequest(body);
    return res.data;
  }

  async deleteResource(label, id, data) {
    const body = {
      url: `/${label}/${id}`,
      method: "DELETE"
    };
    let res = await this.sendRequest(body);
    return res.data;
  }
}
