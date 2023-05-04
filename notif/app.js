const button = document.getElementById("qwe")

button.addEventListener("click", () => {
    //alert("sjd")
    Notification.requestPermission().then(perm => {
        if (perm === "granted") {
            let a = new Notification("update available")
            console.log(a)
            
        }
    })
})