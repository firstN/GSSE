require('../style/Partners.scss');

class Partners extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        add_clock(){
            console.log('hello')
        }
       
        render(){
            return (
                    <div className='partners_menu'>
                       <h1>PARTNERS</h1>
                       <h3>«SAVA LOGISTICS» LLC</h3>
                       <h4>Our team </h4><br />
                    <p>
                        The GSSE team are young cheerful people who like what They do. 
                        Every employee is motivated by his client's success. 
                        The average age of our consultants is 24 years! Each of them is 
                        a professional in his field. Our consultants of language exams,
                         graduated philologists and linguists, are people who personally
                         ceived top results for corresponding tests. The consultants of 
                         the mathematical sections are maths gurus and numerals masters.</p>
                       
                    </div>
                )
        }
    }
    module.exports = Partners;