require('../style/Services.scss');

class Services extends React.Component{
    
        
        constructor(props){
            super(props);
           
        }
        add_clock(){
            console.log('hello')
        }
       
        render(){
            return (
                    <div className='services' >
                       <p>A proven way to be a better writer is to read extensively.
                            Exposure to correct language through extensive reading 
                            in some ways mimics the way you learnt your native 
                            language: by unconsciously extracting correct patterns
                             and thus absorbing the grammar of your native language.
                              Then, in school, you learnt to read by working your way
                               through a series of texts of increasing complexity,
                                from a few simple words and simple sentences to a
                                 wider vocabulary, longer sentences, and more complex 
                                 constructions.</p>
                       
                    </div>
                )
        }
    }
    module.exports = Services;