/**
 *  Simple List
 */

import Click from "./components/Click/Click";
import ContactList from "./components/Contact/ContactList";
import ReusableList from "./components/ReusableList/ReusableList";


export default function App() {
    
    const urls = [
        ['Naruto Izumaki','https://easydrawingguides.com/wp-content/uploads/2017/05/how-to-draw-naruto-featured-image-1200-772x1024.png','React is amazing!'],
        ['Sasuke Uchiha','https://a-static.besthdwallpaper.com/sasuke-uchiha-and-itachi-from-naruto-shippuden-for-desktop-wallpaper-640x960-56036_169.jpg','This website is cool!'],
        ['Itachi Uchiha','https://qph.cf2.quoracdn.net/main-qimg-8d32a33a298a62cac96aef0806c78b89-lq','I love ReactJS!'],
    ];

    return(
        <>
        <ReusableList items={urls}/>
        <Click/>
        <ContactList/>
        </>
    );
} 