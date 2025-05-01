const btn1 = document.getElementById("btn1")
const btn2 = document.getElementById("btn2")
const btn3 = document.getElementById("btn3")
const input = document.getElementById("inp")
btn1.onclick = () => {
    alert("你点我了")
    console.log(myApi.version)
}


btn2.onclick = () => {
    myApi.saveFile(input.value)
}
btn3.onclick = async() => {
    const res = await myApi.readFile()
    alert(res)
}