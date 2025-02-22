document.addEventListener("DOMContentLoaded", function() {
    let yesBtn = document.querySelector(".yes-btn");

    if (!yesBtn) return; // Kiểm tra nếu không tìm thấy nút YES thì dừng script

    yesBtn.addEventListener("mouseover", function() {
        yesBtn.style.transform = "scale(1.3)";
    });

    document.body.addEventListener("mousemove", function() {
        if (!yesBtn.matches(":hover")) {
            yesBtn.style.transform = "scale(1)";
        }
    });
});
