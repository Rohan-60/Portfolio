import React from 'react'

const Backend = () => {
    return (
        <div className="skills_content">
            <h3 className="skills_title">Backend Developer</h3>
            <div className="skills_box">
                <div className="skills_group">
                    <div className="skills_data">
                        < i class='bxr  bx-badge-check'  ></i>
                        <div>
                            <h3 className="skills_name">Python</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                    </div>

                    <div className="skills_data">
                        < i class='bxr  bx-badge-check'  ></i>
                        <div>
                            <h3 className="skills_name">MySQL</h3>
                            <span className="skills_level">Advanced</span>
                        </div>
                    </div>
                </div>
                <div className="skills_group">

                    <div className="skills_data">
                        < i class='bxr  bx-badge-check'  ></i>
                        <div>
                            <h3 className="skills_name">PostgreSQL</h3>
                            <span className="skills_level">Basic</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Backend