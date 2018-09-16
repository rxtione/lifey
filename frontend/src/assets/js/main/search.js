new Vue({
  el: "#searchPopup",
  data: {
    links: [
      {
        title: "최근 리플 코인 리플 코인 리플 코인 리플코인",
        category: "최근검색어",
        url: "https://naver.com"
      },
      {
        title: "가즈아 코인 가즈아 코인 가즈아 코인",
        category: "인기검색어",
        url: "http://upbit.com "
      },
      {
        title: "최근 빗썸 서버다운 왠말이냐 나쁜넘들아",
        category: "최근검색어",
        url: "https://www.bithumb.com/"
      },
      {
        title: "다음가자 다음 가자",
        category: "인기검색어",
        url: "https://www.daum.net/"
      },
      {
        title: "최근 싸이월드 가자 싸이월드 가자",
        category: "최근검색어",
        url: "http://www.cyworld.com/"
      },
      {
        title: "네이트로 감돠 감돠 감돠 감돠",
        category: "인기검색어",
        url: "http://www.nate.com/"
      },
      {
        title: "최근 줌바라기 줌바라기 줌바라기",
        category: "최근검색어",
        url: "http://zum.com/"
      },
      {
        title: "쥐마켓에서 비싼거사주세요.",
        category: "인기검색어",
        url: "http://www.gmarket.co.kr/"
      },
      {
        title: "최근 11번가에서 사주쎄염!!비싸고 조은거",
        category: "최근검색어",
        url: "http://www.11st.co.kr/"
      },
      {
        title: "인기 11번가에서 사주쎄염!!비싸고 조은거",
        category: "인기검색어",
        url: "http://www.11st.co.kr/"
      },
      {
        title: "검색은 구글이무니다. 무니다.",
        category: "인기검색어",
        url: "https://www.google.co.kr/"
      }
    ],
    categories: [],
    selectedCategory: ''
  },
  computed: {
    filteredLinks() {
      return this.links.filter(link => {
        return link.category.match(this.selectedCategory);
      });
    }
  },
  methods: {
    getCategories() {
      let categoriesSet = new Set();
      this.links.forEach((link) => {
        categoriesSet.add(link.category);
      });
      this.categories = Array.from(categoriesSet);
    },
    categoryCount(category) {
      return this.links.filter(link => {
        return link.category.match(category);
      })
    }
  },
  created() {
    this.getCategories();
    this.selectedCategory = this.categories[0];
  }
});



$(document).ready(function() {
	$('.seachresult-wrap button').click(function (){
		$('.seachresult-wrap button').removeClass('current');
		$(this).addClass('current');
	});
});