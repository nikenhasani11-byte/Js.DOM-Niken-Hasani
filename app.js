console.log("Praktikum Dimulai");

// aktivitas 1 -> DOM Selection: menangkap elemen sebelum memanipulasi HTML
// ambil elemen -> simpan di dalam variabel javascript 

// 1. ambil elemen judul berdasarkan id 
// document.getElementById("......"); -> ambil elemen html spesifik berdasarkan id
const judulUtama = document.getElementById("judul-utama");

// 1.1 querySelector(#........) -> mengambil id berdasrakan atribut id
// tanda (#) yaitu untuk menampilkan id, sedangkan tanda (.) untuk menampilkan class
// ambil elemen sub judul berdasarkan id    
const subJudul = document.querySelector("#sub-judul");

// 2. mengambil elemen pada kartu 1 (kartu manipulasi teks dan style)
const teksPreview = document.getElementById("teks-preview");
const boxPreview = document.getElementById("box-preview");
const cardManipulasi = document.getElementById("card-manipulasi");

//3. mengambil tombol aksi pada kartu 1
const btnUbahTeks = document.getElementById("btn-ubah-teks");
const btnToggleWarna = document.getElementById("btn-toggle-warna");
const btnReset = document.getElementById("btn-reset");

// 4. mengambil elemen pada kartu 2 (fitur catatan dinamis / todolist)
const inputCatatan = document.getElementById("input-catatan");
const btnTambah = document.getElementById("btn-tambah");
const daftarCatatan = document.getElementById("daftar-catatan");
const jumlahCatatan = document.getElementById("jumlah-catatan");
const pesanKosong = document.getElementById("pesan-kosong");

// aktivitas 2: manipulasi teks dan style pada kartu 1
//addEventListener("click", function() {....}) -> artinya tolong dengarkan dan tunggu 
// setelah di "click" oleh user jalankan perintah dalam function 
// A. mengubah teks dan warna pd preview
btnUbahTeks.addEventListener("click", function() { 
// .innerText -> untuk mengisi teks pada elemen html
teksPreview.innerText = "Hebat! Teks ini berhasil diubah melalui DOM!";

// .style.color = mengubah warna teks secara langsung melalui javascript
teksPreview.style.color = "#fda5cc";

// console.log = mencetak pesan di console
console.log("DOM Teks Preview telah diperbaharui!");

});

// B. mengubah warna background box preview
btnToggleWarna.addEventListener("click", function() {
    //.classlist.toggle("nama-class") -> menambahkan class jika belum ada, menghapus class jika sudah ada
    // jika class tersebut belum ada pada elemen, maka class tersebut akan ditambahkan
    // jika class tersebut udah ada pada elemeen, maka class tersebut akan dihapus
    boxPreview.classList.toggle("active-mode");
    cardManipulasi.classList.toggle("highlight");

    console.log("DOM Box Preview telah diperbaharui!");
});

 // C. mengembalikan teks dan warna ke kondisi awal
btnReset.addEventListener("click", function() {
    // mengembalikan teks preview ke default
    teksPreview.innerText = "Halo! Teks ini siap diubah oleh Javascript!";

    // kosongkan warna agar warna kembali ke default
    teksPreview.style.color = "";

    // hapus class khusus menggunakan classList.remove("nama-class") -> menghapus class tertentu pada elemen html
    boxPreview.classList.remove("active-mode");
    cardManipulasi.classList.remove("highlight");

    console.log("DOM Box Preview telah dikembalikan ke kondisi awal!");
});

// aktivitas 3 & 4: membuat catatan dinamis (todolist) dan menghitung jumlah catatan (pada kartu 2)
// di bagian ini kita belajar elemen HTML baru (<li>) secara dinamis menggunakan javascript
// lalu mengisi teksnya, memberi tombol hapus, lalu menempelkannya kedalam layar <ul>

// langkah 1: membuat variabel untuk menampung jumlah catatan
// 'let' digunakan karena nilainya akan berubah-ubah
let totalCatatan = 0;

// langkah 2: membuat fungsi untuk menambahkan catatan baru
// fungsi ini adalah kumpulan perintah yang diberi nama. kita bisa memanggilnya kapanpun kita mau
function perbaruiJumlah() {
    // masukkan angka totalCatatan ke dalam HTML
    jumlahCatatan.innerText = totalCatatan;

    // percabangan kondisi: apakah catatannya 0?
    if (totalCatatan === 0) {
        // jika 0, hapus class "hidden" agar pesan "tidak ada catatan" muncul
        pesanKosong.classList.remove("hidden");
    } else {
        // jika tidak 0, tambahkan class "hidden" agar pesan "tidak ada catatan" hilang
        pesanKosong.classList.add("hidden");
    }
}

// langkah 3: membuat fungsi untuk menambahkan catatan baru
function tambahCatatan() {
    // 3.1 ambil teks dari input catatan
    // .trim() -> menghapus spasi kosong di awal dan akhir teks
    const isiTeks = inputCatatan.value.trim();

    // 3.2 validasi input: jika teks kosong (" "), tampilkan alert dan hentikan fungsi
    if (isiTeks === "") {
        alert("Catatan tidak boleh kosong!");
        return; // hentikan fungsi jika input kosong
    }

    // 3.3 createElement("li") -> membuat elemen <li> baru hanya di javascript
    const liBaru = document.createElement("li");
    liBaru.className = "note-item"; // menambahkan class pada elemen <li> baru
    
    // 3.4 mengisi teks catatan baru dengan cara innerHTML mengisi <li> dengan teks dan tombol hapus
    // tanda Backtick (`) digunakan agar bisa menulis teks multi baris dan menyisipkan variabel di dalamnya menggunakan ${variabel}
    liBaru.innerHTML = `<span>${isiTeks}</span> <button class="btn-hapus">Hapus</button>`;

    // 3.5 menambahkan event listener pada tombol hapus pada item <li>
    //querySelector(".btn-hapus") -> mengambil tombol hapus pada <li> baru
    const btnHapus = liBaru.querySelector(".btn-hapus");
    btnHapus.addEventListener("click", function() {
        // menghapus elemen <li> dari daftar catatan
        liBaru.remove(); // mengurangi total catatan
        totalCatatan--; // memperbarui jumlah catatan di layar
        perbaruiJumlah();
        console.log('DOM Catatan "${isiTeks}" telah dihapus!');
    })

    //  3.6 .appendChild(liBaru) -> menempelkan elemen <li> baru ke dalam <ul> daftar catatan
    daftarCatatan.appendChild(liBaru);

    // 3.7 mengosongkan jumlah cattatan dan memperbarui jumlah catatan di layar
    inputCatatan.value = ""; // mengosongkan input catatan

    // 3.8 menambahkan total catatan dan memperbarui jumlah catatan di layar
    totalCatatan++;
    perbaruiJumlah();

    console.log('DOM Catatan baru ditambahkan : "${isiTeks}"');
}

// langkah 4: menambahkan event listener pada tombol tambah catatan
// ketika tombol tambah diklik, jalankan fungsi tambahCatatan()
btnTambah.addEventListener("click", function() {
    tambahCatatan();
});

// langkah 5: event listener untuk menambahkan catatan ketika menekan tombol "Enter" pada keyboard
inputCatatan.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        tambahCatatan();
    }
}); 