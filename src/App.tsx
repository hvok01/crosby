import './App.css'
import { ShoppingCartSolidIcon } from '@fluentui/react-icons-mdl2';
import FacebookIcon from './assets/facebookIcon';
import InstagramIcon from './assets/instagramIcon';
import TwitterIcon from './assets/twitterIcon';
import { useRef, useState, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import lilGuysImage from "./assets/crosby-2.jpg";
import biggerStatementsImage from "./assets/crosby-3.jpg";
import lowMaintenanceImage from "./assets/crosby-4.jpg";
import heroAllPlantsImage from "./assets/crosby-5.jpg";
import plantsOneGif from "./assets/crosby-6.gif";
import plantsTwoGif from "./assets/crosby-7.gif";
import giftCardImage from "./assets/crosby-9.jpg";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const crossOne = useRef(null);
  const crossTwo = useRef(null);
  const logo = useRef(null);
  const cart = useRef(null);
  const mainTitle = useRef(null);
  const buttonShopNow = useRef(null);
  const socialsLinks = useRef(null);
  const navLinks = useRef(null);
  const gifImage = useRef(null);
  const [timeline, setTimeline] = useState<gsap.core.Timeline>();
  //https://crosby-fluid-demo.squarespace.com/

  useLayoutEffect(() => {

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(logo.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
      }).from(crossOne.current, {
        opacity: 0,
        duration: 0.5,
        delay: -0.3,
      }).from(crossTwo.current, {
        opacity: 0,
        duration: 1,
        delay: -0.8,
      }).from(cart.current, {
        opacity: 0,
        duration: 1,
        delay: -0.7,
      }).from(mainTitle.current, {
        opacity: 0,
        duration: 1,
        delay: -0.9,
      }).from(buttonShopNow.current, {
        opacity: 0,
        duration: 1,
        delay: -0.8,
      }).from(gifImage.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: gifImage.current,
          scrub: true,
          start: '30% 80%',
          end: 'top 20%',
          // markers: true,
        }
      })

      if(navLinks.current) {
        const items: React.MutableRefObject<null>[] = navLinks.current['children'];
        for(let i = 0; i < items.length; i++) {
          tl?.from(items[i], {
            translateY: "2px",
            opacity: 0,
            delay: -0.2,
          })
        }
      }

      if(socialsLinks.current) {
        const items: React.MutableRefObject<null>[] = socialsLinks.current['children'];
        for(let i = 0; i < items.length; i++) {
          tl.from(items[i], {
            opacity: 0,
          })
        }
      }

      setTimeline(tl);
    });
    return () => ctx.revert();
  }, []);

  const handleNavLinks = () => {

    const linksContainer = document.getElementById("links-container");
    const lineOne = document.getElementById("nav-icon-line-one");
    const lineTwo = document.getElementById("nav-icon-line-two");

    if(!timeline?.isActive()) {

      const ctx = gsap.context(() => {
  
        if(linksContainer) {
          if(linksContainer.style.display === "none" || linksContainer.style.display.length === 0) {
            linksContainer.style.display = "flex";
  
            !timeline?.isActive() && timeline?.to(crossOne.current, {
              rotate: "+=45",
              scaleX: 0.6,
              duration: 0.3,
            }).to(crossTwo.current, {
              rotate: "+=135",
              scaleX: 0.6,
              translateY: "-=11px",
              duration: 0.5,
              delay: -0.5,
              ease: "easeIn"
            });

            if(navLinks.current) {
              const items: React.MutableRefObject<null>[] = navLinks.current['children'];
              for(let i = 0; i < items.length; i++) {
                timeline?.from(items[i], {
                  translateY: "2px",
                  opacity: 0,
                  delay: -0.2,
                })
              }
            }
  
            if(lineOne) {
              lineOne.style.backgroundColor = "#FFF";
            }
  
            if(lineTwo) {
              lineTwo.style.backgroundColor = "#FFF";
            }
  
          } else {

            linksContainer.style.display = "none";
  
            !timeline?.isActive() && timeline?.to(crossOne.current, {
              rotate: "-=45",
              scaleX: 1,
              duration: 0.3,
            }).to(crossTwo.current, {
              rotate: "-=135",
              scaleX: 1,
              translateY: "0px",
              duration: 0.5,
              delay: -0.3,
              ease: "easeIn"
            });
  
            if(lineOne) {
              lineOne.style.backgroundColor = "#8a8a8b";
            }
  
            if(lineTwo) {
              lineTwo.style.backgroundColor = "#8a8a8b";
            }
          }
        }
      });

      return () => ctx.revert();

    } else {

      return false;

    }

  }

  return (
    <div className="home">
      <div className="hero-wrapper">
        <header className="header">
          <nav className="navbar">
            <button className="nav-icon" onClick={handleNavLinks}>
              <div className="nav-icon-line-1" ref={crossOne} id="nav-icon-line-one"></div>
              <div className="nav-icon-line-2" ref={crossTwo} id="nav-icon-line-two"></div>
            </button>

            <div className="nav-title">
              <span className="site-title" ref={logo}>
                <a href="#">
                  Crosby
                </a>
              </span>
            </div>

            <div className="nav-links" id="links-container">
              <ul ref={navLinks}>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Journal</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="nav-socials-purchase-container">

              <div className="nav-socials" ref={socialsLinks}>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
              </div>

              <div className="nav-purchase-icon" ref={cart}>
                <ShoppingCartSolidIcon style={{color: "#fff", fontSize:"1.5rem"}}/>
                <div className="nav-purchase-icon-count">
                  0
                </div>
              </div>
              
            </div>
          </nav>
        </header>
        <main className="home-intro">
          <h1 className="home-title" ref={mainTitle}>
            Plants and Pots <br /> For Your Home
          </h1>
          <a className="standard-button" ref={buttonShopNow} href='#'>
            Shop now
          </a>
        </main>
      </div>

      <section className="home-section-1">
        <h1 className="home-section-1-title">
          Fan Favorites
        </h1>
        <div className="section-1-grid">
          <div className="section-1-grid-item">
            <img src={lilGuysImage} alt="" />
            <span>Lil' Guys</span>
            <a href="#">Buy Now</a>
          </div>
          <div className="section-1-grid-item">
            <img src={biggerStatementsImage} alt="" />
            <span>Bigger Statements</span>
            <a href="#">Buy Now</a>
          </div>
          <div className="section-1-grid-item">
            <img src={lowMaintenanceImage} alt="" />
            <span>Low Maintenance</span>
            <a href="#">Buy Now</a>
          </div>
        </div>
      </section>

      <section className="hero-image">
        <img src={heroAllPlantsImage} alt="" />
      </section>

      <div className="the-journal">
        <h2>The Journal</h2>
        <div className="article-container">
          <div className="article">
            <img src={plantsOneGif} alt="" className="gif-1" />
            <h2>Is It Flowers You're After?</h2>
            <p>Flowering plants are stunning, but require a bit more work than their non-flowering brethren. Learn how to keep them happy.</p>
            <a href='#'>
              Read More
            </a>
          </div>
          <div className="article">
            <img src={plantsTwoGif} alt="" className="gif-2" />
            <h2>Searching for Succulents?</h2>
            <p>If you have a sunny windowsill, you can be a succulent owner. These hardy and beautiful plants are as easy as they come.</p>
            <a href='#'>
              Read More
            </a>
          </div>
        </div>
      </div>

      <section className="newsletter">
        <div className="newsletter-container">
          <h2>They grow up so fast</h2>
          <p>Don’t miss a thing. Sign up to receive news and updates.</p>
          <input type="text" name="" id="" placeholder='Email Address'/>
          <a href='#'>
            Sign Up
          </a>
        </div>
      </section>

      <section className="gift-card">
        <div className="gift-card-container">
          <div className="gift-card-image-container">
            <img src={giftCardImage} alt="" ref={gifImage}/>
          </div>
          <div className="gift-card-info-container">
            <h1>
              Give the Gift of Greenery
            </h1>
            <p>
            Plants are as thoughtful a gift as flowers and last much longer. With a gift card, you can brighten up someone’s home, office or dorm room with a potted plant of their choice. They’re available in any denomination and we’ll mail it for free!
            </p>
            <a href='#'>
              Purchase a gift card
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-title">
          <h1>Crosby</h1>
        </div>
        <div className="footer-links">
          <div>
            <span><a href="#">Journal</a></span>
            <span><a href="#">Contact</a></span>
          </div>
          <div>
            <span><a href="#">Shop</a></span>
            <span><a href="#">Our Story</a></span>
          </div>
        </div>
        <div className="footer-media">
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
        </div>
      </footer>
    </div>
  )
}

export default App
