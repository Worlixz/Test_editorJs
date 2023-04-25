function treatementPos (image, comments) {
    return new Promise((resolve, reject) => {
        const imageUser = image.fileImage
        if(imageUser.mimetype.startsWith("image")){
            const destructuring = imageUser.name.split('.')
    
            const name = destructuring[0].split(' ').join('_')
            const extension = destructuring[1]
    
            imageUser.name = (name + '_' + Date.now() + '.' + extension)
          
    
            const url = '/upload/'+ imageUser.name
            
            imageUser.mv(process.cwd()+ '/upload/' + imageUser.name)
    
            resolve({
                success: 1,
                file: {
                    url
                }
            })
        }

        if (!imageUser){
            console.log('je suis dans le premier if')
            reject (res.sendStatus(400));
        } 
        if (!imageUser.mimetype.startsWith("image")){
            console.log('je suis dans le deuxième if ')
            reject (res.status(400))       
        }

    })
}

module.exports = treatementPos
