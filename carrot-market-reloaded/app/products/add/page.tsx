'use client'

import Button from '@/components/button'
import Input from '@/components/input'
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { uploadProduct } from './action'
import { useFormState } from 'react-dom'

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
  const [state, action] = useFormState(uploadProduct, null)
  return (
    <div>
      <form action={action} className="p-5 flex flex-col gap-5">
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex items-center justify-center flex-col text-neutral-300 border-neutral-300 rounded-md border-dashed cursor-pointer bg-center bg-cover "
          style={{
            backgroundImage: `url(${preview})`,
          }}>
          {preview === '' ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                Please add a photo
                {state?.fieldErrors.photo}
              </div>
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
        <Input
          type="text"
          name="title"
          placeholder="full"
          required
          errors={state?.fieldErrors.title}
        />
        <Input
          type="number"
          name="price"
          placeholder="price"
          required
          errors={state?.fieldErrors.price}
        />
        <Input
          type="text"
          name="description"
          placeholder="Detailed Description"
          required
          errors={state?.fieldErrors.description}
        />
        <Button text="Completed writing" />
      </form>
    </div>
  )
}
