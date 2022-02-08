import axios from "axios";

const headers = {
  "Content-Type": "application/json",
};

const url = "http://localhost:3001";

export default {
  async getProducts() {
    return await axios.get(`${url}/products`, { headers: headers });
  },
  async getProduct(id) {
    return await axios.get(`${url}/products/${id}`, { headers: headers });
  },
  async addProduct(product) {
    return await axios.post(
      `${url}/products`,
      { ...product },
      { headers: headers }
    );
  },
  async deleteProduct(id) {
    return await axios.delete(`${url}/products/${id}`, { headers: headers });
  },
  async updateProduct(id, product) {
    return await axios.put(
      `${url}/products/${id}`,
      { ...product },
      { headers: headers }
    );
  },
};
