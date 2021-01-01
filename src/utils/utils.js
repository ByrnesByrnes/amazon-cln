
//Simple function to truncate at a given length

export function truncateDesc(title, text, numLength=30 ) {
  let result = ""

  for (let i = 0; i < numLength - title.length; i++) {
    result += text[i]
  }
  return result
}