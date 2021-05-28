import axios from 'axios';

const PRODUCT_API_BASE_URL = 'http://localhost:8080/product';

class ProductService {

fetchProducts() {
return axios.get(PRODUCT_API_BASE_URL);
}

fetchProductById(productId) {
return axios.get(PRODUCT_API_BASE_URL + '?id=' + productId);
}

deleteProduct(productId) {
return axios.delete(PRODUCT_API_BASE_URL + '/' + productId);
}

addProduct(product) {
return axios.post(PRODUCT_API_BASE_URL, product);
}

editProduct(product) {
return axios.put(PRODUCT_API_BASE_URL + '/' + product.id, product);
}

}

export default new ProductService(); 