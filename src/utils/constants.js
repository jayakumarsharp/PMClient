export const TOKEN = "API_TOKEN";
export const USER = "USER";

export const guest = {
  LOGIN: "/login",
  REGISTER: "/register",
  LOGOUT: "/logout",
};

export const security = {
  securities: "/products",
  PRODUCT_CREATE: "/product/create",
  PRODUCT: "/product/", // requires id "/product/{id}"
  PRODUCT_UPDATE: "/product/update/",
  PRODUCT_DELETE: "/product/delete/",
  PRODUCT_RESTOCK: "/product/restock/",
};

export const carts = {
  CARTS: "/carts",
  CART_ADD: "/cart/add",
  CART_DECREASE: "/cart/decrease",
};

export const transactions = {
  TRANSACTIONS: "/transactions",
  TRANSACTION: "/transaction",
  TRANSACTION_CREATE: "/transaction/create",
  TRANSACTIION_UPDATE: "/transaction/update",
};

export const ADMIN_INDEX = "/admin";