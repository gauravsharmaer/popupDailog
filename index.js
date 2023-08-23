const close=document.getElementById("close")
const open=document.getElementById("open")
const dialog=document.getElementById("dialog")


open.addEventListener("click",()=>{
    dialog.showModal()
})

close.addEventListener("click",()=>{
    dialog.close("")
})