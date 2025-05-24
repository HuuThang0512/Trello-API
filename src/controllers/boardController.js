import { StatusCodes } from "http-status-codes"
const createNew = async (req, res, next) => {
  try {
    console.log(req.body)
    // next()
    res.status(StatusCodes.CREATED).json({ message: "BOARD CONTROLLER" })
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
}
