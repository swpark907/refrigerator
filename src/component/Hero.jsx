import React from 'react';

const Hero = () => {
  return (
    <div className='hero'>
      <img className="wallpaper" src="https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" alt="wallpaper" />
      <div className="hero__desc">
        <h1>냉장고를 털어보자!</h1>
        <p>오늘 무엇을 먹을지 고민되시나요?</p>
        <p>여러분의 냉장고를 털어보세요!</p>
      </div>
      

    </div>
  );
};

export default Hero;