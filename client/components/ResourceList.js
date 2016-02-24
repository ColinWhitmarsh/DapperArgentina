import React from 'react';

const ResourceList = (props) => (
    <div className="row"> 
      <div className="col s12 m10">
      <h4>Resources</h4>
        <div className="card white">
          <div className="card-content black-text" >
            <span className="card-title"><strong>The guide, the good, and best practice</strong></span>
            <div className="row">
            <h7 className="left-align col s12">Resource links:</h7>
              <a className="left-align col s12" href={'https://guides.github.com/introduction/flow/'}>The guide on Understanding the GitHub workflow</a>
              <p className="left-align col s12">
                Gihub flow is a branch-based system that supports teams and project deployments made regularly.
              </p> 
              <a  className="left-align col s12" href={'https://guides.github.com/activities/contributing-to-open-source/'}>The guide on Open Source contribution</a>
              <p className="left-align col s12">
                A great way to get involved in the open source community. This guide will cover the basics on the overall process and how to contribute on existing projects.
              </p>
              <a className="left-align col s12" href={'https://help.github.com/articles/creating-a-pull-request/'}>How to do a pull request</a>
              <p className="left-align col s12">
                A guide on on how to create a pull request to make proposed changes. For best practice, work on another branch, leaving the master branch clean.
              </p>
              <a className="left-align col s12" href={'https://guides.github.com/activities/forking/'}>Forking your projects</a>
              <p className="left-align col s12">
                Contribute to another's existing project or a starting point in your own project by using someone's project. This is the process known as forking.
              </p>
              <a className="left-align col s12" href={'http://chris.beams.io/posts/git-commit/#seven-rules'}>The seven rules of a great git commit message</a>
              <p className="left-align col s12">
                Make clear commit comments on why you made the the change and how your change solves the current issue. Best practice for team communication that should be practiced.
              </p>
              <a className="left-align col s12" href={'http://gitimmersion.com/'}>The git immersion practice</a>
              <p className="left-align col s12">A good place to start with git practice. Start learning today!</p>
              <a className="left-align col s12" href={'http://nvie.com/posts/a-successful-git-branching-model/'}>A successful Git branching model</a>
              <p className="left-align col s12">
                The 'big picture' on the git branching model is very helpful on team projects. Easy to comprehend and allows a full understanding of the branching and releasing process.
              </p>
            </div>
          </div>
        </div>


      </div>
    </div>
);

module.exports = ResourceList;