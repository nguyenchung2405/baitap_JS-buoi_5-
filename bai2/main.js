function tinhTien() {
    // Đầu vào

    var ten = document.getElementById('txtTen').value;
    var soDien = document.getElementById('txtSoDien').value;

    // Xử lý
    var tongTienPhaiTra = tinhSoTienDienPhaiTra(soDien);

    // Đầu ra
    document.getElementById('cardFooter').style.display = 'block';
    document.getElementById('cardFooter').innerHTML = 'Tổng số tiền điện phải trả là: ' + tongTienPhaiTra + ' VNĐ';
}

function tinhSoTienDienPhaiTra(soKW) {
    var tongTien = 0;
    if (soKW < 0) {
        alert('Vui lòng nhập số kw điện.');
    } else {
        if (soKW <= 50) {
            tongTien = 500 * soKW;
        } else if (soKW > 50 && soKW <= 100) {
            tongTien = (500 * 50) + (650 * (soKW - 50));
        } else if (soKW > 100 && soKW <= 200) {
            tongTien = (500 * 50) + (650 * 50) + (850 * (soKW - 100));
        } else if (soKW > 200 && soKW <= 350) {
            tongTien = (500 * 50) + (650 * 50) + (850 * 100) + (1100 * (soKW - 200));
        } else {
            tongTien = (500 * 50) + (650 * 50) + (850 * 100) + (1100 * 150) + (1300 * (soKW - 350));
        }
    }
    var tienTe = Intl.NumberFormat('vn-VN');
    tongTien = parseInt(tongTien);
    tongTien = tienTe.format(tongTien);
    return tongTien;
}