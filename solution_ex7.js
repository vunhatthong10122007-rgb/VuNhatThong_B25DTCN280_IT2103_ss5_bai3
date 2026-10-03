const chuoiDuLieuGoc = "BS.nguyen_van_hai-KHOA_TIM_MACH-08:30-PHONG_302";


const danhSachPhanTu = chuoiDuLieuGoc.split("-");
const [bacSiGoc, chuyenKhoaGoc, thoiGianTruc, phongKhamGoc] = danhSachPhanTu;

const tenBacSiDaXoaDauGach = bacSiGoc.slice(3).replaceAll("_", " ");
const tenBacSi = tenBacSiDaXoaDauGach
.toLowerCase()
.split(" ")
.map(tu => tu.charAt(0).toUpperCase() + tu.slice(1))
.join(" ");

const tenChuyenKhoa = chuyenKhoaGoc
.replaceAll("_", " ")
.toLowerCase()
.split(" ")
.map(tu => tu.charAt(0).toUpperCase() + tu.slice(1))
.join(" ");

const tenPhongKham = phongKhamGoc.replace("PHONG_", "Phòng ");

const bangHienThi = `${tenBacSi}-${tenChuyenKhoa}-${tenPhongKham}`;


