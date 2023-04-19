console.log('hello world')

const form = document.getElementById('formArticle')

console.log(form)


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData()
    console.log('formData : ',formData)

    if(window.fetch){

    }

})