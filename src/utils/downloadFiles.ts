/**
 * 下载一个链接
 * @param link 链接
 * @param name 文件名
 */
export function download(link: string, name?: string) {
  if(!name) {
    name = link.slice(link.lastIndexOf('/') + 1)
  }
  let eleLink: any = document.createElement('a')
  eleLink.download = name
  eleLink.style.display = 'none'
  eleLink.href = link
  document.body.appendChild(eleLink)
  eleLink.click()
  document.removeChild(eleLink)
}

/**
 * 浏览器下载一个静态文件
 * @param name 
 * @param content 
 */
export function downloadFile(name: string, content: any) {
  if(!(content instanceof Blob)) {
    content = new Blob([content])
  }
  const link: string = URL.createObjectURL(content)
  download(link, name)
}