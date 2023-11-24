import React from 'react';
import './footer.css'
import { Nav, Navbar} from 'react-bootstrap';



const Footer = () => {
  return (
    <footer>
        <div id='logo'>
            <img src="img/panda.png" width="200" height="230" alt="로고"/>
        </div>
    
    <Navbar>
        <Nav id='footer2'>
            
            <Nav.Link href="/terms">이용약관</Nav.Link>
            <Nav.Link href="/policy">개인정보처리방침</Nav.Link>
            <Nav.Link href="/teen">청소년보호정책</Nav.Link>
            <Nav.Link href="/enquiry">문의사항</Nav.Link>
        </Nav>
      </Navbar>
      </footer>

  );
};

export default Footer;
