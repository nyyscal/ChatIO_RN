import "dotenv/config"
import pg from "pg"

const {Pool} = pg
import {Prismapg} from "@prisma/adapter-pg"
import {PrismaClient} from "@prisma/client"

const connectionString = process.env.DATABASE_URL

const pool = new Pool({
  connectionString
})

const adapter = new Prismapg(pool)

export const prisma = new PrismaClient({adapter})