import React from "react";
import "./styleSheet/AboutUs.css"; // Optional: for additional custom styling

const AboutUs = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">About Owl Bakery</h1>
          <p>
            Welcome to Owl Bakery, where passion meets flavor! Located in the
            heart of the city, Owl Bakery has been serving freshly baked goods
            to our community since 2010. Our mission is to create delicious,
            handcrafted pastries, bread, and cakes using the finest ingredients
            and traditional baking methods.
          </p>
          <h3 className="mt-4">Our Story</h3>
          <p>
            Owl Bakery started as a small family business, born out of a love
            for baking and a desire to share that love with others. Over the
            years, we've grown into a beloved local bakery known for our
            quality, creativity, and dedication to our customers. Every morning,
            our bakers rise early to prepare a wide variety of baked goods,
            ensuring that everything is fresh and flavorful.
          </p>
          <h3 className="mt-4">What We Offer</h3>
          <p>
            At Owl Bakery, we offer a wide selection of baked treats, including:
          </p>
          <ul>
            <li>Artisan Breads</li>
            <li>Delicious Pastries</li>
            <li>Custom Cakes for Every Occasion</li>
            <li>Gourmet Cookies and Brownies</li>
            <li>Seasonal Specials</li>
          </ul>
          <p>
            Whether you're stopping by for your morning coffee and a croissant,
            picking up a loaf of freshly baked bread for dinner, or ordering a
            custom cake for a special event, Owl Bakery is here to make every
            moment a little sweeter.
          </p>
          <h3 className="mt-4">Our Commitment</h3>
          <p>
            We are committed to using high-quality, locally sourced ingredients
            whenever possible. We believe in supporting our community and
            working with local farmers and suppliers to bring you the best
            products. Our team is dedicated to providing excellent customer
            service, and we're always happy to accommodate special requests or
            dietary needs.
          </p>
          <h3 className="mt-4">Visit Us</h3>
          <p>
            Come visit Owl Bakery and experience the warmth, aroma, and taste of
            our freshly baked goods. We're open daily from 7 AM to 7 PM. We look
            forward to welcoming you!
          </p>
          <div className="text-center mt-4">
            <button className="btn btn-primary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
