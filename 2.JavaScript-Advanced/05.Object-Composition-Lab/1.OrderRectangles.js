function orderRects (rectsData) {
  let allRects = []
  for (let r of rectsData) {
    allRects.push(createRect(r[0], r[1]))
  }

  function createRect (width, height) {
    let rectangle = {
      width: width,
      height: height,
      area: () => rectangle.height * rectangle.width,
      compareTo: (other) => {
        return other.area() - rectangle.area() || (other.width - rectangle.width)
      }
    }
    return rectangle
  }

  allRects.sort((a, b) => a.compareTo(b))
  return allRects
}

console.log(orderRects([[10, 5], [5, 12]]))
