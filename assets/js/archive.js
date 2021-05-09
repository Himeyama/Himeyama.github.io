console.log("%cストップ!", "font-size: 6em; font-weight: bold; color: #3F51B5;")
console.log('%cもし誰かにここにコピペしろと言われたなら...', 'color: #212121; font-size: 1.4em;')
console.log('%cここに何かを貼り付けたら...', 'font-weight: bold; color: #f44336; font-size: 1.6em;')

function archive_date_post(){
    let e = document.getElementsByClassName("archive-date")
    for(f of e)
        f.innerHTML = (new Era(f.innerHTML)).getWareki()
}

archive_date_post()

