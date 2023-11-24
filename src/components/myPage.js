import Toolbar from './toolbar'
import Footer from './footer'
import './myPage.css'
import {useState} from 'react'


function MyPage() {

    const [menu,setMenu] = useState(1)

    return (
        <div>
            <Toolbar/>
            <h1>마이페이지</h1>

            <div className='page_wrap'>
                <div className='sideArea'>
                    <p className={menu === 1 ? 'selected' : ''} onClick={()=>{setMenu(1)}}>내정보</p>
                    <p className={menu === 2 ? 'selected' : ''} onClick={()=>{setMenu(2)}}>찜 목록</p>
                    <p className={menu === 3 ? 'selected' : ''} onClick={()=>{setMenu(3)}}>설정</p>

                </div>
                <div className='mainArea'>
                    <MenuContent menu={menu}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}


function MenuContent(props) {
    if(props.menu === 1) {
        return( 
            <div>
                <p>회원이미지</p>
                <p>아이디:</p>
                <p>이름:</p>
                <p>주소:</p>
                <p>이메일:</p>
                
            </div>
        )
    }
    if(props.menu === 2) {
        return( 
            <div>
                찜목록
            </div>
        )
    }
    if(props.menu === 3) {
        return( 
            <div>
                <p>색상변경</p>
                <p>글씨 크기</p>
            </div>
        )
    }
    
}



export default MyPage