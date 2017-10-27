require('../style/footer.scss')
import {Navbar, NavItem,Icon,Footer} from 'react-materialize'

class Nav_bar extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        
       
        render(){
            return (
                    <div>
                      <Navbar  brand={<img src='http://www.gssegroup.com/img/logo.jpg'  width="150" />} right className='white' id='foter_nav'>
                            <NavItem  href='/#/'>About Us</NavItem>
                            <NavItem  href='/#/Product'>Product</NavItem>
                            <NavItem  href='/#/Partners'>Partners</NavItem>
                            <NavItem  href='/#/Services'>Services</NavItem>
                            <NavItem  href='/#/Contacts'>Contacts</NavItem>
                        </Navbar>
                    </div>
                )
        }
    }
    module.exports = Nav_bar;
    //brand={<img src = '1.jpg' />}