export default function fancybox() {
    let buttonmy = document.querySelector('.carousel__button');
    let htmlElement = document.getElementsByTagName("html")


   buttonmy.onclick = function() {
    htmlElement.classList.remove('.with-fancybox')
};
}