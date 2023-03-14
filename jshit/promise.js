// let check = async (num) => {
//     if (num > 10) {
//         return('done', num)
//     } else {
//         throw new Error('nononono')
//     }
// }

// check(100);



// axios.get("https://swapi.dev/api/people/2/")
//     .then((res) => {
//         console.log("successfrfr", res)
        
//     })
//     .catch((e) => {
//         console.log("nopo", res)
//     })
    
const getStarWarsChar = async(num) => {
    try {
        let sauce = await axios.get(`https://swapi.dev/api/people/${num}/`);
        console.log(sauce.data);
    } catch (error) {
        console.log("fail",error)
    }

};

//getStarWarsChar(3);

const getDadJokes = async(num) => {
    try {let config = {headers: {Accept:'application/json' } };
        let sauce = await axios.get(`https://icanhazdadjoke.com/`, config);//additional headers to pass
        console.log(sauce.data.joke);  //joke is in sauce.data.joke
    } catch (error) {
        console.log("fail",error)
    }

};

//getDadJokes();

let jokes = document.querySelector("#joke")
let jokeButton = document.querySelector("#b1")



const getNewDadJokes = async() => {
    try {
        let config = {headers: {Accept:'application/json' } };
        let sauce = await axios.get(`https://icanhazdadjoke.com/`, config);//additional headers to pass
        //console.log(sauce.data.joke);  //joke is in sauce.data.joke
        return sauce.data.joke;
    } catch (error) {
        console.log("fail",error)
    }
};

let showDadJoke = async() => {
    try {
        let jokeReceived = await getNewDadJokes();
        //console.log(sauce.data.joke);  //joke is in sauce.data.joke
        let newLi = document.createElement('LI')
        newLi.append(jokeReceived);
        jokes.append(newLi)
} catch (error) {
    console.log("cant print",error)
}
}

jokeButton.addEventListener('click', showDadJoke)