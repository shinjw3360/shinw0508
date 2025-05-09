// 네비게이션 요소 객체 작성

const navContents = {
  title: [
    'collection',
    'Store Location',
    'Advertisement',
    'Online Store',
    'Contact',
    'Corporate',
  ],

  img: [
    'img/thumb1.jpg',
    'img/thumb2.jpg',
    'img/thumb3.jpg',
    'img/thumb4.jpg',
    'img/thumb5.jpg',
    'img/thumb6.jpg',
  ],
  subMenu: 'menu item',
};

const nav = document.querySelector('nav ul');

//삽입될 요소 초기화 변수
let navList = '';
navContents.title.map((content, index) => {
  //누적시키기 : +=
  navList += `              
            <li class="hover_mouse">
              <a href="#">${content}</a>
              <div class="thumb1_imgbox">
                <h2>${content}</h2>
                <div class="thumb1_img_view">
                  <img src="${navContents.img[index]}" alt="썸네일 이미지">
                </div>
                <ul class="sub_menu_item_list">
                  <li><a href="#">${navContents.subMenu}</a></li>
                  <li><a href="#">${navContents.subMenu}</a></li>
                  <li><a href="#">${navContents.subMenu}</a></li>
                  <li><a href="#">${navContents.subMenu}</a></li>
                </ul>
              </div>
            </li>`;
});

//연산자 확인하기

nav.insertAdjacentHTML('beforeend', navList);

//200장 이미지가 삽입될 요소
const images = document.querySelector('.main_img');

//이미지목록 초기화
let imgList = '';

//200장 이미지 반복문으로 초기화
for (let i = 0; i < 200; i++) {
  imgList += `<img src="./img/pic${i}.jpg" alt="이미지 프레임">`;
}
images.insertAdjacentHTML('afterbegin', imgList);

// 마우스 이동 시 이미지 변환
// 1. 좌표 계산
// 2. 계산된 좌표를 200으로 비율 분할
// 3. 마우스 이동 시 전체 이미지 가림
// 4. 분할된 좌표 위치의 이미지를 보여준다.

const x = document.querySelector('.move_active');
window.addEventListener('mousemove', function (e) {
  const clx = e.clientX; // 커서 위치
  const screenW = this.document.body.offsetWidth; // 화면 사이즈
  // Mth.floor() - 소수점 날림
  const percent = Math.floor((clx / screenW) * 200); // 200 비율로 분할된 커서 위치

  const imgEle = this.document.querySelectorAll('.main_img > img');
  //마우스 이동시 전체 이미지 숨김
  imgEle.forEach((element) => {
    element.style.display = 'none';
  });

  imgEle[percent].style.display = 'block';
  x.textContent = clx; // 특정요소의 문자요소를 변환 해준다.`
});
