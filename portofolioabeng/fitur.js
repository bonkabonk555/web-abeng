document.addEventListener("DOMContentLoaded", function() { //utama/dasar js
    document.getElementById("imgAkawuri").addEventListener("click", function () { //biar wktu di klik bisa pindah ke halaman akawuri
        window.location.href = "akawuri.html"; //nie ke halaman akawuri
    });

    const button = document.querySelector(".button"); //
    if (button) {
        button.addEventListener("click", function () { //biar wktu di klik bisa muncul alert
            alert("Akarui Jic, あかるい"); //nie alertnya
        });

        console.log("Akarui Jic, あかるい"); //muncul langsung saat halaman selesai dimuat, bukan pas klik
    }

    document.getElementById("imgJurnal").addEventListener("click", function () { //biar wktu di klik bisa pindah ke halaman jurnal
        window.location.href = "jurnal.html";
    });

    const jurnalButton = document.querySelector(".button");
    if (jurnalButton) {
        jurnalButton.addEventListener("click", function () {
            alert("Commet");
        });

        console.log("Commet");
    }

    document.getElementById("imgHeader").addEventListener("click", function () {
        window.location.href = "bf.html";
    });

    const imgHeader = document.querySelector(".button");
    if (imgHeader) {
        imgHeader.addEventListener("click", function () {
            alert("MUSEUM");
        });

        console.log("MUSEUM");
    }
});
