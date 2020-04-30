interface IGlobalState{
    displayFinal: IMenuItem[];

}
export interface IMenuItem {
    desplegable: boolean;
    factores: IMenuLink[];
}

export interface IMenuLink{
    link: string;
    name: string;
}

export default IGlobalState;
export const initialState:IGlobalState ={
    displayFinal:[{desplegable:false,factores:[{link:"https://www.informatica.us.es/index.php/historia",name:"historia"},{link:"https://www.informatica.us.es/index.php/situacion",name:"Situación"},
    {link:"https://www.informatica.us.es/index.php/directorio",name:"Directorio"},{link:"https://www.informatica.us.es/index.php/junta-de-centro",name:"Junta de Centro"},
    {link:"https://www.informatica.us.es/index.php/direccion",name:"Dirección"},{link:"https://www.informatica.us.es/index.php/comisiones",name:"Comisiones"},
    {link:"https://www.informatica.us.es/index.php/sistema-interno-garantia-calidad",name:"Sistema Interno de Garantía de la Calidad"},{link:"https://www.informatica.us.es/index.php/departamentos",name:"Departamentos"},
    {link:"https://www.informatica.us.es/index.php/conoce-tu-futura-escuela",name:"Conoce tu futura Escuela"},{link:"https://www.informatica.us.es/index.php/acto-de-clausura",name:"Acto de Clausura"},
    {link:"https://www.informatica.us.es/index.php/video-promocional-etsii",name:"Video de Presentación"},{link:"https://www.informatica.us.es/index.php/logo-etsii",name:"Video de Presentación"},
    {link:"https://www.informatica.us.es/index.php/plan-de-autoproteccion",name:"Plan de Autoprotección"}]},
    
    {desplegable:false,factores:[{link:"https://www.informatica.us.es/index.php/grados",name:"Grados"},{link:"https://www.informatica.us.es/index.php/masteres",name:"Másteres"},
    {link:"https://www.informatica.us.es/index.php/doctorado",name:"Doctorado"},{link:"https://www.informatica.us.es/index.php/plan-del-97",name:"Plan del 97"},
    {link:"https://www.informatica.us.es/index.php/cursos-de-adaptacion-a-gii",name:"Cursos de Adaptación a GII"}]},
    
    {desplegable:false,factores:[{link:"https://www.informatica.us.es/index.php/calendario-escolar-2018-19.pdf",name:"Calendario Escolar 2018-19"},{link:"https://www.informatica.us.es/index.php/horarios",name:"Horarios del curso 2018-19"},
    {link:"https://www.informatica.us.es/index.php/calendario-de-examenes",name:"Calendario de exámenes"},{link:"https://www.informatica.us.es/index.php/docencia-en-ingles",name:"Docencia en Inglés"},
    {link:"https://www.informatica.us.es/index.php/tfc.eii.us.es/TFG/",name:"Trabajo Fin de Grado"},{link:"https://www.informatica.us.es/index.php/cambio-de-grupo",name:"Cambio de grupo"},
    {link:"https://www.informatica.us.es/index.php/cursos-de-adaptacion",name:"Cursos de Adaptación a Grados de Ingeniería Informática"}]},
    
    {desplegable:false,factores:[{link:"https://www.informatica.us.es/index.php/relaciones-internacionales",name:"Relaciones Internacionales"},{link:"https://www.informatica.us.es/index.php/relaciones-con-empresas",name:"Relaciones con Empresas"}]},
    
    {desplegable:false,factores:[{link:"https://www.informatica.us.es/index.php/biblioteca",name:"Servicios"},{link:"https://www.informatica.us.es/index.php/centro-de-calculo",name:"Centro de Cálculo"},
    {link:"https://www.informatica.us.es/index.php/consrjeria",name:"Conserjería"},{link:"https://www.informatica.us.es/index.php/laboratorios",name:"Laboratorios"},
    {link:"https://www.informatica.us.es/index.php/secretaria",name:"Secretaría"}]},
    
    {desplegable:false,factores:[{link:"https://www.informatica.us.es/index.php/alumnos",name:"Alumnos"},{link:"https://www.informatica.us.es/index.php/profesores",name:"Profesores"},
    {link:"https://www.informatica.us.es/index.php/personal-admon-y-servicios",name:"Personal Admon. y Servicios"}]}],

    
}
