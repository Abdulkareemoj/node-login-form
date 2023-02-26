const express = require('express');
const mysql = require("mysql")
const dotenv = require('dotenv')

const app = express();


dotenv.config({ path: './.env'})
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})


db.connect((error) => {
    if(error) {
        console.log(error)
    } else {
        console.log("MySQL connected!")
    }
})

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', (req, res) => {
  res.render('index');
});

// about page
// app.get('/about', (req, res)=> {
//   res.render('views/pages/about');
// });


// app.get("/register", (req, res) => {
//     res.render("/views/pages")
// })

// app.get("/login", (req, res) => {
//     res.render("/views/pages")
// })


// app.post("/auth/register", (req, res) => {    
//     const { name, email, password, password_confirm } = req.body

//     db.query('SELECT email FROM users WHERE email = ?', [email], async (error, result) => {
//         if(error){
//             console.log(error)
//         }

//         if( result.length > 0 ) {
//             return res.render('register', {
//                 message: 'This email is already in use'
//             })
//         } else if(password !== password_confirm) {
//             return res.render('register', {
//                 message: 'This email is already in use'
//             })
//         }

//         let hashedPassword = await bcrypt.hash(password, 8)

//         console.log(hashedPassword)
       
//         db.query('INSERT INTO users SET?', {name: name, email: email, password: hashedPassword}, (err, result) => {
//             if(error) {
//                 console.log(error)
//             } else {
//                 return res.render('register', {
//                     message: 'User registered!'
//                 })
//             }
//         })        
//     })
// })

app.listen(5000, ()=> {
    console.log("server started on port 5000")
})