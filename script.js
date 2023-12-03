let konfirmasi = confirm("Mau main tebak angka ?");
let penjelasan = confirm("tebak angka diantara 1-10");

while (konfirmasi == true){
    let angkarandom = Math.floor(Math.random() * 10 + 1 );
    console.log(angkarandom);
    let masukkanuser = prompt("Masukkan Angka Tebakan");
    if(angkarandom == masukkanuser ){
        alert("Selamat anda berhasil ");
    }else if(masukkanuser < angkarandom){ 
        alert("angka terlau rendah")
        konfirmasi = confirm ("yakin nih gak mau lanjut ?")
    }
    else if(masukkanuser > angkarandom){ 
    alert("ketinggian mas bro")
    konfirmasi = confirm ("masa udah nyerah aja , lanjut gak ?")
    }
}    
   

    

    while(masukkan != angkarandom && konfirmasi == true){
    let masukkanuser = perseInt(prompt("Masukkan Angka Tebakan !!"))
    if(angkarandom == masukkanuser ){
        alert("Selamat anda berhasil ");    
    }else if(masukkanuser < angkarandom){ 
        alert("angka terlalu rendah")
        konfirmasi = confirm ("yakin nih gak mau lanjut ?")
    }
    else if(masukkanuser > angkarandom){ 
    alert("ketinggian mas bro")
    konfirmasi = confirm ("masa udah nyerah aja , lanjut gak ?")
    }else{
        konfirmasi = false;
    }

    console.log(masukkanuser)
    
}



