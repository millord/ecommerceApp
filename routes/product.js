const express = require("express");
const router = express.Router();

const {
  create,
  productById,
  read,
  remove,
  update
} = require("../controllers/product");
const { requiredSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/product/:productId", read);
router.post("/product/create/:userId", requiredSignin, isAuth, isAdmin, create);
router.delete(
  "/product/:productId/:userId",
  requiredSignin,
  isAuth,
  isAdmin,
  remove
);
router.put(
  "/product/:productId/:userId",
  requiredSignin,
  isAuth,
  isAdmin,
  update
);

router.param("userId", userById);
router.param("productId", productById);

module.exports = router;
