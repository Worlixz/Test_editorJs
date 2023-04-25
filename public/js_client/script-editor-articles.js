const formulaire = document.getElementById('formulaire')
console.log(formulaire)

const user = 'ted'


formulaire.addEventListener('submit', (e) => {
    e.preventDefault()

    const userFile = document.getElementById('inputFile').files[0]
    const userComment = document.getElementById('inputComments').value
    
    const formData = new FormData()
    formData.append('fileImage', userFile)
    formData.append('userComments', userComment)

    /* fetch('https://httpbin.org/post', {
        method: "POST",
        body: formData
    }) */
    fetch('http://localhost:3000/uploadfetch', {
        method: "POST",
        body: formData
    })
    .then( res => res.json())
    .then( data => console.log(data))
    .catch(err => console.log(err))
})