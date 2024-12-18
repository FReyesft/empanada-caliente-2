import { IonGrid, IonRow, IonCol, IonText, IonList, IonItem, IonLabel, IonIcon, IonButton, IonToggle } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { themes } from '../../utils/themes';
import { flame } from 'ionicons/icons';
import { useEmpanadaStore } from '../../store/empanada-mode.store';
import { useThemeSelected } from '../../store/theme-selected.store';
import { Theme } from '../../interfaces/game-themes.interfarce';

const SelectTheme: React.FC = () => {
	const { empanadaMode, toggleEmpanadaMode } = useEmpanadaStore();
	const { selectTheme } = useThemeSelected();
	const history = useHistory();

	const handleThemeSelect = (theme: Theme) => {
		selectTheme(theme);
		history.push(`/quiz`);
	};

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
								onIonChange={() => toggleEmpanadaMode()}
							/>
						</IonItem>
						{themes.map((theme) => (
							<IonItem
								key={theme.id}
								button
								onClick={() => handleThemeSelect(theme)}
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
