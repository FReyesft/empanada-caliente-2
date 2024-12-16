import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon } from '@ionic/react';
import { menu, search } from 'ionicons/icons';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  showToolbar?: boolean; // Para ocultar el toolbar si es necesario
  startButton?: boolean; // Para mostrar un botón en el lado izquierdo
  endButton?: boolean;   // Para mostrar un botón en el lado derecho
  onStartButtonClick?: () => void; // Acción para el botón de la izquierda
  onEndButtonClick?: () => void;   // Acción para el botón de la derecha
}

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  showToolbar = true,
  startButton = false,
  endButton = false,
  onStartButtonClick,
  onEndButtonClick,
}) => {
  return (
    <IonPage>
      <IonHeader>
        {showToolbar && (
          <IonToolbar className="ion-toolbar-translucent">
            <IonButtons slot="start">
              {startButton && (
                <IonButton onClick={onStartButtonClick}>
                  <IonIcon icon={menu} />
                </IonButton>
              )}
            </IonButtons>
            <IonTitle>{title}</IonTitle>
            <IonButtons slot="end">
              {endButton && (
                <IonButton onClick={onEndButtonClick}>
                  <IonIcon icon={search} />
                </IonButton>
              )}
            </IonButtons>
          </IonToolbar>
        )}
      </IonHeader>
      <IonContent fullscreen>
        {children}
      </IonContent>
    </IonPage>
  );
};

export default Layout;
