// do while walaupun bernilai false tetap akan di eksekusi 1 x
// "do" lakukan dulu, baru "while" cek kondisi

let i = 0;

do {
    console.log("Masuk do-while");
    console.log("masuk loop ke : " + i);

    i++;
}while (i < 5);

