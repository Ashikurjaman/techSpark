import React from 'react'

function Contact() {
  return (
    <div className='contact'>
      <main>
        <form action="">
          <div>
            <label htmlFor="">Name</label>
            <input type="text" required placeholder='Name' />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="email" required placeholder='Email' />
          </div>
          <div>
            <label htmlFor="">Massage</label>
            <input type="text" required placeholder='Tell us about...' />
          </div>
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  )
}

export default Contact