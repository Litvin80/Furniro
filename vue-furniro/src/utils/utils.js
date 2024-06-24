export function isTouchDevice() {
    // Метод 1: Перевірка на наявність подій дотику
    const hasTouchEvents = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

    // Метод 2: Перевірка User-Agent на наявність ключових слів, пов'язаних з мобільними пристроями
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);

    return hasTouchEvents || isMobileDevice;
}