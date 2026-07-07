import React, { useEffect, useMemo, useState } from 'react'
import './work.css'

const WorkItems = ({ item }) => {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    const [isImagePreviewOpen, setIsImagePreviewOpen] = useState(false);
    const gallery = useMemo(() => (item.gallery?.length ? item.gallery : [item.image]), [item.gallery, item.image]);
    const [activeImage, setActiveImage] = useState(gallery[0]);

    useEffect(() => {
        if (!isDetailsOpen && !isImagePreviewOpen) {
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsImagePreviewOpen(false);
                setIsDetailsOpen(false);
                return;
            }

            if (!isImagePreviewOpen || gallery.length <= 1) {
                return;
            }

            const currentIndex = gallery.indexOf(activeImage);

            if (event.key === 'ArrowRight') {
                event.preventDefault();
                setActiveImage(gallery[(currentIndex + 1) % gallery.length]);
            }

            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                setActiveImage(gallery[(currentIndex - 1 + gallery.length) % gallery.length]);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeImage, gallery, isDetailsOpen, isImagePreviewOpen]);

    const handleDemoClick = (e) => {
        e.preventDefault();
        setActiveImage(gallery[0]);
        setIsDetailsOpen(true);
    };

    const openImagePreview = () => {
        setIsImagePreviewOpen(true);
    };

    return (
        <>
            <div className="work_card" key={item.id}>
                <img src={item.image} alt={item.title} className='work_img' />
                <h3 className="work_title">{item.title}</h3>
                <button type="button" className="work_button work_button_reset" onClick={handleDemoClick}>
                    Demo <i className="uil uil-arrow-right work_button-icon"></i>
                </button>
            </div>

            {isDetailsOpen && (
                <div className="work_modal_overlay" onClick={() => setIsDetailsOpen(false)}>
                    <div className="work_modal" onClick={(e) => e.stopPropagation()}>
                        <button className="work_modal_close" onClick={() => setIsDetailsOpen(false)} aria-label="Close project details">
                            x
                        </button>
                        <button className="work_modal_image_button" onClick={openImagePreview} aria-label="Open a larger image preview" type="button">
                            <img src={activeImage} alt={item.title} className='work_modal_img' />
                        </button>
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

            {isImagePreviewOpen && (
                <div className="work_image_preview_overlay" onClick={() => setIsImagePreviewOpen(false)}>
                    <div className="work_image_preview" onClick={(e) => e.stopPropagation()}>
                        <button className="work_modal_close" onClick={() => setIsImagePreviewOpen(false)} aria-label="Close image preview">
                            x
                        </button>
                        <img src={activeImage} alt={`${item.title} enlarged preview`} className="work_image_preview_img" />
                        {gallery.length > 1 && (
                            <div className="work_image_preview_hint">
                                Use left and right arrow keys to switch images.
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default WorkItems