//Online and Offline APIs

function updateStatus(){
    var status = document.getElementById("status")

    if(navigator.onLine){
        console.log("Online")
        status.innerText = "You are Online"
        status.style.color = "green"
    }else{
        console.log("Offline")
        status.innerText = "You are Offline"
        status.style.color = "red"
    }
}

window.addEventListener("Online" , updateStatus())

window.addEventListener("Offline" , updateStatus())

// Page Visibility APIs

document.addEventListener("visibilitychange" , function(){
    if(document.hidden){
        document.title = "😟😒 Come Back!"
    }else{
        document.title = "Page Visibility APIs"
    }
})

//Device Orientation API

window.addEventListener("deviceorientation" , function(e){
    var alpha = e.alpha
    var beta = e.beta
    var gamma = e.gamma

    document.getElementById("deviceStatus").innerHTML = `Alpha: ${alpha} , Beta: ${beta} , Gamma: ${gamma}`

})