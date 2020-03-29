import base64Img from 'base64-img'

const getBase64=(path)=>{
    if(!path) return null
    var res =  base64Img.base64Sync(path) 
    return res// you can also to use url
  
  }

  export {getBase64 as default};