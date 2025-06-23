import React from 'react'

const Info = () => {
    return (
        <div className="about_info grid">
            <div className="about_box">
                < i class='bxr  bx-medal-alt'  ></i>
                <h3 className="about_title">Experience</h3>
                <span className="about_subtitle">6 Years working</span>
            </div>

            <div className="about_box">
                < i class='bxr  bx-briefcase-alt-2'  ></i>
                <h3 className="about_title">completed</h3>
                <span className="about_subtitle">10+ Projects</span>
            </div>

            <div className="about_box">
                < i class='bxr  bx-headphone-mic'  ></i>
                <h3 className="about_title">Support</h3>
                <span className="about_subtitle">Online 24/7</span>
            </div>
        </div>
    )
}

export default Info