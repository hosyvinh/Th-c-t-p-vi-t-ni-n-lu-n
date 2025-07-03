// get element
const usenameElement = document.getElementById("usename");
const passwordElement = document.getElementById("password");
const formlogin = document.getElementById("formlogin");
// get elelment error
const usenameElError = document.getElementById("usenameNone");
const passworElError = document.getElementById("passworNone")

// lắng nghe sự kiện đăng nhập
formlogin.addEventListener("submit", function(e) {
    // ngăn chặn sự kiện load lại trang
    e.preventDefault();
    //validate dữ liệu đầu vào
    if(!usenameElement.value){
        usenameElError.style.display = "block";
    }else{
        usenameElError.style.display = "none";

    }
    if(!passwordElement.value){
        passworElError.style.display = "block";
    }else{
        passworElError.style.display = "none";
    }

    // lấy dữ liệu từ local về
    const userLocal = JSON.parse(localStorage.getItem("users")) || [];
    //tìm kiếm email , mật khẩu người dùng có tồn tại trên local không 
    const findUser = userLocal.find((user) => user.usename === usenameElement.value && user.password === passwordElement.value);
    if(!findUser){
        alert("tên tài khoảng hoặc mật khẩu không đúng");
    }else{
        // nếu đăng nhập thành công, chuyển hướng về trang chủ
        window.location.href = "index.html"
    }
    // lưu thông tin của người dùng đăng nhập thành công lên local
    //localStorage.setItem("key", JSON.stringify(đối tượng muốn lưu)) // nguyên 1 user đó luôn
    localStorage.setItem("useLogin", JSON.stringify(findUser)) // 
});