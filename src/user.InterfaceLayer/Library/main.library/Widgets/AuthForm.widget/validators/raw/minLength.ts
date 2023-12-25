export default function minLength(length: number) {
  return (value: string) => (
    !!String(value).length ? value.length <= length : false
  )
}