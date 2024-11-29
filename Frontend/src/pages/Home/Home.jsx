import React, { useEffect, useState } from 'react';
import { useGSAP } from "@gsap/react";
import './Home.css';
import { gsap, Power3, Circ,Expo } from 'gsap';
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

function Home() {
  const [products, setProducts] = useState([]);
  useGSAP(()=>{
    let menu=document.querySelector("#nav i");
    let close=document.querySelector("#full i");

    let first=gsap.timeline()

    first.to("#full",{
    right:0,
    duration:0.5
})

first.from("#full h4",{
    x:150,
    duration:0.6,
    stagger:0.2,
    opacity:0
})

first.from("#full i",{
        opacity:0
} )


first.pause()


menu.addEventListener("click",function(){
    first.play()
})

close.addEventListener("click",function(){
    first.reverse()
})
})
  
  useEffect(() => {
   
    const fetchData = async () => {
        try {
            const response = await fetch(`https://mavy-pxtx.onrender.com/user/products`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data); // Store the fetched data in state
            console.log(data)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    fetchData();
}, [])
  return (
  <>
       <div className="body">
       <header>
            <div className="navbar">
                <div id="nav">
                  <img src="/img/qt=q_95.jpeg" alt=""/>
                  <i ><RiMenu3Fill /></i>
                </div>
                <div id="full">
                  <a href="#"><h4>Home</h4></a>
                  <a href="./about"><h4>About</h4></a>
                  <a href="./product"><h4>Products</h4></a>
                  <a href="./cart"><h4>Cart</h4></a>
                  <a href="./login"><h4>Profile</h4></a>
                  <i><IoMdClose /></i>
                </div>
              </div>
        </header>

    <main>
        <div className="hero-section">
            <div className="hero-content">
          
                <h3 className="reveal">Akwaaba (Welcome)</h3>
                <h1 className="reveal"> ELEVATE YOUR <br/>MEDICAL <br/> Scrubs</h1>
                <p className="reveal">Wear your scrubs with pride</p>
                <a href={'./product'} className="reveal"><button>Buy Now</button></a>
            </div>
            <div className="hero-img">
                <img src="/img/image2.jpeg" alt="" id="img1" className="img"/>
                <img src="/img/image3.jpeg" alt="" id="img2" className="img"/>
            </div>
        </div>
    </main>


    <section>
     <div className="item-section">
        <div className="heading">
            <h1>
                Featured Products
            </h1>
        </div>
    
       <div className="item-cont">
        
                {products.map(product => (


                    <div className="item"  key={product.id}>
                        <div>
                            <img src={`img/${product.imageUrl}`} />
                        </div>
                        <div className="product-info">
                            <h3>{product.name}</h3>
                            <p><b>Description</b>- {product.description}</p>
                            <p><b>Size</b>- {product.size.join(", ")}</p>
                            <p><b>Price</b>- {product.price}$</p>
                            <a href={`./buy?pid=${product._id}`}><button>Buy Now</button></a>
                        </div>
                    </div>

                ))}
    
     
       </div>
     </div>
    </section>



    <section>
            <div className="offer">
                <div className="heading">
                    <h1>What Mavy Scrubs <br/>Offer</h1>
                </div>
                
                <div className="offer-section " id="left">
                    <img src="/img/image0 (1).jpeg" alt=""/>
                    <div className="content">
                        <h2>Mavy Scrubs - Celebrating <br/>Heritage Through Fashion</h2>
                        <p>At Mavy Scrubs, we're dedicated to creating beautiful, high-quality scrubs that honor the rich heritage and culture that inspire our designs. Our Mavy Scrubs made with Kente fabric are a testament to our commitment to celebrating the history and significance of this iconic textile.</p>
                    </div>
                </div>
            </div>
    </section>

    <section className="rating-cont">
        <div className="rating">
            <div>
                <h1>Ratings & Reviews (23)</h1>
                <p>Showing <span>4</span> result out of <span>23</span></p>
            </div>
            <div>
                <a href="#"><button>More</button></a>
            </div>
        </div>

        <div className="rating-info">
            <div className="review ">
                <div className="r-img-cont"><img src="/img/image1 (1).jpeg" alt=""/><span>Hasna Azlya</span></div>
                <i></i>
                <p>I recently purchased a few items from this website, and I am thoroughly impressed! The quality of the clothing is exceptional—soft fabrics and well-made seams.</p>
                <h4>Reply</h4>
            </div>

            <div className="review ">
                <div className="r-img-cont"><img src="/img/image1 (1).jpeg" alt=""/><span>Hasna Azlya</span></div>
                <i></i>
                <p>I love the variety of styles available on this site. Whether I’m looking for casual wear or something a bit more formal, they have it all.</p>
                <h4>Reply</h4>
            </div>

            <div className="review">
                <div className="r-img-cont"><img src="/img/image1 (1).jpeg" alt=""/><span>Hasna Azlya</span></div>
                <i></i>
                <p>The selection of clothing is impressive, and the quality is generally great. I found a stunning dress that I adore. However, there was a small delay in shipping. </p>
                <h4>Reply</h4>
            </div>

            <div className="review">
                <div className="r-img-cont"><img src="/img/image1 (1).jpeg" alt=""/><span>Hasna Azlya</span></div>
                <i></i>
                <p>I was pleasantly surprised by how affordable the clothing is without compromising on quality. The fabrics feel durable, and the designs are on-trend. </p>
                <h4>Reply</h4>
            </div>
        </div>
    </section>


  


    <section id="contact">
        <section className="connect">
            <div> <h1>Contact for Bulk<br/>Order</h1></div>
            <a href="./contact" className="button"> Contact Me </a>
         </section>
    </section>


    <footer>
        <div className="footer-cont">
            <div className="footer">
                <div className="company"><img src="/img/qt=q_95.jpeg" alt=""/></div>
                <div className="cust-care">
                    <h3>Customer Care</h3>
                    <ul>
                        <li><a href="#">Contact Us</a></li>
                        <li>Call +91 123 456 789</li>
                        <li><a href="#">FAQ</a></li>
                    </ul>
                </div>
                <div className="link">
                    <h3>Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Product</a></li>
                    </ul>
                </div>
                <div className="social">
                    <h3>Follow Us</h3>
                    <ul>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
           
            <div className="copyright">
                <h4>Copyright @ 2024 Mavy Scrubs</h4>
            </div>
        </div>
    </footer>
       </div>
  </>
  )
}

export default Home;
