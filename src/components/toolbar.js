import { SlMagnifier } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./toolbar.css";

function ColorSchemesExample() {
  const [selectedMainCategory, setSelectedMainCategory] = useState('null');
  const [selectedAlarmCategory, setSelectedAlarmCategory] = useState('null');
  const [showCategoryDropdown, setShowDropdown] = useState(false);
  const [showAlarmDropdown, setShowAlarmDropdown] = useState(false);

  const navigate = useNavigate();
  const toggleAlarmDropdown = () =>{
    setShowAlarmDropdown(!showAlarmDropdown);
    if (!showCategoryDropdown) { //버튼을 닫았을때 기본값으로 리셋
      setSelectedAlarmCategory('alarm');
    }
  }

  const headerAlarmClick = (alarmcategory) => {
    setSelectedAlarmCategory(alarmcategory)  //헤더알람 / 혜택 버튼 선택
  }

  const toggleCategoryDropdown = () => {
    setShowDropdown(!showCategoryDropdown);

    if (!showCategoryDropdown) { //버튼을 닫았을때 기본값으로 리셋
      setSelectedMainCategory('books');
    }
  };
  const handleBookClick = (category) => {
    setSelectedMainCategory(category);
  
  };
  const handleSubcategoryClick = (subcategory) => {
    navigate(`/category/${subcategory.toLowerCase()}`);
  };

  return (
    <div className="header-container">
      <header>
        <div className="user-actions">
          <div className="join">
            <a href="/signup">회원가입</a>
          </div>

          <div className="login">
            <a href="/login">로그인</a>
          </div>

          <div className="mypage">
            <a href="/">
            {/* PUBLIC_URL 환경 변수를사용하여 퍼블릭에 접근해서 불러오기 */}
              <img src={`${process.env.PUBLIC_URL}/img/mypage.png`} alt="마이페이지"/>
            </a>
          </div>

          <div className="alarm">
              <img src={`${process.env.PUBLIC_URL}/img/alarm.png`} alt="알람" onClick={toggleAlarmDropdown}/>
          </div>   
      {/* 알람 모달창 sql 데이터삽입예정 */}
      {showAlarmDropdown && (
        <div className="alarm-container">
          <div className="alarm-header">
            <span 
            className={`alarm-title1 ${selectedAlarmCategory === 'alarm' ? 'selected' : ''}`}
            onClick={() => headerAlarmClick('alarm')}>알림</span>
            <span 
            className={`alarm-title2 ${selectedAlarmCategory === 'benefit' ? 'selected' : ''}`}
            onClick={() => headerAlarmClick('benefit')}>혜택</span>
          </div>

          {selectedAlarmCategory === 'alarm' &&(
            <>
          <div className="alarm-content">
            {/* 알림 내용을 표시하는 부분 */}
            <div className="alarm-item"> 알림 1
            <p className="item-title">123</p>
            <p className="title-dscs">1234</p>
            </div>
          </div>
          </>
            )}
          {selectedAlarmCategory === 'benefit' &&(
            <>
          <div className="alarm-content">
            {/* 알림 내용을 표시하는 부분 */}
            <div className="alarm-item"> 알림 1
            <p className="item-title">123</p>
            <p className="title-dscs">1234</p>
            </div>
            <div className="alarm-item">새로운 알림 2</div>
            <div className="alarm-item">새로운 알림 2</div>
            <div className="alarm-item">새로운 알림 2</div>
            <div className="alarm-item">새로운 알림 2</div>
            <div className="alarm-item">새로운 알림 2</div>
            <div className="alarm-item">새로운 알림 2</div>
          </div>
          </>
          )}

        </div>


      )}

        </div>

      </header>

      <div className="navbar">
      <a href="/">
        <div className="nav-logo">
          <img className="logo-img" src={`${process.env.PUBLIC_URL}/img/logo2.png`} alt="로고"></img>
          <div className="sitename">
            <a href="/">
              책판다
            </a>
          </div>
        </div>
        </a>

        <div className="nav-want">
          <nav className="nav-container">
            <a href="#home">찾아줘</a>
            <a href="#home">공유해요</a>
            {/* <div className="Category">
                <div className="dropdown-content">
                  <a href="#home">~1960</a>
                  <a href="#home">1970</a>
                  <a href="#home">1980</a>
                  <a href="#home">1990</a>
                  <a href="#home">2000</a>
                  <a href="#home">2010</a>
                  <a href="#home">2020</a>
                </div>
            </div> */}
          </nav>
        </div>
        {/* 로고 알람 회원가입 사진크기 전체 수정 */}

        <form className="d-flex">
          <div className="search-bar">
            <input
              type="search"
              placeholder="  책을 검색해보세요"
              className="search-input"
              aria-label="Search"
            />
            <button className="searchbutton">
              <SlMagnifier />
            </button>
          </div>
        </form>
        <div className="hamburger-container">
        <div className="hamburger-box" onClick={toggleCategoryDropdown}>
          <span className="hamburger-button"><RxHamburgerMenu/></span>
          <div className="hamburger-text">전체카테고리</div>
          </div>
        </div>
      </div>
      {showCategoryDropdown && (
         
        <div className="category">
          <div className="main-category">
            <ul>
              {/* 동적으로 csspage에서구현*/}
              <li 
              className={`category-button ${selectedMainCategory === 'books' ? 'selected' : ''}`}
              onClick={() => handleBookClick('books')}>
                도서
              </li>
              <li 
              className={`category-button ${selectedMainCategory === 'art' ? 'selected' : ''}`}
              onClick={()=>handleBookClick('art')}>
                미술품
              </li>
              <li 
              className={`category-button ${selectedMainCategory === 'collection' ? 'selected' : ''}`}
              onClick={()=>handleBookClick('collection')}>
                수집품
              </li>
            </ul>
          </div>
        
          <div className="sub-category">
            <ul>
            {selectedMainCategory === 'books' && (
              <>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("novel")}>소설</li>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("magazine")}>잡지</li>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("learning")}>학습지</li>
              </>
            )}
            {selectedMainCategory === 'art' && (
              <>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("")}>판화</li>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("")}>사진</li>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("")}>희화</li>

              </>
            )}
            {selectedMainCategory === 'collection' && (
              <>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("")}>동전</li>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("")}>우표</li>
              <li
                className="subcategory-button"
                onClick={() => handleSubcategoryClick("")}>카드</li>

              </>
            )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default ColorSchemesExample;
