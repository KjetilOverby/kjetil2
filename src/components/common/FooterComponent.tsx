import React from "react";
import { GrMail } from 'react-icons/gr';
import { FaPhoneAlt } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiFillFacebook } from 'react-icons/ai';

interface data {
  title: string
}

interface DataProps {
  data: data[]
}


const FooterComponent:React.FC<DataProps> = ({data}) => {
  return (
    <>
      <div className="container">
        <div className="content-container">
          <div>
            <h3 className="footer-header">Kjetil Øverby • Portfolio</h3>
            <div className="icon-text-container">
            <FaPhoneAlt style={{verticalAlign: 'middle', color: 'lightgrey', marginRight: '.5rem', fontSize: '.9rem', marginTop: '.2rem'}} />
            <p className="footer-text"> 97541236</p>
            </div>
            <div className="icon-text-container">
            <GrMail style={{ color: 'lightgrey', marginRight: '.5rem', fontSize: '1.1rem', marginTop: '.2rem'}}/>
            <p className="footer-text"> ktldesign80@gmail.com</p>
            </div>
            <div className="icon-text-container">
            <BsGithub style={{ color: 'lightgrey', marginRight: '.5rem', fontSize: '1.1rem', marginTop: '.1rem'}}/>
            <p className="footer-text"> Github</p>
            </div>
            <div className="icon-text-container">
            <AiFillFacebook style={{ color: 'lightgrey', marginRight: '.5rem', fontSize: '1.1rem', marginTop: '.1rem'}}/>
            <p className="footer-text"> Facebook</p>
            </div>
          </div>

          <div>
            <h3 className="footer-header">Postarkiv 2016-2022</h3>
          
            {data.map((item => <p className="footer-text">{item.title}</p>))}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            background: #3b5564;
            padding: 6rem 3rem;
          }
          .content-container {
            margin: 0 20rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
          }
          .icon-text-container {
            display: flex;
            vertical-align: 'middle';
         
          }
          .footer-header {
            text-transform: uppercase;
            color: lightgrey;
            margin-bottom: 0.5rem;
            font-weight: 400;
          }
          .footer-text {
            color: lightgrey;
            margin-bottom: 0.5rem;
            font-weight: 100;
          }
        `}
      </style>
    </>
  );
};

export default FooterComponent;
