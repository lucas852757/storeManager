const serialize = (objects) =>
  objects.map((object) => {
    if (object.sale_id) {
      return {
        saleId: object.sale_id,
        date: object.date,
        productId: object.product_id,
        quantity: object.quantity,
      };
    }
    if (object.date) {
      return {
        date: object.date,
        productId: object.product_id,
        quantity: object.quantity,
      };
    }
    return { productId: object.product_id, quantity: object.quantity };
  });


module.exports = serialize;