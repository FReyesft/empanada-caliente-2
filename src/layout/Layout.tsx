import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonBackButton } from '@ionic/react';
import { menu, search } from 'ionicons/icons';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
  showToolbar?: boolean;
  startButton?: boolean;
  endButton?: boolean;
  showBackButton?: boolean;
  backButtonText?: string;
  backButtonUrl?: string;
  onStartButtonClick?: () => void;
  onEndButtonClick?: () => void;
}

const Layout: React.FC<LayoutProps> = ({
  title,
  children,
  showToolbar = true,
  startButton = false,
  endButton = false,
  showBackButton = false,
  backButtonText = 'Atras',
  backButtonUrl = '/',
  onStartButtonClick,
  onEndButtonClick,
}) => {
  return (
    <IonPage>
      <IonHeader>
        {showToolbar && (
          <IonToolbar className="ion-toolbar-translucent">
            <IonButtons slot="start">
              {showBackButton && <IonBackButton text={backButtonText} defaultHref={backButtonUrl} />}
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
