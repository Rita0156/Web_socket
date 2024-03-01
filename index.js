const { log } = require('console')
const events=require('events')

const Button = new events.EventEmitter()

Button.on('click',()=>{         // evevent is handling that how it should be behave when triggering events.
    console.log('button is clicked');
})

Button.emit('click')     // emit is trigger the events