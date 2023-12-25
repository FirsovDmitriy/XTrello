import minLength from "../raw/minLength"

export default function minLenght(min: number) {
  return {
    $validator: minLength(min),
    $message: ({ $params }) => `Длина этого поля должна быть не менее ${ $params.min }`,
    $params: { min, type: 'minLength' }
  }
}