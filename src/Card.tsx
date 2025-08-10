import React, { useState, useEffect } from 'react';

interface AppProps {
        state: boolean;
        flipped: boolean;
        setFlipped: React.Dispatch<React.SetStateAction<boolean>>;
    }

function Card({ state, flipped, setFlipped }: AppProps) {
     const [showContent, setShowContent] = useState(false);

     useEffect(() => {
        if (state) {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 500);

            return () => clearTimeout(timer);
        } else {
            setShowContent(false);
        }
    }, [state]);

    return (
        <>
            <div className={`card ${state ? 'large' : ''}`}>
                <div className={`inner ${flipped ? 'flip' : ''}`} onClick={() => {
                    if (state == false) {
                        setFlipped(!flipped);}
                }}>
                    <div className='card-front'>
                        {state == false ? (
                            <>
                                <img src='/logo.png' alt='logo' />
                                <h1>Lucas Teixeira</h1>
                                <div className='roles'>
                                    <p>Data Scientist<br />&<br />Dev. Full Stack</p>
                                </div>
                            </>
                        ): (
                            showContent && (
                                <div className='card-front'>
                                    <div className='portfolio'>
                                        <div className='project'>
                                            <h1>Curry Company</h1>
                                            <a href='https://currycomp.streamlit.app/' target='_blank'><img src='https://i.imgur.com/fg1y8vT.png'></img></a>
                                            <p>Interactive Growth Dashboard project with data from a indian fastfood delivery marketplace.</p>
                                            <a href='https://github.com/luc457x/CDS_PA-Curry_Company'>Github Repo</a>
                                        </div>
                                        <div className='project'>
                                            <h1>DevQuest</h1>
                                            <a href='https://luc457x.github.io/DevQuest/' target='_blank'><img src='https://i.imgur.com/gfhEzFk.png'></img></a>
                                            <p>A simple JS project featuring a pokedex, an x-men and an one-piece select character screen.</p>
                                            <a href='https://github.com/luc457x/DevQuest'>Github Repo</a>
                                        </div>
                                        <div className='project'>
                                            <h1>lorem ipsum</h1>
                                        </div>
                                        <button className='moreless' onClick={() => setFlipped(!flipped)}>more...</button>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                    <div className='card-back'>
                        {state == false ? (
                            <>
                                <img src='./qr.gif' alt='QR Code' />
                                <div className='contacts'>
                                    <div className='contact-item'>
                                        <img src='./wpp.png' alt='whatsapp' />
                                        <a href='https://api.whatsapp.com/send?phone=5522998923719' target='_blank'>+55 (22) 99892-3719</a>
                                    </div>
                                <div className='contact-item'>
                                <img src='./e-mail.webp' alt='e-mail' />
                                <a href='mailto:contato@lucas7x.win' target='_blank'>contato@lucas7x.win</a>
                            </div>
                        </div>
                            </>
                        ):
                        <button className='moreless' onClick={() => setFlipped(!flipped)}>back</button>
                        } 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;