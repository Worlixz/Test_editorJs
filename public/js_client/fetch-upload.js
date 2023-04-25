
export function postImage (image){
    return new Promise((resolve, reject) => {
        if(image){

            console.log('image dans fetch-upload', image[0])

            const formData = new FormData();

            formData.append('image', image)

            fetch("http://localhost:3000/upload", {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
            .then( res => console.log(res) )
            .then( data => console.log(data))
            .catch( err => console.error(err))
        }else{
            reject(console.log(-1000))
        }
    })
}