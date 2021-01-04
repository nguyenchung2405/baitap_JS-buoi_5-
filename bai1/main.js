function tinhDiem() {

    // Đầu vào
    var diemChuan = document.getElementById('diemChuan').value;
    var diemMon_1 = parseFloat(document.getElementById('diemMon_1').value);
    var diemMon_2 = parseFloat(document.getElementById('diemMon_2').value);
    var diemMon_3 = parseFloat(document.getElementById('diemMon_3').value);
    var khuVuc = document.getElementById('txtKhuVuc').value;
    var doiTuong = parseInt(document.getElementById('txtDoiTuong').value);

    // Xử lý
    var kq = '';
    var tongDiem = tinhTongDiemThiSinh(diemMon_1, diemMon_2, diemMon_3, khuVuc, doiTuong);
    if (tongDiem < diemChuan) {
        kq = 'Bạn đã rớt';
    } else {
        kq = 'Bạn đã đậu';
    }
    document.getElementById('cardFooter').innerHTML = '';
    var tagSpan = document.createElement('span');
    tagSpan.innerHTML = kq + '<br>';
    document.getElementById('cardFooter').appendChild(tagSpan);
    var tagSpan = document.createElement('span');
    tagSpan.innerHTML = 'Tổng điểm: ' + tongDiem;
    document.getElementById('cardFooter').appendChild(tagSpan);


}

function tinhTongDiemThiSinh(a, b, c, d, f) {
    var tongDiem = a + b + c;
    switch (d) {
        case 'A':
            tongDiem += 2;
            break;
        case 'B':
            tongDiem += 1;
            break;
        case 'C':
            tongDiem += 0.5;
            break;
    }
    switch (f) {
        case 1:
            tongDiem += 2.5;
            break;
        case 2:
            tongDiem += 1.5;
            break;
        case 3:
            tongDiem += 1;
    }
    tongDiem = parseFloat(tongDiem);
    return tongDiem;
}