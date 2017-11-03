export default (data, arrGenre) => {
  let genreCount = 3
  let j
  let result = ''
  if (data.length < genreCount) {
    genreCount = data.length
  }
  for (let i=0; i<genreCount; i++) {
    j = 0
    while (data[i] !== arrGenre[j].id) {
      j++
    }
    result += `${arrGenre[j].name}, `
  }
  return result.substring(0, result.length-2)
}
