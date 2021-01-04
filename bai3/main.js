function tinhHoaDon() {

    var maKH = parseInt(document.getElementById('txtMaKH').value);
    var kenhCaoCap = document.getElementById('txtKenhCaoCap').value;
    var phiHoaDon = 0;
    var phiDVCoBan = 0;
    var thueKenhCaoCap = 0;

    // Xử lý
    switch (maKH) {
        case 1:
            phiHoaDon = 4.5;
            phiDVCoBan = 20.5;
            thueKenhCaoCap = kenhCaoCap * 7.5;
            break;
        case 2:
            phiHoaDon = 15;
            phiDVCoBan = 75;
            thueKenhCaoCap = kenhCaoCap * 50;
            break;
    }

    // Đầu ra

    var tongTien = phiHoaDon + phiDVCoBan + thueKenhCaoCap;
    document.getElementById('cardFooter').innerHTML = '';
    document.getElementById('cardFooter').innerHTML = 'Tổng tiền phải trả là: ' + tongTien + ' $';
}