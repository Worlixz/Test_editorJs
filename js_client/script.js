const form = document.getElementById('form')
const data_text = document.getElementById('test_text')
const addAuthor = document.getElementById('addAuthor')
const divAuthor = document.getElementById('divAuthor')

console.log(divAuthor)

let data;
data_text.addEventListener('change', (e) => {
    console.log(e.target.value)
    data = e.target.value
})
console.log(addAuthor)

addAuthor.addEventListener('onclick', (e) => {
    console.log(e)
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
    console.log('je suis la data du input supplémentaire : ',{date})
})


function test (e){
    console.log('je dans la fonction')
}  