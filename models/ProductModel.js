const getAllProducts = async () => {
  const [products] = await connection.query('select * from products');
 return products;
};

module.exports = {
  getAllProducts,
};