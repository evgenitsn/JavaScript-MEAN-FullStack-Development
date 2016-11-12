// function solve () {
class Post {
  constructor (title, content) {
    this.title = title
    this.content = content
  }

  toString () {
    return `Post: ${this.title}\nContent: ${this.content}`
  }
}

class SocialMediaPost extends Post {
  constructor (title, content, likes, dislikes) {
    super(title, content)
    this.likes = likes
    this.dislikes = dislikes
    this.comments = []
  }

  addComment (comment) {
    this.comments.push(comment)
  }

  toString () {
    let string = `${super.toString()}
`
    string += `Rating: ${this.likes - this.dislikes}\n`
    if (this.comments.length > 0) {
      string += 'Comments:\n'
      for (let comment of this.comments) {
        string += ` * ${comment}\n`
      }
    }
    return string.trim()
  }
}

class BlogPost extends Post {

  constructor (title, content, views) {
    super(title, content)
    this.views = views
  }

  view () {
    this.views++
    return this
  }

  toString () {
    return `${super.toString()}\`
Views: $\{this.views}\``
  }
}
//   return { Post, SocialMediaPost, BlogPost}
// }

let post = new Post('Post', 'Content')
console.log(post.toString())

let scm = new SocialMediaPost('TestTitle', 'TestContent', 25, 30)
scm.addComment('Good post')
scm.addComment('Very good post')
scm.addComment('Wow')
console.log(scm.toString())

let bp = new BlogPost('Title', 'Content', 2)
console.log(bp.views)
bp.view().view().view()
console.log(bp.views)
