/**
 * 
 * @param this
 * @param func 要进行debounce的方法
 * @param wait 等待时间，默认500ms
 * @param immediate 是否立即执行
 */
export function debounce(this: any,func: any, wait: number = 500, immediate: boolean = false): any {
  let timmer: any = null;
  let context: any = this
  return ( ...args: any[]) => {
    if(timmer) {
      clearTimeout(timmer)
      timmer = null
    }
    if(immediate) {
      var sign:boolean = !timmer
      timmer = setTimeout(
        () => {
          clearTimeout(timmer)
          timmer = null
        },
        wait
      )
      if(sign) func.apply(context, args)
    } else {
      timmer = setTimeout( func.apply(context, args), wait)
    }
  }
}

/**
 * 
 * @param this
 * @param func 要进行throttle的方法
 * @param wait 等待时间，默认500ms
 * @param immediate 是否立即执行
 */
interface Options {
  leading: boolean, //函数在每个等待时延的开始被调用，默认值为false
  trailing: boolean //函数在每个等待时延的结束被调用，默认值是true
}
export function throttle(this: any,func: any, wait: number = 500, options: Options): any {
  let timmer: any = null
  let args: any = null
  let context: any = this
  let previous: number = 0
  if(!(options.leading && options.trailing)) throw new Error('at least one is true')
  let later: any = (): void => {
    previous = options.leading ? new Date().getTime() : 0
    timmer = null
    func.apply(context, args)
    if(!timmer) context = args = null
  }
  let throttled = () => {
    let now: number = new Date().getTime()
    if(!options.leading) previous = now
    let remmaining = wait - (now - previous)
    context = this
    args = arguments
    if(remmaining <= 0 || remmaining > wait) {
      if(timmer) {
        clearTimeout(timmer)
        timmer = null
      }
      previous = now
      func.apply(context, args)
      if(!timmer) context = args = null
    } else if(!timmer && options.trailing) {
      timmer = setTimeout(later, remmaining)
    }
  }
  return throttled
}