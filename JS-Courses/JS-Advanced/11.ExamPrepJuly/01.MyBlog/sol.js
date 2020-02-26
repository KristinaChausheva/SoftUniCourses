class Article {
    constructor(title, creator){
        this.title = title;
        this.creator = creator;
        this.comments = [];
        this.likes = []; // [username]
    }

    get likes (){
        if (this.likes.length === 0) {
            return `${this.title} has 0 likes`;
        }
        if (this.likes.length === 0) {
            return `${this.likes[0]} likes this article`
        } else {
            return `${this.likes[0]} and ${this.likes.length -1}likes this article`
        }
    }
    like(username) {
        
        if (this.likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        }
        this.likes.push(username);
        if (username === this.creator) {
            throw new Error("You can't like your own articles!");
        } else {
            return `${username} liked ${this.title}!`
        }
        
    }
    dislike (username){
        if (!(this.likes.includes(username))) {
            throw new Error("You can't dislike this article!");
        }
        const index = this.likes.indexOf(username);
        if (index > -1) {
        this.likes.splice(index, 1);
        }
        return `${username} disliked ${this.title}"`
    }
    comment (username, content, id){

    }

}

let art = new Article("My Article", "Anny");
console.log(art.like("John"));

console.log(art.likes);
console.log(art.dislike("John"));

 console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));
