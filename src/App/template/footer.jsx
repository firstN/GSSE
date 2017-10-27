
require('../style/footer.scss')
import {Row,Col,Footer} from 'react-materialize'

class Footere extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
       
        render(){
            return (

                    <Row>
                        <Col l={12} m={12} s={12} className='footer_down'>
                        <p>Copyright © GSSE GROUP 2017</p>
                        </Col>
                    </Row>
                )
        }
    }
    module.exports = Footere;