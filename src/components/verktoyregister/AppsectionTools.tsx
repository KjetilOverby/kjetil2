import React from "react";
import MarginLayout from "../common/MarginLayout";
import Appcards from "../common/postarkiv/appsection/Appcards";

const AppsectionTools = () => {
  return (
    <>
      <div className="container">
        <MarginLayout>
          <div className="content-margins">
            <h1 className="header">Apper</h1>
            <div className="appcards-container">
              <Appcards
                title="Microsoft Access"
                img="https://lh3.googleusercontent.com/pw/AL9nZEU-yzM9i9ftSMtPQSdECmV3yNe9WYJ3Af5NKe5q4w-Rh1kKt1tAd7X9CiMuGQw4KfWHwZdtVTjzABvwI1_d6WsWPZ76Qd1hjg1C4tzR07OqsVOlqeqmsapGI5XdxQoilqDWVUi9zDIkWzo0iet5HVYq=w1824-h1080-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              
              <Appcards
                title="Sagbladregister"
                img="https://lh3.googleusercontent.com/pw/AL9nZEWCENEKNjxIO1g6sohDOtM5gjNwnCrSUJJRxvorZDrQ9IgA737Hhi1e1o19OIJi_TDsnhF6QOUxWB_p6cC9ZeeJGXjkIOzO2CHCc17vET86Uk_37KBRq0qnLQ0gtcJtLGmFqIhYFNYm65hQhzDDoFPJ=w1920-h1080-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              <Appcards
                title="Mobil app"
                img="https://lh3.googleusercontent.com/pw/AL9nZEWp3pEGCghZiQMQx4wr8FFcpPZio8MTu5yp55YzKy3jq0hkv9a1Lb2ONKEGmYlh1JHIji0fJ_fVro_AVKJWHWcrns2okWcuO3QM01OZ0QYpa5Fp4Wjye43KbuNY-neiGkg3KrMtJYPXg4difTPxM83i=w1920-h921-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              <Appcards
                title="Oppgradering"
                img="https://lh3.googleusercontent.com/pw/AL9nZEWhQ9hWlq5X03v1h-mINsvQ-SHYObFeI8ZN2If8EjLcYkexPgGHXvdL5X6qQORIZhZ3SiUatXN-kpl004a9KsfT_pnYdbENHQqqn5n7kGPa5H7eYKf__-0JblrsD038pfqriUBKd7vn5i_syUGorKus=w1920-h1080-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              <Appcards
                title="Sagbladeoversikt"
                img="https://lh3.googleusercontent.com/pw/AL9nZEWZX39m9Jx7rbND-ZoY0yG4IjoI8FK6mI-YbGFb9-2JS_3ln0Z5FgevtI2r3hX791Ugg8VVvxhfg0K1sBm0kUUvm4bWjjxvkW_eNjnCCn4-fLeOT4lYDrfqwS2pU-J3sr-QMfj5hk7FJhuWNWANGfnT=w1920-h1080-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              <Appcards
                title="Sagbladregister2"
                img="https://lh3.googleusercontent.com/pw/AL9nZEVlgcKwKqXc_BZ894cwj-drRVrVUSwznhFqjy3TBm-H7zSgM-1IjJzYyq_6NT_zIC0WLBJVDz957mFVUmqhcwI6Gb3k-pmtcxwfnVd_M-YefR0PFXXRZTXXQeDvSHZRzinYm_Pqg7vh0XXM8BBdgapX=w800-h450-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              <Appcards
                title="Verktøyregister"
                img="https://lh3.googleusercontent.com/pw/AL9nZEXq8wP1_Dcq1W1IDflscDmKtXXlXcaqm9PS2nFkuokkb6aHh9hAkkbjSSISMQ1OZsfcedEsljcSLkbp3wOzaLqT68tlwajQ1QqSXNe-phlq0DmgUzsnSUr2qWCt9k7vhBRnCai9XeIh-b-y2fIuDKGT=w800-h450-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
              <Appcards
                title="Verktøyregister 2"
                img="https://lh3.googleusercontent.com/pw/AL9nZEWMuV6nxbfV2xhP6Vpg9P_-UBlSSh0i8C2xV9BIjJevm-thX_wRhvU_1k6ZjCJb0L2JJ8ExXfegpcweqL3RmgWdz0sTQtKvhywYD16s1MAd09fiPAVZ0llK4RwtDBNhtBc1Uon6G5JUCx5ECr8D-QqS=w800-h450-no?authuser=0"
                text="lorem ipsum"
                link=""
              />
            </div>
          </div>
        </MarginLayout>
      </div>
      <style jsx>
        {`
          .container {
            background: #d4d4d4;
            margin-top: 8rem;
            padding-bottom: 5rem
          }
          .appcards-container {
            margin-top: 8rem;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr)));
            grid-gap: 5rem;
            place-items: center;
            color: green
          }
        `}
      </style>
    </>
  );
};

export default AppsectionTools;
