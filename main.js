//? Bài Tập 1

/**
 * Inputs: luongNgay, soNgay
 * 
 * Steps:
 *      B1: lấy dữ liệu từ form
 *      B2: tính tổng lương
 *              tongLuong = luongNgay * soNgay
 *      B3: xuất kết quả
 * 
 * Outputs: tongLuong 
 */

function tinhLuong() {
    let luongNgay = document.getElementById("inputLuong").value;
    let soNgay = document.getElementById("inputNgay").value;
    let tongLuong = 0;

    if(soNgay > 0){
        tongLuong = luongNgay * soNgay;
    }
    else{
        alert("Số ngày làm việc phải lớn hơn 0")
    }

    document.getElementById("txtTongLuong").innerHTML = `
    Tổng tiền lương nhận được là:
    <br>
    ${tongLuong.toLocaleString()}
    `
    document.getElementById("txtTongLuong").classList.add("styleTongLuong")
}



//? Bài tập 2

/**
 * Inputs: toan, ly, hoa, van, anh
 * 
 * Steps:
 *      B1: lấy dữ liệu từ form
 *      B2: tính dtb = (toan + ly + hoa + van + anh) / 5
 *      B3: xuất kết quả
 * 
 * Outputs: dtb
 */

function tinhDTB() {
    let toan = Number(document.getElementById("inputToan").value);
    let ly = Number(document.getElementById("inputLy").value);
    let hoa = Number(document.getElementById("inputHoa").value);
    let van = Number(document.getElementById("inputVan").value);
    let anh = Number(document.getElementById("inputAnh").value);

    let dtb = (toan + ly + hoa + van + anh) / 5

    document.getElementById("txtDTB").innerHTML = `
    Điểm trung bình của 5 môn là:
    <br>
    <p style="color:blue; font-size:30px">${dtb} Điểm<p>
    `
    document.getElementById("txtDTB").classList.add("styleDTB")
}


//? Bài tập 3

/**
 * Inputs: usd, giaMotUSD
 * 
 * Steps:
 *      B1: lấy dữ liệu từ form
 *      B2: tính VND dựa theo số USD nhập vào
 *              vnd = usd * giaMotUSD
 *      B3: xuất kết quả
 * 
 * Outputs: vnd
 */

const giaMotUSD = 23500;

function tinhVND() {
    let usd = document.getElementById("inputUSD").value;
    let vnd = 0;

    if(usd > 0){
        vnd = usd * giaMotUSD;
    }
    else{
        alert("Số USD nhập vào phải lớn hơn 0")
    }

    document.getElementById("txtQuyDoi").innerHTML = `
    <p style="padding-top:20px; color:brown; font-size:20px">Số tiền quy đổi tương ứng với ${usd} USD là:
    <br></p>
    <p style="color:red; font-size:30px">${vnd.toLocaleString()} VNĐ </p>
    `
}


//? Bài tập 4
/**
 * Inputs: canh1, canh2
 * 
 * Steps:
 *      B1: lấy dữ liệu từ form
 *      B2: tính diện tích và chu vi theo công thức
 *      B3: xuất kết quả
 * 
 * Outputs:
 * dienTich, chuVi
 */

function tinhSP() {
    let canh1 = Number(document.getElementById("inputOne").value);
    let canh2 = Number(document.getElementById("inputTwo").value);
    let dienTich = 0;
    let chuVi = 0;

    if(canh1 > 0 && canh2 > 0){
        dienTich = canh1 * canh2;
        chuVi = (canh1 + canh2) * 2;
    }
    else{
        alert("Độ dài 2 cạnh phải lớn hơn 0")
    }

    document.getElementById("txtSP").innerHTML = `
    <p style="color:blue; font-size:25px; padding-top: 20px">Diện tích hình chữ nhật là: ${dienTich} cm<sup>2</sup>
    <br></p>
    <p style="color: red; font-size:25px">Chu vi hình chữ nhật là: ${chuVi} cm</p>
    `
}


//? Bài tập 5

/**
 * Inputs: num
 * 
 * Steps:
 *      B1: lấy dữ liệu từ form
 *      B2: tính tổng 2 chữ số
 *          unit = num % 10
 *          ten = Math.floor(num / 10)
 *          result = ten + unit
 *      B3: xuất kết quả
 * 
 * Outputs: result
 */

function tinhTong() {
    let num = document.getElementById("inputNum").value;
    let result = 0;
    if(10 <= num && num <= 99){
        let ten = Math.floor(num / 10);
        let unit = num % 10;

        result = ten + unit;
    }
    else{
        alert("Số nhập vào phải là số có 2 chữ số")
    }

    document.getElementById("txtResult").innerHTML = `
    <p style="color:red; padding-top:20px; font-size:25px">Tổng 2 chữ số của ${num} là: ${result} </p>
    `
}