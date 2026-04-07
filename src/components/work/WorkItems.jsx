import React, { useState } from 'react'
import './work.css'

const WorkItems = ({ item }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const gallery = item.gallery?.length ? item.gallery : [item.image];
    const [activeImage, setActiveImage] = useState(gallery[0]);

    const handleDemoClick = (e) => {
        e.preventDefault();
        setActiveImage(gallery[0]);
        setIsDetailsOpen(true);
    };

    return (
        <>
            <div className="work_card" key={item.id}>
                <img src={item.image} alt={item.title} className='work_img' />
                <h3 className="work_title">{item.title}</h3>
                <a href="#" className="work_button" onClick={handleDemoClick}>
                    Demo <i className="uil uil-arrow-right work_button-icon"></i>
                </a>
            </div>

            {isDetailsOpen && (
                <div className="work_modal_overlay" onClick={() => setIsDetailsOpen(false)}>
                    <div className="work_modal" onClick={(e) => e.stopPropagation()}>
                        <button className="work_modal_close" onClick={() => setIsDetailsOpen(false)} aria-label="Close project details">
                            x
                        </button>
                        <img src={activeImage} alt={item.title} className='work_modal_img' />
                        {gallery.length > 1 && (
                            <div className="work_modal_thumbs">
                                {gallery.map((photo, index) => (
                                    <button
                                        key={index}
                                        className={`work_modal_thumb ${activeImage === photo ? 'active-thumb' : ''}`}
                                        onClick={() => setActiveImage(photo)}
                                        aria-label={`Show screenshot ${index + 1}`}
                                    >
                                        <img src={photo} alt={`${item.title} screenshot ${index + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                        <h3 className="work_modal_title">{item.title}</h3>
                        <p className="work_modal_description">
                            {item.description || "Project description will be added soon."}
                        </p>

                        <div className="work_modal_actions">
                            {item.demoLink && (
                                <a href={item.demoLink} className="work_modal_button" target="_blank" rel="noopener noreferrer">
                                    Visit Website
                                </a>
                            )}
                            {item.repoLink && (
                                <a href={item.repoLink} className="work_modal_button" target="_blank" rel="noopener noreferrer">
                                    View Repository
                                </a>
                            )}
                            {!item.demoLink && !item.repoLink && item.link && (
                                <a href={item.link} className="work_modal_button" target="_blank" rel="noopener noreferrer">
                                    Open Link
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default WorkItems