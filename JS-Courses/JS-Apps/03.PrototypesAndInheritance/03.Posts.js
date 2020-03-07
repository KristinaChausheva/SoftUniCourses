function result() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }
    
    class SocialMediaPost extends Post {
        constructor(title,content,likes, dislikes){
            super(title,content);   
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        } 
    
        addComment(comment) {
            return this.comments.push(comment);
        }
    
        toString() {
            let output = super.toString() + `\n`;
            output += `Rating: ${this.likes - this.dislikes}\n`;

            if (this.comments.length > 0){
                output += `Comments:\n`;
                output += this.comments.map((c) => ` * ${c}`).join(`\n`);
            }
               
            return output.trim();
        }
    }
    
    class BlogPost extends Post {
        constructor(title,content, views) {
            super(title,content);
            this.views = views;
        }
    
        view(){
            this.views++;
            return this;
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}


 let classes = result();
// let post = new classes.SocialMediaPost ("Post", "Content", 5, 10);

// console.log(post.toString());

// let bp = new BlogPost("Post", "Content", 0 );
// console.log(bp.view());
// console.log(bp.view());
let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

test.addComment("1");
test.addComment("2");
test.addComment("3");
console.log(test.toString());

