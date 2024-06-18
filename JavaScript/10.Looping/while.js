let i = 0 ;

while (i < 5) {

    //Optional Break & Continue
    if( i === 3 ){
        i ++; //harus menggunakan iterasi lagi di setelah if agar tidak terjadi infinty loop karena i++ milik while belum sempat terbaca terhalang if
        // break; // akan menghentikan Keseluruhan Loop 
         continue; //hanya menghentikan iterasi saat ini saja
     }

    console.log("Looping While");
    console.log("i ke "+ i);

    i++;
}