import ShinEventDispatcher from './ShinEventDispatcher'
class bridge extends ShinEventDispatcher {
  constructor() {
    super()
  }
  static get ins() {
    if (!bridge._instance) {
      bridge._instance = new bridge()
    }
    return bridge._instance
  }
}
export default bridge.ins
