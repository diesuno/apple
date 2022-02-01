import Iphone12Pro from "../image/iphone12pro.png"
import IphoneXR from "../image//iphonexr.png"
import IphoneSE from "../image//iphonese.png"
import MacaM1 from "../image/macam1.png"
import MbpM1 from "../image/mbpm1.png"
import ImacM1 from "../image/imacm1.png"
import MacMiniM1 from "../image/macminim1.png"


const productos = [{
    id: "1",
    nombre: "iPhone 12 Pro",
    categoria: "iphone",
    valor: 799,
    img: Iphone12Pro,
    stock: 21,
    descripcion: "El chip A14 Bionic es muy superior a cualquier otro chip de smartphone. El sistema de cámaras Pro te permite tomar fotos espectaculares con poca luz, y el iPhone 12 Pro Max lleva tu talento fotográfico mucho más allá. Además, el nuevo frente de Ceramic Shield es cuatro veces más resistente a las caídas. Descubre todo lo que el iPhone 12 Pro hace para llevarte al siguiente nivel."
},
{
    id: "2",
    nombre: "iPhone XR",
    categoria: "iphone",
    valor: 499,
    img: IphoneXR,
    stock: 12,
    descripcion: "El iPhone SE tiene el potente chip A13 Bionic en nuestro tamaño más popular y a un precio muy conveniente. Justo lo que estabas esperando."
    
},
{
    id: "3",
    nombre: "iPhone SE",
    categoria: "iphone",
    valor: 399,
    img: IphoneSE,
    stock: 35,
    descripcion: "El iPhone Xr tiene una pantalla Liquid Retina de 6,1 pulgadas, el LCD más avanzado de la industria.1 Face ID avanzado. El chip más inteligente y potente en un smartphone. Un sistema de cámara revolucionario. Y además, está disponible en seis novedosos acabados."
},
{
    id: "4",
    nombre: "Macbook Air",
    categoria: "mac",
    valor: 999,
    img: MacaM1,
    stock: 30,
    descripcion: "Nuestra notebook más ligera y delgada vuelve completamente renovada por dentro. Gracias al chip M1 de Apple, el CPU es hasta 3.5 veces más rápido y el GPU hasta 5 veces más veloz. El Neural Engine más avanzado permite un aprendizaje automático hasta 9 veces superior. La batería es la de mayor duración en una MacBook Air. Y su diseño sin ventilador es supersilencioso. Nunca ha sido tan fácil llevar tanto poder a todos lados."
},
{
    id: "5",
    nombre: "Macbook Pro",
    categoria: "mac",
    valor: 1299,
    img: MbpM1,
    stock: 15,
    descripcion: "Con el chip M1, la MacBook Pro de 13 pulgadas alcanza un nuevo nivel de potencia y velocidad. El CPU es hasta 2.8 veces más rápido y los gráficos son hasta 5 veces más veloces. Nuestro Neural Engine más avanzado hasta ahora permite un aprendizaje automático hasta 11 veces más rápido. Y la batería te acompaña hasta por 20 horas, la mayor duración en una Mac. Es nuestra notebook Pro más conocida, a un nivel mucho más pro."
    
},
{
    id: "6",
    nombre: "iMac",
    categoria: "mac",
    valor: 1299,
    img: ImacM1,
    stock: 10,
    descripcion: "Dile hola a la nueva iMac. Creada con lo mejor de Apple, los superpoderes del chip M1 y un diseño que brilla en todos lados. En resumen, es justo lo que necesitabas."
},
{
    id: "7",
    nombre: "Mac Mini",
    categoria: "mac",
    valor: 699,
    img: MacMiniM1,
    stock: 25,
    descripcion: "El nuevo chip M1 diseñado por Apple lleva nuestra computadora de escritorio más versátil a otra dimensión. Ahora viene con un CPU hasta 3 veces más rápido, gráficos hasta 6 veces más veloces y nuestro Neural Engine más avanzado, que permite un aprendizaje automático hasta 15 veces más rápido. Podrás trabajar, jugar y crear con una velocidad y potencia que jamás habías imaginado. La Mac mini es poder para conquistarlo todo."
}
]

export default productos

/* export const getFetch = new Promise( (res,rej)=> {
    //acciones
    let condition= true
    if (condition) {
        setTimeout(()=>{
            //Acciones que quiero que se resuelvan
            res(productos)        
        }, 2000)
    }else{
        rej('404 not found')
    }
} ) */
