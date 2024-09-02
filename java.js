            // now showing
            const prevButton = document.querySelector('.slider-button-prev');
            const nextButton = document.querySelector('.slider-button-next');
            const moviesGrid = document.querySelector('.movies-grid');
        
            let currentIndex = 0;
            const totalSlides = moviesGrid.children.length;
            const slideWidth = moviesGrid.children[0].offsetWidth;
        
            nextButton.addEventListener('click', () => {
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    moviesGrid.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }
            });
        
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    moviesGrid.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
                }
            });
  
            // upcoming movies
            const prevButton2 = document.querySelector('.slider-button-prev2');
            const nextButton2 = document.querySelector('.slider-button-next2');
            const moviesGrid2 = document.querySelector('.movies-grid2');

            let currentIndex2 = 0;
            const totalSlides2 = moviesGrid2.children.length;
            const slideWidth2 = moviesGrid2.children[0].offsetWidth;

            nextButton2.addEventListener('click', () => {
                if (currentIndex2 < totalSlides2 - 1) {
                    currentIndex2++;
                    moviesGrid2.style.transform = `translateX(-${currentIndex2 * slideWidth2}px)`;
                }
            });

            prevButton2.addEventListener('click', () => {
                if (currentIndex2 > 0) {
                    currentIndex2--;
                    moviesGrid2.style.transform = `translateX(-${currentIndex2 * slideWidth2}px)`;
                }
            });
       

            


            

            