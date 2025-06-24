const ItemListContainer = ({ mensaje }) => {
  return (
    <div className="container mt-4">
      <div className="alert alert-primary text-center" role="alert">
        {mensaje}
      </div>
    </div>
  );
};

export default ItemListContainer;
