dec2bin = num =>{
    if(num < 0) num += 256;
    str = num.toString(2)
    size = str.length
    for(let i = 0; i < 8 - size; i++)
        str = "0" + str
    return str
}

float2bytes = num => {
    return new Int8Array((new Float32Array([num])).buffer)
}

double2bytes = num => {
    return new Int8Array((new Float64Array([num])).buffer)
}

function float2endian(num, d, s){
    ary = d ? double2bytes(num) : float2bytes(num)
    if(s) ary = ary.reverse()
    ary = Array.from(ary)
    return ary.map(e => dec2bin(e)).join("").split("")
}

float2LittleEndian = num => {
    return float2endian(num, false, false)
}

float2BigEndian = num => {
    return float2endian(num, false, true)
}

double2LittleEndian = num => {
    return float2endian(num, true, false)
}

double2BigEndian = num => {
    return float2endian(num, true, true)
}

function float2endianHex(num, d, s){
    ary = d ? double2bytes(num) : float2bytes(num)
    if(s) ary = ary.reverse()
    ary = Array.from(ary).map(e => e < 0 ? e + 256 : e)
    return ary.map(e => e.toString(16)).map(e => {return e.length==1 ? "0" + e : e}).join("").split("")
}

float2LittleEndianHex = num => {
    return float2endianHex(num, false, false)
}

float2BigEndianHex = num => {
    return float2endianHex(num, false, true)
}

double2LittleEndianHex = num => {
    return float2endianHex(num, true, false)
}

double2BigEndianHex = num => {
    return float2endianHex(num, true, true)
}

function float2LittleEndianSh(num){
    ary = Array.from(float2bytes(num)).map(e => e < 0 ? e + 256 : e)
    return "\\x" + ary.map(e => e.toString(16)).map(e => {return e.length==1 ? "0" + e : e}).join("\\x")
}

function double2LittleEndianSh(num){
    ary = Array.from(double2bytes(num)).map(e => e < 0 ? e + 256 : e)
    return "\\x" + ary.map(e => e.toString(16)).map(e => {return e.length==1 ? "0" + e : e}).join("\\x")
}
