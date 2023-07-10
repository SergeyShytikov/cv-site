import * as cv from "./cv.json"

export default function getCvData(req, res) {
  res.status(200).json(cv)
}
