import Toolbar from "./toolbar";
import Footer from "./footer";
import { useLocation } from "react-router-dom";
import "./detail.css";
import React, { useState } from 'react';


function Detail() {
  const location = useLocation();
  const bookData = location.state?.bookData || {};
  console.log("bookData", bookData);

  const priceFormatter = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
    });

  const [prevIsLiked, setIsLiked] = useState(false); // 초기값은 찜하지 않은 상태
  const [preferenceCount, setPreferenceCount] = useState(8); // 초기값 설정

  
  const handlePreferenceClick = () => {
        // 여기에서 찜하기 동작 수행 (API 호출 등)
        // 현재 찜하기 상태를 토글

        setIsLiked((prevIsLiked) => !prevIsLiked);
  //dssdsdsdsdsd
        // 찜하기 횟수 1번 클릭시 +1 한번더 클릭시 -1 
        setPreferenceCount((prevCount) => (prevIsLiked ? prevCount - 1 : prevCount + 1));
    };

  return (
    <div>
      <Toolbar />
      <div className="detail">
      <div className="detail-content">
        <div className="detailImage">
            <img src="/img/novel/novel1.jpg" alt="파친코" />
        </div>

        <div className="miniCategory">
            <p>{bookData.category}</p>
        </div>

        <div className="title-Price">
            <h5>{bookData.sellingTitle}</h5>
            <h5>{priceFormatter.format(bookData.price)}</h5>
        </div>

        <div className="userInfo">
            <img src={bookData.profile_img} alt="유저이미지" />
            <h5>{bookData.UserID}</h5>
            <h5>{bookData.location}</h5>
        </div>

        <div className="myPage-chat">
        <button type="button" className={`rui_button_white_40 preference_button js_preference_button ${setIsLiked ? 'liked' : ''}`} onClick={handlePreferenceClick}>
                <span className="button_contents">
                    <span className="button_icon">
                        <img src="/img/heartbutton.jpg" alt="찜하기" />
                    </span>
                    <span className="button_text js_preference_count">{setIsLiked ? preferenceCount - 1 : preferenceCount}</span>
                </span>
            </button>
        <button>채팅하기</button>
        </div>

        <div className="onSale">
            <button>판매중</button>
        </div>
    </div>

      <div className="detail-description">
        <p>
          애플TV 드라마 '파친코' 원작으로 <br />
          드라마를 너무 재미있게 봐서 10월달에 교보문고에서 구매했어요 <br />
          <br />
          드라마로 한번 봤지만 원작인 소설이 훨씬 재미있고 디테일한 부분이 있더라구요~  <br />
          <br />
          직거래는 시간만 맞춰주신다면 어느정도 이동 가능합니다! (성남 부근) <br />
          택배거래는 반값택배 + 1400원 일반택배 +2500원 입니다.
        </p>
      </div>

      {/* <div className="detail-bookIntro">
        <h3>간단한 책 소개</h3>
        <p>
          “역사는 우리를 저버렸지만, 그래도 상관없다”
          역사에 외면당한 재일조선인 가족의 대서사극
          전 세계를 감동시킨 이민진 작가 화제작 《파친코》 새롭게 출간!
          <br />
          “내게 ‘한국인’은 이야기의 주인공이 될 가치가 있는 이들이다.
           나는 가능한 한 오래 한국인 이야기를 쓰고 싶다.”
           - ‘한국 독자들에게’ 중에서
          <br />
          한 세기에 걸친 재일조선인 가족의 이야기를 그린 세계적 베스트셀러, 이민진 작가의 장편소설 《파친코》가 새롭게 출간되었다. 《파친코》는 재미교포 1.5세대인 이민진 작가가 30년에 달하는 세월에 걸쳐 집필한 대하소설로, 2017년 출간되어 《뉴욕타임스》 베스트셀러에 올랐다. 현재까지 전 세계 33개국에 번역 수출되었으며, BBC, 아마존 등 75개 이상의 주요 매체의 ‘올해의 책’으로 선정되었을 뿐 아니라 전미도서상 최종 후보에 이름을 올리며 평단과 대중을 모두 사로잡은 작품이다. 버락 오바마 전 미국 대통령으로부터 “회복과 연민에 대한 강력한 이야기”라는 찬사를 받으며 주목을 받았다.
          <br />
          지난 4월 판권 계약이 종료되며 절판되었던 《파친코》는 새로운 번역과 디자인으로 한국 독자에게 돌아왔다. 첫 문장(“역사는 우리를 저버렸지만, 그래도 상관없다”)에서부터 원문의 의미를 보다 충실하게 전달하고자 했으며, 작품 특유의 속도감 있는 문체를 살리고자 노력했다. 또한 작가가 처음 의도한 구조와 흐름을 살리기 위해 총 세 파트(1부 ‘고향’, 2부 ‘모국’, 3부 ‘파친코’)로 된 원서의 구성을 그대로 따랐다. 새 출간을 기념해 ‘한국 독자들에게’ 보내는 글에는 한국인 이야기를 계속해서 쓰는 이유를 밝혔다. 작가는 “우리가 매력적이기 때문”이라며, “한국인은 지적으로나, 감성적으로나 깊이 있는 이야기의 주인공이 될 가치가 있는 이들”이기에 앞으로도 한국의 이야기를 젊은 세대들에게 들려주고 싶다며 한국 독자들에게 각별한 애정을 표했다.
        </p>
      </div> */}
      
      <div className="detail-similar-more">
        <div>비슷한 제품</div>
        <div className="similar-wrap">
            <img src="/img/novel/novel2.jpg" alt="태양의 제국" />
            <div className="similar-title">태양의 제국 팝니다.</div>
            <div className="similar-price">8,000원</div>
            <div className="similar-userID">태양신</div>
            <div className="similar-location">성남동</div>

            <img src="/img/novel/novel3.jpg" alt="사랑의 역사" />
            <div className="similar-title">사랑의 역사 판매합니다.</div>
            <div className="similar-price">5,000원</div>
            <div className="similar-userID">사랑꾼</div>
            <div className="similar-location">운준동</div>

            <img src="/img/novel/novel5.jpg" alt="파시" />
            <div className="similar-title">박경리 작사 장편소설 파시 내놔요~</div>
            <div className="similar-price">5,000원</div>
            <div className="similar-userID">구르리</div>
            <div className="similar-location">판교동</div>

            <img src="/img/novel/novel6.jpg" alt="최저" />
            <div className="similar-title">성인 비디오 소설 최저 팝니다!</div>
            <div className="similar-price">10,000원</div>
            <div className="similar-userID">사쿠라</div>
            <div className="similar-location">죽전1동</div>

            <img src="/img/novel/novel7.jpg" alt="사로잡힌 감정" />
            <div className="similar-title">로맨스 소설 주디스 마이클의 사로잡힌 감정 판매 해요</div>
            <div className="similar-price">14,000원</div>
            <div className="similar-userID">쥬비스다이어트</div>
            <div className="similar-location">상현동</div>

            <img src="/img/novel/novel8.jpg" alt="칼레발라" />
            <div className="similar-title">50편의 서사시가 담긴 유명한 칼레발라 판매합니다.</div>
            <div className="similar-price">28,000원</div>
            <div className="similar-userID">핀란드의사</div>
            <div className="similar-location">수내동</div>
        </div>
        

      </div>
      <Footer/>
      </div>  
    </div>
  );
}

export default Detail;