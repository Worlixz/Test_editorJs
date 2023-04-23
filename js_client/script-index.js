import { postImage } from "./fetch-upload.js";
import { altertaniveUp } from "../js_serveur/functionPostingImage.js";



const form = document.getElementById('form')
const date_parution = document.getElementById('date_parution')

const editor = new EditorJS({
    holder: "editorjs",
    tools: {
        header: {
            class: Header,
            config : {
                placeholder: 'Mettre un titre',
                shortcut: 'CMD+SHIFT+h',
                levels: [1,2,3],
                defaultLevel: 1
            }
        },
        list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+l',
            config: {
                defaultStyle: 'unordered'
            }
        },
        quote: {
            class: Quote,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+q',
            config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
            }
        },
        image: {
            class: ImageTool,
            config: {
                // En passant par cette méthode l'image est bien enregistré en local mais il n'u a aucun retour afin de EditorJS puisse prendre connaissance de l'upload de l'image
                endpoints: {
                    byFile: "http://localhost:3000/upload"
                }
                // via cette méthode impossible de récupérer l'image pour l'enregistré dans un dossier local
                /* uploader: {
                    uploadByFile(file){
                    console.log('file dans script-index : ',file)
                  // your own uploading logic here
                    return postImage(file)
                    .then(() => {
                        return {
                            success: 1,
                            file: {
                                url: 'tetete'
                        }
                        }
                     }).catch((err) => {
                        console.log(err)
                    })
                    },
                } */
            }
        } 
        /* image: {
            class: ImageTool,
            config: {
                uploader: {
                  uploadByFile(file){
                  // your own uploading logic here
                  return postImage(file).then((success) => {
                    return {
                      success: 1,
                      file: {
                        url: 'https://codex.so/upload/redactor_images/o_80beea670e49f04931ce9e3b2122ac70.jpg',
                        // any other image data you want to store, such as width, height, color, extension, etc
                      }
                    };
                  });
                },
                }
            }
        } */
    }
})


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
