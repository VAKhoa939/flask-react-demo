import { useState, useEffect } from 'react'
import './App.css'
import './components/ProductTable.tsx'
import ProductTable from './components/ProductTable.tsx'

function App() {
  
  let [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetch("http://localhost:5000/products").then(
      res => res.json()
    ).then(
      data => {
        setdata(data)
        console.log(data.products)
      }
    )
  }, [])

  if (!loading) {
    return <p>Error!</p>
  }

  return (
    <>
      <h1>View Products</h1>
      <div>
        {(typeof data.products === 'undefined') ? (
          <p>Loading...</p>
        ) : (
            <ProductTable products={data.products}/>
          )
        }
      </div>
    </>
  )
}

export default App
