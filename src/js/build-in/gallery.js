
// export default function gallery() {
//     const gallery = document.querySelector(".mySwiper");
//     let mySwiper;
//     function mobileSlider() {
//         if (window.innerWidth <= 533 && gallery.dataset.mobile == "false") {
//             mySwiper = new Swiper(gallery, {
//                 effect: "cards",
//                 grabCursor: true,

//                 pagination: {
//                     el: ".swiper-pagination",
//                 },
//             });
//             gallery.dataset.mobile = "true";
//         }
//         if (window.innerWidth > 534) {
//             gallery.dataset.mobile = "false";
//             mySwiper.destroy();
//         }
//     }
//     mobileSlider();
//     window.innerWidth("resize", () => {
//         mobileSlider();
//     });
// }

// export default function gallery() {
//     if (window.innerWidth <= 533) {
//         const swiper = new Swiper(".mySwiper", {
//             effect: "cards",
//             grabCursor: true,
//             pagination: {
//                 el: ".swiper-pagination",
//             },
//         });
//     } else {
//         swiper.destroy();
//     }
// }
