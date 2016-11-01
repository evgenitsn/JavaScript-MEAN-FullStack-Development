module.exports = (date) => {
  let hours = date.getHours()
  let minutes = date.getMinutes()
  let ampm = hours >= 12 ? 'pm' : 'am'
  hours = hours % 12
  hours = hours ? hours : 12 // the hour '0' should be '12'
  minutes = minutes < 10 ? '0' + minutes : minutes
  let strTime = hours + ':' + minutes + ' ' + ampm
  let dt = (date.getDate() < 10) ? ('0' + date.getDate()) : (date.getDate())
  let month = (date.getMonth() + 1 < 10) ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1)
  let year = date.getFullYear()
  return dt + '-' + month + '-' + year + ' ' + strTime
}
