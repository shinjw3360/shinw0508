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

//질문에 대한 답변 :

//연산자 확인하기

nav.insertAdjacentHTML('beforeend', navList);
