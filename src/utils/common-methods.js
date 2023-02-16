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