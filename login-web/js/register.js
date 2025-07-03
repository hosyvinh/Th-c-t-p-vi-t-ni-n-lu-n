/* lấy element của trang */
let formRegisterElement = document.getElementById("formRegister");
const usenameElemetn = document.getElementById("usename");
const inputPasswordelement = document.getElementById("inputPassword");
const inputRePasswordElement = document.getElementById("inputRePassword");
const phoneNumberElement = document.getElementById("phoneNumber");
const emailInputEle = document.getElementById("emailInput");

// các element lỗi
const usenameErroElement = document.getElementById("usenameError");
const inputPasswordErrorElement = document.getElementById("inputPasswordError");
const inputRePasswordErrorElement = document.getElementById("inputRePasswordError");
const phoneNumberErrorElement = document.getElementById("phoneNumberError");
const emailInputError= document.getElementById("emailInputError");

//lấy dữ liệu từ localstorege
// Lấy dữ liệu lưu trữ trong trình duyệt với nhãn mỗi user là một users "users (ta đang tạo ở dưới)"
//JSON.parse(...): Chuyển đổi chuỗi JSON thành object JavaScript.
const userLocal = JSON.parse(localStorage.getItem("users")) || [];
// lấy 1 item từ local, mảng này tên là user, nếu k có thì khởi tạo 1 mảng rỗng sẵn sàng được lưu trữ

/* 
const userLocal = [
  { id: 1, name: "Nam" },
  { id: 2, name: "Hồng" }
];
Dùng JSON.stringify:
const jsonString = JSON.stringify(userLocal);
console.log(jsonString);
==>
    '[{"id":1,"name":"Nam"},{"id":2,"name":"Hồng"}]'

*/


// function check
/**
 * chức năng của hàm
 * validate địa chỉ email
 * @param {*} email : đây là tham số là chuỗi email mà người dùng nhập vào
 * @returns : trả về dữ liệu nếu email đúng định dạng. ngược lại trả về undifined
 * author : NDBT (01-07-25)
 */
function validateEmail (email){
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ); // tuân thủ quy tắc regex (tự tìm hiểu)
};

// lắng nghe sự kiện đăng kí tài khoản
formRegisterElement.addEventListener("submit", function(element){
    // ngăn cho trang không load lại
    element.preventDefault();
    if(!usenameElemetn.value){ // kiểm tra nếu chuỗi trống hoặc có các giá trị k xác định 
        //hiển thị lỗi
        usenameErroElement.style.display = "block"; // hiển thị chữ đỏ phía dưới
    }else{
        usenameErroElement.style.display = "none"; // ẩn chữ đỏ phía dưới
    }

    // kiểm tra số điện thoại
    if(!phoneNumberElement.value){ // kiểm tra nếu chuỗi trống hoặc có các giá trị k xác định 
        //hiển thị lỗi
        phoneNumberErrorElement.style.display = "block"; // hiển thị chữ đỏ phía dưới
    }else{
        phoneNumberErrorElement.style.display = "none"; // ẩn chữ đỏ phía dưới
    }

    // kiểm tra nhập mật khẩu
    if(!inputPasswordelement.value){ // kiểm tra nếu chuỗi trống hoặc có các giá trị k xác định 
        //hiển thị lỗi
        inputPasswordErrorElement.style.display = "block"; // hiển thị chữ đỏ phía dưới
    }else{
        inputPasswordErrorElement.style.display = "none"; // ẩn chữ đỏ phía dưới
    }

    // kiểm tra nhập email
    if(!emailInputEle.value){ // kiểm tra nếu chuỗi trống hoặc có các giá trị k xác định 
        //hiển thị lỗi
        emailInputError.style.display = "block"; // hiển thị chữ đỏ phía dưới
    }else{
        emailInputError.style.display = "none"; // ẩn chữ đỏ phía dưới
        if(!validateEmail(emailInputEle.value)){
            emailInputError.style.display = "block";
            emailInputError.innerHTML = "Email nhập vào không đúng định dạng";
        }
    }
    // kiêm tra xem 2 lần nhập mật khẩu có giống nhau không
    if(inputPasswordelement.value !== inputRePasswordElement.value){
        inputRePasswordErrorElement.style.display = "block";
        inputRePasswordErrorElement.innerHTML = "Mật khẩu không trùng khớp"; // thay đổi thẻ html
    }else{
        inputRePasswordErrorElement.style.display = "none";
    }

    // sau khi xong tất cả thì gửi dữ liệu từ form lên localStorage
    // kiểm tra tất cả các trường đều có dữ liệu
    if(usenameElemetn.value && inputPasswordelement.value && inputRePasswordElement.value && phoneNumberElement.value && emailInputEle.value && inputPasswordelement.value === inputRePasswordElement.value && validateEmail(emailInputEle.value)){
        // lấy dữ liệu từ form gộp nó thành đối tượng user
        const user={
            userID: Math.ceil(Math.random() * 100000000),
            useName : usenameElemetn.value,
            email : emailInputEle.value,
            PhoneNumber : phoneNumberElement.value,


        };
        // đẩy dữ liệu vào mảng userLocal
        userLocal.push(user);
        // sau khi push thì ta lưu userLocal lên localStorage


        // sau hhi xong thi lưu dư liệu lên local
        localStorage.setItem("users", JSON.stringify(userLocal)); // dữ liệu truyền lên thì phải ở dạng json nên ta phải ép kiểu từ string sang json luôn
        //dán nhãn là mỗi user là 1 users , để ta có thể truy cập vào bên trong user đó
           alert("đăng kí thành công. Đăng nhập ngay !");
            window.location.href = "login.html";
        
    }
})