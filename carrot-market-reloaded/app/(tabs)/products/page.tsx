import ListProduct from '@/components/list-products'
import db from '@/lib/db'
import React from 'react'

async function getProducts() {
  const products = await db.product.findMany({
    select: {
      title: true,
      created_at: true,
      price: true,
      photo: true,
      id: true,
    },
  })
  return products
}

export default async function Products() {
  const products = await getProducts()
  return (
    <div className="p-5 flex flex-col gap-5">
      {products.map((product) => (
        <ListProduct key={product.id} {...product} />
      ))}
    </div>
  )
}
