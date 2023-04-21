
export function postImage (image){
    return new Promise((resolve, reject) => {
        if(image){
            const formData = new FormData();
            console.log('formData : ', formData)
            formData.append('nom', 'dumas')
            console.log('formdata 2 : ',formData)
            console.log('je suis auy niveau de fecth : ',image)
            fetch("/upload", {
                method: "POST",
                body: formDataJsonString,
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