import React from 'react'
import './magic-8-ball.css'

class MagicBall extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            userInput: '',
            possibleAnswers: [
                'It is certain.',
                'It is decidedly so.',
                'Without a doubt.', 
                'Yes - definitely.' ,
                'You may rely on it.' ,
                'As I see it, yes.',
                'Most likely.' ,
                'Outlook good.' ,
                'Yes.',
                'Signs point to yes.', 
                'Reply hazy, try again.',
                'Ask again later.' ,
                'Better not tell you now.' ,
                'Cannot predict now.' ,
                'Concentrate and ask again.' ,
                'Do not count on it.' ,
                'My reply is no.' ,
                'My sources say no.' ,
                'Outlook not so good.' ,
                'Very doubtful.'
            ],
            response: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        })
    }

    handleSubmit(e) { 
        let random = Math.floor(Math.random() * 21) 
        this.setState({
            response: this.state.possibleAnswers[random],
            userInput: ''
        })
        e.preventDefault();
    }

    

    render() {
        
        return(
              <div className='magicBox'>
                  <h1>Ask the Magic-8-Ball</h1>
                <img src='https://st3.depositphotos.com/11727631/33119/v/450/depositphotos_331196980-stock-illustration-vector-illustration-sports-ball-billiard.jpg' alt='Magic-8-ball' className='ballImg'/>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder="What's your question?" className='magicInput' onChange={this.handleChange} value={this.state.userInput}/>
                        <input type='Submit' className='submitBtn' defaultValue='Answer' />
                    </form>

                    <h1 className='response'>{this.state.response}</h1>

               </div>
        )
    }
}

export default MagicBall