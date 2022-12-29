import axios from "axios";
const url = "https://api.hinova.com.br/api/sga/v2";

const contentType = "application/json";
const authorization = "Bearer c4ee850a06bfc94651f65881b67834365b5f8b159099db10cd7276b0997ea2bb2fb2a8004c13ecfa287738d3cfc09631a37f4a5afe60f8dfc37dd05e4836f14579ae5e6d6bd0d8fd407dc453aaabd1b248303d51350f52b0f9df67222f0bd484d942ffd2c079913a65a22f568cd3f13824fe04d84477ff43d852a37175cc6708";

const api = axios.create({
  baseURL: url,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': contentType,
    'Authorization': authorization
  }
});


export default api;