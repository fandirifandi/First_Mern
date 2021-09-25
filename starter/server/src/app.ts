import express, {Request , Response } from 'express'
import  mongoose  from 'mongoose';
import cors from 'cors';

const app = express()
const PORT = 8080

const {
    MONGODB_ATLAS_USERNAME,
    MONGODB_ATLAS_PASSWORD,
    MONGODB_ATLAS_DBNAME
} = process.env

const uri = `mongodb+srv://${MONGODB_ATLAS_USERNAME}:${MONGODB_ATLAS_PASSWORD}@cluster0.chkcn.mongodb.net/${MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true}
app.use(cors())

app.get('/', (req: Request, res: Response) =>{
    res.send('Hello ini home')
})

app.get('/coba', (req: Request, res: Response) =>{
    res.send('Hello ini coba')
})

mongoose.set('useFindAndModify', true)
mongoose.connect(uri , options)
    .then(() => {
        app.listen(PORT, () => {
            console.info(`App is listening at port ${PORT}`)
        })
    })
    .catch((error) =>{
        throw error
    })

app.listen(PORT, () => {
    console.info(`Server Running at port ${PORT}`)
})