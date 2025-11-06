import React from "react";
import "../styles/client.css";
import clientlogo1 from '../images/Client_logo_1.svg';
import clientlogo2 from '../images/Client_logo_2.svg';
import clientlogo3 from '../images/Client_logo_3.svg';
import clientlogo4 from '../images/Client_logo_4.svg';
import clientlogo5 from '../images/Client_logo_5.svg';
import clientlogo6 from '../images/Client_logo_6.svg';
import clientlogo7 from '../images/Client_logo_7.svg';

function Clients() {
    return (
        <section class="clients">
            <h2>Our Clients</h2>
            <p>Why 1000+ teams keep working with our system globally</p>

            <div class="client-logos">
                <div class="client-box"><img src={clientlogo1} alt="Client 1" /></div>
                <div class="client-box"><img src={clientlogo2} alt="Client 2" /></div>
                <div class="client-box"><img src={clientlogo3} alt="Client 3" /></div>
                <div class="client-box"><img src={clientlogo4} alt="Client 4" /></div>
                <div class="client-box"><img src={clientlogo5} alt="Client 5" /></div>
                <div class="client-box"><img src={clientlogo6} alt="Client 6" /></div>
                <div class="client-box"><img src={clientlogo7} alt="Client 7" /></div>
            </div>
        </section>
    );
}

export default Clients;
