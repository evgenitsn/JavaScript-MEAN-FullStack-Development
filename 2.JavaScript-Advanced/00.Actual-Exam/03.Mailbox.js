/**
 * Created by evgeni.tsn on 11/13/2016.
 */

class MailBox {
  constructor (subject, text) {
    this.subject = subject
    this.text = text
    this.mails = []
  }

  addMessage (subject, text) {
    this.mails.push({subject, text})
    return this
  }

  get messageCount () {
    return this.mails.length
  }

  deleteAllMessages(){
    this.mails = []
  }

  findBySubject(substr){
    let found = []
    for (let mail of this.mails) {
      if( mail.subject.indexOf(substr) >= 0){
        found.push(mail)
      }
    }
    return found
  }


  toString () {
    if(this.mails.length === 0){
      return ' * (empty mailbox)'
    } else {
      let output = ''
      for (let mail of this.mails) {
        output+= ` * [${mail.subject}] ${mail.text} `+'\n'
      }
      output = output.substring(0, output.length - 1);
      return output
    }
  }
}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
  JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
  JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
//
console.log("New mailbox:\n" +
  new MailBox()
    .addMessage("Subj 1", "Msg 1")
    .addMessage("Subj 2", "Msg 2")
    .addMessage("Subj 3", "Msg 3")
    .toString());
