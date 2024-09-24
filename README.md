# Front-End (Ionic + React)
## Diseño y arquitectura:

Se usó Ionic + React para construir una aplicación móvil que fuera responsiva y pudiera ejecutarse tanto en dispositivos móviles como en navegadores.
Para la gestión del estado, se decidió usar Context API, ya que la aplicación no es lo suficientemente compleja como para necesitar Redux, pero sí requiere un manejo claro del estado de los productos deseados.
Se optó por el almacenamiento local con Ionic Storage para mantener la persistencia de los productos deseados incluso cuando la aplicación se cierre o se recargue.
Gestión de errores y usabilidad:

Se implementó el manejo de errores con mensajes personalizados (IonToast) para asegurar una buena experiencia de usuario en caso de fallos de red o API.
El uso de componentes nativos de Ionic como IonCard, IonButton, y IonToast fue clave para mantener una interfaz limpia, amigable y consistente.

## Desafíos en el Front-End:

Persistencia de datos: La persistencia de los productos deseados en el dispositivo local (usando Ionic Storage) planteó un desafío al gestionar el ciclo de vida de los datos entre las sesiones de la aplicación. Se abordó utilizando hooks (useEffect) para cargar los productos deseados al iniciar la aplicación y actualizando Context API para manejar el estado de los productos.
Renderizado y estado global: El manejo de estado para compartir información entre múltiples componentes presentó algunas complicaciones. Se resolvió implementando Context API para mantener el estado global de los productos deseados, evitando la necesidad de pasar props manualmente entre componentes.
