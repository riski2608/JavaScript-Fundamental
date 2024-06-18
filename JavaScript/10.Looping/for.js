// Loop -> if condition yang berulang selama konisi masih true

// segment 1 -> inisialisasi di eksekusi sebelum loop jalan (1x saja) | let i = 0
// segment 2 -> Conddition (True | False) | i < 5 (true)
// segment 3 -> di eksekusi setiap perulangan/iterasi | i++ (i = i + 1)

for (let i = 0; i < 5; i++ ){

    //Break & Continue
    if( i === 3 ){
        break; // akan menghentikan Keseluruhan Loop 
       // continue; //hanya menghentikan iterasi saat ini saja
    }

    console.log("Masuk Loop");
    console.log("i = " + i);
}