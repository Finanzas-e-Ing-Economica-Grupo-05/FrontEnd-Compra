## **Universidad Peruana de Ciencias Aplicadas** 

## Trabajo Final 

## **Finanzas e Ingeniería Económica** 

NRC: 7023 

Grupo 5 

Profesor: Gabriel Renato Chicoma Cacho Integrantes: **Nombres y Apellidos Código Carrera** Astulle Farfan, Fabian Angelo u20231e862 Ingeniería de Sistemas de Información Mostajo Orosco, Maria Fernanda u202312874 Ingeniería de Software Valdivia Quispe, Stephano Renan u202311294 Ingeniería de Software Vega Coronado, Fabricio Samir u202317000 Ingeniería de Software Villanueva Andrade, Ysaac Ligorio u20231c168 Ingeniería de Software ~~oe~~ **2026-1** 

## **Introducción** 

En el panorama económico actual del Perú, la adquisición de vehículos representa una necesidad importante tanto para familias como para emprendedores. No obstante, el acceso al crédito vehicular implica una notable complejidad, debido a factores como la presencia de distintas monedas, la variación de tasas de interés y la inclusión de períodos de gracia. 

En primer lugar, el proyecto propone el desarrollo de una aplicación informática, ya sea web o móvil, orientada a la simulación de planes de pago bajo la modalidad de “Compra Inteligente”. Este esquema, ampliamente utilizado en el mercado, se basa en el método francés de amortización, el cual establece cuotas mensuales fijas. Asimismo, ofrece la posibilidad de configurar condiciones específicas como la moneda del crédito, el tipo de tasa de interés y la incorporación de periodos de gracia, adaptándose así a las necesidades del usuario. 

En segundo lugar, el sistema no se limita a realizar cálculos básicos, sino que integra conceptos de ingeniería económica para ofrecer mayor transparencia en la información. En este sentido, permite calcular automáticamente indicadores clave como el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR), brindando al usuario una visión más clara del costo real del financiamiento y del impacto de sus decisiones. 

Para concluir, la finalidad de este proyecto es aplicar conocimientos de matemáticas, ciencia y computación para resolver un problema financiero complejo, mediante el desarrollo de una herramienta confiable y precisa que facilite la toma de decisiones informadas y contribuya a una mejor gestión de los recursos económicos. 

## **Índice** 

**Introducción............................................................................................................................................2 Objetivo del Estudiante (Student Outcome)........................................................................................4 CAPÍTULO 1: Definiciones generales y conceptos básicos................................................................5** 1.1 Compra Inteligente (Cuota Balón):............................................................................................. 5 1.2 Préstamo:..................................................................................................................................... 5 1.3 Capital:.........................................................................................................................................5 1.4 Cuota:...........................................................................................................................................6 1.5 Periodo de Gracia (Total y Parcial):............................................................................................ 6 1.6 Sistema de Amortización Francés:.............................................................................................. 6 1.7 Tasa de Costo Efectivo Anual (TCEA):...................................................................................... 6 1.8 Valor Actual Neto (VAN):........................................................................................................... 6 1.9 Tasa Interna de Retorno (TIR):....................................................................................................7 1.10 Seguro de Desgravamen:...........................................................................................................7 **CAPÍTULO 2: Marco Legal y Teórico.................................................................................................7** 2.1. Marco Legal................................................................................................................................7 2.2. Marco Teórico.............................................................................................................................8 CAPÍTULO 3: Análisis y Diseño del Sistema.........................................................................................9 3.1. Análisis de Datos........................................................................................................................9 3.1.1. Datos de Entrada.............................................................................................................10 3.1.2. Datos de Salida................................................................................................................11 3.1.3. Datos Intermedios........................................................................................................... 11 3.2. Diseño de la interfaz.................................................................................................................12 3.3. Marco conceptual (fórmulas)....................................................................................................20 3.4. Diseño de Datos de prueba.......................................................................................................25 **CAPÍTULO 4: Algoritmo....................................................................................................................25 4.1 Pseudocódigo.................................................................................................................................. 25 Evidencias de funcionamiento:.......................................................................................... 29 4.2 Diagrama de flujo........................................................................................................... 31 4.3 Modelo de base de datos.............................................................................................. 33 Anexos................................................................................................................................................... 35 Bibliografía........................................................................................................................................... 35** 

## **Objetivo del Estudiante (Student Outcome)** 

|**Student Outcome**|**Acciones realizadas**|**Conclusión**|
|---|---|---|
|ABET – EAC - Student<br>Outcome 1: La capacidad<br>de identificar, formular y<br>resolver problemas<br>complejos de ingeniería<br>aplicando los principios de<br>ingeniería, ciencia y<br>matemática.|Astulle Farfan, Fabian Angelo TP1:<br>-<br>Introducción<br>-<br>Definiciones generales y<br>conceptos básicos.<br>-<br>Marco Legal y Teórico.<br>Mostajo Orosco, Maria Fernanda TP1:<br>-<br>Marco conceptual<br>Valdivia Quispe, Stephano Renan TP1:<br>-<br>Diseño de Datos de prueba.<br>Vega Coronado, Fabricio Samir TP1:<br>-<br>Análisis de Datos<br>-<br>Diseño de la Interfaz<br>Villanueva Andrade, Ysaac Ligorio TP1:<br>-<br>Algoritmo<br>-<br>Modelo de Base de datos|Astulle Farfan, Fabian Angelo TP1:<br>Identifiqué la falta de transparencia en<br>créditos vehiculares y formulé una<br>solución técnica basada en el método<br>francés y la cuota balón. Investigué el<br>marco legal de la SBS y apliqué<br>principios de ingeniería económica para<br>planear el desarrollo de un simulador que<br>automatice el cálculo de indicadores<br>críticos como VAN y TIR.<br>Mostajo Orosco, Maria Fernanda TP1:<br>Identifiqué y formulé los modelos<br>matemáticos necesarios para el crédito<br>vehicular, integrando el método francés<br>con cuota balón. Investigué y apliqué<br>principios de ingeniería económica para<br>establecer las bases técnicas de cálculo de<br>indicadores como el VAN y la TIR,|



resolviendo así la complejidad de la estructura financiera del proyecto Valdivia Quispe, Stephano Renan TP1: Identifiqué, formulé y resolví la lógica de un crédito vehicular complejo con cuota balón y gracia total. Apliqué principios matemáticos y de ingeniería modelando el comportamiento del capital mediante ecuaciones de anualidades para recalcular cuotas exactas y asegurar que el saldo final converge perfectamente a cero. Vega Coronado, Fabricio Samir TP1: Identifiqué y sistematicé las variables críticas del crédito vehicular, como la cuota inicial y el porcentaje de cuota balón, asegurando que el flujo de datos permita una resolución matemática precisa del cronograma bajo la normativa de la SBS. Villanueva Andrade, Ysaac Ligorio TP1: Identifiqué las restricciones lógicas y matemáticas del crédito vehicular con cuota balón y las resolví diseñando un algoritmo secuencial estructurado. Apliqué principios de ingeniería de software para formular un modelo de base de datos relacional que garantice la integridad, el almacenamiento y la correcta relación de los cálculos financieros complejos. 

|ABET – CAC - Student<br>Outcome 1: La capacidad<br>de analizar un problema<br>complejo aplicando los<br>principios de computación,<br>ciencia y matemática para<br>identificar soluciones.||Astulle Farfan, Fabian Angelo TP1:<br>Analicé la complejidad del crédito<br>vehicular mediante principios de<br>computación y matemática para<br>identificar una solución digital. Estructuré<br>el flujo de datos y diseñé el modelo de<br>base de datos para planear un algoritmo<br>basado en el método francés.<br>Mostajo Orosco, Maria Fernanda TP1:<br>Analicé el problema financiero desde una<br>perspectiva científica para identificar las<br>fórmulas matemáticas que rigen el<br>comportamiento dinámico del crédito.<br>Diseñé el marco conceptual<br>transformando principios de ingeniería<br>económica en la base lógica necesaria<br>para el procesamiento algorítmico de la<br>solución computacional.<br>Valdivia Quispe, Stephano Renan TP1:<br>Analicé el problema computacionalmente<br>mediante una arquitectura de tres capas<br>(interfaz, lógica y renderizado). Diseñé la<br>solución utilizando estructuras de datos<br>eficientes como vectores de flujo de caja e<br>implementé estados lógicos condicionales<br>para gestionar la memoria con precisión<br>durante los periodos de gracia.<br>Vega Coronado, Fabricio Samir TP1:<br>Analicé el problema desde una<br>perspectiva tecnológica al transformar<br>fórmulas financieras complejas en una|
|---|---|---|



|||||
|---|---|---|---|
||||interfaz intuitiva, garantizando que el<br>ingreso de datos (como la TEM y<br>seguros) sea fluido y libre de errores para<br>el sistema.<br>Villanueva Andrade, Ysaac Ligorio TP1:<br>Analicé el problema desde una<br>perspectiva computacional, traduciendo el<br>modelo matemático financiero a un<br>diagrama de flujo y pseudocódigo.<br>Identifiqué la solución óptima diseñando<br>una arquitectura de base de datos<br>normalizada en cinco entidades, la cual<br>soporta eficientemente el procesamiento<br>iterativo de flujos de caja y el registro de<br>variables transaccionales.|
|ICACIT - Student<br>Outcome A: La capacidad<br>de aplicar conocimientos<br>de matemáticas, ciencias e<br>ingeniería en la solución de<br>problemas complejos de<br>ingeniería.|||Astulle Farfan, Fabian Angelo TP1:<br>Apliqué conocimientos de matemáticas<br>financieras y principios de ingeniería para<br>diseñar una solución técnica al complejo<br>cálculo de amortizaciones vehiculares.<br>Estructuré el modelo de datos y el<br>algoritmo para planear la automatización<br>de variables como la cuota balón y<br>seguros bajo la normativa de la SBS. Este<br>diseño fundamenta la futura obtención de<br>indicadores como el VAN y la TIR para<br>garantizar transparencia al deudor.<br>Mostajo Orosco, Maria Fernanda TP1:<br>Apliqué conocimientos de matemáticas y<br>ciencias para diseñar la estructura de|



fórmulas del simulador, permitiendo la conversión exacta de tasas y el cálculo de amortizaciones constantes. Estructuré el marco conceptual integrando seguros y periodos de gracia para asegurar una solución técnica precisa a la complejidad del problema planteado. Valdivia Quispe, Stephano Renan TP1: Apliqué matemáticas financieras avanzadas programando fórmulas exponenciales y lineales para convertir distintas tasas (TEA y TNA) a una tasa mensual unificada (TEM). Usé principios de ingeniería separando la amortización pura de los costos variables (seguros) y fijos (portes) para lograr exactitud en el cronograma. Vega Coronado, Fabricio Samir TP1: Apliqué lógica de ingeniería para organizar la jerarquía de datos, permitiendo que el algoritmo procese correctamente seguros, portes y periodos de gracia, logrando una representación visual fidedigna del costo real del crédito. Villanueva Andrade, Ysaac Ligorio TP1: Apliqué conocimientos de ingeniería y ciencias de la computación al mapear las fórmulas financieras, como el método francés modificado, hacia estructuras algorítmicas iterativas. Resolví la complejidad del almacenamiento de datos diseñando un esquema relacional 

|||||
|---|---|---|---|
||||coherente que conecta matemáticamente<br>los parámetros de entrada con los<br>indicadores de salida.|
|ICACIT - Student<br>Outcome E: La capacidad<br>de identificar, formular,<br>buscar información y<br>analizar problemas<br>complejos de ingeniería<br>para llegar a conclusiones<br>fundamentadas usando<br>principios básicos de<br>matemáticas, ciencias<br>naturales y ciencias de la<br>ingeniería.|||Astulle Farfan, Fabian Angelo TP1:<br>Identifiqué la asimetría informativa en<br>créditos vehiculares e investigué la<br>normativa de la SBS para formular una<br>solución técnica. Analicé modelos<br>financieros para planear conclusiones<br>fundamentadas mediante indicadores<br>como el VAN y la TIR. Estructuré el<br>diseño del algoritmo y la base de datos<br>para asegurar una automatización precisa<br>en el futuro desarrollo del simulador.<br>Mostajo Orosco, Maria Fernanda TP1:<br>Investigué y busqué información técnica<br>sobre las normativas de la SBS para<br>formular un marco conceptual sólido y<br>legalmente fundamentado. Analicé las<br>variables del crédito vehicular usando<br>principios de ingeniería económica para<br>llegar a conclusiones matemáticas que<br>garantizan la exactitud en el cálculo del<br>flujo de caja e indicadores de rentabilidad.<br>Valdivia Quispe, Stephano Renan TP1:<br>Investigué la normativa financiera|



|||||
|---|---|---|---|
||||peruana (SBS) para integrar reglas de<br>negocio reales como la TCEA y el<br>devengo de seguros. Analicé el flujo de<br>caja calculando el VAN y la TIR frente al<br>costo de oportunidad (COK), lo que me<br>permitió emitir conclusiones sólidas sobre<br>la viabilidad del crédito para cada perfil.<br>Vega Coronado, Fabricio Samir TP1:<br>A través del análisis de datos de salida,<br>formulé un dashboard de indicadores<br>financieros que permite al deudor<br>comparar el costo efectivo real frente a su<br>COK, facilitando conclusiones<br>fundamentadas sobre la viabilidad del<br>préstamo.<br>Villanueva Andrade, Ysaac Ligorio TP1:<br>Analicé la complejidad del flujo de<br>información financiera para formular un<br>algoritmo coherente con las exigencias<br>del proyecto. Fundamenté mi diseño<br>estructurando una base de datos que<br>permite la trazabilidad de cada variable<br>matemática y periodo de gracia,<br>asegurando que el cálculo del cronograma<br>de pagos sea transparente, exacto y<br>auditable.|
|ICACIT - Student<br>Outcome L: La capacidad<br>de demostrar el<br>conocimiento y la<br>comprensión de los|||Astulle Farfan, Fabian Angelo TP1:<br>Demostré capacidad de gestión al planear<br>un sistema que personaliza créditos según<br>el perfil del deudor. Apliqué principios de<br>ingeniería económica para diseñar el|



|principios de gestión en<br>ingeniería y la toma de<br>decisiones económicas, y<br>su respectiva aplicación.||cálculo automático del VAN y la TIR.<br>Este esquema asegura que el usuario<br>cuente con información precisa para<br>tomar decisiones financieras responsables<br>en el futuro desarrollo del proyecto.<br>Mostajo Orosco, Maria Fernanda TP1:<br>Demostré conocimiento en la toma de<br>decisiones económicas al fundamentar el<br>marco conceptual con métricas de<br>rentabilidad como el VAN, la TIR y la<br>TCEA. Apliqué principios de gestión<br>financiera para definir la estructura de<br>costos y seguros, asegurando que el<br>diseño del simulador sea una herramienta<br>confiable para la evaluación económica<br>responsable del usuario<br>Valdivia Quispe, Stephano Renan TP1:<br>Demostré comprensión en la toma de<br>decisiones económicas programando<br>métricas clave (VAN, TIR y TCEA).<br>Apliqué principios de gestión al comparar<br>el costo real del crédito contra el perfil del<br>usuario (COK) para facilitar decisiones<br>financieras informadas y viables.<br>Vega Coronado, Fabricio Samir TP1:<br>Demostré comprensión en la toma de<br>decisiones económicas al proyectar<br>visualmente el impacto de la cuota balón<br>y los seguros en el presupuesto del<br>deudor. Esta gestión de la información|
|---|---|---|



asegura que el usuario final pueda elegir la opción de financiamiento más eficiente y responsable para su perfil. Villanueva Andrade, Ysaac Ligorio TP1: Demostré comprensión en el soporte técnico para la toma de decisiones económicas al diseñar una base de datos que preserva el histórico de simulaciones y sus indicadores de rentabilidad (VAN, TIR, TCEA). Esta arquitectura de datos permite al usuario comparar escenarios crediticios de manera confiable, facilitando una gestión financiera informada. 

## **1.- Definiciones generales y conceptos básicos** 

## **1.1 Compra Inteligente (Cuota Balón):** 

Según Santander Consumer (2024), la modalidad de financiamiento vehícular con “Cuota Balón” difiere un alto porcentaje del precio del vehículo (usualmente el 50%) al final del plan de pagos. En este esquema, el cliente paga cuotas mensuales reducidas hasta la última cuota (la _Cuota Balón_ ), que incluye el saldo principal e intereses restantes. 

De este modo, el usuario puede optar al vencimiento por renovar el vehículo, devolverlo para cancelar la deuda o refinanciar el saldo. 

Podemos concluir que esta definición respalda nuestro proyecto al describir cómo el producto “Compra Inteligente” estructura el flujo de pagos, lo que facilita diseñar el cronograma y las opciones de cierre del contrato. 

## **1.2 Préstamo:** 

Se define como una operación financiera en la cual una entidad entrega un monto de dinero al cliente, generando la obligación de devolverlo en un plazo determinado e incorporando intereses y cargos asociados según la tasa pactada (Caja Paita, 2024). 

En nuestro proyecto, entendemos el préstamo como el mecanismo que entrega el capital inicial al deudor para financiar el vehículo; en consecuencia, el cliente deberá reembolsar ese capital en cuotas periódicas con los intereses correspondientes. 

Podemos concluir que el préstamo es la base del crédito vehicular, generando la deuda sobre la cual aplicamos los cálculos de amortización e interés. 

## **1.3 Capital:** 

Según la Caja Paita (2024), es el monto principal del crédito otorgado y constituye la base de la deuda sobre la cual se calculan los intereses del periodo. Durante el cronograma, el capital disminuye mediante la amortización, a excepción de los periodos de gracia total o la reserva de capital para la cuota final. 

En nuestro proyecto, este capital representa la deuda inicial contraída por el cliente; es decir, la porción del precio del vehículo cubierta mediante financiamiento. De ese modo, al calcular las cuotas de amortización e intereses usamos el capital como base, de forma que conforme se amortiza el capital disminuye la deuda. 

## **1.4 Cuota:** 

Es el pago periódico que realiza el cliente para amortizar el capital y cubrir los intereses del periodo (Caja Paita, 2024). En los créditos vehiculares, la cuota suele incluir también seguros de desgravamen y multirriesgo vehicular para proteger el activo ante siniestros (Banco GNB Perú, 2024). 

## **1.5 Periodo de Gracia (Total y Parcial):** 

Condición contractual en la que el cliente recibe un alivio temporal en el pago de su obligación (Caja Metropolitana, 2025). En la gracia total se difiere el pago completo de la cuota y los intereses se capitalizan; en la gracia parcial se pagan únicamente los intereses, manteniendo el saldo de capital intacto (Caja Metropolitana, 2025). 

## **1.6 Sistema de Amortización Francés:** 

Según la Caja Municipal de Ahorro y Crédito Cusco S. A. (2025), es un método de pago caracterizado por cuotas constantes durante el plazo del crédito, donde la composición de la cuota varía: inicialmente es mayoritariamente interés y, conforme baja el saldo, aumenta la proporción de amortización de capital. 

## **1.7 Tasa de Costo Efectivo Anual (TCEA):** 

Es el indicador anual que refleja el costo total del crédito vehicular para el usuario (Banco GNB Perú, 2024). Incorpora la tasa de interés efectiva, las comisiones y los seguros 

obligatorios, permitiendo una comparación transparente entre diferentes entidades financieras 

(Banco GNB Perú, 2024). 

## **1.8 Valor Actual Neto (VAN):** 

Según Shin Park (2024), es un criterio de evaluación financiera que calcula el valor 

presente de los flujos futuros de una operación descontados a una tasa de oportunidad 

determinada, permitiendo medir la creación de valor económico. 

## **1.9 Tasa Interna de Retorno (TIR):** 

Representa la rentabilidad implícita o el costo efectivo del flujo de caja analizado, 

siendo la tasa de descuento que hace que el VAN sea igual a cero (Mantilla Murga, 2025). 

## **1.10 Seguro de Desgravamen:** 

Según el Banco GNB Perú (2024), es una póliza asociada al crédito cuyo fin es cubrir 

el saldo deudor ante el fallecimiento del titular, reduciendo el riesgo para la entidad y protegiendo a los herederos del deudor. 

## **2.- Marco Legal y Teórico** 

## **2.1. Marco Legal** 

El sustento normativo de la aplicación se basa en las disposiciones vigentes de la Superintendencia de Banca, Seguros y AFP (SBS), las cuales garantizan la protección del usuario y la transparencia en las operaciones de crédito vehicular en el Perú. 

## ● **Ley General del Sistema Financiero y del Sistema de Seguros (Ley N° 26702):** 

Según la propia Ley N.° 26702, “l _a presente ley establece el marco de regulación y supervisión a que se someten las empresas que operen en el sistema financiero y de seguros_ ”, por lo que constituye la base jurídica que autoriza, ordena y supervisa las operaciones de financiamiento realizadas por las entidades del sistema financiero peruano. En consecuencia, esta ley respalda que productos como el crédito vehicular se ofrezcan bajo reglas de legalidad, solvencia y control institucional, lo cual resulta indispensable para que el sistema propuesto simule operaciones alineadas con el funcionamiento real del mercado financiero. 

Por ello, la Ley N.° 26702 actúa como el fundamento normativo principal de nuestro proyecto, ya que permite encuadrar la simulación dentro de un entorno regulado y formalmente supervisado. 

## ● **Reglamento de Transparencia de Información (Resolución SBS N° 1765-2005):** 

Según la Resolución SBS N.° 1765-2005, las empresas supervisadas deben brindar información clara, suficiente y comprensible respecto de las condiciones de 

sus productos financieros antes de su contratación. Esto implica que variables como la tasa de interés, las comisiones, los seguros y el monto de las cuotas deben presentarse de manera transparente, evitando ambigüedades que afecten la decisión del usuario. 

En ese sentido, esta norma respalda que nuestro simulador muestre de forma detallada el costo del financiamiento y el cronograma proyectado, fortaleciendo la finalidad informativa y comparativa de la aplicación. 

## ● **Reglamento de Transparencia y Contratación con Usuarios (Resolución SBS N° 8181-2012):** 

Según la Resolución SBS N.° 8181-2012, las entidades financieras deben transparentar adecuadamente las características, condiciones, comisiones, gastos y demás cargos aplicables a los productos que ofrecen a sus usuarios. Asimismo, esta norma sustenta la obligación de entregar información suficiente sobre el cronograma de pagos y sobre indicadores representativos del costo del crédito, lo que se vincula directamente con la TCEA y con el desglose de amortización, intereses y seguros que presenta nuestro sistema. 

Por tal motivo, esta resolución constituye la base técnica más importante para justificar que el simulador exponga de manera completa el comportamiento mensual del préstamo y el costo efectivo real que asume el deudor. 

## ● **Código de Protección y Defensa del Consumidor (Ley N° 29571):** 

Según la Ley N.° 29571, todo consumidor tiene derecho a recibir información veraz, suficiente, de fácil comprensión y oportuna sobre los productos y servicios que contrata. Aplicado al crédito vehicular, ello significa que el usuario debe conocer con 

claridad no solo la cuota pactada, sino también los intereses, seguros, gastos y efectos financieros de decisiones como aceptar un periodo de gracia o realizar pagos anticipados. 

Por lo tanto, esta norma complementa el marco SBS al reforzar que el sistema 

desarrollado debe priorizar la transparencia, la comprensión del usuario y la 

protección frente a decisiones tomadas con información incompleta. 

## **2.2. Marco Teórico** 

Para el desarrollo del algoritmo de “Compra Inteligente”, se aplican conceptos de ingeniería económica que permiten modelar con exactitud el flujo de caja del deudor y representar adecuadamente el comportamiento del crédito durante toda su vigencia. 

## ● **Conversión de Tasas de Interés:** 

El sistema financiero peruano permite el ingreso de tasas nominales o 

efectivas. Si se ingresa una Tasa Nominal Anual (TNA), el sistema la convierte a Tasa Efectiva Anual (TEA) considerando el periodo de capitalización (𝑛) mediante está fórmula: 

**==> picture [121 x 21] intentionally omitted <==**

## ● **Método de Amortización Francés para "Compra Inteligente" (con Cuota Balón):** 

El enunciado exige utilizar el método francés vencido ordinario aplicado a la 

modalidad de Compra Inteligente. En este esquema, se posterga el pago de un porcentaje significativo del capital (Cuota Balón o 𝑉𝐹) hacia la última cuota para 

reducir los pagos mensuales. La fórmula modificada para calcular la cuota mensual constante (𝑅) es: 

**==> picture [149 x 26] intentionally omitted <==**

Donde  es el capital total a financiar e  la tasa efectiva mensual.  𝑃 𝑖 

## ● **Tratamiento teórico de los periodos de gracia** 

El periodo de gracia se entiende como un plazo durante el cual la entidad financiera permite al deudor no realizar pagos totales o parciales de su cuota, sin que ello se considere un incumplimiento inmediato del préstamo (Prestamype, 2021). Este mecanismo funciona como una prórroga que ayuda a enfrentar problemas de liquidez, pero también implica que los intereses generados durante ese intervalo pueden incrementar el monto total a pagar respecto de las condiciones originalmente pactadas (Prestamype, 2021). 

En el periodo de gracia total, el deudor no paga ni capital ni intereses mientras dura la gracia, pero los intereses continúan devengándose sobre el saldo del préstamo y se capitalizan, es decir, se suman al principal pendiente (Prestamype, 2021). Como 

consecuencia, al finalizar la gracia, la deuda acumulada es mayor y las cuotas posteriores resultan más altas que las que se hubieran pagado sin este beneficio, reflejando un mayor costo financiero global (Interbank, 2021). 

En el periodo de gracia parcial, el deudor paga solamente los intereses generados en cada periodo y difiere el inicio de la amortización del capital (Goparity, 2025). Bajo esta modalidad, el saldo principal permanece constante durante el plazo de gracia, pero al terminar dicho periodo el capital deberá distribuirse entre un número menor de cuotas, lo que 

puede traducirse en pagos mensuales de mayor valor que en un cronograma sin gracia (Goparity, 2025). 

En el sistema a desarrollar, el tratamiento teórico de los periodos de gracia exige distinguir en el plan de pagos entre meses con pago completo, meses con solo intereses y meses sin pago, definiendo en cada caso si los intereses se capitalizan o se liquidan en el mismo periodo. Esta diferenciación permite que la estructura del flujo de caja represente adecuadamente el efecto de la gracia total y parcial sobre el saldo deudor y sobre las cuotas futuras. 

## ● **Metodología de cálculo de los seguros obligatorios** 

En los créditos vehiculares, los seguros obligatorios forman parte del costo efectivo total del préstamo y deben considerarse explícitamente en el análisis financiero del sistema a desarrollar (BBVA, 2022). Entre estos seguros destacan el seguro de desgravamen, orientado a cubrir el saldo de la deuda en caso de siniestros que afecten al deudor, y el seguro vehicular, orientado a proteger el valor del vehículo frente a riesgos como daños o pérdidas (Pacífico Seguros, s. f.). 

El seguro de desgravamen es un seguro que tiene por objeto pagar, en caso de fallecimiento o invalidez total y permanente del cliente, el saldo de capital que mantiene con la entidad financiera, liberando a sus familiares de la obligación de pago de la deuda (Pacífico Seguros, s. f.). En la práctica, la prima de este seguro suele calcularse de manera proporcional al saldo insoluto del crédito, de modo que el monto cobrado se relaciona con la deuda pendiente y se ajusta conforme el capital se va amortizando (BBVA, 2022). De esta forma, desde el punto de vista teórico, el seguro de desgravamen se comporta como un costo variable ligado al capital vivo del préstamo en cada periodo (Interbank, 2021). 

El seguro vehicular se determina principalmente en función del valor comercial del vehículo, la zona de circulación y el tipo de cobertura contratada, por lo que vehículos de mayor valor o mayor riesgo tienden a generar primas más altas (MAPFRE, 2024). En general, la prima del seguro vehicular se establece como un costo anual que puede fraccionarse en pagos periódicos durante la vigencia de la póliza, por ejemplo en cuotas mensuales, según lo establecido en el contrato de seguro (MAPFRE, 2024). En el sistema a desarrollar, este comportamiento puede modelarse mediante un monto fijo mensual asociado al seguro del vehículo, que se suma a la cuota de capital e intereses y al seguro de desgravamen para obtener el pago total que el usuario debe realizar en cada periodo. 

De esta manera, la metodología de cálculo de los seguros obligatorios permite distinguir entre la cuota financiera del crédito, compuesta por amortización e intereses, y la cuota total que efectivamente paga el usuario, que incluye además los seguros de 

desgravamen y vehicular, aportando una visión más realista del costo del crédito vehicular (BBVA, 2022). 

## ● **Indicadores Financieros desde la Perspectiva del Deudor (VAN y TIR):** 

El sistema debe incluir obligatoriamente el cálculo del VAN y TIR del préstamo. El Valor Actual Neto (VAN) evalúa la viabilidad económica del préstamo desde el punto de vista del cliente, utilizando esta fórmula (NPV): 

**==> picture [117 x 31] intentionally omitted <==**

Donde 𝐹𝐶 representa el flujo de caja en el periodo . 𝑡 𝑡 

Asimismo, se calcula la Tasa Interna de Retorno (TIR), que representa el costo 

efectivo real del préstamo para el deudor. Se obtiene resolviendo la siguiente ecuación (IRR) cuando el VAN es igual a cero: 

**==> picture [109 x 31] intentionally omitted <==**

## **3.- Análisis y Diseño del Sistema** 

## **3.1. Análisis de Datos** 

Para el desarrollo de la aplicación de simulación de crédito vehicular bajo la modalidad de 'Compra Inteligente', se ha procedido con un análisis exhaustivo de las variables que intervienen en el proceso financiero. Este análisis se divide en tres categorías fundamentales: datos de entrada, procesos intermedios y datos de salida. Esta estructura garantiza que el sistema no solo cumpla con los cálculos matemáticos del método francés, sino que también se alinee con las normativas de transparencia de la Superintendencia de Banca, Seguros y AFP (SBS) del Perú. 

## **3.1.1. Datos de Entrada** 

Los datos de entrada constituyen la materia prima del simulador y se capturan a través de la interfaz de usuario. En esta sección se contemplan tanto la información personal para la gestión del perfil del cliente (necesaria para el registro en la base de datos), como las condiciones comerciales del crédito (moneda, precio, tasas y seguros). La correcta validación de estos parámetros es crítica para asegurar la integridad de los resultados financieros posteriores. 

|||||||
|---|---|---|---|---|---|
|Categoría||Variable|Descripción|Tipo de<br>Dato|Restricción / Formato|
|**Registro y Login**||usu_nombr<br>e|Primer nombre del usuario.|String|Solo letras.|
|||usu_apellid<br>o|Apellidos del usuario.|String|Solo letras.|
|||usu_dni|Documento Nacional de Identidad.|String|8 dígitos numéricos.|
|||usu_passw<br>ord|Clave de acceso al sistema.|String|Alfanumérico (mín. 8<br>caracteres).|
|**Perfil del Cliente**||usu_correo|Correo electrónico de contacto.|String|Formato email.|
|||usu_numer<br>o|Número telefónico o celular.|String|9 dígitos numéricos.|
|||usu_perfil_<br>se|Ingresos mensuales o nivel<br>socioeconómico.|Double|Valor $> 0$.|
|**Datos del Vehículo**||veh_marca|Marca del vehículo de interés.|String|Selección de catálogo.|
|||veh_precio|Valor de venta del vehículo.|Double|Positivo en moneda<br>elegida.|
|||veh_moned<br>a|Moneda de la operación.|String|Soles (S/) o Dólares ($).|
|**Condiciones**<br>**Financieras**||fin_fec_ini<br>cio|Fecha de desembolso del préstamo.|Date|Fecha actual o futura.|
|||fin_ini_mo<br>nto|Monto pagado como cuota inicial.|Double|Valor $\geq 0$.|
|||fin_balon_<br>porc|Porcentaje para la Cuota Balón<br>final.|Double|Entre 20% y 50%.|
|||fin_plazo|Tiempo total del crédito en meses.|Integer|Ej. 24, 36 meses.|
|||tasa_valor|Valor de la tasa de interés pactada.|Double|Porcentual positivo.|
|||tasa_tipo|Tipo de tasa ingresada|String<br>(ENUM)|Dominio cerrado:<br>{“Nominal”, “Efectiva”}.|
|||tasa_capit|Frecuencia de capitalización de la<br>tasa nominal, expresada en número<br>de días.|Integer|Valores válidos: 1 (Diaria),<br>30 (Mensual), 90<br>(Trimestral), 180<br>(Semestral), 360 (Anual).|
|**Gracia y Seguros**||gra_tipo|Modalidad de periodo de gracia.|String<br>(ENUM)|Dominio cerrado:<br>{“Total”, “Parcial”, “Sin<br>Gracia”}.|
|||gra_meses|Cantidad de meses de gracia.|Integer|Valor $\geq 0$.|
|||seg_desgra<br>v|Tasa del seguro de desgravamen.|Double|Porcentual mensual.|
|||seg_vehic|Tasa del seguro vehicular.|Double|Porcentual anual.|
|**Indicadores**||val_cok|Tasa de descuento del deudor<br>(COK).|Double|Requerido para el VAN.|
|||com_portes|Gastos administrativos (envío de|Double|Norma de transparencia.|



estado). 

## **3.1.2. Datos de Salida** 

Los datos de salida son los resultados finales que permiten al usuario tomar una decisión informada sobre el financiamiento. El sistema genera un cronograma de pagos detallado y los indicadores de rentabilidad exigidos por el enunciado: el Valor Actual Neto (VAN) y la Tasa Interna de Retorno (TIR). Estos últimos se calculan 

desde la perspectiva del deudor para determinar el costo efectivo real de la operación financiera. 

|Variable|Descripción|Tipo de<br>Dato|Relevancia en el Proyecto|
|---|---|---|---|
|cro_tabla_p<br>agos|Tabla completa con el desglose de cada cuota<br>del crédito.|Object /<br>List|Visualización del plan de pagos<br>mensual.|
|cuo_mensu<br>al|Monto de la cuota fija mensual (antes de<br>seguros).|Double|Resultado principal del método<br>francés.|
|pago_total|Monto final a pagar cada mes (incluye seguros<br>y comisiones).|Double|Valor real que el cliente debe depositar.|
|val_tcea|Tasa de Costo Efectivo Anual.|Double|Indicador del costo real total del<br>crédito.|
|val_van|Valor Actual Neto del préstamo (desde el<br>deudor).|Double|Evalúa si el préstamo genera valor para<br>el cliente.|
|val_tir|Tasa Interna de Retorno del préstamo.|Double|Representa el costo efectivo real del<br>financiamiento.|
|mon_interes<br>_tot|Sumatoria total de intereses pagados al final<br>del plazo.|Double|Información de transparencia para el<br>cliente.|
|mon_seguro<br>_tot|Sumatoria total de seguros (desgravamen y<br>vehicular).|Double|Desglose de costos adicionales.|
|gra_tipo_ap<br>licado|Modalidad de gracia efectivamente aplicada a<br>la simulación.|String|Confirma al usuario en el resumen qué<br>tipo de gracia se usó (Total, Parcial o<br>Sin Gracia).|
|gra_meses_<br>aplicado|Cantidad de meses de gracia aplicada, al<br>cronograma.|Integer|Transparencia: El usuario ve cuántos<br>meses tuvo alivio de pago antes del<br>cronograma regular.|
|mon_seg_d<br>esgrav_tot|Sumatoria total pagada solo por seguro de<br>desgravamen durante todo el plazo.|Double|Desglose fino del costo; coherente con<br>el cronograma detallado que sí separa<br>ambos seguros por columna.|



|mon_seg_v<br>ehic_tot|Sumatoria total pagada solo por seguro<br>vehicular durante todo el plazo.|Double|Desglose fino del costo; complementa<br>a ‘mon_seg_desgrav_tot’ para que<br>‘mon_seguro_tot’ sea la suma de<br>ambas.|
|---|---|---|---|



## **3.1.3. Datos Intermedios** 

Los datos intermedios representan la lógica de negocio y las transformaciones 

matemáticas que ocurren en el backend de la aplicación. En esta etapa, el sistema realiza la conversión de tasas nominales y efectivas a una Tasa Efectiva Mensual (TEM) estandarizada, calcula el impacto de los periodos de gracia (total o parcial) sobre el saldo deudor y determina el factor de recuperación de capital necesario para obtener una cuota constante bajo el modelo 

de cuota balón. 

|Variabl<br>e|Descripción|Tipo de Dato|Tamaño /<br>Precisión|Formato de<br>Visualización|Lógica / Fórmula Matemática|
|---|---|---|---|---|---|
|TEM|Tasa Efectiva<br>Mensual.|Double|Precisión<br>interna de 8<br>decimales para<br>evitar arrastre<br>de error en el<br>cronograma.|Porcentual, 4<br>decimales (ej.<br>1.0000%).|Se calcula a partir de la TEA o<br>TNA ingresada para<br>estandarizar el interés a 30<br>días.|
|monto_<br>total_fi<br>n|Monto total a<br>financiar.|Double|2 decimales|Moneda (S/. o $), 2<br>decimales, con<br>separador de miles|Es la diferencia entre el precio<br>del vehículo y la cuota inicial<br>aportada.|
|monto_<br>cuota_<br>balon|Valor nominal<br>de la cuota<br>final.|Double|2 decimales|Moneda (S/. o $), 2<br>decimales.|Resultado de multiplicar el<br>precio del vehículo por el<br>porcentaje de cuota balón<br>pactado.|
|n_perio<br>dos|Número total<br>de cuotas.|Integer|Sin decimales|Numérico entero (ej.<br>36).|El plazo en meses definido<br>para el cronograma.|
|factor_<br>frances|Factor de<br>recuperación<br>de capital.|Double|Precisión<br>interna de 8<br>decimales<br>(factor muy<br>sensible al<br>redondeo).|Numérico, 6<br>decimales<br>internamente; no se<br>muestra directamente<br>al usuario (es un<br>valor de cálculo<br>interno).|Fórmula del método francés<br>modificado para incluir el<br>valor residual o cuota balón.|
|int_peri<br>odo|Interés del mes<br>$t$.|Double|2 decimales|Moneda (S/. o $), 2<br>decimales.|Multiplicación del saldo<br>deudor del periodo anterior<br>por la TEM.|



|amo_p<br>eriodo|Amortización<br>del mes $t$.|Double|2 decimales|Moneda (S/. o $), 2<br>decimales.|Diferencia entre la cuota<br>mensual (R) y el interés del<br>periodo.|
|---|---|---|---|---|---|
|seg_de<br>s_mont<br>o|Monto del<br>seguro de<br>desgravamen.|Double|2 decimales|Moneda (S/. o $), 2<br>decimales.|Se aplica la tasa de<br>desgravamen sobre el saldo<br>deudor del periodo.|
|seg_ve<br>h_mont<br>o|Monto del<br>seguro<br>vehicular<br>mensual.|Double|2 decimales|Moneda (S/. o $), 2<br>decimales.|Generalmente es el precio del<br>vehículo por la tasa anual<br>dividido entre 12.|
|flujo_c<br>aja|Neto de<br>ingresos y<br>egresos.|Array / List de<br>Double|Vector de<br>tamaño<br>(n_periodo +<br>1); cada<br>elemento con<br>2 decimales|Lista numérica<br>indexada por periodo<br>(posición 0 =<br>desembolso,<br>posiciones 1..n =<br>pagos).|Serie de montos mensuales<br>utilizados para el cálculo de la<br>TIR y el VAN.|
|es_mes<br>_gracia|Indicador de si<br>el mes actual<br>del<br>cronograma<br>corresponde a<br>un periodo de<br>gracia.|Boolean|1 byte<br>(Verdadero/Fal<br>so).|No se muestra al<br>usuario; es una<br>variable de control<br>interno del algoritmo.|Verdadero si ‘mes <=<br>gra_meses’; condiciona asi se<br>calcula amortización; según<br>‘gra_tipo’.|
|saldo_d<br>eudor_<br>ajustad<br>o|Saldo deudor<br>luego de<br>aplicar la<br>capitalización<br>de intereses<br>durante la<br>gracia total.|Double|2 decimales.|Moneda(S/. o $), 2<br>decimales; visible<br>indirectamente en el<br>cronograma como el<br>“Saldo Final” del<br>último mes de gracia.|‘saldo_deudor’ =<br>‘saldo_deudor’ * (1+<br>‘TEM’)^ ’gra_meses’,<br>aplicable solo cuando<br>‘gra_tipo’ = ‘Total’.|



## **3.2. Diseño de la interface** 

El diseño de la interfaz se centra en la transparencia financiera y la usabilidad. 

El objetivo es transformar la complejidad del método francés y la Cuota Balón en una experiencia intuitiva que facilite la toma de decisiones informadas. 

## **● Interfaz de Inicio de Sesión:** 

Es el punto de acceso principal diseñado para la seguridad y gestión de 

identidad de los usuarios. Presenta un diseño minimalista con campos para el ingreso 

de credenciales (correo y contraseña), cumpliendo con los estándares de protección de información. Además, incluye opciones de autenticación rápida mediante terceros (Google) y enlaces de navegación para la recuperación de cuentas o el registro de nuevos clientes. 

- **Registro de Usuario e Información Personal:** 

Es el módulo de captura de datos de entrada necesarios para crear el perfil del cliente y personalizar las condiciones del crédito. Permite recolectar información como nombre, apellidos, DNI (validado a 8 dígitos), teléfono y correo electrónico para la gestión de la base de datos. Además, incluye una sección de Perfil Financiero para declarar ingresos mensuales, asegurando que el motor de simulación calcule tasas adecuadas a la capacidad de pago del usuario. 

- **Pantalla de Inicio y Filosofía del Producto:** 

Es la interfaz de bienvenida diseñada para reducir la asimetría de información 

y establecer la propuesta de valor del proyecto. Se enfoca en tres pilares 

fundamentales: Simulación Instantánea, cumplimiento de la Regulación SBS para 

garantizar transparencia, y la flexibilidad de la Cuota Balón. A través de un botón de acción principal, invita al usuario a iniciar el proceso de simulación basado en modelos de ingeniería económica. 

- **Configuración del Crédito y Entrada de Datos Financieros:** 

Es la interfaz central de simulación donde el usuario ingresa las variables 

críticas para el cálculo del préstamo. Permite configurar los Datos del Vehículo (incluyendo el porcentaje de Cuota Balón entre 20% y 50%), las Condiciones Financieras como el tipo de moneda, plazo y tasas de interés, y la sección de Gracia y Gastos para detallar períodos de alivio temporal y seguros obligatorios. En la parte lateral, presenta un "Resumen Preliminar" que se actualiza dinámicamente antes de generar el cronograma de pagos definitivo. 

## **● Catálogo de Vehículos e Integración de Activos:** 

Es la interfaz de selección que permite al usuario explorar las unidades 

disponibles para el financiamiento, vinculándose directamente con la tabla 

VEHICULO del modelo de datos. Cuenta con un sistema de filtros avanzado por marca, rango de precio y tipo de carrocería (Sedán, SUV, Pick-up) para facilitar la búsqueda del activo ideal. Cada tarjeta informativa presenta el modelo, 

especificaciones técnicas y el precio base, funcionando como el disparador para capturar automáticamente la variable “veh_precio” necesaria para iniciar los cálculos en el simulador. 

- **Panel de "Mis Créditos" e Historial de Simulaciones:** 

Es un centro de gestión personal donde el usuario visualiza todas las 

cotizaciones guardadas en la base de datos del sistema. Cada tarjeta resume el 

vehículo seleccionado, el monto a financiar y la TCEA estimada, permitiendo un análisis comparativo ágil. Esta interfaz facilita la toma de decisiones informadas al ofrecer acceso directo al detalle de cada operación o la opción de eliminar registros previos. 

- **Cronograma Detallado de Pagos y Transparencia Informativa:** 

Esta interfaz constituye la representación visual exhaustiva de la tabla de 

pagos generada por el sistema de amortización francés modificado. Presenta el 

desglose mes a mes del préstamo, incluyendo variables como Amortización, Interés, y los seguros obligatorios (Desgravamen y Vehicular). La pantalla permite al usuario verificar el impacto de la cuota fija y los portes sobre el saldo deudor, cumpliendo con la normativa de transparencia al ofrecer opciones de exportación a PDF y Excel para una gestión documental fidedigna. 

- **Tu Resumen Financiero: Dashboard de Indicadores y Resultados:** 

Es el núcleo analítico del simulador donde se consolidan los resultados del 

algoritmo de ingeniería económica. Presenta de forma jerárquica los tres indicadores clave para la toma de decisiones: la TCEA (costo real total), el VAN (valor actual neto desde la perspectiva del deudor) y la TIR (tasa interna de retorno que refleja el costo efectivo). Además, incluye un panel de "Resumen de Montos" con el desglose del capital a financiar e intereses, junto con un gráfico de "Distribución de Costos" que visualiza el peso relativo del capital, intereses y seguros, cumpliendo con la transparencia informativa exigida por la normativa vigente. 

## **3.3. Marco conceptual (fórmulas)** 

## _**Conversión de tasas de interés**_ 

Para el desarrollo del simulador de crédito vehicular bajo la modalidad de Compra 

Inteligente, el sistema permite trabajar tanto con tasas nominales como efectivas. Sin 

embargo, para la generación del cronograma de pagos, todas las operaciones financieras 

deben expresarse finalmente en una Tasa Efectiva Mensual (TEM). 

## _**Conversión de Tasa Nominal a Tasa Efectiva**_ 

Cuando el usuario ingresa una Tasa Nominal Anual (TN), el sistema la convierte a una Tasa 

Efectiva considerando el periodo de capitalización. 

𝑛 𝑇𝐸𝑃= (1 +[𝑇𝑁] 𝑚 ) −1 

## _**Valores:**_ 

- TEP: Tasa efectiva del periodo 

- TN: Tasa nominal ingresada 

- m: Número de capitalizaciones de la tasa nominal 

- n: Número de períodos equivalentes 

## _**Conversión de Tasa Efectiva a otra Tasa Efectiva**_ 

El sistema utiliza esta fórmula para convertir una tasa efectiva anual a una tasa efectiva mensual (TEM), necesaria para el cálculo del cronograma. 

**==> picture [140 x 27] intentionally omitted <==**

## _**Valores:**_ 

- 𝑇𝐸𝑃 : Tasa efectiva conocida 2 

- 𝑇𝐸𝑃 : Tasa efectiva buscada 1 

   - : Número de días de la tasa conocida 

- 𝑛 1 

- 𝑛 : Número de días de la tasa buscada 2 

## _**Saldo financiado, cuota balón y periodos del crédito**_ 

- El saldo financiado corresponde al monto realmente solicitado a la entidad financiera luego 

de descontar la cuota inicial entregada por el cliente. 

𝑆𝐹= 𝑃𝑉−𝐶𝐼 

## _**Valores:**_ 

- SF: Saldo financiado 

- PV: Precio del vehículo 

- CI: Cuota inicial 

- En la modalidad de Compra Inteligente, una parte del capital se posterga hacia el final del 

crédito mediante una cuota balón. 

**==> picture [81 x 15] intentionally omitted <==**

## _**Valores:**_ 

- CB: Cuota balón 

- PV: Precio del vehículo 

- pcb: Porcentaje de cuota balón 

Para que el crédito sea válido se debe cumplir:   0 ≤ 𝐶𝐵 ≤ 𝑆𝐹 

- El número de meses posteriores al periodo de gracia es:   𝑞= 𝑁−𝑔 

- El saldo deudor inicial es:   𝑆 𝑆𝐹 0 = 

## **Valores:** 

- q: Plazo efectivo de amortización 

- N: Plazo total 

- g: Número de meses de gracia 

## _**Saldo deudor después del periodo de gracia**_ 

El saldo que se utiliza para calcular la cuota francesa posterior a la gracia se denomina  𝑆0 

- **Sin gracia:** 

**==> picture [33 x 12] intentionally omitted <==**

**==> picture [43 x 16] intentionally omitted <==**

- **Gracia parcial:** durante los meses de gracia se pagan únicamente intereses 

financieros; por lo tanto, el capital no se modifica: 

**==> picture [43 x 17] intentionally omitted <==**

- **Gracia total:** durante los meses de gracia los intereses financieros se capitalizan al 

saldo deudor: 

𝑔 

𝑆 = 𝑆𝐹(1 + 𝑇𝐸𝑀) 𝑔 

## _**Cuota mensual mediante el método francés con cuota balón**_ 

La cuota financiera fija de los meses regulares posteriores a la gracia, sin seguros ni portes, se calcula con la siguiente fórmula: 

**==> picture [197 x 26] intentionally omitted <==**

## **Valores:** 

- C: Cuota financiera regular 

- Sg: Saldo luego de la gracia 

- CB: Cuota balón 

- TEM: Tasa efectiva mensual 

- n: Número de meses disponibles para amortizar luego de la gracia 

## _**Cálculo de interés, amortización y saldo deudor**_ 

El interés de cada periodo se calcula sobre el saldo pendiente del periodo anterior. 

**==> picture [91 x 16] intentionally omitted <==**

## _**Valores:**_ 

- 𝐼 : Interés del periodo t 𝑡 

- 𝑆 : Capital vivo del periodo anterior 𝑡−1 

- TEM: Tasa efectiva mensual 

## _**Periodo de gracia parcial**_ 

Para 𝑡= 1, 2,.., 𝑔, cuando gra_ tipo = Parcial, el cliente paga solamente los intereses financieros. No existe amortización de capital: 

**==> picture [40 x 15] intentionally omitted <==**

**==> picture [48 x 56] intentionally omitted <==**

## _**Periodo de gracia total**_ 

Para 𝑡= 1, 2,.., 𝑔, cuando gra_tipo = Total, el cliente no paga capital ni intereses 

financieros. El interés generado se incorpora al saldo deudor: 

**==> picture [49 x 55] intentionally omitted <==**

**==> picture [71 x 15] intentionally omitted <==**

De forma equivalente: 

**==> picture [107 x 15] intentionally omitted <==**

## _**Mes regular posterior a la gracia**_ 

Para los meses posteriores a la gracia y antes del último mes, la cuota financiera es 

constante: 

**==> picture [75 x 90] intentionally omitted <==**

## _**Último mes del crédito**_ 

En el último mes se incorpora la cuota balón: 

**==> picture [83 x 60] intentionally omitted <==**

**==> picture [107 x 15] intentionally omitted <==**

## _**Seguros, portes y cuota total del periodo**_ 

El seguro de desgravamen se calcula cada mes sobre el saldo deudor al inicio del periodo: 

**==> picture [93 x 15] intentionally omitted <==**

## _**Valores:**_ 

- 𝑆𝐷 : Seguro de desgravamen del periodo t 𝑡 

- 𝑆 : Capital vivo anterior 𝑡−1 

- tsd: Tasa del seguro de desgravamen 

El seguro vehicular se obtiene a partir del precio del vehículo y de la tasa anual contratada. 

En este modelo se distribuye en cuotas mensuales constantes: 

**==> picture [73 x 20] intentionally omitted <==**

## _**Valores:**_ 

- SV: Seguro vehicular mensual 

- PV: Precio del vehículo 

- tsv: Tasa anual del seguro vehicular 

Los portes administrativos corresponden a un importe fijo mensual: 

**==> picture [36 x 15] intentionally omitted <==**

La cuota total que paga el cliente en cada mes es la suma de la cuota financiera, los seguros y los portes: 

**==> picture [151 x 21] intentionally omitted <==**

En consecuencia: 

## **Mes regular:** 

**==> picture [140 x 15] intentionally omitted <==**

## **Mes de gracia parcial:** 

**==> picture [139 x 15] intentionally omitted <==**

## **Mes de gracia total:** 

**==> picture [115 x 15] intentionally omitted <==**

## **Último mes:** 

**==> picture [185 x 15] intentionally omitted <==**

## _**Valores:**_ 

- 𝐶𝑇 : Cuota total del periodo t 𝑡 

- C: Cuota mensual 

- 𝑆𝐷 : Seguro de desgravamen 𝑡 

- SV: Seguro vehicular 

- P: Portes administrativos 

## _**Flujo de caja desde la perspectiva del deudor**_ 

Para calcular el VAN y la TIR, los flujos se analizan desde la perspectiva del deudor. Al inicio de la operación, el cliente recibe el saldo financiado; por lo tanto, el flujo inicial es positivo: 

**==> picture [51 x 15] intentionally omitted <==**

En los meses posteriores, el cliente realiza pagos; por ello, los flujos mensuales son negativos: 

**==> picture [172 x 15] intentionally omitted <==**

En el último mes, el flujo incluye la cuota balón: 

𝐹𝐶 = −(𝐶+ 𝐶𝐵+ 𝑆𝐷 + 𝑆𝑉 + 𝑃 ) 𝑁 𝑁 𝑁 𝑁 

## _**Valor Actual Neto (VAN)**_ 

El VAN se calcula descontando los flujos de caja del deudor mediante su costo de oportunidad mensual: 

**==> picture [150 x 34] intentionally omitted <==**

## _**Valores:**_ 

- 𝐹𝐶 : Flujo de caja del periodo ttt 𝑡 

- 𝐶𝑂𝐾: Costo de oportunidad del capital 

- 𝐼 : Inversión inicial 0 

- n: Número de periodos 

Cuando el Costo de Oportunidad del Capital se ingresa como tasa efectiva anual, se convierte 

a tasa mensual mediante: 

**==> picture [147 x 23] intentionally omitted <==**

Donde COK, es el COK anual ingresado por el usuario y COK» es el COK mensual empleado para descontar los flujos. 

## _**Tasa Interna de Retorno (TIR)**_ 

La TIR mensual es la tasa que hace que el VAN de los flujos del deudor sea igual a cero:. 

**==> picture [123 x 34] intentionally omitted <==**

La TIR anual efectiva se calcula mediante 

12 𝑇𝐼𝑅 = (1 + 𝑇𝐼𝑅 ) −1 𝑎 𝑚 

## _**Valores:**_ 

- 𝐹𝐶 : Flujo de caja del periodo t 𝑡 

- 𝑇𝐼𝑅: Tasa Interna de Retorno 

## _**Tasa de Costo Efectivo Anual (TCEA)**_ 

La TCEA representa el costo total anual del crédito considerando intereses, seguros y gastos adicionales. 

**==> picture [142 x 27] intentionally omitted <==**

## _**Valores:**_ 

- 𝑆: Valor entregado 

- 𝐶: Valor recibido 

- 𝑛: Número de días del periodo 

## **3.4. Diseño de Datos de prueba** 

Con el propósito de asegurar la precisión y consistencia del motor de simulación para 

el producto de "Compra Inteligente", se han estructurado dos modelos de validación 

diferenciados. Dichas pruebas permiten certificar la integridad del sistema al procesar la 

equivalencia de tasas, la amortización mediante el esquema francés y el impacto financiero derivado de la incorporación de periodos de gracia. 

## **Modelo de Validación 1: Financiamiento Ordinario en Soles** 

## **1. Datos de Entrada** 

usu_nombre: Stephano usu_apellido: Valdivia 

usu_dni: 72345678 usu_password: SistePass2026 

usu_correo: stephrvq@gmail.com usu_numero: 923399455 usu_perfil_se: 8500.00 

veh_marca: Toyota Hilux 2026 veh_precio: S/ 100,000.00 veh_moneda: Soles (S/) 

fin_fec_inicio: 2026-06-01 fin_ini_monto: S/ 20,000.00 (Cuota inicial del 20%) fin_balon_porc: 40% fin_plazo: 36 tasa_valor: 12.6825% tasa_tipo: Efectiva (TEA) 

gra_tipo: Sin Gracia gra_meses: 0 seg_desgrav: 0.05% (mensual sobre saldo deudor) seg_vehic: 3.00% (anual sobre precio del vehículo) 

com_portes: S/ 10.00 val_cok: 10.00% (TEA de oportunidad del cliente para el VAN) 

## **2. Resultados Intermedios** 

tem: **1.00%** 

monto_total_fin: **80000.00** 

monto_cuota_balon: **40000.00** 

n_periodos efectivos de pago: **36** 

factor_frances: 0.03321431 

seg_veh_monto: 250.00 mensual constante 

int_periodo: 800.00 amo_periodo: 928.57 

seg_des_monto: 40.00 

flujo_caja: Vector de 37 posiciones 

- Posición 0: +80000.00 

- Posiciones 1 a 35: -2028.57 

- Posición 36: -41848.60 

## **3. Datos de Salida** 

cuo_mensual: 1728.57 

pago_total: 2028.57 

val_tcea: 19.82% 

val_van: -4215.30 

val_tir: 1.52% mensual mon_interes_tot: 22228.52 

mon_seguro_tot: 9714.50 

cro_tabla_pagos: 

|Mes|Saldo<br>Inicial|amo_peri<br>odo|int_perio<br>do|seg_des_<br>monto|seg_veh_<br>monto|com_por<br>tes|pago_tot<br>al|Saldo<br>Final|
|---|---|---|---|---|---|---|---|---|
|1|<br>80000|<br>928.57|<br>800|<br>40|<br>250|<br>10|2028.57|79071.43|
|2|79071.43|<br>937.86|<br>790.71|<br>39.54|<br>250|<br>10|2028.11|78133.57|
|...|...|...|...|...|...|...|...|...|
|36|41156.46|1156.46|<br>411.56|<br>20.58|<br>250|<br>10|<br>41848.60<br>*|0|



## **Modelo de Validación 2: Crédito en Dólares con Gracia Total y TNA** 

## **1. Datos de Entrada** 

usu_nombre: Beto usu_apellido: Ortiz usu_dni: 66666666 usu_password: SecurePass2026 

usu_correo: betoortiz@gmail.com usu_numero: 966666666 usu_perfil_se: 6000.00 

veh_marca: Volkswagen Taos 2026 veh_precio: 30000.00 veh_moneda: Dólares ($) 

fin_fec_inicio: 2026-06-15 fin_ini_monto: 6000.00 fin_balon_porc: 30.00% fin_plazo: 24 tasa_valor: 12.00% tasa_tipo: Nominal tasa_capit: Mensual 

gra_tipo: Total gra_meses: 2 seg_desgrav: 0.05% seg_vehic: 3.00% 

com_portes: 3 val_cok: 8.00% (TEA en dólares) 

## **2. Resultados Intermedios** 

tem: **1.00%** 

monto_total_fin: **24000.00** 

monto_cuota_balon: **9000.00** 

n_periodos efectivos de pago: **22** 

factor_frances: 0.0508639 

seg_veh_monto: 75.00 mensual constante 

int_periodo: 244.82 amo_periodo: 632.58 seg_des_monto: 12.24 

flujo_caja: Vector de 37 posiciones 

- Posición 0: +24000.00 

- Posiciones 1 y 2: 0.00 

- Posiciones 1 a 35: -967.64 

● Posición 36: -9960.77 

## **3. Datos de Salida** 

cuo_mensual: 877.40 

pago_total: 0.00 val_tcea: 18.45% val_van: -2350.12 val_tir: 1.42% mensual mon_interes_tot: 4285.20 mon_seguro_tot: 1835.15 

cro_tabla_pagos: 

|Mes|Saldo<br>Inicial|amo_peri<br>odo|int_perio<br>do|seg_des_<br>monto|seg_veh_<br>monto|com_por<br>tes|pago_tot<br>al|Saldo<br>Final|
|---|---|---|---|---|---|---|---|---|
|1|<br>24000|<br>0|<br>240|<br>0|<br>0|<br>0|<br>0|<br>24240|
|2|<br>24240|<br>0|<br>242.4|<br>0|<br>0|<br>0|<br>0|24482.4|
|3|24482.4|<br>632.58|<br>244.82|<br>12.24|<br>75|<br>3|<br>967.64|23849.82|
|...|...|...|...|...|...|...|...|...|
|24|9780.08|<br>780.08|<br>97.8|<br>4.89|<br>75|<br>3|9960.77*|0|



## **4.- Algoritmo** 

## **4.1 Pseudocódigo** 

|4]|monto_total_fin = veh_precio - fin_ini_monto||||
|---|---|---|---|---|
|48|monto_cuota_balon = veh_precio * (fin_balon_pore / 100)||||
|50|Si tasa_tipo == "Nominal" o tasa_tipo == "nominal" Entonces||||
|5]|TEA = ((1 + (tasa_valor / 100) / (360 / frecuencia_capit))||t (360 / frecuencia_capit)) - 1||
|52|SiNo||||
|53||<br>TEA = tasavalor / 100||||
|54|FinSi||||
|56|TEM = ((1<br>+ TEA) t<br>C1<br>/ 123) - 1||||
|57|seg_veh_mensual = (veh_precio * (seg_vehic / 100)) / 12||||
|60|saldo_deudor = monto_total_fin||||
|61|plazo_efectivo_amortizacion = fin_plazo - gra_meses||||
|64|saldo_proyectado = monto_total_fin||||
|65|Si gra_tipo = "Total" o gra_tipo == "total" Entonces||||
|66|saldo_proyectado = monto_total_fin * ((i + TEM) * gra_meses)||||
|67|FinSi||||
|70|valor_presente_balon = monto_cuota_balon / ((1<br>+ TEM) t|plazo_efectivo_amortizacion)|||
|71|capital_a_amortizar = saldo_proyectado - valor_presente_balon||||
|72|factor_frances = (TEM * ((1<br>+ TEM) t plazo_efectivo_amortizacion)) / (({i + TEM) t plazo_efectivo_amortizacion) - 1)||||
|73|cuo_mensual_fija = capital_a_amortizar * factor_frances||||
|77|flujo_caja[\] = monto_total_fin||||
|79|Escribir ""||||
|80|Escribir "Mes<br>| Saldo Inicial<br>| Amortizacion<br>| Interes|| Seguros<br>| Pago Total||| Saldo Final"|
|81|Eseribir "---------------------------------------------------------------------------------"||||
|83|Para mes =<br>1 Hasta fin_plazo Hacer||||
|85|int_periodo = saldo_deudor * TEM||||
|86|seg_des_monto = saldo_deudor * (seg_desgray / 100)||||
|88||<br>Si mes < gra_meses Entonces||||
|83||<br>|<br>Sigra_tipo=="Total"ogra_tipo=="total"Entonces||||



89 | Si gra_tipo == "Total" o gra_tipo = "total" Entonces 92 _—-—-pago_total = seg_des_nonto + seg_vehnensual + com_portes SING 94 | | Si gra_tipo = “Parcial" o gra_tipo == "parcial" Entonces 96 -_ pago_total = int_periodo + seg_des_monto + seg_veh_mensual + com_portes 3 SINo 00 | am_periodo = cuo_mensual_fija - int_periodo 0 | pago_total = cuo_mensual_fija + seg_des_monto + seg_veh_mensual + com_portes 05 Si mes == fin_plazo Entonces 06 | amo_periodo = amo_periodo + monto_cuota_balon 07 | pago_total = pago_total + monto_cuota_balon 8 Finsi 0 saldo_final = saldo_deudor - ano_periodo 2 Escribir mes, "| ", saldo_deudor, "| ", amo_periodo, "| ", int_periodo, "| ", (seg_des.monto + seg_vehmensual), "|", pago_total, "| ", saldo_final 5 flujo_caja{mes + 1] = -pago_total 6 saldo_deudor = saldo_final 8 FinPara 2 val_cok_mensual = ((1 + (val_cok / 100)) t (1 / 12)) - 4 2 val_van = Calcular_VAN(flujo_caja, fin_plazo, val_cok_mensual) B val_tir = Caleular_TIR(flujo_caja, fin_plazo} 24 val_teea = ((1 + val_tir) t 12) - 1 

6 Escribir "" 2] Escribir "--- INDICADORES FINANCIEROS ---" 28 Escribir "TIR Mensual: ", val_tir * 100, " %" 2 Escribir "TCEA Efectiva: ", val_tcea * 100, " &" 30 Escribir "VAN: ", val_van 

32 Escribir "" 33 Escribir "jSimulacion terminada! Presione cualquier tecla para salir..." 34 Esperar Tecla 

## 36 FinAlgoritmo 

|40|Funcion van_cale + Calcular_VAN (flujo,|Funcion van_cale + Calcular_VAN (flujo,|Funcion van_cale + Calcular_VAN (flujo,|n_periodos,|n_periodos,|n_periodos,|n_periodos,|tasa_descuento)|
|---|---|---|---|---|---|---|---|---|
|4|Definir van_calc,||factor_descuento|Como Real|||||
|42|Definir<br>i Como Entero||||||||
|43|van_cale = flujo[i]||||||||
|44|Para i =<br>1<br>Hasta|n_periodos Hacer|||||||
|45|factor_descuento =<br>(1<br>+ tasa_descuento)|||||f|i||
|46|van_cale = van_cale + (flujo[i +|||1]|/ factor_descuento)||||
|Ay|FinPara||||||||
|48|FinFuncion||||||||
|52|Fumcion tir_cale < Calcular_TIR (flujo,|||n_periocdos)|||||
|5|Definir tir_calc,||limite_inf7, limite_sup,|||van_prueba Como Real|||
|52|Definir iteracion||Como Entero||||||
|53|limite_inf = 6.8||||||||
|54|limite_sup = 1.8||||||||
|55|tir_calc = 6.6||||||||
|aT)|Para iteracion =|1|Hasta 108 Hacer||||||
|58|tir_cale = (limite_in? + limite_sup)||||/|2|||
|59|van_prueba = Calcular_VAN(flujo,|||n_periodos,||||tir_calc)|
|60|||||||||
|6|:<br>Si van_prueba|> 0 Entonces|||||||
|62|limite_sup||= tir_cale||||||
|63||<br>SiNo||||||||
|64|limite_inf||= tir_calc||||||
|65||<br>Finsi||||||||
|66|FinPara||||||||
|67|FinFuncion||||||||



## **Evidencias de funcionamiento:** 

**4.2 Diagrama de flujo** 

**==> picture [290 x 586] intentionally omitted <==**

**----- Start of picture text -----**<br>
24, calculos iniciales ...<br>F tas iposs! v<br>TEA © tasa_valor/16a —_ TEA & €Ci+€tasa_valor’._.<br>TEM + CC1#TEAD* (1/12))-1<br>seg_veh_mensual © (veh...<br>--5El saldo inicial arran,..<br>saldo_deudor © monto_t,,..<br>plazo_efectivo_amortiz...<br>--14, proyeccion del sald...<br>saldo_proyectado © mon...<br>F ra tipo=="1 v<br>saldo_proyectado + mon...<br>--5, calculo de cuota fija<br>valor_presente_balon +...<br>factor_frances ¢ {TEM*,..<br>cuo_mensual_fija © cap...<br>--16, generacion de crono...<br>- El momento @ Cindice 1...<br>flujo_cajali] + montoe_...<br>‘Mes | Saldo Inicial |... /<br>**----- End of picture text -----**<br>


**==> picture [433 x 499] intentionally omitted <==**

**----- Start of picture text -----**<br>
int.periede + saldode...<br>seg_des.mento © saldo_...<br>¥<br>alo_periodohe © cuo_mens,.. : gra_tipo=='T...1 <<br>pago_tetal © cuc_mensu,.. B i IRIEoa  NSEC ete<br>amo_periodo + -imt_per...<br>amo_perioda + @<br>; pago_tatal © intuperio,.. pago_total + seg_des_m,..<br>mes<br>2 --Sumamos la cuota balon...<br>mes==fin_plaze =<br>pago_total © paga_tota,,.<br>saldo_final © saldode...<br>mes, | | |, saldo_deud...”<br>- ~Guardamos e] flujo neg...<br>flujo_cajel[mes+! |<--pa...<br>saldo_deudor ¢ saldo_f...<br>=r. caleule de indicadores<br>val_cok_mensual ¢ ({1+,..<br>val_van © Calcular_VAN,..<br>val_tir + CaleularTir,..<br>val_tcea + ((ltval_tir...<br>“== INOICADORES FINAN, ,,<br>“TIR Mensual: ', val.t,,.<br>"TCEA Efectiva: ‘, val...<br>"MSimulacion terminada, , .<br>Esperar Tecla,<br>FindAlgor ite<br>**----- End of picture text -----**<br>


## **4.3 Modelo de base de datos** 

Para el almacenamiento y gestión de la información del simulador de "Compra Inteligente", se ha diseñado un Modelo Entidad-Relación que no solo respeta las formas normales a nivel de ingeniería de software, sino que ha sido estructurado para soportar con total dinamismo las reglas de negocio exclusivas de este producto financiero (periodos de gracia totales/parciales y el diferimiento de la cuota balón). 

El modelo se estructura en cinco tablas principales: 

1. **USUARIO:** Almacena la información de registro, credenciales y perfil 

socioeconómico del cliente. 

2. **VEHICULO:** Contiene los datos básicos del activo a financiar (marca, precio y 

moneda). 

3. **SIMULACION:** Actúa como la tabla central (cabecera transaccional). Registra todas 

las condiciones financieras pactadas. Almacena las variables críticas del negocio como gra_tipo (tipo de gracia) y fin_balon_porc (porcentaje de la cuota final), 

garantizando que el origen de los cálculos quede inmutable. 

4. **RESULTADO_SIMULACION:** Guarda los datos de salida e indicadores financieros 

finales (VAN, TIR, TCEA, totales) para permitir la evaluación de rentabilidad sin 

necesidad de recalcular todo el flujo en cada consulta. 

5. **CRONOGRAMA_PAGO:** Almacena el flujo de caja desglosado. Para dotar de 

dinamismo y trazabilidad a las reglas de negocio de la "Compra Inteligente", se han 

incluido atributos específicos: 

- a. **tipo_cuota:** Identifica la regla aplicada en el mes (Ej. "Regular", "Gracia 

Total", "Gracia Parcial", "Liquidación Balón"). 

- b. **interes_capitalizado:** Exclusivo para la Gracia Total. Registra el interés devengado que se sumó al saldo deudor, justificando contablemente el crecimiento de la deuda. 

- c. **monto_balon_pagado:** Exclusivo para el mes de cierre. Aísla el pago del diferimiento (Cuota Balón) de la amortización regular, asegurando la 

transparencia del esquema. 

A continuación, se presenta el Diagrama Entidad-Relación de la base de datos: 

## **5.- Sistema de información** 

## **a) Conectividad.** 

## **b) Base de datos.** 

## **c) Código fuente.** 

## **d) Ayuda y asistencia técnica.** 

## **e) Validación y pruebas.** 

## **Anexos** 

Link del video de exposición parcial: https://drive.google.com/drive/folders/1EtXqnwFOqSDcScR2cZxmVP2z2VQWrJMx?usp=s haring 

## **Bibliografía** 

Banco GNB Perú. (2024). _Hoja resumen – Préstamo hipotecario_ (PDF). 

https://www.bancognb.com.pe/sites/default/files/2024-07/hoja-resumen-pn-hipotecario.pdf 

Caja Metropolitana. (2025). _Período de gracia_ (PDF). 

https://www.cajametropolitana.com.pe/wp-content/uploads/2025/11/Informacion-adicional-fi 

nal.pdf 

Caja Municipal de Ahorro y Crédito Cusco S. A. (2025, septiembre). _Fórmulas y ejemplos explicativos para el cálculo de intereses: Crédito hipotecario Casa Fácil – Crédito_ 

_hipotecario_ 

_MiVivienda_ [PDF]. 

- https://www.cmac cusco.com.pe/api/storage/file/DWvcIldk24YtzPyjps4kbZYXNmVbHMzQ N7O5Y9xt.pdf 

Caja Paita. (2024, 17 de julio). _Fórmulas y ejemplos explicativos – Saneahogar v6_ (PDF). 

- - - - - https://www.cajapaita.pe/wp content/uploads/2024/07/formulas y ejemplos explicativos _san 

eahogar_v6.pdf 

Mantilla Murga, D. (2025). _Tesis_ (PDF). Repositorio UNC. 

https://repositorio.unc.edu.pe/bitstream/20.500.14074/8503/1/TESIS%20-%20MANTILLA% 

20MURGA%20DANIEL.pdf 

Santander Consumer. (2024). _Legal para productos con “Cuota Balón”_ . 

https://www.santanderconsumer.com.pe/wp-content/uploads/2024/11/TYC-Cuota-balon.pdf 

Shin Park, M. (2024). _Mejoras en la metodología de la valorización de…_ (Tesis, Universidad de Lima) (PDF). 

https://repositorio.ulima.edu.pe/bitstream/handle/20.500.12724/21990/T018_74075180_T.pdf 

?sequence=1 

BBVA. (2022, 15 mayo). _¿Qué es el seguro de Desgravamen y cómo funciona en Perú?_ BBVA. 

https://www.bbva.com/es/pe/salud-financiera/que-es-el-seguro-de-desgravamen-y-como-func iona-en-peru/ 

Goparity. (2025, 10 abril). _¿Qué es el período de gracia de capital?_ Goparity. 

https://goparity.com/es/faqs/%C2%BFqu%C3%A9-es-el-per%C3%ADodo-de-gracia-de-capi tal%3F-77 

Interbank. (2021, noviembre.). _Fórmulas para la liquidación de intereses y pagos para préstamos_ [PDF]. 

https://content-us-2.content-cms.com/9b3f67ef-5a9f-4acc-8ce8-bcc27fa681c7/dxdam/8f/8fb6 d0c2-b341-4b8b-8a93-4bd5f49488d4/formulas-ejemplos-prestamo-personal.pdf?t=17000713 64100 

MAPFRE. (2024, 17 septiembre). _¿Cómo se calcula el costo de un seguro de un auto?_ MAPFRE Perú. 

https://www.mapfre.com.pe/viviendo-en-confianza/seguridad-vial/como-se-calcula-el-costo-d e-un-seguro-de-un-auto/ 

Pacífico Seguros. (s. f.). _¿Qué es el Seguro de Desgravamen y cómo te protege?_ Pacífico Seguros. 

https://www.pacifico.com.pe/abcdepacifico/blog/que-es-seguro-desgravamen-y-como-te-prot ege-26 

Prestamype. (2021, 27 noviembre). _¿Qué es el periodo de gracia en un préstamo? ¿Conviene?_ Prestamype. 

https://www.prestamype.com/articulos/que-es-el-periodo-de-gracia-en-un-prestamo-conviene 

