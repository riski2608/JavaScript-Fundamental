 const username = "";

 console.log(Boolean(username)); //selalu cek typedata sebelum menggunakan truthy and falsy

 if(username){
    console.log("hallo "+ username);
 } else {
    console.log("please input a username");
 }