const form = document.getElementById('form')
const date_parution = document.getElementById('date_parution')


let date;
date_parution.addEventListener('change', (e) => {
    console.log(e.target.value)
    date = e.target.value
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    editor.save()
    .then(data => {
        let data_article = {
            editor : data,
            date
        }

        if(window.fetch){
            fetch(form.action, {
                method: "POST",
                body: JSON.stringify(data_article),
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
