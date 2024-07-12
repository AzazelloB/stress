export const shuffle = <T>(array: T[]): T[] => {
  const result: T[] = []
  const copy = [...array]

  while (copy.length) {
    result.push(pluck(copy))
  }

  return result
}

export const pluck = <T>(array: T[]): T => {
  const [element] = array.splice(Math.floor(Math.random() * array.length), 1)

  return element
}
