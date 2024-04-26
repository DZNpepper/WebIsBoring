// React
import React from 'react';
import { Link } from 'react-router-dom';
// Data
import componentsData from '../../data/componentsData';
// Components
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
// Images
import padlockImage from '../../assets/images/Padlock.webp'; 
//Styling
import './Style.scss';

const Main = () => {
    return (
        <div>
            <section className="main-page">
                 <Title text="The Web is Boring" />
                <section className="components-grid">
                    {componentsData.map((component) => (
                        <article
                            key={component.id}
                            className={`component-item ${component.unlocked ? '' : 'locked'} ${window.innerWidth > 768 ? 'parallax' : ''}`}
                            style={{ backgroundImage: `url(${component.image})`, position: 'relative' }}
                        >
                            <div className="overlay" style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: '0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: component.unlocked ? 'transparent' : 'rgba(0, 0, 0, 0.5)'
                            }}>
                                {component.unlocked ? (
                                    <Link to={`/${component.id}`} className="overlay">{component.name}</Link>
                                ) : (
                                    <div className="lock-icon">
                                        <img src={padlockImage} alt="Locked" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </section>
            </section>
            <Footer />
        </div>
    );
};

export default Main;
