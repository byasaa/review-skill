var nama, nilai;

nama = 'Muhamad Abiyasa Sastra Wardana';
nilai = 0;

if (nilai >= 80 && nilai <= 100) {
    console.log('A');
} else if (nilai <= 79 && nilai >= 65) {
    console.log('B');
} else if (nilai <= 64 && nilai >= 50) {
    console.log('C');
} else if (nilai <= 49 && nilai >= 35) {
    console.log('D');
} else if (nilai <= 34 && nilai >= 0) {
    console.log(nama+' '+nilai);
} else {
    console.log('Nilai Invalid');
}