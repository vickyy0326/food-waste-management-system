import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <img 
            src="https://i.ibb.co/VvPR2Lk/srm-logo.png" 
            alt="SRM Institute of Science and Technology" 
            className="h-24 mx-auto mb-4"
          />
          <h2 className="text-xl font-bold mb-2">SRM Institute of Science and Technology</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <div className="text-green-100 space-y-4">
              <p>
                We are excited to announce that we are currently developing a Food Security and Waste Reduction application 
                exclusively for SRM Institute of Science and Technology, aimed at providing a digital solution to reduce 
                food waste and promote equitable access to surplus food across campus.
              </p>
              <p>
                This project is being built in collaboration with my dedicated teammates — Ch.Girish Kumar, L.Chethan 
                and K.Varshith — as part of our shared vision to create a sustainable, user-friendly, and efficient 
                platform that addresses the pressing issue of food waste and food insecurity within the SRM community.
              </p>
              <p>
                The development is actively underway, and we have already implemented core features such as surplus 
                food listings, real-time notifications, and donor-recipient coordination. With regular feedback from 
                students and staff, we are refining the app to ensure it effectively supports both food redistribution 
                and awareness about sustainable consumption practices on campus.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <div className="text-green-100 space-y-4">
              <div>
                <h4 className="font-medium text-white">Faculty Mentor</h4>
                <p>Dr. S. Padmini</p>
              </div>
              
              <div>
                <h4 className="font-medium text-white">Students Team</h4>
                <ul className="space-y-4">
                  <li>
                    <p className="font-medium">L.Chethan (RA2311003010515)</p>
                    <p>Email: <a href="mailto:ll4525@srmist.edu.in" className="hover:text-green-200">ll4525@srmist.edu.in</a></p>
                    <p>Mobile: +919502077044</p>
                  </li>
                  <li>
                    <p className="font-medium">K.Varshith (RA2311003010516)</p>
                    <p>Email: <a href="mailto:kk6668@srmist.edu.in" className="hover:text-green-200">kk6668@srmist.edu.in</a></p>
                    <p>Mobile: +916305604605</p>
                  </li>
                  <li>
                    <p className="font-medium">CH.Girish Kumar (RA2311003010526)</p>
                    <p>Email: <a href="mailto:gc1024@srmist.edu.in" className="hover:text-green-200">gc1024@srmist.edu.in</a></p>
                    <p>Mobile: +917674086373</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 pt-4 text-center text-green-200">
          <p>&copy; {new Date().getFullYear()} Food Waste Tracker - SRM Institute of Science and Technology. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;