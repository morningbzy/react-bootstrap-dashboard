function genImg(h, w) {
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="_gen_img_${Math.random()}" x="0px" y="0px" xml:space="preserve" height="${h}px" width="${w}px"><g><rect height="${h}" width="${w}" style="fill: rgba(0,0,0,.25)"/></g></svg>`;
}

export {genImg};