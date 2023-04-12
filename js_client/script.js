const form = document.getElementById('form')
const data_text = document.getElementById('test_text')
const addAuthor = document.getElementById('addAuthor')
const divAuthor = document.getElementById('divAuthor')

console.log(divAuthor)

let data_date;
data_text.addEventListener('change', (e) => {
    console.log(e.target.value)
    data_date = e.target.value
})
console.log(addAuthor)


form.addEventListener('submit', (e) => {
    e.preventDefault()
    editor.save()
    .then(data => {
        let bis = {
            dataEditor : data,
            data_date
        }

        if(window.fetch){
            fetch(form.action, {
                method: "POST",
                body: JSON.stringify(bis),
                headers: {
                    "Content-type": "application/json",
                    'Accept': "application/json"
                }
            })
            .catch(err => {
                console.log(err)
            })
        }else{
            console.log("Merci d'utiliser un navigateur à jour :) ")
        }
    })
})


/*  editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
    }).catch((error) => {
        console.log('Saving failed: ', error)
    });
    console.log('je suis la data du input supplémentaire : ',{date}) */