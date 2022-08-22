 //mathopertions 
 const mathOperations1 = function () {
    const add = function (x, y) {
        return x + y;
    }

    const subtract = function (x, y) {
        return x - y;
    }

    const multiply = function (x, y) {
        return x * y;
    }

    const divide = function (x, y) {
        return x / y;
    }
    return {
        add: add,
        sub: subtract,
        mult: multiply,
        div: divide
    }
}

const m = mathOperations1();
console.log(m.add(13 ,29))
console.log(m.mult(1.75,24))
console.log(m.mult(7,m.div(36,6)))


//

const UsersModule = function () {
    const _users = ['Aaron', 'Avi'];

    const addUser = function (user) {
        _users.push(user)
    }

    const listUsers = function () {
        for (let user of _users) {
            console.log(user)
        }
    }

    return {
        addUser: addUser,
        listUsers: listUsers
    }
}

const usersModule = UsersModule()

usersModule.addUser('Narkis')
usersModule.addUser('amit')
usersModule.addUser('rotmona')
usersModule.listUsers()





///excrcies 1 

const StringFormatter =()=>{
    const capitalizeFirst =(string)=>{
        const NewWord = string.charAt(0).toUpperCase()+string.slice(1)
        return NewWord;
    }


    const skewerCase =(string)=>{
        const NewWord = string.replace(" ","-")
        return NewWord;
    } 
    return{
        capitalizeFirst:capitalizeFirst,
        skewerCase:skewerCase
    }

}

const formatter = StringFormatter()

console.log(formatter.capitalizeFirst("dorothy")) //should print Dorothy
console.log(formatter.skewerCase("blue box")) //should print blue-box



//excrices 2 

const Bank = ()=>{
    let money=500;

    const depositCash =(cash)=>{
        money+=cash;

    }

    const checkBalance  =(cash)=>{
        console.log(money)
        
    }

    return{
        deposit:depositCash,
        showBalance:checkBalance
    }

}


const bank = Bank()
bank.deposit(200)
bank.deposit(250)
bank.showBalance() //should print 950



//excrise 3 
const getYouTubeVideoIdFromUrl = (url) => {
    // Our regex pattern to look for a youTube ID
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    //Match the url with the regex
    const match = url.match(regExp);
    //Return the result
    return match && match[2].length === 11 ? match[2] : undefined;
  };

const SongsManager=()=>{
    songs={};

    const addSong=(name,url)=>{
        songs[name]=getYouTubeVideoIdFromUrl(url)
    }

    const getSong=(songName)=>{
        console.log("https://www.youtube.com/watch?v="+songs[songName])
    }

    return{
        addSong:addSong,
        getSong:getSong
    }

}

const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")
songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ