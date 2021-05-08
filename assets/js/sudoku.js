class SudokuTable{
    constructor(){
        this.list = {}
        this.table = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0]]
    }

    existNumber(){
        this.existNum = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0], 
            [0, 0, 0, 0, 0, 0, 0, 0, 0]]
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                if(this.table[i][j] == 0){
                    this.existNum[i][j] = false
                }else{
                    this.existNum[i][j] = true
                }
            }
        }
    }

    play(){
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                if(this.table[i][j] == 0){
                    this.search(i, j)
                }
            }
        }
    }

    aryDelete(ary, n){
        var a = []
        for(var i = 0; i < ary.length; i++){
            if(ary[i] != n){
                a.unshift(ary[i])
            }
        }
        return a
    }

    search(i, j){
        var ary = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        var b = [parseInt(i / 3) * 3, parseInt(j / 3) * 3]
        var e = [b[0] + 2, b[1] + 2]
        for(var x = b[0]; x <= e[0]; x++){
            for(var y = b[1]; y <= e[1]; y++){
                ary = this.aryDelete(ary, this.table[x][y])
            }
        }
        for(var n = 0; n < 9; n++){
            ary = this.aryDelete(ary, this.table[i][n])
            ary = this.aryDelete(ary, this.table[n][j])
        }
        this.list[[i, j]] = ary
    }

    check(x, y, num){
        var b = [parseInt(x / 3) * 3, parseInt(y / 3) * 3]
        var e = [b[0] + 2, b[1] + 2]
        for(var i = b[0]; i <= e[0]; i++){
            for(var j = b[1]; j <= e[1]; j++){
                if(num == this.table[i][j]){
                    return false
                }
            }
        }
        for(var n = 0; n < 9; n++){
            if(num == this.table[x][n] || num == this.table[n][y]){
                return false
            }
        }
        return true
    }

    run(){
        this.old_list = undefined
        this.play()
        this.lpos = new Array(Object.keys(this.list).map(function(k,v){return k}).length).fill(0)
        this.lary = Object.keys(this.list).map(x => [x, this.list[x]])
        this.lidx = 0

        while(this.lidx < Object.keys(this.list).map(function(k,v){return k}).length){
            if(this.check(this.lary[this.lidx][0].split(",")[0], this.lary[this.lidx][0].split(",")[1], this.lary[this.lidx][1][this.lpos[this.lidx]])){
                this.table[this.lary[this.lidx][0].split(",")[0]][this.lary[this.lidx][0].split(",")[1]] = this.lary[this.lidx][1][this.lpos[this.lidx]]
                this.lidx++
            }else{
                if(this.lary[this.lidx][1].length - 1 <= this.lpos[this.lidx]){
                    this.backtrack()
                }else{
                    this.lpos[this.lidx]++
                }
            }
        }
    }

    backtrack(){
        this.lpos[this.lidx] = 0
        this.lidx--
        this.table[this.lary[this.lidx][0].split(",")[0]][this.lary[this.lidx][0].split(",")[1]] = 0
        if(this.lary[this.lidx][1].length - 1 <= this.lpos[this.lidx]){
            this.backtrack()
        }else{
            this.lpos[this.lidx]++
        }
    }

    printTable(){
        var s = ""
        for(var i = 0; i < 9; i++){
            for(var j = 0; j < 9; j++){
                s += `${this.table[i][j]}`
            }
            s += "\n"
        }
        console.log(s)
    }
}

function sudoku_main(){
    html = ""
    for(i = 0; i < 9; i++){
        html += "<tr>"
        for(j = 0; j < 9; j++){
            html += `
                <td>
                    <div class="input-group mb-3">
                        <select class="form-select border-0 h2-mktg" id="sudoku${i}${j}">
                            <option value="" class="text-body"></option>`
            for(k = 0; k < 9; k++){
                html += `<option value="${k+1}" class="text-body">${k+1}</option>`
            }
            html += `</select>
                    </div>
                </td>`
        }
        html += "</tr>"
    }
    document.getElementById("sudoku").innerHTML = html
}

function sudoku_run() {
    s = new SudokuTable
    console.log(s.table)
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (document.getElementById(`sudoku${i}${j}`).value != "") {
                s.table[i][j] = document.getElementById(`sudoku${i}${j}`).value
            }
        }
    }
    s.run()
    s.printTable()
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if ((typeof s.table[i][j]) == "number") {
                document.getElementById(`sudoku${i}${j}`).value = s.table[i][j]
            }
        }
    }
}

function sudoku_clear() {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            document.getElementById(`sudoku${i}${j}`).value = ""
        }
    }
}

sudoku_main()
