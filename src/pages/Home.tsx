import { IonButton, IonImg, IonPage } from '@ionic/react';
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
      <div className="play-button_container">
        <IonButton expand='full' className="play-button">¡Jugar!</IonButton>
      </div>
    </div>
  );
};

export default Home;
