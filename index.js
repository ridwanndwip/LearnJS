// LATIHAN
// ------------
//  mengambil dan membuat value array agar bisa masuk kedalam daftar list array

// let myArr = ['ridwan', 'dwi']; //deklarasi array
// let buttonValue = document.querySelector('input#inputNilai');
// let buttonPush = document.getElementById('buttonPush');
// let buttonPop = document.getElementById('buttonPop');
// let isiArray = document.querySelector('p#isiArr'); // Mengambil element isiArr untuk modified
// console.log(buttonValue);
// stringArr = (myArr.join('-'));
// console.log(stringArr);

// let nilai = buttonValue.value;

// function InputValueTambah(){
//   let newbuttonValue = buttonValue.value;
//   myArr.push(newbuttonValue);
//   console.log(newbuttonValue);
//   console.log(myArr);
//   isiArray.textContent = (myArr.join('-'));
// }

// function InputValueKurang(){
//   let newbuttonValue = buttonValue.value;
//   myArr.pop();
//   console.log(newbuttonValue);
//   console.log(myArr);
//   isiArray.textContent = (myArr.join('-'));
// }

// isiArray.textContent = (myArr.join('-'));

// console.log(myArr.join('-'));
// console.log(buttonValue);



// --------------------------
// ARRAY
// ----------------------
// let rows = []; = Membuat array kosong
// let fruits = ['jeruk', 'semangka', 'apel','nanas']; = membuat array yang mendeklarasikan variabel terlebih dahulu
// console.log(fruits.length); =  
// for(i = 2; i < fruits.length; i++){
//   console.log(fruits[i]);
// };
// --------------------------
// For looping
// ----------------------

// let array = [];
// const count = 10;
// for(i = 0; i <= count; i++){
//   console.log(i);
// }
// array.push(i);
// console.log(array);
// let count = 4;
// for(i = 0; i <= count; i++){
//   console.log('*');
//   console.log('#');
// }

// Memasukkan variabel string kosong dari for of


// Membuat String Kosong
// let result = ""; 

// Membuat Pengulangan For loop
// for (let i=0; i< 10; i++){
//   rows.push(i);
// }

// console.log(rows);
// result = result + rows;
// console.log(result);

// Perulangan For Of
// for(const row of rows){
//   console.log(row);
//   result = result + row;
//   console.log(result);
// }

// Cara Mengetahui Tipe Data yang digunakan
// let name = [12, 23];
// console.log(typeof(name));

// ARRAY
// let myArr = ['Ridwan', 28, true, ['coding', 'music']]
// Mengambil nilai array didalam array
// console.log(myArr[3][1]); 
// Menambahkan Array
// myArr[4] = 'ganteng';
// Menghapus nilai array ke 3 menjadi Undefined
// myArr[3] = undefined; 

// Method Pada Array

// Join() = Menggabungkan semua element array menjadi sebuah string
// console.log(myArr.join('-'));
// Push() = Menambahkan Satu atau lebih element ke akhir array
// console.log(myArr.push('Keren', 'Banget'));
// Pop() = Menghapus elemen terakhir dari array dan mengembalikan elemen tersebut.
// console.log(myArr.pop());
// shift() = Menghapus elemen pertama dari array dan mengembalikan elemen tersebut
// console.log(myArr.shift());
// unshift() = Menambahkan satu atau lebih elemen ke awal array dan mengembalikan panjang baru array.
// console.log(myArr.unshift());
// ----------------------------------
// const character = "#";
// const count = 10;
// const rows = [];

// for(let i = 0; i<10; i++){
  // console.log(character + '\n');
  // console.log(character.repeat(i));
//   console.log(character(i))
// }

// for (let i = 0; i < count; i = i + 1) {
//   rows.push(character);
//   character.repeat(i);
// }

// console.log(rows);
// console.log(rows.join());

// console.log(typeof(rows));

// ----------------------------------
// JAVASCRIPT DOM

// - Tipe Data utama dari DOM 
// Document = Merupakan representasi dari halaman web.
// Node = Merupakan base class untuk semua tipe data di DOM, seperti Document, Element, dan attribut.
// Element = Merupakan representasi object elemen di halaman web, misalnya head,body,form, input, dll.
//  NodeList = Merupakan array/collection yang berisikan node.
// Attribut = Merupakan representasi object attribute dalam element/
// NamedNodeMap = Kumpulan dari attribut

// - Document

// Dalam satu halaman web, terdapat satu document, dan kita tidak perlau membuatnya manual, karena otomatis akan ada di browser
// Detail untuk melihat apa saja isi Document = https://developer.mozilla.org/en-US/docs/Web/API/Document
//  Document Secara otomatis dibuat dalam browser ketika kita membuka halaman web, sehingga tidak perlu membuat objek document secara manual.
// console.log(document);

// Property Document
// Document memiliki banyak sekali property. Property dalam document bisa kita gunakan untuk melihat semua data yang terdapat dalam document halaman web
// console.log(document.images)
// console.log(document.body)
// console.log(document.contentType)

// Method/Fungsi Document
// Document memiliki banyak sekali method.
// Banyak method yang terdapat dari document, dan digunakan untuk memanipulasi data DOM, misalnya membuat Node, Element, Attribute, atau mengambil dan menyeleksi NODE di dalam Document, Contoh :
// let tulisan = document.getElementById("tulisan"); = Mengambil document berdasarkan ID dengan nama ID 'tulisan'
// console.log(tulisan); = mengembalikan variable tulisan ke console

// Node 
// Node dalam DOM (Document Object Model) adalah unit dasar dari struktur dokumen. Setiap bagian dari dokumen HTML atau XML, seperti elemen, atribut, teks, dan komentar, dianggap sebagai node. Berikut adalah penjelasan yang lebih mudah untuk dipahami:
// Jenis2 Node dalam DOM adalah : Element Node (tag <div></div>), Text Node(Teks yang ada di dalam element node misalnya), Attribute Node (Attribut dari element, <div id="attribute_node"></div>)

// NodeList vs HTMLCollection
// - Keduanya merupakan kumpulan node
// - Struktur datanya mirip array
// - nodeList dapat berisi node apapun, sedangkan HTMLCollection berisi elemen HTML
// - HTMLCollection bersifat live sedangkan nodeList tidak

// Struktur Hierarki DOM
// - Root Node
//  -- Node yang menjadi sumber dari semua node lain di dalam DOM
//  -- document.
// - Parent Node
//  -- Node yang berisi 1 tingkat di atas node yang lain
//  -- body adalah parent dari h1,p,p,div dan a
// - Child Node
//  -- node yang berada 1 tingkat dibawah node yang lain
//  -- h1 adalah child dari body

// let testing = document.getElementById('isiArr');
// let h12 = document.getElementsByClassName('h12');
// let h12New = document.getElementsByClassName('h12');
// let p = document.getElementsByTagName('p');
// console.log(p);
// console.log(p.length);
// console.log(h12);
// h12.innerHTML = '<i>ganteng</i>';
// console.log(h12);
// h12.textContent = 'ganteng banget';
// console.log(h12);

// console.log(typeof(h12));

// console.log(testing);

// let h1Group = document.getElementsByTagName('h1');
// console.log(h1Group.length);
// for(let i = 0; i < h1Group.length; i++){
  // h1Group.push(i);
  // console.log(i);
  // h1Group.repeat(i);
  // console.log(h1Group);
  // h1Group(i).style.color = 'red';
  // h1Group[i].style.color = 'red';
// }

// DOM Selection Method 
// getElementById() = mengambil element by id (elemen)
// getElementByTagName()[] = mengambil element by tag (htmlcollection)
// getElementByClassName()[] = mengambil element by class (htmlcollection)
// querySelector() = mengambil elemen child, atau mempunyai parent, contoh querySelector('#id .class') (elemen)
// querySelectorAll() =  mengambil element yang lebih dari 1, wajib memberikan index(nodeList)

// DOM Manipulation Method

// - Manipulasi Elemen
// -- element.textContent = mengubah text dalam tag
// -- element.innerHTML = mengubah HTML, contoh <b>ganteng</>
// -- element.style.<propertyCss> = mengubah style css
// -- element.setAttribute('nameAttribute' 'valueAttribute')  , getAttribute(name attribute), removeAttribute('removeAttribute') = manipulasi atribute di html.
// -- element.classList.add() = menambahkan class
// -- element.classList.remove() = menghapus class yang ada
// -- element.classList.toggle() = membuat toggle untuk class css
// -- element.classList.item() = Mengembalikan nama kelas pada posisi tertentu dalam daftar kelas elemen. Indeks dimulai dari 0.
// -- element.classList.contains() = Memeriksa apakah elemen memiliki kelas tertentu. Mengembalikan nilai true jika kelas ada, false jika tidak ada.
// -- element.replace() = Menggantikan kelas yang ada dengan kelas baru. (oldClass, newClass)

// Contoh = 
// const judul = document.getElementById('judul');
// judul(element).InnerHTML = 'Ridwan Dwi Permana';

// - Manipulasi Node

// -- Membuat Element Baru
// let pBaru = document.createElement('p');
// let isiPbaru = document.createTextNode('paragrafBaru');
// -- Simpan tulisan ke dalam paragraf
// pBaru.appendChild(isiPbaru);
// -- simpan pBaru di tempat yang diinginkan
// const sectionA = document.getElementById('sectionA');
// sectionA.appendChild(pBaru)

// Mengambil Tagli yang spesifik
// -- const ul = document.querySelector('section#b ul') = menangkap ul
// -- const li2 = ul.querySelector('li:nthchild(2)'); = menangkap li dalam ul di baris ke 3

// insertBefore() = menyimpan element sebelum, contoh = 
// ul.insertBefore(pBaru, li2) = menyimpan node pBaru ke dalam ul sebelum node li2

// parentNode.removeChild(); = untuk menghapus child dari parentnode
// Contoh > const link = document.getElementsByTagName('a')[0];
// SectionA.removeChild(link);

// parentNode.replaceChild(); = untuk menimpa child dari paentnode
// Contoh > const link = document.getElementsByTagName('a')[0];
// SectionA.replaceChild(linkBaru);


/*
EVENT
----- 
Event pada js merepresentasikan sebuah kejadian yang terjadi di dalam DOM
Kejadian tersebut bisa dilakukan oleh user, (mouse event , keyboard event, dll)
ataupun dilakukan otomatis secara API (animasi selesai dijalankan, halaman selesai di load,dll)
Daftar Event = Mouse event, keyboard event, resources event, focus event, view event, form event, drag & drop event, dll.

// Cara 'mendengarkan' Event ada 2
1. Event Handler = inline HTML atribute (menggunakan attribute onclick) & element method (menggunakan method seperti p2.onclick = ubahWarna; (ketika p2 di klik akan menjalankan fungsi ubahWarna))

2. addEventListener(); = Menambahkan event listener ke elemen. Event listener adalah fungsi yang akan dipanggil ketika event tertentu terjadi.
element.addEventListener(event, function, useCapture);

event: Nama event yang ingin didengarkan (misalnya, 'click', 'mouseover', 'keydown').
function: Fungsi yang akan dijalankan saat event terjadi.
useCapture (opsional): Boolean yang menentukan apakah event listener akan menangkap event pada fase capturing (true) atau bubbling (false). Default adalah false.

contoh menggunkannya =

document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

atau

function handleClick() {
    alert('Button clicked!');
}

document.getElementById('myButton').addEventListener('click', handleClick);

// Menghapus event listener
document.getElementById('myButton').removeEventListener('click', handleClick);

WARNING = DIREKOMENDASIKAN MENGGUNAKAN addEventListener();

*/ 


/*

DOM TRAVERSAL
------------
DOM Traversal adalah teknik untuk menjelajahi atau menavigasi struktur DOM (Document Object Model) di halaman web. DOM itu sendiri adalah representasi berbasis pohon dari elemen-elemen di dalam dokumen HTML atau XML, di mana setiap elemen adalah sebuah node dalam pohon tersebut.

Traversal berarti berjalan melalui node-node ini untuk menemukan, memanipulasi, atau mengelola elemen-elemen dalam halaman web. Ada beberapa metode dan properti dalam JavaScript yang digunakan untuk melakukan DOM Traversal:

- parentNode: Mengembalikan node induk dari node yang sedang diakses.
- childNodes: Mengembalikan daftar node anak dari node yang sedang diakses, termasuk node teks.
- firstChild dan lastChild: Mengembalikan node anak pertama atau terakhir dari node yang sedang diakses.
- nextSibling dan previousSibling: Mengembalikan node saudara berikutnya atau sebelumnya dari node yang sedang diakses.
- children: Mengembalikan daftar node anak yang merupakan elemen (tidak termasuk node teks).

Contoh DOM TRAVERSAL WPU:
*/

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function () {
//   card.style.display = 'none';
// })

// Atau jika case ada >1 card

// const close = document.querySelectorAll('.close');
// for ( let i = 0; i <close.length; i++){
//   close[i].addEventListener('click', function(){
//     close[i].parentElement.style.display = 'none';
//   })
// }

// const close = document.querySelectorAll('.close');
// for ( let i = 0; i <close.length; i++){
//   close[i].addEventListener('click', function(e){
//     e.target.parentElement.style.display = 'none';
//   })
// }

// const close = document.querySelectorAll('.close');

// close.forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.target.parentElement.style.display = 'none';
//   })
// })

/* 
DOM TRAVERSAL METHOD - hasil
-------------------
element.parentNode - node(hasil)
element.parentElement - element(hasil)
element.nextSibling - node(hasil)
element.nextElementSibling - element(hasil)
element.previousSibling - node(hasil)
element.previousElementSibling - element(hasil)
*/

// OBJECT
// -------------

/* 
// --- CARA MEMBUAT OBJECT LITERAL

let myObj = {
  nama : 'ridwan',
  kerja : 'weekend',
  umur : 23,
  profile : {
      'wajah' : 'ganteng',
      'rambut' : 'lurus',
    },
    nilai : [2.00, 2.50, 3.01]
}



// --- CARA MEMBUAT OBJECT VIA FUNCTION DECLARATION

function Mahasiswa(nama,npm,energi){
  const objMhs = {}; 
  objMhs.nama = nama;
  objMhs.npm = npm;
  objMhs.energi = energi;
  objMhs.belajar = (jam) =>{
    objMhs.energi -= jam * 10;
    console.log(`Selamat Belajar ${objMhs.nama}`)
  }
  objMhs.makan = (porsi) =>{
    objMhs.energi += porsi * 10;
    console.log(`Selamat Makan ${objMhs.nama}`);
  }
  return objMhs; 
}
const Ridwan = Mahasiswa('ridwan',201542501386, 30);
const Dewi = Mahasiswa('Dewi', 201543501387, 30);

atau bisa menggunakan method yang terpisah namun tetap menggunakan FUNCTION DECLARATION(OBJECT.CREATE). Tujuannya adalah agar tidak menggunakan function secara berulang yang akan menyebabkan memori penuh

function Mahasiswa(nama,npm,energi){
  let objMhs = Object.create(methodMhs); 
  objMhs.nama = nama;
  objMhs.npm = npm;
  objMhs.energi = energi;
  // objMhs.belajar = methodMhs.belajar;
  // objMhs.makan = methodMhs.makan;
  return objMhs; 
}

const methodMhs = {
  belajar : function(jam){
    this.energi -= jam * 10;
    console.log(`Selamat Belajar ${this.nama}`)
  },

  makan : function (porsi) {
    this.energi += porsi * 10;
    console.log(`Selamat Makan ${this.nama}`);
  }
}
const Ridwan = Mahasiswa('ridwan',201542501386, 30);
const Dewi = Mahasiswa('Dewi', 201543501387, 30);


// --- CARA MEMBUAT OBJECT VIA FUNCTION CONSTRUCTOR (Menggunakan THIS & NEW)
Ket : saat kita membuat object via Constructor, makan dibelakang layar, kata this digunakan untuk membuat object baru, seperti yang kita gunakan saat kita membuat object via function declaration

function Mahasiswa(nama,npm,energi){
  // let this = Object.create{}; = proses dibelakang layar
  this.nama = nama;
  this.npm = npm;
  this.energi = energi;
  this.belajar = (jam) =>{
    this.energi -= jam * 10;
    console.log(`Selamat Belajar ${this.nama}`)
  }
  this.makan = (porsi) =>{
    this.energi += porsi * 10;
    console.log(`Selamat Makan ${this.nama}`);
  }
  // return this; = proses dibelakang layar
}
const Ridwan = new Mahasiswa('ridwan',201542501386, 30);
const Dewi = new Mahasiswa('Dewi', 201543501387, 30);


// Object function constructor with prototype

function Mahasiswa(nama,npm,energi){
  // let this = Object.create{}; = proses dibelakang layar
  this.nama = nama;
  this.npm = npm;
  this.energi = energi;
  // return this; = proses dibelakang layar
}

Mahasiswa.prototype.belajar = function (jam) {
  this.energi -= jam * 10;
  console.log(`Selamat Belajar ${this.nama}`)
}

Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi * 10;
  console.log(`Selamat Makan ${this.nama}`);
}

const Ridwan = new Mahasiswa('ridwan',201542501386, 30);
const Dewi = new Mahasiswa('Dewi', 201543501387, 30);


// --- CARA MEMBUAT OBJECT VIA CLASS

class Mahasiswa{
  constructor(nama,npm,energi){
    this.nama = nama;
    this.npm = npm;
    this.energi = energi;
  }

  belajar (jam) {
    this.energi -= jam * 10;
    console.log(`Selamat Belajar ${this.nama}`)
  }
  
  makan (porsi) {
    this.energi += porsi * 10;
    console.log(`Selamat Makan ${this.nama}`);
  }
}

const Ridwan = new Mahasiswa('ridwan',201542501386, 30);
const Dewi = new Mahasiswa('Dewi', 201543501387, 30);

*/

// FUNCTTON
// -------------

/* 

Jenis jenis Function
--------------------
-- Function Expression
const tampilNama = function(nama){
  return `Halo, ${nama}`;
}
console.log(tampilNama(`Ridwan`));

-- Arrow Function
const tampilNama = (nama) => {
  return `Halo, ${nama}`;
}
// atau bisa di persingkat menjadi implisit return

const tampilNama = (nama) => `Halo, ${nama}`;
console.log(tampilNama('ridwan')); 

CONTOH:
let mahasiswa = ['3', '4', '2'];

let jumlahMhs = mahasiswa.map((x) => x * 2);
console.log(jumlahMhs);
*/


// THIS PADA ARROW FUNCTION
// ------------------------

// Perilaku This pada function constructor
// function Person(){
//   this.name = 'Ridwan';
//   this.jenkel = 'cowo';
//   this.umur = 23;
//   console.log(this); //Perilaku This pada Function Declaration Constructor, this merujuk pada person
// }
// const Me = new Person();
// console.log(Me);

// const orang = function (nama,jengkel, umur){
//   this.nama = nama;
//   this.jengkel = jengkel;
//   this.umur = umur;
//   this.sayHello = () => {
//     console.log (`Halo ${nama}`);
//     console.log(this.nama)
//   }
//   // console.log(this); //Perilaku This pada Function Declaration Constructor, this merujuk pada orang
// }
// const orang1 = new orang('Ridwan', 21)

// Perilaku This pada object literal
// const person = {
//   // nama : 'ridwan',
//   // kelas : '2sd',
//   siapaAkuWithNoArrow : function(){
//     console.log(`aku adalah ${this.nama}`); 
//     console.log(this);
//   },
//   siapaAkuWithArrow : () => {
//     console.log(`aku adalah ${this.nama}`); 
//     console.log(this);
//   }
// }
// console.log(person.siapaAkuWithNoArrow());
// console.log(person.siapaAkuWithArrow());


// const nama = 'ridwan';
// const age = 23;

// function SayName (){
//   console.log(nama);
//   // let aged = 20;
//   console.log(this);

//     function sayAged() => {
//     // console.log(this.aged);
//     // console.log(this);
//     // return this;
//     console.log(this);
//   }

/* Noted =
- Baik pada function declaration maupun function expression, ketika constructor dipanggil menggunakan kata kunci new, this mengacu pada objek baru yang diciptakan oleh constructor tersebut.
- Jika new tidak digunakan, maka this bisa menjadi undefined (dalam mode ketat/strict mode) atau merujuk pada objek global (dalam non-strict mode).
- Tidak bisa membuat object constructor dengan arrow function = karena Arrow Function tidak memiliki konsep this
- Arrow Function tidak memiliki konsep this
- arrow function tdk memakai konsep this dan variabelny akan di telusuri lgi di lokal parent trdkt 
- declaration function memakai konsep this tpi bila variabelny yg dicri tdk ad dlm localnya maka lngsng di telesuri di window
- expression function memakai konsep this tpi bila variabel yg dicri tdk dlm local maka, ditelusuri lgi ke lokal parent trdkt
*/



/* 

// HIGHER ORDER FUNCTION
// ------------------------
Higher-Order Function (HOF) adalah fungsi yang dapat menerima fungsi lain sebagai argumen, mengembalikan fungsi sebagai hasil, atau melakukan keduanya. HOF sangat berguna dalam pemrograman karena memungkinkan kita untuk membuat kode yang lebih modular, fleksibel, dan lebih mudah dikelola. HOF juga merupakan konsep dasar dalam pemrograman fungsional.

Ciri-Ciri Higher-Order Function
Fungsi dikatakan sebagai higher-order function jika memiliki salah satu dari sifat berikut:

Menerima fungsi sebagai argumen.
Mengembalikan fungsi sebagai hasil.
Dalam JavaScript, beberapa contoh HOF yang sering digunakan adalah map, filter, dan reduce, yang sering digunakan dalam pemrosesan array.


// 3 CONTOH HIGHER ORDER FUNCTION YANG PALING SERING DIGUNAKAN
-Array.prototype.map() =
-Array.prototype.filter() =
-Array.prototype.reduce() =

Contoh :
- filter - Menggunakan fungsi untuk menyaring elemen array berdasarkan kondisi tertentu.
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
const numbers = [21, 32, -3, 44, 5, 16, 10, 23];
const neww = numbers.filter(num => num >= 10); == with arrow function
const neww = numbers.filter(function(num){  == with no arrow function
return num >= 10;
});
console.log(neww);

- map - map adalah alat yang sangat kuat untuk mengubah data dengan cara yang lebih sederhana dan elegan daripada menggunakan for atau forEach.
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 }
];
const names = users.map(user => user.name);
console.log(names); // Output: ['Alice', 'Bob', 'Charlie']

- reduce - Menggunakan fungsi untuk mengakumulasi nilai berdasarkan operasi tertentu.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currrentValue) => accumulator + currrentValue, 0); // 0 Adalah nilai awal
console.log(sum); // Output: 15

sort - Menggunakan fungsi pembanding untuk mengatur urutan elemen array.
const fruits = ['apple', 'orange', 'banana'];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // Output: ['apple', 'banana', 'orange']

dom - Menggunakan 2 argument 'click' dan function sebagai callback
const tombol = document.getElementById(tombol);
tombol.addEventListener('click', function(){
console.log('tombol ditekan!')
})


// Method Chaining
// Cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka. filter (a => a > 5) // 8,9,9
.map (a => a * 3) // 24, 27, 27
.map (a => a / 2)
reduce ((acc, cur) => acc + cur); // 78
console. log (hasil);
*/

const mhs = function(nama, kelas, uangJajan){
  this.nama = nama,
  this.kelas = kelas,
  this.uangJajan = uangJajan,
  // this.daftarJajan = []
  this.daftarJajan =  [],
  this.tambahDaftar = function(Namajajan, HargaJajan) {
    this.daftarJajan = { hargaJajan: HargaJajan, namaJajan: Namajajan }; 
    console.log(`anda berhasil menambahkan jajanan ${Namajajan} dengan harga ${HargaJajan}`);
  }
}

const Ridwan = new mhs('ridwan', '2b', 3000);
const dwi = new mhs('dwi', '2b', 5000);



// for(let i = 0; i <= numbers.length ; i++){
//   // console.log(numbers[i]);
//   if(numbers[i] >= 12){
//     console.log(numbers[i])
//   }
// }

// SYNCHRONOUS VS ASYNCHRONOUS


// SYNCHRONOUS

// const getUserSync = (id) => { //Arrow Function
//   const nama = id === 1 ? 'Ridwan' : 'Permana'; // Operator Ternary
//   return {id, nama};
// };

// IF NOT USE OPERATOR TERNARY
// const getUserSync = (id) => {
//   let nama = '';
//   if (id === 1){
//     nama = 'Ridwan';
//   } else {
//     nama = 'Permana';
//   }
//   return{id,nama};
// }

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World';
// console.log(halo);


// ASYNCHRONOUS

// let name = 'ridwan';
// console.log(String.prototype);