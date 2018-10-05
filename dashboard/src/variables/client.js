import axios from "axios";
import { BASEURL } from "./general";

async function sendRequest() {}

export async function getWorking() {
  try {
    let response = await axios.get({
      baseURL: BASEURL,
      url: "/"
    });
    alert(response.data);
  } catch (err) {
    alert(err);
  }
}

export async function postToken(username, password) {}
