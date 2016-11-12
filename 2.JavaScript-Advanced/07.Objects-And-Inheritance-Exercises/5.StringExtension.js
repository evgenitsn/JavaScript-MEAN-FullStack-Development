/*
 •	        ensureStart(str) – append str to the beginning of a string, only if it’s not already present
 •	        ensureEnd(str) – append str to the end of a string, only if it’s not already present
 •	        isEmpty() – return true if the string is empty, false otherwise
 •	        truncate(n) – truncates the string to n characters by removing words and appends an ellipsis to the end
 •	        format(string, …params) – static method to replace placeholders with parameters
 */

(function solve () {
  String.prototype.ensureStart = function (str) {
    let newStr = this
    if (!this.startsWith(str)) {
      newStr = str + this
    }
    return newStr.toString()
  }

  String.prototype.ensureEnd = function (str) {
    let newStr = this
    if (!this.endsWith(str)) {
      newStr = this + str
    }
    return newStr.toString()
  }

  String.prototype.isEmpty = function () {
    return this.length === 0
  }

  String.prototype.truncate = function (n) {
    if(this.length <= n){
      return this.toString()
    }
    let tokens = this.split(' ')
    let result = tokens[0]

    for(let i = 1; i < tokens.length;i++){
      if(result.length + tokens[i].length + 4 > n){
        return result + '...'
      }
      result += ` ${tokens[i]}`
    }
  }

  //noinspection JSPrimitiveTypeWrapperUsage
  String.format = function () {
    // console.log(arguments)
    const argsRaw = Array.prototype.slice.call(arguments)
    const args = argsRaw.slice(1, argsRaw.length)
    let str = Array.prototype.slice.call(arguments)[0]
    return str.replace(/{(\d+)}/g, function (match, number) {
      if (number <= argsRaw.length) {
        return typeof args[number] != 'undefined'
          ? args[number]
          : match
      } else {
        return ''
      }
    })
  }
})()



