require('../style/Product.scss');
import {Row,Icon,Card,CardTitle,Col,MediaBox } from 'react-materialize';


class Product extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        add_clock(){
            console.log('hello')
        }
       
        render(){
            return (
                    <Row className='product_menu' >
                        <h4>PRODUCTS</h4>
                       <Col l={12} m={12} s={12} className='Product_list' >
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Wheat23.jpg" caption="A demo media box1" width="200"/>
                            <p>Wheat 2 – 3 grade </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/FeedWheat.jpg" caption="A demo media box1" width="200"/>
                            <p>Feed wheat </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Oats.jpg" caption="A demo media box1" width="200"/>
                            <p> Oats </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Barley.jpg" caption="A demo media box1" width="200"/>
                            <p> Barley</p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/YellowPeas.jpg" caption="A demo media box1" width="200"/>
                            <p> Yellow Peas</p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/CornFeed.jpg" caption="A demo media box1" width="200"/>
                            <p> Feed Corn</p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Coriander.jpg" caption="A demo media box1" width="200"/>
                            <p> Coriander </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Flaxseeds.jpg" caption="A demo media box1" width="200"/>
                            <p> Flaxseeds </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Sorghum.jpg" caption="A demo media box1" width="200"/>
                            <p> Sorghum </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Soybean.jpg" caption="A demo media box1" width="200"/>
                            <p> Soybean </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Millet.jpg" caption="A demo media box1" width="200"/>
                            <p> Millet </p>
                        </div>
                       <div className='Product_list_paragraf'>
                            <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/Rapeseeds.jpg" caption="A demo media box1" width="200"/>
                            <p> Rapeseeds </p>
                        </div  >
                       <div className='Product_list_paragraf'> 
                           <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/SunflowerSeeds.jpg" caption="A demo media box1" width="200"/>
                            <p> Sunflower Seeds </p>
                        </div>
                        <div className='Product_list_paragraf'> 
                           <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/WheatFlour22.jpg" caption="A demo media box1" width="200"/>
                            <p> Wheat Flour </p>
                        </div>
                        <div className='Product_list_paragraf'> 
                           <MediaBox className='imeges_list' src="http://www.gssegroup.com/img/sunflowerOil.jpg" caption="A demo media box1" width="200"/>
                            <p> Sunflower Oil </p>
                        </div>
    
                       </Col>
                    </Row>
                )
        }
    }
    module.exports = Product;