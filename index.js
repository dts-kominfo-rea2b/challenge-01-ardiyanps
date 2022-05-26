// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
firstUser = {};
secondUser = {};

const userMonica = new Object();
userMonica.name = "Monica";
userMonica.gender = "Female";
userMonica.age = 17;
userMonica.email = "monica@dingdong.com";

userMonica.favoriteColor = new Set();
userMonica.favoriteColor.add("Yellow");
userMonica.favoriteColor.add("Pink");
userMonica.favoriteColor.add("White");
userMonica.favoriteColor.add("Purple");

userMonica.isHavePet = true;

userMonica.education = [];
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
userMonica.education.push(sd);
userMonica.education.push(smp);
userMonica.education.push(sma);
userMonica.education.push(uni);

userMonica.favoriteRestaurant = new Set();
userMonica.favoriteRestaurant.add("Bento");
userMonica.favoriteRestaurant.add("Sushi");
userMonica.favoriteRestaurant.add("Pancake");
userMonica.favoriteRestaurant.add("Eggy");
userMonica.favoriteRestaurant.add("Tempura");
userMonica.favoriteRestaurant.add("Bento");
userMonica.favoriteRestaurant.add("Eggy");
userMonica.favoriteRestaurant.add("Padang");
userMonica.favoriteRestaurant.add("Tteok");
userMonica.favoriteRestaurant.add("Sushi");
userMonica.favoriteRestaurant.add("Sushi");

const userWendy = new Object();
userWendy.name = "Wendy";
userWendy.gender = "Male";
userWendy.age = 23;
userWendy.email = "wendy@dingdong.com";

userWendy.favoriteColor = new Set();
userWendy.favoriteColor.add("Blue");
userWendy.favoriteColor.add("Black");
userWendy.favoriteColor.add("Grey");

userWendy.isHavePet = false;

userWendy.education = [];
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
userWendy.education.push(sd2);
userWendy.education.push(smp2);
userWendy.education.push(sma2);
userWendy.education.push(uni2);

userWendy.favoriteRestaurant = new Set();
userWendy.favoriteRestaurant.add("Tempura");
userWendy.favoriteRestaurant.add("Bento");
userWendy.favoriteRestaurant.add("Sushi");
userWendy.favoriteRestaurant.add("Pancake");
userWendy.favoriteRestaurant.add("Padang");
userWendy.favoriteRestaurant.add("Katsu");
userWendy.favoriteRestaurant.add("Geprek");
userWendy.favoriteRestaurant.add("Pancake");
userWendy.favoriteRestaurant.add("Eggy");

firstUser = userMonica;
secondUser = userWendy;

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