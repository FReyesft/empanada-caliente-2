import { IonButton, IonImg } from '@ionic/react';
import logo from '@assets/images/logo.avif';
import titleImage from '@assets/images/title-image.avif'
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-content">
      <div className="title-container">
        <IonImg
          src={titleImage}
          className="title-image"
          alt="Empanada caliente"
        />
      </div>
      <div className="logo-container">
        <IonImg
          src={logo}
          className="logo"
          alt="logo - Empanada Caliente"
        />
      </div>
      <div className="buttons-container">
        <IonButton color='primary' expand='full' href='/select-theme'>¡Jugar!</IonButton>
      </div>
        <p className='credits'>Por @FReyeSFT</p>
    </div>
  );
};

export default Home;
