export function nicifyCamel(text: string) {
  return (
    text[0].toUpperCase() +
    text
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .slice(1)
      .replace(' Of ', ' of ')
  )
}
