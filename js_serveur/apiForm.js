module.exports = (app) => {
    app.post('/api/form', (req, res) => {
        data_api = req.body
        data_api_editor = data_api.editor
        console.log(data_api.editor)  

        data_api_editor.blocks.map(element => {
            console.log(`id : ${element.id}  |  type : ${element.type}`)
        })
    })
}