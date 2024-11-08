import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'Gadget heaven || About';
  }, []);

  return (
    <div>
      <div className="bg-[#9538E2] text-white h-[170px] text-center">
        <div className="flex flex-col justify-center items-center py-5">
          <h3 className=" text-xl md:text-3xl font-bold">About US</h3>

          <p className="text-gray-300 my-3 w-11/12 lg:w-5/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="my-16 w-11/12 md:w-10/12 mx-auto  md:flex gap-10">
        <div className="w-full md:w-7/12 p-3">
          <h3 className="text-2xl md:text-4xl font-bold mb-2">
            Welcome to Gadget Heaven!
          </h3>
          <p className="">
            We are Gadget Heaven, a leading technology company dedicated to
            bringing you the latest tech gadgets and unique accessories. From
            smartphones to smartwatches, we offer a variety of products to make
            your life easier and smarter.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Mission
          </h3>
          <p className="text-sm text-gray-500">
            Our mission is to make advanced technology accessible to everyone.
            We aim to help our customers enjoy the highest benefits of modern
            technology.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Vision
          </h3>
          <p className="text-sm text-gray-500">
            We envision a world where technology makes life more innovative and
            creative. Gadget Heaven strives to play a key role in building that
            future.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our History
          </h3>
          <p className="text-sm text-gray-500">
            Gadget Heaven was founded in [Year]. Since then, we have been
            supporting tech enthusiasts and adapting to meet the evolving needs
            of our customers.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Core Values
          </h3>
          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Customer Satisfaction:</span> We
              prioritize our customers above all.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Innovation:</span> Embracing new
              ideas and technology is at our core.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Quality:</span> We ensure quality
              in every product and service we provide.
            </li>
          </ul>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Our Team
          </h3>
          <p className="text-sm text-gray-500">
            Our team faces daily challenges and builds the future of Gadget
            Heaven. They are committed to providing the best service to each
            customer.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Social Responsibility
          </h3>
          <p className="text-sm text-gray-500">
            We believe in using technology to create a positive impact on
            society. Gadget Heaven participates in various CSR activities to
            contribute to social welfare.
          </p>

          <br />
          <hr />
          <br />

          <h3 className="text-lg font-bold">
            <i class="fa-brands fa-codepen mr-1"></i> Contact Us
          </h3>
          <ul className="text-sm text-gray-500">
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Address: </span>
              Rangpur, Dhaka, Bangladesh.
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold"> Email: </span>
              info@gadgetheaven.com
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Phone: </span> +880123456789
            </li>
            <li>
              <i class="fa-regular fa-snowflake mr-1 text-[10px]"></i>
              <span className="font-semibold">Social Media:</span> [Facebook,
              Twitter Links]
            </li>
          </ul>
        </div>

        <div className="w-full h-[400px] md:w-6/12 p-3">
          <h1 className="text-xl text-gray-300 font-bold">All Showroom</h1>
          <div className="carousel carousel-vertical rounded-box h-96 mt-5">
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/wsL825P/The-Gadget-shot-1024x812.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/71D1rBQ/images.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/G7tpDHq/images-4.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/nm1KvRn/images-3.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/w7cDfx7/7b3413b2bf64aed67a48ed08dbe60664.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/wWMxQf8/images-2.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/tZk99DL/istockphoto-1328836875-612x612.jpg"
                className="w-full"
              />
            </div>
          </div>

          <div className="hidden md:flex carousel carousel-vertical rounded-box w-full h-96 mt-10">
            <div className="carousel-item w-full h-full">
              <img
                src="https://i.ibb.co.com/WW8y7kX/IPM-L2-Gadget-Hub1.jpg"
                className="w-full h-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/DrDTHyV/images-2.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/Fb6q39w/images-1.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/G7tpDHq/images-4.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/QDQYQKg/download-4.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/Gx85k1x/images.jpg"
                className="w-full"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://i.ibb.co.com/wWMxQf8/images-2.jpg"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;