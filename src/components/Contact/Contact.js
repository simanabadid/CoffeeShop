import React from 'react';
import Iframe from 'react-iframe';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <section className='contact' id='kontak'>
        <div className='container'>
          <div className='text-center py-5'>
            <h2 className='py-3'>Contact Form</h2>
            <div className='mx-auto heading-line'></div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                id='map-container-google-1'
                className='z-depth-1-half map-container'
              >
                <Iframe
                  url='https://www.google.com/maps/embed?pb=add API key'
                  width='100%'
                  height='420px'
                  id='myId'
                  className='myClassname'
                  display='initial'
                  position='relative'
                  allowfullscreen=''
                  aria-hidden='false'
                  tabindex='0'
                />

              </div>
            </div>
            <form className='col-lg-6'>
              <div className='form-group'>
                <label for='email'>Email</label>
                <input
                  id='email'
                  className='form-control'
                  type='email'
                  aria-describedby='emailHint'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='form-group'>
                <label for='name'>Name</label>
                <input
                  type='text'
                  id='name'
                  className='form-control'
                  placeholder='Name'
                  required
                />
              </div>
              <div className='form-group'>
                <label for='message'>Message</label>
                <textarea
                  name='message'
                  id='message'
                  className='form-control'
                  rows='5'
                  placeholder='your message here'
                  required
                ></textarea>
              </div>
              <button type='submit' className='btn hvr-right my-4 btn-lg'>
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
