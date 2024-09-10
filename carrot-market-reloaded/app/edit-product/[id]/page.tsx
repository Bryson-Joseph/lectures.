'use client'

import db from '@/lib/db'
import { revalidateTag } from 'next/cache'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function EditProduct({ params }: { params: { id: string } }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const router = useRouter()

  const handleSave = async () => {
    await db.product.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        description,
        price: Number(price),
      },
    })

    // Revalidate the product detail page
    revalidateTag('product-detail')

    // Redirect to the product detail page
    router.push(`/product/${params.id}`)
  }

  return (
    <div>
      <h1 className="text-5xl mb-6">Edit Product</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Product Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Product Description"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Product Price"
      />
      <button
        className="bg-green-500 py-2.5 rounded-md text-white font-semibold mx-1"
        onClick={handleSave}>
        Save Changes
      </button>
    </div>
  )
}
