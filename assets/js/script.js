function getData(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value
    // validasi data

    if(name == "") {
        return alert("nama harus di isi ")
    }else if (email == "") {
        return alert ("email harus di isi")      
    }else if (phone == "") {
        return alert ("nomor telepon harus di isi")
    }else if (subject == ""){
        return alert ("Subject harus di isi")
    }else if (message == ""){
        return alert ("message harus di isi")
    }
    
    const alamatEmail= "salehjaya97@gmail.com"
    let a = document.createElement("a")
    a.href =`https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=perkenalkan nama saya ${name}, bermaksud untuk${message}, tolong hubungi saya di ${phone}`
    a.click()
}