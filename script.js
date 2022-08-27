let array = [
    {
        id: 1,
        image: 'https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg',
        title: 'Title 1',
        url: 'http://google.com'
    },
    {
        id: 2,
        image: 'http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg',
        title: 'Title 1',
        url: 'http://google.com'
    }, 
    {
        id: 3,
        image: 'https://wowslider.com/sliders/demo-5/data/images/sweden.jpg',
        title: 'Title 1',
        url: 'http://google.com'
    }, 
    {
        id: 4,
        image: 'https://wowslider.com/sliders/demo-27/data1/images/hotair1373167.jpg',
        title: 'Title 1',
        url: 'http://google.com'
    }
]

const mainDiv = document.getElementById('div-block')
const arrowLeft = document.getElementById('arrowleft')
const arrowRight = document.getElementById('arrowright')
const dots = document.getElementsByClassName('dot')

sliderIndex = 0;

function createATag(item){
    let aTag = document.createElement('a')
    aTag.setAttribute('href', item.url)
    aTag.classList.add('atag')

    return aTag;
}

function createImg(item){
    let img = document.createElement('div');
    img.style.backgroundImage = `url(${item.image})`;
    img.classList.add('imgclass');
    
    return img;
}

function createTitle(item) {
    let title = document.createElement('h1')
    title.textContent = item.title
    title.classList.add('title')

    return title;
}


function createDots() {
    const dotsParent = document.createElement('div')
    dotsParent.classList.add('dotsblock')

    array.forEach(element => {
        const dotElement = document.createElement('div')
        dotElement.classList.add('dot')
        dotElement.setAttribute('data-id', element.id - 1)
        console.log(element.id);

        dotElement.addEventListener('click', function(event){
            let id = event.target.getAttribute('data-id')
            sliderIndex = id;
            slider();
        })

        dotsParent.appendChild(dotElement)
        
    });

    return dotsParent;
}

function slider(item){
    mainDiv.innerHTML = '';
    let createATagvar = createATag(array[sliderIndex]);
    let createImgvar = createImg(array[sliderIndex]);
    let createTitlevar = createTitle(array[sliderIndex]);
    let dotsB = createDots();

    createATagvar.appendChild(createImgvar);
    createATagvar.appendChild(createTitlevar);

    mainDiv.appendChild(createATagvar);
    mainDiv.appendChild(dotsB)

    currentActiveDot();
  
}

function currentActiveDot(){
    dots[sliderIndex].classList.add('activeDot')
}


function arrowLeftFunction(){
    if (sliderIndex == 0) {
        sliderIndex = array.length-1;
        slider();
        return;
    }
    sliderIndex --;
    slider();
}

function arrowRightFunction(){
    if (sliderIndex == array.length-1) {
        sliderIndex = 0;
        slider();
        return;
    }
    sliderIndex ++;
    slider();
}

arrowLeft.addEventListener('click', arrowLeftFunction)
arrowRight.addEventListener('click', arrowRightFunction)

// setInterval(() => {
//     arrowRightFunction();
// }, 2000);

slider();