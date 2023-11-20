import { ChangeEvent, FC, useState } from 'react'
import Button from '../Buttons'
import { keyframes } from 'styled-components'

const Upload: FC = () => {
  var [image, setImage] = useState<null | File>(null)
  var show = Boolean(image)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null) {
      return
    }

    var file = event.target.files[0]

    setImage(file)
  }

  console.log('File', image)

  const doSizeFile = () => {
    if(image?.size === undefined) return

    var size = image.size
    var kB = Math.floor(size / 1024)
    var kM = Math.floor(kB / 1024)
    return kM.toFixed(3)
  }

  return (
    <>
      <label
        role="button"
        className="flex flex-col items-center justify-center p-[0.62rem] border border-thirdColor border-dashed rounded cursor-pointer transition-colors hover:border-primaryColor"
      >
        {show ? (
          <div className="grid grid-cols-[1fr_min-content] grid-rows-[min-content_min-content] w-full">
            <p className="font-semibold row-start-1 row-end-2">
              { image?.name.replace(/\.[^/.]+$/, "") }
            </p>
            <p className="text-secondaryColor row-start-2">
              { image?.name.split('.').at(-1) }, { doSizeFile() } Мб
            </p>
            <Button
              className="row-span-2 self-center"
              variant="square"
              onClick={() => setImage(null)}
            >
              <i className="icon Delete-icon"></i>
            </Button>
          </div>
        ) : (
          <span>
            <p className="font-semibold">
              Перетащите файл в область или нажмите для загрузки
            </p>
            <p className="text-center text-secondaryColor">
              Расширение: bmp, gif, jpg, jpeg, png <br /> Максимально допустимый
              размер: 10 Мб <br /> Максимальное количество файлов: 1
            </p>
          </span>
        )}

        <input
          className="absolute top-[-9999px] left-[-9999px] appearance-none"
          type="file"
          name=""
          id=""
          onChange={handleChange}
          accept="image/*"
        />
      </label>
    </>
  )
}

export default Upload
