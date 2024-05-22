import React from 'react';
import './advertising.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faSpotify, faApple } from '@fortawesome/free-brands-svg-icons';
import one from '../images/one.jpg';
import two from '../images/two.jpg';
import three from '../images/three.jpg';
import four from '../images/four.jpg';
import five from '../images/five.png';
import six from '../images/six.png';
import seven from '../images/seven.jpeg';
import eight from '../images/eight.png';
import nine from '../images/nine.jpeg';
import ten from '../images/ten.png';
import eleven from '../images/eleven.png';
import twelve from '../images/twevele.png';
import thirteen from '../images/thirteen.png';
import fifteen from '../images/fifteen.jpeg';
import sixteen from '../images/sixteen.jpeg';
import eighteen from '../images/eighteen.jpeg';
import ninteen from '../images/ninteen.jpeg';
import twenty from '../images/twenty.jpeg';
import twentyone from '../images/twentyone.jpeg';
import twentytwo from '../images/twentytwo.jpeg';
import twentythree from '../images/twentythree.jpeg'


function Advertising() {
  return (
    
      <div>
      <div>
        <p id='p1'><strong>Sleeve</strong> 2</p>
        <p id='p2'><b>The ultimate music accessory for your Mac.</b></p>
        <pre id='pre1'>
          Sleeve sits on the desktop, displaying and controlling the music you’re <br />
          currently playing in <FontAwesomeIcon icon={faMusic} />&nbsp;Apple Music,
          <FontAwesomeIcon icon={faSpotify} /> Spotify, and <FontAwesomeIcon icon={faHeadphones} /> Doppler.
        </pre>
        <div id='innerdiv'>
          <button>
            <FontAwesomeIcon icon={faApple} /> Mac App Store
          </button>
          &nbsp;&nbsp;&nbsp;
          <button>
            Buy Directly <span>$5.99</span>
          </button>
        </div>
        <pre id='pre2'>No subscriptions. No in-app<br/> purchases. Requires macOS 11 Big Sur<br/> or later.</pre>
      </div>
      <div>
        <p id='p3'><b>NEW IN 2.0 </b></p>
        <h2 id='h2'>Themes. Unlimited themes.</h2>
        <pre id='pre1'>Themes in Sleeve make creating and switching between customizations easy. Share your own<br/> creations with friends and install as many themes as you like with just a double-click.</pre>
        <div id='div3'>
            <div>
            <img src={one}></img>
            <pre className='pre4'>Eternal Sunshine <br/>
                Forgotten Feels<br/>
                  Slow Magic</pre>
            </div>

            <div id='innerdiv2'>
            <img src={two}></img>
            <pre className='pre4' id='innerdiv2'>Eternal Sunshine <br/>
                Forgotten Feels<br/>
                  Slow Magic</pre>
            </div>

            <div>
            <img src={three}></img>
            <pre className='pre4'>Eternal Sunshine <br/>
                Forgotten Feels<br/>
                  Slow Magic</pre>
            </div>
            <div id='innerdiv2'>
            <img src={four}></img>
            <pre className='pre4' id='innerdiv2'>Eternal Sunshine <br/>
                Forgotten Feels<br/>
                  Slow Magic</pre>
            </div>

            

        </div>
        

<div id='card'>
<div className="card mb-3" style={{ maxWidth: '540px',minHeight:'350px'}} id='card1'>
  <div className="row g-0" id='card1'>
    <div className="col-md-4" id='card1'>
      <img src={five} alt="Card image"  />
    </div>
    <div className="col-md-8">
      <div className="card-body" id='card1'>
        <h5 className="card-title">Change it up</h5>
        <p className="card-text">
        Switch between themes with just a click. Modify the built-in themes or create your own using Sleeve’s extensive preferences.
        </p>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{ maxWidth: '540px' }} id='card1'>
  <div className="row g-0" id='card1'>
    <div className="col-md-4" id='card1'>
      <img src={six} alt="Card image" />
    </div>
    <div className="col-md-8">
      <div className="card-body" id='card1'>
        <h5 className="card-title">Shareable</h5>
        <p className="card-text">
          Export your themes and share them with friends using the handy new Sleeve Theme file format. Install themes from anywhere with a double-click or a drag and drop.        </p>
      </div>
    </div>
  </div>
</div>
</div>

   <div id='custom'>
   <p id='p3'><b>CUSTOMIZATION</b></p>
        <h2 id='h2'>Countless ways to customize.</h2>
        <pre id='pre1'>Customization is at the core of the Sleeve experience — choose from any <br/> combination of design choices, behaviors and settings to make Sleeve at home on <br/> your desktop.</pre>
        <img src={nine} id='image1'></img>
   </div>

   {/* <div id='maindiv'>
   <div className="card mb-3" style={{ maxWidth: '1200px',minHeight:'450px' }} id='card2'>
  <div className="row g-0" >
    <div className="col-md-4" >

      <img src={ten} alt="Card image" style={{ maxWidth: '72px',maxHeight:'60px' }} id='h5'/>

      <h2 className="card-title" id='h5'>Artwork</h2>
      <p className="card-text" id='h5'>
      Scale artwork all the way up or all the way down. Round the corners or leave them square.

      </p>
      <p className="card-text" id='h5'>
      Choose shadow and lighting effects to bring your album artwork to life.
      </p>
      <p className="card-text" id='h5'>
      Or hide it completely.

      </p>
    </div>
    <div className="col-md-8">
      <div className="card-body" id='imgdiv'>
      <img src={seven} alt="Card image" id='cardimage'/> <br/>
      <img src={twenty} alt="Card image" id='cardimage'/> <br/>
      <img src={twentyone} alt="Card image" id='cardimage'/>
        </div>
    </div>
  </div>

</div>


<div className="card mb-3" style={{ maxWidth: '1200px',minHeight:'450px' }} id='card2'>
  <div className="row g-0" >
    <div className="col-md-4" >

      <img src={eleven} alt="Card image" style={{ maxWidth: '72px',maxHeight:'60px' }} id='h5'/>

      <h2 className="card-title" id='h5'>Typography</h2>
      <p className="card-text" id='h5'>
      Pick the track info you want to display, and then exactly how to display it.
      </p>
      <p className="card-text" id='h5'>
      Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.      </p>
      
    </div>
    <div className="col-md-8">
      <div className="card-body" id='imgdiv2'>
      <img src={twentytwo} alt="Card image" style={{ minWidth: '370px',minHeight:'220px' }}/> <br/>
      <img src={fifteen} alt="Card image" style={{ minWidth: '370px',minHeight:'220px' }}/> <br/>
        </div>
    </div>
  </div>

</div>


<div className="card mb-3" style={{ maxWidth: '1200px',minHeight:'450px' }} id='card2'>
  <div className="row g-0" >
    <div className="col-md-4" >

      <img src={twelve} alt="Card image" style={{ maxWidth: '72px',maxHeight:'60px' }} id='h5'/>

      <h2 className="card-title" id='h5'>Interface</h2>
      <p className="card-text" id='h5'>
      Customize the layout, alignment and position to fit your setup.
      </p>
      <p className="card-text" id='h5'>
      Show and hide playback controls. Add a backdrop layer and customize it.      </p>
      
    </div>
    <div className="col-md-8">
      <div className="card-body" id='imgdiv2'>
      <img src={sixteen} alt="Card image" style={{ minWidth: '370px',minHeight:'220px' }}/> <br/>
      <img src={twentythree} alt="Card image" style={{ minWidth: '370px',minHeight:'220px' }}/> <br/>
        </div>
    </div>
  </div>

</div>



<div className="card mb-3" style={{ maxWidth: '1200px',minHeight:'450px' }} id='card2'>
  <div className="row g-0" >
    <div className="col-md-4" >

      <img src={thirteen} alt="Card image" style={{ maxWidth: '72px',maxHeight:'60px' }} id='h5'/>

      <h2 className="card-title" id='h5'>Settings</h2>
      <p className="card-text" id='h5'>
      Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it
      </p>
      <p className="card-text" id='h5'>
      Show it in the Dock, choose from custom icons, or keep it on the Desktop only.      </p>
      <p className="card-text" id='h5'>
      Set your custom keyboard shortcuts and integrate with the apps you use.
      </p>
    </div>
    <div className="col-md-8">
      <div className="card-body" id='imgdiv2'>
      <img src={eighteen} alt="Card image" style={{ minWidth: '370px',minHeight:'220px' }}/> <br/>
      <img src={ninteen} alt="Card image" style={{ minWidth: '370px',minHeight:'220px' }}/> <br/>
        </div>
    </div>
  </div>

</div>

   </div> */}


<div id='maindiv'>
   <div className="card mb-3" style={{ maxWidth: '1200px', minHeight: '450px' }} id='card2'>
      <div className="row g-0">
         <div className="col-md-4">
            <img src={ten} alt="Card image" style={{ maxWidth: '72px', maxHeight: '60px' }} id='h5' />
            <h2 className="card-title" id='h5'>Artwork</h2>
            <p className="card-text" id='h5'>Scale artwork all the way up or all the way down. Round the corners or leave them square.</p>
            <p className="card-text" id='h5'>Choose shadow and lighting effects to bring your album artwork to life.</p>
            <p className="card-text" id='h5'>Or hide it completely.</p>
         </div>
         <div className="col-md-8">
            <div className="card-body" id='imgdiv'>
               <img src={seven} alt="Card image" id='cardimage' /> <br />
               <img src={twenty} alt="Card image" id='cardimage' /> <br />
               <img src={twentyone} alt="Card image" id='cardimage' />
            </div>
         </div>
      </div>
   </div>

   {/* //second card */}

   <div className="card mb-3" style={{ maxWidth: '1200px', minHeight: '450px' }} id='card2'>
      <div className="row g-0">
         <div className="col-md-4">
            <img src={eleven} alt="Card image" style={{ maxWidth: '72px', maxHeight: '60px' }} id='h5' />
            <h2 className="card-title" id='h5'>Typography</h2>
            <p className="card-text" id='h5'>Pick the track info you want to display, and then exactly how to display it.</p>
            <p className="card-text" id='h5'>Choose the fonts, weights, sizes, and transparency to use for each line, along with customizing color and shadow.</p>
         </div>
         <div className="col-md-8">
            <div className="card-body" id='imgdiv2'>
               <img src={twentytwo} alt="Card image" style={{ minWidth: '370px', minHeight: '220px' }} /> <br />
               <img src={fifteen} alt="Card image" style={{ minWidth: '370px', minHeight: '220px' }} /> <br />
            </div>
         </div>
      </div>
   </div>

   {/* //third card */}

   <div className="card mb-3" style={{ maxWidth: '1200px', minHeight: '450px' }} id='card2'>
      <div className="row g-0">
         <div className="col-md-4">
            <img src={twelve} alt="Card image" style={{ maxWidth: '72px', maxHeight: '60px' }} id='h5' />
            <h2 className="card-title" id='h5'>Interface</h2>
            <p className="card-text" id='h5'>Customize the layout, alignment and position to fit your setup.</p>
            <p className="card-text" id='h5'>Show and hide playback controls. Add a backdrop layer and customize it.</p>
         </div>
         <div className="col-md-8">
            <div className="card-body" id='imgdiv2'>
               <img src={sixteen} alt="Card image" style={{ minWidth: '370px', minHeight: '220px' }} /> <br />
               <img src={twentythree} alt="Card image" style={{ minWidth: '370px', minHeight: '220px' }} /> <br />
            </div>
         </div>
      </div>
   </div>

   {/* fourth card */}

   <div className="card mb-3" style={{ maxWidth: '1200px', minHeight: '450px' }} id='card2'>
      <div className="row g-0">
         <div className="col-md-4">
            <img src={thirteen} alt="Card image" style={{ maxWidth: '72px', maxHeight: '60px' }} id='h5' />
            <h2 className="card-title" id='h5'>Settings</h2>
            <p className="card-text" id='h5'>Decide if Sleeve stays out of the way, behind windows, or in front of them — or only when you need to see it</p>
            <p className="card-text" id='h5'>Show it in the Dock, choose from custom icons, or keep it on the Desktop only.</p>
            <p className="card-text" id='h5'>Set your custom keyboard shortcuts and integrate with the apps you use.</p>
         </div>
         <div className="col-md-8">
            <div className="card-body" id='imgdiv2'>
               <img src={eighteen} alt="Card image" style={{ minWidth: '370px', minHeight: '220px' }} /> <br />
               <img src={ninteen} alt="Card image" style={{ minWidth: '370px', minHeight: '220px' }} /> <br />
            </div>
         </div>
      </div>
   </div>
</div>




<div id='integrations'>
   <p id='p3'><b>INTEGRATIONS</b></p>
        <h2 id='h2'>Like, Scrobble.</h2>
   </div>




     


      </div>
    </div>

    
  );
}

export default Advertising;
