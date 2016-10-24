function processCommands (commands) {
  let commandProcessor = (() => {
    let list = []
    return {
      add: (item) => list.push(item),
      remove: (element) => list = list.filter(x => x != element),
      print: () => console.log(list)
    }
  })()
  for (let cmd of commands) {
    let [name, arg] = cmd.split(' ')
    commandProcessor[name](arg)
  }
}

processCommands(['add maikati', 'remove maikati', 'print'])