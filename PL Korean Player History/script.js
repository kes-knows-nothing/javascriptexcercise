initSlider();

function initSlider(){
  const sliderCoiner = document.getElementById('slider');
  constpaginationContainer = document.createElement('div');

  // 페이지네이션 생성
  paginationContainer.className = 'pagination';
  sliderContainer.prepend(paginationContainer);

  //슬라이드 개수 파악
  const slideCount = document.querySelectorAll('.slide').length;
//  console.log(slideCount);
  for(let i = slideCount; i>0, i--){
    //<input type="radio" name="slide-radios" class="slide-radio" checked id="slide-radio-1">
    let radioBtn = document.createElement('input');
    radioBtn.type = 'radio';
    radioBtn.name = 'slide-radios';
    radioBtn.className = 'slide-radio';
    radioBtn.id = `slide-radio-${i}`;
    
    if(i==1) radioBtn.checked = true;
    sliderContainer.prepend(radioBtn);

    //label 생성
    let label = document.createElement('label');
    //<label for="slide-radio-1">1</label>
    label.setAttribute('for', `slide-radio-${i}`);
    label.innerHTML = i;
    paginationContainer.prepend(label);
  }
}