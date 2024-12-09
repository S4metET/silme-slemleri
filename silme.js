console.log("Projeye Başladık.");
let meyveler = [];
let meyveAdeti = Number(prompt("Kaç tane meyve eklemek istersiniz?"));

for(let i = 0; i< meyveAdeti; i++){
    let meyveAdi = prompt("Meyve Çeşidi Giriniz:");
    meyveler.push(meyveAdi);
}
console.log(meyveler);

confirm("Meyve Silmek İstermisiniz")
console.log(meyveler);

let silinenMeyve = prompt("Hangi meyveyi silmek istersiniz.");

for (let i = 0; i < meyveler.length; i++) {
    if(meyveler === silinenMeyve){
        meyveler.splice(silinenMeyve[i], 1)
    }
}
console.log(meyveler);