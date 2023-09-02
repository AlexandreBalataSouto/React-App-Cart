const CartItem = ({
  id,
  img,
  title,
  price,
  amount,
  removeItem,
  actionItem,
}) => {
  return (
    <>
      <div className="cartItem">
        <div className="cartItem_img">
          <img src={img} alt="phone" />
        </div>
        <div className="cartItem_info">
          <p className="cartItem_info_text">
            <strong>{title}</strong>
          </p>
          <p className="cartItem_info_price">
            <strong>${price}</strong>
          </p>
          <button
            className="cartItem_info_btn_remove"
            onClick={() => removeItem(id)}
          >
            remove
          </button>
        </div>
        <div className="cartItem_buttons">
          <div
            className="cartItem_btn_add"
            onClick={() => actionItem("add", id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"></path>
            </svg>
          </div>
          <div>{amount}</div>
          <div
            className="cartItem_btn_substract"
            onClick={() => actionItem("substract", id)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
