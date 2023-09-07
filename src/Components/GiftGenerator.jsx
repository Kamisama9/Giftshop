import React, { useState } from 'react';

function GiftGenerator() {
  const [input, setInput] = useState({
    relation: '',
    budget: '',
    hobbies: '',
    occation: '',
  });

  const [loading, setLoading] = useState(false);
  const [gifts, setGifts] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
   
  };

  return (
    <div className="w-full mt-20 font-Open-Sans">
      <h1 className="sm:text-6xl text-4xl font-bold text-center pt-12  text-purple-300">
        GIFT GENERATOR
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="pt-12 px-4">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="sm:w-[30rem] w-[95%]">
              <input
                className="border p-2 rounded-md w-full"
                placeholder="Who it's for?"
                value={input.relation}
                onChange={(e) => {
                  setInput({ ...input, relation: e.target.value });
                }}
                type="text"
              />
            </div>
            <div className="sm:w-[30rem] w-[95%]">
              <input
                className="border p-2 rounded-md w-full"
                placeholder="What is your Budget?"
                value={input.budget}
                onChange={(e) => {
                  setInput({ ...input, budget: e.target.value });
                }}
                type="text"
              />
            </div>
            <div className="sm:w-[30rem] w-[95%]">
              <input
                className="border p-2 rounded-md w-full"
                placeholder="What do they like?"
                value={input.hobbies}
                onChange={(e) => {
                  setInput({ ...input, hobbies: e.target.value });
                }}
                type="text"
              />
            </div>
            <div className="sm:w-[30rem] w-[95%]">
              <input
                className="border p-2 rounded-md w-full"
                placeholder="What is the occasion?"
                value={input.occation}
                onChange={(e) => {
                  setInput({ ...input, occation: e.target.value });
                }}
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center pt-4">
            <div className="sm:w-[30rem] w-[95%] pt-4">
              <button
                type="submit"
                className="w-full transition duration-150 ease-in-out text-white text-lg py-5 bg-gradient-to-r from-[#C373F2] hover:from-[#c059fc] hover:to-[#fd3dbd] to-[#F977CE] rounded-md"
              >
                Generate Gifts
              </button>
            </div>
          </div>
        </div>
      </form>
      
    </div>
  );
}

export default GiftGenerator;
