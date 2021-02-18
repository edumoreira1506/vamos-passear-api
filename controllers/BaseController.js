export default class BaseController {
  constructor({
    schema,
    name,
  }) {
    this.schema = schema
    this.name = name
  }

  store(req, res, next) {
  }

  remove(req, res, next) {
  }

  index(req, res, next) {
  }

  show(req, res, next) {
  }

  update(req, res, next) {
  }
}
