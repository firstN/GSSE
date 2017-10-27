require('../style/about_us.scss');

import {Row,Icon,Card,CardTitle,Col,MediaBox,Input,PaginationButton,Parallax } from 'react-materialize'
let all_mous_don= require('react-materialize');

class About_as extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        
       
        render(){
            console.log(all_mous_don)
            return (
                <div>
                     
                    <Row className='about_us'>
                    <Col l={12} m={12} s={12} >
                        <MediaBox className='a' src="http://www.gssegroup.com/img/about-img.jpg" ></MediaBox>
                        </Col>


                        <Col l={12} m={12} s={12} >
                            <Col l={9} m={7} s={12} >
                                <h3>Hello my Dear </h3>
                                <p>GSSE GROUP is an agro commodities producing and trading business group with global reach. Since 2012 we have started the
                                    international trading with primary focus on moving agro commodities from the Black Sea to the rest of the world.<br/><br/>
        ​                              Our direct partnership with farmers, mills, refineries and manufacturers provides a healthy grown product to be sold around the globe for human 
                                    consumption and animal feed.<br/><br/>
                                    We offer turnkey logistics solutions for deliveries from our facilities to any destination, overland or overseas,
                                    in containers (20' and 40'), vessels, trucks or rail wagons.<br/><br/>
                                    In performing our duties, we adhere to the best international practices by GAFTA and FOSFA terms.</p>
                            </Col > 
                                <Col l={3} m={5} s={12} className='card_menu_abot_us' >
                                    <Card  header={<CardTitle 
                                    image='http://www.gssegroup.com/img/contact-img.jpg'>Contacts</CardTitle>}>
                                        <div className='contacts_namber'>
                                            <div>
                                                <a href="tel:+38 050 986-86-82"> <Icon className='one_icon span_Location'>call</Icon>+38 050 986-86-82</a>
                                            </div>
                                            <div>
                                                <a href="tel:+38 099 712-62-55"> <Icon className='one_icon span_Location'>call</Icon>+38 099 712-62-55</a>
                                            </div>
                                            <div>
                                                <a href="mailto:info@gssegroup.com"><Icon className='one_icon span_Location'> email</Icon>info@gssegroup.com</a>
                                            </div>
                                            <br />
                                            <div>
                                                <a href="callto:01234567890"><span className='span_Location'>Skype:</span> GSSE GROUP</a> 
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                        </Col>
                    </Row>
                    </div>
                )
        }
    }
    module.exports = About_as;