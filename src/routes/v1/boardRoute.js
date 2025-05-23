import express from "express"
import { StatusCodes } from "http-status-codes"
import { boardValidation } from "~/validations/boardValidation.js"

const Router = express.Router()
const { createNew } = boardValidation
Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "GET" })
  })
  .post(createNew)

export const boardRoute = Router
