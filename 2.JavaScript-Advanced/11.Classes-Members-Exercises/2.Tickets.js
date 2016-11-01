function solve (arr, order) {
  class Ticket {
    constructor (destination, price, status) {
      this.destination = destination
      this.price = Number(price)
      this.status = status
    }
  }
  let tickets = []
  for (let ticket of arr) {
    let parts = ticket.split('|')
    let t = new Ticket(parts[0], parts[1], parts[2])
    tickets.push(t)
  }

  switch (order) {
  case 'destination' :
    tickets.sort((a,b) => a.destination.localeCompare(b.destination))
    break
  case 'status':
    tickets.sort((a,b) => a.status.localeCompare(b.status))
    break
  case 'price':
    tickets.sort((a,b) => a.price - b.price)
    break
  }
  return tickets
}

console.log(
  solve(
    ['Philadelphia|94.20|available',
      'New York City|95.99|available',
      'New York City|95.99|sold',
      'Boston|126.20|departed'],
    'status'
  ))



