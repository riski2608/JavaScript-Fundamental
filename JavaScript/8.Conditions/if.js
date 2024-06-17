//if digunakan jika

const price = 10000;
const payment = 9000;

//uang pas
if (payment === price){
    console.log('Terimakasih sudah bayar uang pas');

} else if (payment > price){

    const change = payment - price ; 
    console.log('kembalian uang anda adalah : '+ change);

} else {
    const moneyDeficit = price - payment;

    console.log(`uang anda kurang ${moneyDeficit}`);
}
