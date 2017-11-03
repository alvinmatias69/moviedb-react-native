export default (title, count) => {
  if (title.length > count) {
    return title.substring(0, count-2) + '..'
  }
  return title
}
