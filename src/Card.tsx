import React from 'react';

interface CardProps {
        state: boolean;
        flipped: boolean;
        setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
    }

function Card({ state, flipped, setFlipped }: CardProps) {

    return (
        <>
            <div className={`card ${state ? 'large' : ''}`}>
                <div className={`inner ${flipped ? 'flip' : ''}`} onClick={() => setFlipped(!flipped)}>
                    <div className="card-front">
                        {state == false ? (
                            <>
                                <img src="/logo.png" alt="logo" />
                                <h1>Lucas Teixeira</h1>
                                <div className="roles">
                                    <p>Data Scientist<br />&<br />Dev. Full Stack</p>
                                </div>
                            </>
                        ): null}                        
                    </div>
                    <div className="card-back">
                        {state == false ? (
                            <>
                                <img src="./qr.gif" alt="QR Code" />
                                <div className="contacts">
                                    <div className="contact-item">
                                        <img src="./wpp.png" alt="whatsapp" />
                                        <a href="https://api.whatsapp.com/send?phone=5522998923719" target="_blank">+55 (22) 99892-3719</a>
                                    </div>
                                <div className="contact-item">
                                <img src="./e-mail.webp" alt="e-mail" />
                                <a href="mailto:contato@lucas7x.win" target="_blank">contato@lucas7x.win</a>
                            </div>
                        </div>
                            </>
                        ): null} 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;