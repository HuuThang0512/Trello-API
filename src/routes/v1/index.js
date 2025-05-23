import express from "express"
import { StatusCodes } from "http-status-codes"
import { boardRoute } from "./boardRoute.js"

const Router = express.Router()

Router.get("/status", (req, res) => {})
Router.use("/boards", boardRoute)

export const APIs_V1 = Router
