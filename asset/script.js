// Event listener với SVG
document.querySelector('.close-svg').addEventListener('click', function () {
    document.getElementById('targetElement').style.display = 'none';
});

// Dropdown menu
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuPopup = document.getElementById('mobileMenuPopup');
const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

// Mở mobile menu
function openMobileMenu() {
    mobileMenuBtn.classList.add('active');
    mobileMenuOverlay.classList.add('active');
    mobileMenuPopup.classList.add('active');
    document.body.style.overflow = 'hidden'; // Ngăn scroll background
}

// Đóng mobile menu
function closeMobileMenu() {
    mobileMenuBtn.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
    mobileMenuPopup.classList.remove('active');
    document.body.style.overflow = ''; // Cho phép scroll lại
}

// Event Listeners
mobileMenuBtn.addEventListener('click', openMobileMenu);
closeMenuBtn.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Đóng menu khi click vào link
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Đóng menu khi nhấn phím ESC
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Responsive check - Ẩn/hiện menu button dựa trên kích thước màn hình
function checkScreenSize() {
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}

window.addEventListener('resize', checkScreenSize);