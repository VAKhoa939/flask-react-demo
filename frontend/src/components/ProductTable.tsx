interface Product {
  id: number;
  name: string;
  price: number;
}

interface Props {
  products: Product[]
}

function ProductTable(props: Props) {
  return (
    <table className="table table-striped table-info">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product: Product) => (
          <tr>
            <th scope="row">{product.id}</th>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ProductTable