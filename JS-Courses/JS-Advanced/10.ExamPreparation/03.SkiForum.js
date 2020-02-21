
class Forum {

        id = 1;
        users = []; // [{username:email}]
        questions = [];
        currentLoggedUsers = [];
    

    register(username, password, repeatPassword, email) {
        if (!(username, password, repeatPassword, email)) {
            throw new Error('Input can not be empty');
        }
        if (password !== repeatPassword) {
            throw new Error('Passwords do not match');
        }
        if (this.users.find(x => x.username === username) || this._users.find(u => u.email === email)) {
            throw new Error("This user already exists!");
        }
        //console.log(this.users.push({username,email}));
        this.users.push({
            username,
            email,
            password
        })
        this.currentLoggedUsers.push(username);
        return `${username} with ${email} was registered successfully!`
    }

    login(username, password){
        if (!(this.users.find(x => x.username === username))) {
            throw new Error("There is no such user");
        }
        if ((this.users.find(x => x.username === username) && x.password === password)){
            return "Hello! You have logged in successfully"
        }
    }

    logout(username, password){
        if (!(this.users.find(x => x.username === username))) {
            throw new Error("There is no such user");
        }
        if ((this.users.find(x => x.username === username) && x.password === password)){
            return "You have logged out successfully"
        }
        this.currentLoggedUsers = this.currentLoggedUsers.filter(x => !x.username)
    }

    postQuestion(username, question){
        if ((!(this.users.find(x => x.username === username)) && this.curentLoggedUsers.includes())) {
            throw new Error("You should be logged in to post questions");
        }
        if (question === "") {
            throw new Error("Invalid question");
        }
        this.questions.push({
            id:this.id,
            question,
            postedBy: username,
            answers: []
        });
        this.id++;
        return "Your question has been posted successfully"
    }

    postAnswer(username, questionId, answer){
        if ((!(this.users.find(x => x.username === username)) && this.curentLoggedUsers.includes())) {
            throw new Error("You should be logged in to post answers");
        }
        if (!answer) {
            throw new Error("Invalid answer");
        }
        if (questionId < this.id || questionId < 1) {
            throw new Error("There is no such question");
        }

        let questionRef = this.questions.find(question => question.id === questionId);
        questionRef.answers.push({
            answeredBy: username,
            answer
        })
        return "Your answer has been posted successfully"
    }

    showQuestions(){

        let result = "";

        for (const q of this._questions) {
            result += `Question ${q.id} by ${q.username}: ${q.question}\n`;

            for (const answer of q.answers) {
                result += `---${answer.username}: ${answer.answer}\n`;
            }
        }

        return result.trim();
        
        // Question ${id} by ${username}: ${question}
        // ---${username}: ${answer}
        // Question ${id} by {username}: {question}
        // ---{username}: {answer}
        // ---{username}: {answer}

    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());
console.log(forum.questions);







//console.log(obj1.register('user1','pass1','pass1','email1'));


