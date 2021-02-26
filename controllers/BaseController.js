export default class BaseController {
  constructor({
    schema,
    name,
  }) {
    this.schema = schema
    this.name = name
  }

  validatePayload(payload) {
    const { schema } = this
    const { error, value } = schema.validate(payload)
    console.log(error, 'error')
    console.log(value, 'value')
  }

  store = (req, res, next) => {
    console.log(req.body)
    console.log(req)
    const payload = req.body ?? {}

    this.validatePayload(payload)
  }

  remove = (req, res, next) => {
  }

  index = (req, res, next) => {
  }

  show = (req, res, next) => {
  }

  update = (req, res, next) => {
  }
}
