import React from 'react';

import { Product } from './services/product/types';
import { useListProduct, useGetProduct } from './services/product';

import './App.css';

function App() {

  const productIdRef = React.useRef<HTMLInputElement | null>(null)
  const [productId, setProductId] = React.useState<number>(0)

  const onSuccess = React.useCallback((data: Product[]) => {
    console.log('onSuccess', data)
  }, [])

  const onError = React.useCallback((error: unknown) => {
    console.log('onError', error)
  }, [])

  const {
    data: listProductData,
    isLoading: listProductIsLoading,
    isFetching: listProductIsFetching,
    refetch: listProductRefetch
  } = useListProduct({ enabled: false, onSuccess, onError })

  const {
    data: getProductData,
    isLoading: getProductIsLoading,
    isFetching: getProductIsFetching,
    refetch: getProductRefetch
  } = useGetProduct({ id: productId })

  const handleGetProductButtonClick = React.useCallback(() => {
    productIdRef.current?.value && setProductId(+productIdRef.current.value)
  }, [])

  React.useEffect(() => {
    !!productId && getProductRefetch()
  }, [productId, getProductRefetch])


  return (
    <div className="App">
      <h1>Products</h1>

      {listProductData && (
        <ul>
          {listProductData.map(({id, name, description}) => (
            <li key={id}>{`id: ${id}, name: ${name}, description: ${description}`}</li>
          ))}
        </ul>
      )}

      <button type="button" onClick={() => listProductRefetch()}>
        {(listProductIsLoading || listProductIsFetching) ? 'Loading..' : 'Load'}
      </button>

      <div style={{ marginTop: '20px' }}>
        <button type="button" onClick={handleGetProductButtonClick}>
          {(getProductIsLoading || getProductIsFetching) ? 'Loading Product..' : 'Load Product'}
        </button>

        <input
          type="number"
          min={0}
          ref={productIdRef}
          placeholder="Type product id here"
        />

        {getProductData && (<p>{getProductData.name}</p>)}
      </div>
    </div>
  );
}

export default App;
