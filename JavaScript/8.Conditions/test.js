// const x = 21;
// switch (x%7) {
//   case 0:
//     text = "Off";
//     break;
//   case 1:
//     text = "On";
//     break;
//   default:
//     text = "No value found";
// } 

// console.log(text)

const age = 22;
const lulusUjian = false;

if (age >= 17 && lulusUjian) {
    console.log("Boleh bikin SIM");
} else {
    console.log("Tidak boleh"); // <-- outputnya karna (AND / &&) bernilai true jika semua bernilai true
                                                    //        ||  bernilai true jika ada salah satu nilai true
}
