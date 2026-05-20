# 04CountryApp v1

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.16.


```
Temas puntuales
En esta sección aprenderemos y reforzaremos temas como:
  1.- Rutas hijas
  2.-Rutas Anidadas
  3.-Creación y comunicación entre componentes
  4.-Tailwind y DaisyUI
  5.-Archivo de rutas por feature / module
  6.-Carga perezosa de módulos de rutas
El objetivo es armar la aplicación que luego haremos funcionar.

Notas:
Globlal 
1- Si quiero instalar angular de manera globlal tengo estas opciones:
    Comando						       Qué instala								Equivalente a
    npm install -g @angular/cli			La última versión en este momento			@angular/cli@latest
    npm install -g @angular/cli@21		La versión 21 específicamente				Versión fija
    npm install -g @angular/cli@20		La versión 20 específicamente				Versión anterior
2.- Asi creas los proyectos. te colocasen la carpeta y
    >ng new <nombreProyecto>
Local Intalas angular cli en forma local y creas el proyecto con la version especifica
1- te colocasen la carpeta y
     >npx @angular/cli@20 new <nombreProyecto>


CREACION DEL PROYECTO DE ANGULAR ‘04-country-app’ 
1-. cd Me pongo en la carpeta donde se va a crear el proyecto
2.- prompt $g
3.- (npx → Es una herramienta de npm que ejecuta paquetes sin necesidad de instalarlos globalmente. 
     @angular/cli@20 → Especifica la versión 20.x de Angular CLI 
     new 04-country-app→ Crea proyecto

>npx @angular/cli@20 new 04-country-app
√ Which stylesheet format would you like to use? CSS        [ https://developer.mozilla.org/docs/Web/CSS ]

? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? (y/N)N
nota: Regla práctica:
Si tu app es pública y necesita SEO → SSR
Si tu app es privada (requiere login) → CSR
Si estás aprendiendo Angular por primera vez → empezar con CSR (sin SSR)

? Do you want to create a 'zoneless' application without zone.js? (y/N) Y

? Which AI tools do you want to configure with Angular best practices? https://angular.dev/ai/develop-with-ai
>(*) None
 ( ) Claude         [ https://docs.anthropic.com/en/docs/claude-code/memory            ]
 ( ) Cursor         [ https://docs.cursor.com/en/context/rules                         ]
 ( ) Gemini         [ https://ai.google.dev/gemini-api/docs                            ]
 ( ) GitHub Copilot [ https://code.visualstudio.com/docs/copilot/copilot-customization ]
4.- Ya creado entro al rpoyecto
     >cd 04-country-app
     >code .
5.- Elimino el app.css y app.spec.ts no se va a ocupar y por el bug tengo que editar los nombres de los
     componentes {app] y agregarles component
app,component.html
app.component.ts

6.- edita el archuvo tsconfig.app.json y agrega 
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "rootDir": "./src",    /* se agrega esta linea para que el compilador sepa donde estan los archivos fuente */
    "types": []
7.- ejecutamos el aplicativo
     >npx ng serve -o
8.- Instalar Talwindcss
      a.- https://tailwindcss.com/
      b.- Get started despues  Framework Guides buscar Angular
      c.- npm install tailwindcss @tailwindcss/postcss postcss --force
      d.- Crear  .postcssrc.json  en el ROOT del proyecto. con este contenido
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
      e.- Importar Tailwind CSS agrega al  ./src/styles.css 
          @import "tailwindcss";
      f.- Lo probamos en el app.component.html y agregamos 
<h1 class="text-3xl font-bold underline">
  Hello world!
</h1>

      g.- Detenemos la ejecucion y volvemos a compilar
		npx ng serve  
9.- Instalar daisyUI as a Tailwind plugin
      a.- https://daisyui.com/docs/install/
      b.- escribes
           >npm i -D daisyui@latest
      c.- Agregar @plugin "daisyui"; al  ./src/styles.css 
          @import "tailwindcss";          
          @plugin "daisyui";
      d.- para probarlo copiamos el html del boton de aqui https://daisyui.com/components/button/
           y lo pegamos en el app.component.html y agregamos 
      e.- Detenemos la ejecucion y volvemos a compilar
	    >npx ng serve  
      f.- Podemos agregar temas https://daisyui.com/docs/themes/
	   Agregar @plugin "daisyui"; al  ./src/styles.css 
          @import "tailwindcss";          
          @plugin "daisyui"{
   		themes: sunset   --default, light --prefersdark, cupcake;
 	   }
10.- Usar el  tema HERO de daisyUI  https://daisyui.com/components/hero/
      a.-  busco el Hero with overlay image ycopio el HTML a la paina [home-page.component.html]
      b.- entro a footer https://daisyui.com/components/footer/ y copio el Footer with a logo section  y pego el html en 
           footer.component.html
      c.- entro a https://daisyui.com/components/menu/ y copio Menu with icons and badge (responsive) y pego el html 
           en top-menu.component.html
      e.- entro a https://iconify.design/  y click en {Icons} y busco  Guidance  y click en el copio el codigo html y lo pego  
            en top-menu.component.html


Temas puntuales
En esta sección aprenderemos a trabajar con:
Recursos como:
  * Resources
  * rxResources
  * Señales
  * Servicios
  * Reutilización de componentes
  * Peticiones http
  * Operadores de RXJS
  * Mucho más
La idea es hacer funcionar nuestra aplicación

11.- Consumir la API https://restcountries.com/
      a.- Busco y doy click en By Capital City       
12.- Crear el SERVICIO country.service
      a.- Cick boton derecho en carpeta [country/services]  y selecciona [Angular Schematics Generate a file]
      b.- Selecciona [Service] y escriba country.service
13.-  Para darle formato de salida podemo usar los pipes auiq hay documentacion de como usarlos 
         https://angular.dev/api/common/DecimalPipe
14.-  Reactividad con Resources aqui esta la documentacion https://angular.dev/guide/signals/resource
15.- Ractividad II con rxResource aqui esta la documentacion https://angular.dev/api/core/rxjs-interop/rxResource
       es muy parecio al punto 14




```


