# Casos de Prueba - Tienda Movistar

Este repositorio contiene casos de prueba automatizados para la tienda online de Movistar:  
[https://tiendaonline.movistar.com.ar](https://tiendaonline.movistar.com.ar)

---

## CP001 - Validar cuotas en compra de equipo
**Parámetros:**  
- Cuotas: **3**  
- Equipo: **A15**

**Descripción:**  
El objetivo del caso de prueba es visitar la tienda de Movistar, luego realizar la búsqueda del equipo **A15** e ingresar al mismo y verificar que se pueda pagar en **3 cuotas sin interés**.

**Resultado esperado:**  
- Que se pueda ingresar a la página indicada.  
- Que el equipo seleccionado sea el **A15**.  
- Que se indique en el equipo que puede ser pagado en **3 cuotas sin interés**.  

> De no estar disponible el equipo **A15**, tomar alguno que sí lo esté.

---

## CP002 - Aplicar filtro de equipos
**Parámetros:**  
- Memoria Interna: **128GB**  
- Precio: **$200.000 - $300.000**

**Descripción:**  
El objetivo del caso de prueba es visitar la tienda de Movistar, luego utilizando los filtros de la página, filtrar por **Memoria Interna 128GB** y precio entre **$200.000 - $300.000** e indicar cuántos equipos devuelve la búsqueda.

**Resultado esperado:**  
- Que se pueda ingresar a la página indicada.  
- Que se puedan aplicar los filtros.  
- Que se obtengan equipos luego del filtrado validando la cantidad mostrada.  

> De no estar disponible alguno de los filtros indicados, reemplazar por otro que sí lo esté.

---

## CP003 - Validar cuotas en compra de equipo
**Parámetros:**  
- Cuotas: **60**  
- Equipo: **Tercero de la lista**  
- Banco: **Credicoop**  
- Tarjeta: **Visa**

**Descripción:**  
El objetivo del caso de prueba es visitar la tienda de Movistar, luego ingresar al **tercer equipo de la lista inicial** y verificar que **NO exista** el método de pago de **60 cuotas** para el banco **Credicoop** con tarjeta **VISA**.

**Resultado esperado:**  
- Que se pueda ingresar a la página indicada.  
- Que el equipo seleccionado sea el **tercero de la lista**.  
- Que **no exista** un medio de pago con **60 cuotas Credicoop VISA**.

---

## CP004 - Validar carrito de compras
**Parámetros:**  
- Equipo: **Index pasado por parámetro**

**Descripción:**  
El objetivo del caso de prueba es visitar la tienda de Movistar, seleccionar el equipo de la lista con el **index pasado por parámetro** y agregarlo al carrito. Una vez agregado, validar que el carrito muestre el **mismo equipo seleccionado** y el **precio correspondiente**.

**Resultado esperado:**  
- Que se pueda ingresar a la página indicada.  
- Que el equipo seleccionado sea el mismo que aparece en el carrito.  
- Que el carrito muestre correctamente el **precio del equipo**.

---

## Consideraciones generales
Algunos de los puntos que serán tenidos en cuenta en la resolución de los casos:

- ✅ Utilización de localizadores apropiados.  
- ✅ Uso correcto de métodos de **Assertions** para validaciones.  
- ✅ Uso de comandos de Cypress como:  
  - `cy.screenshot`  
  - `cy.url`  
  - `cy.viewport`  
  - `cy.*.as`  
  [Ver documentación Cypress](https://docs.cypress.io/api/api/table-of-contents.html)  
- ✅ Aplicación del modelo **Page Objects**.
  [Referencia Page Object en Cypress](https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/)

---
