//noinspection Eslint
function votingSystem (action) {
  let that = this
  let patcher = (() => {
    function upvote () {
      that.upvotes++
    }

    function downvote () {
      that.downvotes++
    }

    function fakeRecords (num) {
      return 0.25 * num
    }

    function calcRating () {
      let votes = that.upvotes + that.downvotes
      if (votes >= 10) {
        if (that.upvotes / votes > 0.66) {
          return 'hot'
        } else if (that.upvotes - that.downvotes >= 0 &&
          that.upvotes > 100 || that.downvotes > 100) {
          return 'controversial'
        } else if (that.upvotes - that.downvotes < 0) {
          return 'unpopular'
        }
      }

      return 'new'
    }

    let rating = calcRating()

    function score () {
      let ups = that.upvotes
      let downs = that.downvotes

      let total = that.upvotes - that.downvotes
      if (that.downvotes + that.upvotes > 50) {
        let moreVotes = fakeRecords(Math.max(that.upvotes, that.downvotes))
        ups = Math.ceil(that.upvotes + moreVotes)
        downs = Math.ceil(that.downvotes + moreVotes)
      }

      return [ups, downs, total, rating]
    }

    return { upvote, downvote, score }
  })()

  return patcher[action]()
}