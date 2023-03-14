let express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json')
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended: true}))
const { v4: uuid } = require('uuid');
// app.use((req, res) => {
//     console.log("we got new req")
//     //console.dir(req)
//     //res.send("this is response form serverv2")
//     //res.send({color: 'red'})
//     res.send('C:\Users\arya2\Documents\Webd\express\index.html')
// })
//app.use executed for all requestss
//req incoming req, res outgoing response
//we cant have http req with more than one response


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

let comments = [
    { id: uuid(),
        username: "fevicol",
        comment: "Nope nope"
    },
    {id: uuid(),
        username: "zieler",
        comment: "chinko chan fr"
    },
    {id: uuid(),
        username: "Mr.mime",
        comment: "m"
    },
    {id: uuid(),
        username: "[deleted]",
        comment: "[removed]"
    }
]

app.get('/comments', (req,res) =>{
    res.render('comments.ejs', {comments : comments})
})

app.get('/comments/new', (req,res)=>{
    res.render('new.ejs')
})
app.post('/comments',(req,res) =>{
    const { username, comment } = req.body;
    comments.push({username,comment, id: uuid()})
    console.log(req.body)
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res)=>{
    const { id } = req.params;
    const comment =comments.find(c => c.id === id)
    res.render('show.ejs', comment)
})

app.get('/comments/:id/edit', (req,res)=>{
    const { id } = req.params;
    const comment =comments.find(c => c.id === id)
    res.render('edit.ejs', {comments : comments})
})



app.patch('/comments/:id', (req,res)=>{
    const newCommentText = req.body.comment;
    const { id } = req.params;
    const foundComment =comments.find(c => c.id === id)
    foundComment.comment = newCommentText;
    res.redirect('/comments')
})





app.get('/cats', (req,res) => {
    console.log('cat request');
    res.render('cats.ejs')
})


app.get('/tacos', (req,res) => {

    console.log('got taco');
    res.send('taco received')
})

app.post('/tacos', (req,res) => {

    console.log(req.body);
    res.send('taco posted')
})





app.get('/r/:subreddit',(req,res) => {
    const {subreddit} = req.params; //destructured
    const data = redditData[subreddit]
   // console.log(data)
    res.render('subreddit.ejs', {data : data})
})


app.get('/', (req,res) => {
    console.log('welcome');
    console.log(req.body);
    let number = Math.random()
    res.render('home.ejs', {randomed_number : number })
})

app.get('/search', (req,res) =>{
    let {arr} = req.query
    console.log(req.query)
    res.send(`<h1>${arr}</h1>  <button>? </button>`)
})

// app.get('/r/:subredit', (req,res) => {
//     console.log(req.params.subredit);
//     res.send(`<h1>${req.params.subredit}</h1>  <button>subreddit </button>`)
// })//parameters in routess. after colon is variable

app.get('/cats', (req,res) => {
    console.log('cat request');
    res.send('<button> meow</button>')
})

app.get('/dogs', (req,res) => {
    console.log('dog request');
    res.send('<h1> whoof</h1>')
})

app.post('/cats', (req, res) => {
    res.send('cat post request successful')
})//use postman


app.get('*', (req,res) => {
   // console.log('unknown');
    res.send('<h1> this link doent exists</h1>')
})//* eans for all. it comes at last

app.listen(3000, ()=>{
    console.log("port 3000")
} )