import { revalidatePath } from 'next/cache'
import db from '@/lib/db'
import { useRouter } from 'next/router'
import { redirect } from 'next/navigation'

export default function EditProduct({ params }: { params: { id: string } }) {
  const id = Number(params.id)

  async function updateProduct(data: FormData) {
    'use server'
    await db.product.update({
      where: { id },
      data: {
        title: data.get('title') as string,
        description: data.get('description') as string,
        price: Number(data.get('price')),
      },
    })

    revalidatePath(`/products/${id}`)
    redirect(`/products/${id}`)
  }

  return (
    <form action={updateProduct}>
      <h1 className="text-5xl font-semibold mb-4">Edit-Product</h1>
      <input
        className="text-black"
        type="text"
        name="title"
        placeholder="Title"
      />
      <input
        className="text-black"
        type="text"
        name="description"
        placeholder="Description"
      />
      <input
        className="text-black"
        type="number"
        name="price"
        placeholder="Price"
      />
      <button className="bg-green-500 py-2" type="submit">
        Save Changes
      </button>
    </form>
  )
}
