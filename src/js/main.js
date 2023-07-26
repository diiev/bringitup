import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Difference from './modules/difference';
import Form from './modules/forms';
import ShowInfo from './modules/showInfo';
import Download from './modules/donwload';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({
        container:'.page', 
        btns: '.next'
    });
    mainSlider.render();
 
    const modulesSlider = new MainSlider ({
        container:'.moduleapp', 
        btns: '.next'
    })
    modulesSlider.render();
    const showUpSlider = new MiniSlider ({
      container: '.showup__content-slider',
      next: '.showup__prev',
      prev: '.showup__next',
      activeClass: '.card-active',
      animate: true,
    });
    showUpSlider.init();
    const moduleSlider = new MiniSlider ({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-prev',
        prev: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    moduleSlider.init(); 
    const feedSlider = new MiniSlider ({
        container: '.feed__slider',
        next: '.feed__slider .slick-prev',
        prev: '.feed__slider .slick-next',
        activeClass: 'feed__item-active',
      
        
    });
    feedSlider.init();

   new VideoPlayer('.showup .play', '.overlay').init();
   new VideoPlayer('.module__video-item .play', '.overlay').init();
   new Difference('.officerold', '.officernew', '.officer__card-item').init();
   new Form('.form').init();
   new ShowInfo('.plus__content').init();
   new Download('.download').init();

});