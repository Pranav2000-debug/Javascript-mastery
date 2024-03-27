// let myName = 'Hitesh';
// console.log(myName.trueLength); // self property; method



    
// let myHeros = ['Thor', 'Jack Black'];
 
// let heroPower = {
//     thor: 'hammer',
//     'Jack Black': 'tenacious D',

//     getsJackPower: function() {
//         console.log(`Jack's power is ${this["Jack Black"]}`);
//     }
// }

// class User {
//     constructor (username, email) {
//         this.username = username;
//         this.email = email
//     }
//     encryptMethod() {
//         console.log(`password is ${this.email}`);
//     }
// }

// class Teacher extends User {
//     constructor (username, email) {
//         super(username);
//         this.email = email;
//     }
//     logUser () {
//         console.log(`${this.username}`);
//     }
// }

// const user1 = new User('userOne', 'user@gmail.com');
// const teacher1 = new Teacher('teacherOne', 'teach@gmail.com');
// teacher1.encryptMethod();
// teacher1.logUser();
// user1.encryptMethod();

class User{
    constructor(Username) {
        this.Username = Username;
    }

    logMe() {
        console.log(` USERNAME: ${this.Username}`);
    }

    static createID() {
        return `123`;
    }
}

const user = new User('hitesh');
// console.log(user.createID());

class Teacher extends User{
    constructor(username,email){
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'apple@phone.com');
iphone.logMe();