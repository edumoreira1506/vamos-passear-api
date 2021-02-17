export default class HomeController {
  static async index(_, res) {
    return res.send('Online api!')
  }
}
