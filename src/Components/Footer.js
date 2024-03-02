import React from 'react';
import "../Styles/styles.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="logo-container">
        <span className="logo">A2Z Trip planner</span>
      </div>
      <div className='foottext'><pre>
        <h3>"Traveling – it leaves you speechless, then turns you into a storyteller." - Ibn Battuta</h3>
        </pre></div>
      <div><pre><img className='imgfoot' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-512.png"></img><img className='imgfoot' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png"></img><img className='imgfoot' src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png"></img>
      </pre></div>
      
    </footer>
  );
}

export default Footer;
