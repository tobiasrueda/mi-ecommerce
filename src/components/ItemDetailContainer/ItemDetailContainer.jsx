import useProduct from '../../hooks/useProduct.js';
import Loading from '../Loading/Loading';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './itemdetailcontainer.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const { product, loading } = useProduct(productId);

  return (
    <div className='item-detail-container'>
      {
        loading ? <Loading /> : <ItemDetail product={product} />
      }
    </div>
  )
}

export default ItemDetailContainer