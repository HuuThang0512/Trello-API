import { StatusCodes } from "http-status-codes"
import { BoardService } from "~/services/boardService"
const createNew = async (req, res, next) => {
  try {
    const createdBoard = await BoardService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
  }
}

export const boardController = {
  createNew,
}
