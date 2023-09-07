import React from 'react'

const Contact = () => {
  return (
    <div className="bg-white font-Open-Sans">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl ">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className=" mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" className="shadow-sm  border border-gray-300 text-sm rounded-lg w-full p-2.5 bg-gray-700  placeholder-gray-300 text-white " placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className=" mb-2 text-sm font-medium text-gray-900 ">Subject</label>
              <input type="text" id="subject" className="shadow-sm  border border-gray-300 text-sm rounded-lg w-full p-2.5 bg-gray-700  placeholder-gray-300 text-white " placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className=" mb-2 text-sm font-medium text-gray-900 ">Your message</label>
              <textarea id="message" rows="6" className="shadow-sm  border border-gray-300 text-sm rounded-lg w-full p-2.5 bg-gray-700  placeholder-gray-300 text-white " placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 ">Send message</button>
      </form>
  </div>
    </div>
  )
}

export default Contact
