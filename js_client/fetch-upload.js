
export function postImage (image){
    return new Promise((resolve, reject) => {
        if(image){
            const formData = new FormData(image);
            console.log("formData : ",formData)
            console.log('je suis au niveau de fecth : ',image)
            fetch("/upload", {
                method: "POST",
                body: formData,
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                }
            })
        }else{
            reject(console.log(-1000))
        }
    })
}