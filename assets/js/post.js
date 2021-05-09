function date_post(){
    let e = document.getElementsByClassName("post-d")
    for(f of e)
        f.innerHTML = (new Era(f.innerHTML)).getWareki()
}

date_post()