'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { uploadProduct } from './action'

export default function AddProduct() {
  const [preview, setPreview] = useState('')
  const OnImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event
    if (!files) {
      return
    }
    const file = files[0]
    const url = URL.createObjectURL(file)
    setPreview(url)
  }
  return (
    <div>
      <form action={uploadProduct} className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover "
          style={{
            backgroundImage: `url(${preview})`,
          }}>
          {preview === '' ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">Please add a photo</div>
            </>
          ) : null}
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={OnImageChange}
          accept="image/*"
          className="hidden"
        />
        <Input type="text" name="title" placeholder="full" required />
        <Input type="number" name="price" placeholder="price" required />
        <Input
          type="text"
          name="description"
          placeholder="Detailed Description"
          required
        />
        <Button text="Completed writing" />
      </form>
    </div>
  )
}
