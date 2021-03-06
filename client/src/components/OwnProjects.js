import React from 'react';
import ProjectCard from '../cards/ProjectCard';
import OwnProjectsData from '../data/ownProjects.json';
import { chooseSideColor, generateKey } from '../helpers';

const OwnProjects = () => {

    return (
        <div>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Own Projects</h6>
                </div>
                <div className="card-body">
                    <div className="row">

                        {
                            OwnProjectsData.map(pr =>

                                <ProjectCard
                                    color={chooseSideColor()}
                                    projectTitle={pr.projectTitle}
                                    iconClass={pr.fontAwesome}
                                    image={pr.image}
                                    sourceCodeLink={pr.sourceCodeLink}
                                    projectLink={pr.projectLink}
                                    key={"ownProject" + generateKey()}
                                />
                            )
                        }



                    </div>
                </div>
            </div>
        </div>
    );
}


export default OwnProjects;
