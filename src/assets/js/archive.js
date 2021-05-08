function archive_date_post(){
    let e = document.getElementsByClassName("archive-date")
    for(f of e)
        f.innerHTML = (new Era(f.innerHTML)).getWareki()
}

archive_date_post()