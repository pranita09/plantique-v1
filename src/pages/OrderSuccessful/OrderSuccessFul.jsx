const OrderSuccessful = () => {
  const msgStyles = {
    color: "#1b4b33",
    margin: "10rem auto",
    textAlign: "center",
  };
  document.title = "Order Placed | Plantique";

  return (
    <div className="page-wrapper">
      <h1 style={msgStyles}>Order Placed Successfully! 🎉</h1>
    </div>
  );
};

export default OrderSuccessful;
