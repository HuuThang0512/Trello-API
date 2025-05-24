import Joi from "joi"
import { StatusCodes } from "http-status-codes"
import ApiError from "~/utils/ApiError"

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict().messages({
      "any.required": "Title is required",
      "string.empty": "Title is required",
      "string.min": "Title must be at least 3 characters long",
      "string.max": "Title must be less than 50 characters long",
      "string.trim": "Title must not contain leading or trailing whitespace",
    }),
    description: Joi.string().required().min(3).max(256).trim().strict(),
  })
  try {
    console.log(req.body)
    // Ser abortEarly: false để trả về tất cả lỗi
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    // res.status(StatusCodes.CREATED).json({ message: "POST" })
    next()
  } catch (error) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message),
    )
  }
}

export const boardValidation = {
  createNew,
}
