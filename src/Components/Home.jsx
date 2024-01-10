import React from "react";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>TeachSpark</h1>
          <p>We Will Do it</p>
        </main>
      </div>

      <div className="home2" >
        <img src={vg} alt="vectorImg" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
        <h2>Who We Are?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis blanditiis maxime iusto sit ratione veritatis neque consequatur saepe alias corrupti repudiandae, debitis totam suscipit ea nisi eum eos architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis blanditiis maxime iusto sit ratione veritatis neque consequatur saepe alias corrupti repudiandae, debitis totam suscipit ea nisi eum eos architecto!Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis blanditiis maxime iusto sit ratione veritatis neque consequatur saepe alias corrupti repudiandae, debitis totam suscipit ea nisi eum eos architecto!</p>
        </div>

      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay:"0.3s"
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>

            </div>
            <div style={{
              animationDelay:"0.5s"
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>

            </div>
            <div style={{
              animationDelay:"0.7s"
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>

            </div>
            <div style={{
              animationDelay:"0.9s"
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>

            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
