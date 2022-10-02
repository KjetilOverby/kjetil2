import React from "react";
import MarginLayout from "../../MarginLayout";
import Appcards from "./Appcards";

const AppsectionMain: React.FC = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <div>
            <h1 className="header">Apper</h1>
            <p>Flere apper har blitt laget.</p>
            <div className="appcards-container">
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEV5Dj5Ae_ckIm7eaFFDa8U7Xl9ynJdNc5xp7bZDNJVqB0CT4WQ80Uo46k8MDdiyxVSL3I0SA-LA9Z5uX7i96lQ7mc_RWTav4K8xBkVLXyhCHr_AnwGdPzbPIQ2SIjt4MgsKL4XIxkyqdPNJ7EkS3r2h=w1686-h1024-no?authuser=0"
                title="Microsoft Excel"
                text="Det første utregningsprogrammet ble laget med Microsoft Excel i april 2016"
              />
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEWkHPPA-3ew-ejj7jbTzggXqpvkFnt9IsGv9uCkIAg2OHt2wSSqLI71w-wV7xDKwJ1eMxsar3d24IM5JegFEeLRrlFHCNs1FFTyH6BB8wsnxSJE8jbnNFP3Q21wigbKmQJeBrGOOab6wWiAVEwY2rwr=w1920-h1080-no?authuser=0"
                title="Postkalkulator"
                text="Webapp ble utviklet. Denne har ikke database og kan ikke lagre data. Desember 2019"
              />
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEW4eNrcV7T6qsgrN06c-_Zy0KU26svbIX9bOUIardKNKZNC9mo0Y3pgYSYgIgCp7e6wHCqGE9_LOafN5DDspRj65mbjkbOAsNmJ8f-Uo_4OD4IbRMnFb2suHoy13bl8JtwKkP8J1Vp8Z9kYRuVd48tr=w1920-h1080-no?authuser=0"
                title="MKV Postarkiv"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque optio iusto itaque nobis, quod temporibus blanditiis veniam fugit vitae quasi aut odio aspernatur animi"
              />
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEU-AB074anXLqh5wxZR67I6P9ZpJ4oYshXhaiWLw07z88iICWm7mLbRLu6aPaW0eCnokH5oSclrek8-niXZRmauFEEhtP_uHjvVIMlyE2eUsRqkE9WDeIWEFSHSVagvcpGn29YPlK7ijVjtD6y3jerp=w1920-h1080-no?authuser=0"
                title="Skurliste"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque optio iusto itaque nobis, quod temporibus blanditiis veniam fugit vitae quasi aut odio aspernatur animi"
              />
              <Appcards
                img="https://lh3.googleusercontent.com/pw/AL9nZEViC_KeFb6PO3P0fmFyfbHuiX660OyjIctoQZcBvlDhBHmucWtcQlYzbOQnjbeTRjN5eQUc3MnASSNHqwDrPfW8aP4MbLia1RPVNR74RxtX_t_veP90hHw-Jb-QqCr_qSGgo6rteV52QfEoDv7MNSPU=w800-h450-no?authuser=0"
                title="Postarkiv"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione cumque optio iusto itaque nobis, quod temporibus blanditiis veniam fugit vitae quasi aut odio aspernatur animi"
              />
            </div>
          </div>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .appcards-container {
            margin-top: 5rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr)));
            grid-gap: 5rem;
            place-items: center
          }
          .container {
            background: #ebebeb;
            padding-bottom: 10rem;
            margin-bottom: 10rem;
          }
          
        `}
      </style>
    </>
  );
};

export default AppsectionMain;
