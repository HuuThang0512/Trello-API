import {slugify} from "~/utils/formatter"
import {ColumnModel} from "~/models/columnModel"
import {BoardModel} from "~/models/boardModel"
import ApiError from "~/utils/ApiError"
import {cloneDeep} from "lodash"

const createNew = async (reqBody) => {
  try {
    const newColumn = {
      ...reqBody,
      slug: slugify(reqBody.title),
    }
    const createdColumn = await ColumnModel.createNew(newColumn)
    const getNewColumn = await ColumnModel.findOneById(createdColumn.insertedId)
    if (getNewColumn) {
      // Xử lí cấu trúc data ở đây trước khi trả dữ liệu về
      getNewColumn.cards = []
      // Cập nhật mảng columnOrderIds của board
      const a = await BoardModel.pushColumnOrderIds(getNewColumn)
      return a
     }
    return getNewColumn
  } catch (error) {
    throw error
  }
}

export const columnService = {
  createNew,
}
