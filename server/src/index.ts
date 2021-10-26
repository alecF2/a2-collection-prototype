// MATCH THE INTERFACE:
import dbI from '../../src/interfaces/db'

import express from 'express'
import * as r from 'rethinkdb'
import multer from 'multer'
import { join } from 'path'

const port = 4000
const app = express()
const upload = multer()

app.use(express.static(join(__dirname, "..", "..", "build")))
app.use(express.json())

const fields = [
  {
    name: "image",
    maxCount: 1
  },
  {
    name: "pronunciation",
    maxCount: 1
  }
]

app.on("ready", () => {
  app.post("/add_item", upload.fields(fields), async (req, res) => {
    console.log(req.files)
    const files = req.files as Record<string, Express.Multer.File[]> | undefined

    const data = {
      word: req.body.word,
      language: req.body.language,
      translation: req.body.translation,
      example: req.body.example,
      image: {
        mimetype: files?.image[0].mimetype,
        buffer: files?.image[0].buffer,
        originalname: files?.image[0].originalname
      },
      image_desc: req.body.imageDesc,
      pronunciation: {
        mimetype: files?.pronunciation[0].mimetype,
        buffer: files?.pronunciation[0].buffer,
        originalname: files?.pronunciation[0].originalname
      }
    }

    let result: r.WriteResult
    try {
      result = await r.db('a1').table('vocab_items').insert(data).run(connection)
      console.log(result)
      res.send("successfully added vocabulary item!")
    } catch (err) {
      console.log(err)
      res.send("could not add vocabulary item")
    }
  })



  app.use((req, res) => {
    res.sendFile(join(__dirname, "..", "..", "build", "index.html"))
  })

  app.listen(port, async () => {
    console.log("listening on port " + port)
  })
})

// FOR APP.GET VOCABITEM
async getVocab(table:string, uuid:ITractable[]|ITractable, callback: (err:Error, data:Record<string, unknown>) => boolean):Promise<IVocab[]> {
    // eslint-disable-next-line functional/no-throw-statement
    throw new Error('Not implemented!');
    return [];

    console.log(table, uuid, callback);
}

// FOR APP.GET COLLECTION
async getCollection(table:string, uuid:ITractable[]|ITractable, callback: (err:Error, data:Record<string, unknown>) => boolean):Promise<ICollection[]> {
    // eslint-disable-next-line functional/no-throw-statement
    throw new Error('Not implemented!');
    return [];

    console.log(table, uuid, callback);
}

// WHEN INSERTING NEW COLL., NEED TO CREATE NEW UUID W/ VOCAB ITEM
async createUUID(name:string):Promise<string> {
    // eslint-disable-next-line functional/no-let
    let ID!:string;
    await r.uuid(name).run(this._conn as r.Connection, (err:Error, res:any) => {
        if(err) {
            console.log('Error creating UUID on: ' + name);
            // eslint-disable-next-line functional/no-throw-statement
            throw err;
        } else {
            ID = res as string;
        }
    })
    return ID;
}

let connection: r.Connection
r.connect({ host: "localhost", port: 28015 }, (err, conn) => {
  if (err) {
    console.log(err)
    throw err
  }
  connection = conn
  console.log("connected to rethinkDB!")
  app.emit("ready")
})