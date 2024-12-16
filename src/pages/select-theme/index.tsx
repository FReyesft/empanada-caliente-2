import { IonText, IonRow, IonCol, IonGrid } from '@ionic/react';

function SelectTheme() {
	return (
		<IonGrid>
			<IonRow>
				<IonCol>
					<IonText color="dark">
						<h3>Puntaje: 0</h3>
					</IonText>
				</IonCol>
				<IonCol>
					<IonText color="dark">
						<h3>Nivel: 0</h3>
					</IonText>
				</IonCol>
			</IonRow>
			<IonRow>
				<IonCol>
					<div>0</div>
				</IonCol>
			</IonRow>
		</IonGrid>
	);
};

export default SelectTheme