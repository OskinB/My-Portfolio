import React from "react";
import "../App";

const ProjectModal = (props) => {
    return (
        <div id={props.project.sys.id} className="modalDialog">
            <div>
                <div className="modal-img">
                    {/* Can't make the carousel work properly when map-ing. It shows more than 1 image at once, not 1 at a time like it's supposed to! */}
                    {/* <form>
                        {props.project.fields.projectGallery.length &&
                            props.project.fields.projectGallery.map((imgs, index) => {
                                return (

                                    <div key={index}>
                                        <input type="radio" name="project" value={imgs.sys.id} id={imgs.sys.id} />
                                        <input type="radio" name="project" value={imgs.sys.id} id={imgs.sys.id} />
                                        <label for={imgs.sys.id}><img src={imgs.fields.file.url} alt="Gallery" /> </label>
                                        <label for={imgs.sys.id}><img src={imgs.fields.file.url} alt="Gallery" /> </label>
                                    </div>
                                )
                            })
                        }
                    </form> */}

                    {/* Just to show the carousel works with hard coded images. */}
                    <form>
                        <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
                        <input type="radio" name="fancy" value="hearts" id="hearts" />
                        <input type="radio" name="fancy" value="spades" id="spades" />
                        <label for="clubs"><img src="//images.ctfassets.net/adiok1jnhv9f/4yfqa5s8wCXnaShFCYWZam/27d4103addf2ce114504ce35830069b3/Vefskoli-Waitinglist.png" alt="Project Screenshot" /> </label>
                        <label for="hearts"><img src="//images.ctfassets.net/adiok1jnhv9f/LWDdlu4kO98tdyoU6sC9y/54cbe20aacba387700f97f938e8587aa/Sambio-footer.png" alt="Project Screenshot" /></label>
                        <label for="spades"><img src="//images.ctfassets.net/adiok1jnhv9f/51VdaY7W0oWGbGWtuIIknC/bb79339abad7a17585fe6b1a93fafe09/Glo-home.png" alt="Project Screenshot" /></label>

                    </form>
                </div>

                <div className="modal-card-info">
                    <div className="modal-middle">
                        <div className="modal-title">
                            <h2>{props.project.fields.nameOfProject}</h2>
                            <h4>{props.project.fields.projectNameInfo}</h4>
                        </div>
                        <div className="program-lingo">
                            {props.project.fields.programmingLanguage.length &&
                                props.project.fields.programmingLanguage.map((lang, index) => {
                                    return (
                                        <div key={index}>
                                            <h3>{lang}</h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <p>{props.project.fields.description}</p>
                    <div className="btn-view">
                        <img src={require('../assets/open-new.svg')} alt="Open in a new window" />
                        <a href="#">View Site</a>
                    </div>

                </div>


                <a href="#close" title="Close" className="close">X</a>
            </div>
        </div>
    )
}

export default ProjectModal; 