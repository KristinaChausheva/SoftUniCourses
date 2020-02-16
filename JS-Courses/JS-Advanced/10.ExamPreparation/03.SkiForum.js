
class Forum {
    
    construnctor(id) {
        this.id = id;
        this.users = []; // [{username:email}]
        this.questions = [];
        
        //id++;

    }

    // register(username, password, repeatPassword, email) {
    //     if (username === "" || password === "" || repeatPassword === "" || email === "") {
    //         throw new Error("Input can not be empty");
    //     }
    //     if (password !== repeatPassword) {
    //         throw new Error("Passwords do not match");
    //     }
    //     let user = {
    //         username,
    //         email,
    //     }
    //     return this.users.push(user);

    //     // existing user case to be implement

    //     //user = this._users.find(user => user.username === username);
    //     // let email = this._users.find(user => user.email === email);
        
    //     // for (let i = 0; i < users.length; i++) {
    //     //     const userObj = users[i];
    //     //     if (userobj[]) {
                
    //     //     }
    //     // }
    //     // if (this.users.find(user => user.username === username)) {
    //     //     throw new Error("This user already exist");
    //     // }
        
    // }
}





let obj1 = new Forum(1);
console.log(obj1.users);
console.log(obj1.questions);
console.log(obj1.id);
console.log(obj1);




//console.log(obj1.register('user1','pass1','pass1','email1'));


