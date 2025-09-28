/**
 * 复制字符串至剪切板
 * @param {string} val 待复制值
 * @returns 
 */
export function copyToClipBoard(val) {
  const inputEl = document.createElement('input')
  inputEl.value = val
  document.querySelector('main')?.appendChild(inputEl)
  inputEl.select()
  const flag = document.execCommand('copy')
  inputEl.remove()
  return flag
}

// typeof link: https://juejin.cn/post/7000300249235357709#heading-3
export function myTypeof(data) {
  return data instanceof Element ? "element" :
    Object.prototype.toString.call(data).replace(/\[object\s(.+)\]/, "$1").toLowerCase()
}

/**
 * 根据模板获取对象 - 自用
 * @param {object} tmpl 模板
 * @param {object} obj 源对象
 * @return {object}
 */
export function getObjectByTmpl(tmpl, obj) {
  const res = {}
  if(myTypeof(tmpl) !== 'object') return res
  if(myTypeof(obj) !== 'object') obj = {}
  // 遍历模板属性，从obj中获取对应值
  Object.entries(tmpl).forEach(([k, v]) => {
    /**
     * 嵌套模板，值类型为对象。递归，根据子模板该对象值
     * Example:
     * tmpl: { ..., user: { name: '', age: '' } }
     * obj: { ..., user: { name: 'Tom', age: 25, tel: 13311112222 } }
     */
    if(myTypeof(v) === 'object') res[k] = getObjectByTmpl(v, obj[k])
    /**
     * 嵌套模板，值类型为数组。递归，根据子模板获取该数组值
     * Example:
     * tmpl: { ..., addresses: [{ province: '', city: '', area: '', detail: '' }] }
     * obj: { ..., addresses: [{},{},{}] }
     */
    else if(myTypeof(v) === 'array') {
      res[k] = v.length && myTypeof(v[0]) === 'object'
        ? (obj[k]?.map(p => getObjectByTmpl(v[0], p))??[]) : obj[k]
    }
    // 模板值为其它类型时，直接根据属性名从obj中获取对应值
    else res[k] = obj[k]
  })
  return res
}

/**
 * 根据模板获取对象数组 - 自用
 * @param {object} tmpl 模板
 * @param {array} arr 源数组
 * @returns 
 */
export function getObjectArrByTmpl(tmpl, arr) {
  return myTypeof(arr) === 'array' && arr.length
    ? arr.map(p => getObjectByTmpl(tmpl, p)) : []
}

/**
 * 节流函数
 * @param {function} fn 执行函数
 * @param {number} interval 间隔时间，单位：ms
 * @param {object} _this context
 * @return {function} throttle func
 * @example 
 * const count = () => { console.log('counted') }
 * window.addEventListener('resize', throttle(count, 500))
 */
export function throttle(fn, interval = 300, _this) {
  let prev = + new Date() // 开始时间 ms
  return function(...args) {
    let curr = + new Date() // 当前时间 ms
    if(curr - prev > interval) { // 超出间隔，执行
      prev = curr
      _this ? fn.call(_this, ...args) : fn(...args)
    }
  }
}

/**
 * 防抖函数，去弹跳
 * @param {function} fn 执行函数
 * @param {number} delay 延时，单位：ms
 * @param {object} _this context
 * @return {function} debounce func
 * @example 
 * const count = () => { console.log('counted') }
 * window.addEventListener('resize', debounce(count, 500))
 */
export function debounce(fn, delay = 300, _this) {
  let timer // 计时器
  return function(...args) {
    timer && clearTimeout(timer) // 清除delay延时内存在的计时器
    // 延时执行fn
    timer = setTimeout(() => {
      _this ? fn.call(_this, ...args) : fn(...args)
    }, delay)
  }
}

/**
 * 预加载图片
 * @param {Array} preloadImgs 图片列表
 */
export function preloadImg(preloadImgs) {
  Object.keys(preloadImgs).forEach(image => {
    new Image().src = image
  })
}