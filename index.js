// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

const firstUser = new Object();
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

firstUser.favoriteColor = new Set();
firstUser.favoriteColor.add("Yellow");
firstUser.favoriteColor.add("Pink");
firstUser.favoriteColor.add("White");
firstUser.favoriteColor.add("Purple");

firstUser.isHavePet = true;

firstUser.education = [];
let sd = new Map();
sd.set("name", "SD 01");
sd.set("city", "Jakarta");
sd.set("graduate", 2016);
let smp = new Map();
smp.set("name", "SMP 02");
smp.set("city", "Jakarta");
smp.set("graduate", 2019);
let sma = new Map();
sma.set("name", "SMA 03");
sma.set("city", "Tangerang");
sma.set("graduate", );
let uni = new Map();
uni.set("name", );
uni.set("city", );
uni.set("graduate", );
firstUser.education.push(sd);
firstUser.education.push(smp);
firstUser.education.push(sma);
firstUser.education.push(uni);

firstUser.favoriteRestaurant = new Set();
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Pancake");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Tempura");
firstUser.favoriteRestaurant.add("Bento");
firstUser.favoriteRestaurant.add("Eggy");
firstUser.favoriteRestaurant.add("Padang");
firstUser.favoriteRestaurant.add("Tteok");
firstUser.favoriteRestaurant.add("Sushi");
firstUser.favoriteRestaurant.add("Sushi");

const secondUser = new Object();
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

secondUser.favoriteColor = new Set();
secondUser.favoriteColor.add("Blue");
secondUser.favoriteColor.add("Black");
secondUser.favoriteColor.add("Grey");

secondUser.isHavePet = false;

secondUser.education = [];
let sd2 = new Map();
sd2.set("name", "SD 02");
sd2.set("city", "Jakarta");
sd2.set("graduate", 2010);
let smp2 = new Map();
smp2.set("name", "SMP 03");
smp2.set("city", "Bogor");
smp2.set("graduate", 2013);
let sma2 = new Map();
sma2.set("name", "SMA 01");
sma2.set("city", "Surabaya");
sma2.set("graduate", 2016);
let uni2 = new Map();
uni2.set("name", "Universitas Maju");
uni2.set("city", "Tanggerang");
uni2.set("graduate", );
secondUser.education.push(sd2);
secondUser.education.push(smp2);
secondUser.education.push(sma2);
secondUser.education.push(uni2);

secondUser.favoriteRestaurant = new Set();
secondUser.favoriteRestaurant.add("Tempura");
secondUser.favoriteRestaurant.add("Bento");
secondUser.favoriteRestaurant.add("Sushi");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Padang");
secondUser.favoriteRestaurant.add("Katsu");
secondUser.favoriteRestaurant.add("Geprek");
secondUser.favoriteRestaurant.add("Pancake");
secondUser.favoriteRestaurant.add("Eggy");

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};