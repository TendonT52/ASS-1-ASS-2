function check() {
    company = document.getElementById("company").value;
    size = document.getElementById("size").value;
    chair = document.getElementById("chair").value;
    contact = document.getElementById("contact").value;
    phone = document.getElementById("phone").value;

    if (company == "" || contact == "" || phone == "") {
        alert("โปรดระบุชื่อบริษัท, ชื่อผู้ติดต่อ, และเบอร์โทรศัพท์");
    } else if (size == "") {
        alert("กรุณาระบุขนาดของบูธ");
    } else if (chair < 1 || chair > 10) {
        alert("กรุณาระบุจำนวนเก้าอี้ให้ถูกต้อง (ค่าตั้งแต่ 1 ถึง 10)");
    } else {
        alert("OK");
    }
}