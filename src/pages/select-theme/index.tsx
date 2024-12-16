import { IonGrid, IonRow, IonCol, IonText, IonList, IonItem, IonLabel, IonIcon, IonButton, IonToggle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { themes } from '../../utils/themes';
import { flame } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const SelectTheme: React.FC = () => {
	const [empanadaMode, setEmpanadaMode] = useState<boolean>(false);
	const history = useHistory();

	const handleThemeSelect = (themeId: number) => {
		console.log('Tema seleccionado:', themeId);
		history.push(`/quiz/${themeId}`);
	};

	const handleEmpanadaMode = () => {
		setEmpanadaMode(prevMode => !prevMode);
	}

	useEffect(() => {
		console.log('Modo Empanada Caliente:', empanadaMode ? 'Activado' : 'Desactivado');
	}, [empanadaMode]);

	return (
		<IonGrid>
			<IonRow>
				<IonCol>
					<IonText color="dark">
						<h3>Selecciona un tema</h3>
					</IonText>
				</IonCol>
			</IonRow>

			<IonRow>
				<IonCol>
					<IonList>
						<IonItem>
							<IonIcon slot="start" icon={flame} style={{ color: '#FF5733' }} />
							<IonLabel>Modo Empanada Caliente</IonLabel>
							<IonToggle
								slot="end"
								checked={empanadaMode}
								onIonChange={() => handleEmpanadaMode()}
							/>
						</IonItem>
						{themes.map((theme) => (
							<IonItem
								key={theme.id}
								button
								onClick={() => handleThemeSelect(theme.id)}
							>
								<IonIcon slot="start" icon={theme.icon} style={{ color: theme.color }} />
								<IonLabel>{theme.name}</IonLabel>
							</IonItem>
						))}
					</IonList>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default SelectTheme;
