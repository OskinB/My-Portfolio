import React from "react";
import "../App";

const ProjectModal = (props) => {
    return (
        <div id={props.project.sys.id} className="modalDialog">
            <div>
                <h2>{props.project.fields.nameOfProject}</h2>
                <h4>{props.project.fields.projectNameInfo}</h4>

                <div className="modal-img">
                    {props.project.fields.projectGallery.length &&
                        props.project.fields.projectGallery.map((imgs, index) => {
                            return (
                                <img src={imgs.fields.file.url} alt="Gallery" />
                            );
                        })
                    }
                </div>

                <form>
                    <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
                    <input type="radio" name="fancy" value="hearts" id="hearts" />
                    <input type="radio" name="fancy" value="spades" id="spades" />
                    <input type="radio" name="fancy" value="diamonds" id="diamonds" />
                    <label for="clubs">&#9827; Clubs</label><label for="hearts">&#9829; Hearts</label><label for="spades">&#9824; Spades</label><label for="diamonds">&#9830; Diamonds</label>

                    <div class="keys">Use left and right keys to navigate</div>
                </form>


                <a href="#close" title="Close" className="close">X</a>
            </div>
        </div>
    )
}

export default ProjectModal; 