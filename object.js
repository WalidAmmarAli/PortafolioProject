var works = {
    work_one: {
        name: 'Tonic',
        feature: ['CANOPY', './Images/Counter.png', 'Back End Dev', './Images/Counter.png', '2015'],
        image: './Images/sub-div1.png',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        liveVersition: 'See live',
        seeSources: 'See source'
    },
    work_second: {
        name: 'Multi-Post Stories',
        feature: ['FACEBOOK', './Images/Counter.png', 'Full Stack Dev', './Images/Counter.png', '2015'],
        image: './Images/sub-div1.png',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
        technologies: ['HTML', 'Ruby On Rails', 'CSS', 'JavaScript'],
        liveVersition: 'See live',
        seeSources: 'See source'
    },
    work_three: {
        name: 'Facebook 360',
        feature: ['FACEBOOK', './Images/Counter.png', 'Full Stack Dev', './Images/Counter.png', '2015'],
        image: './Images/sub-div1.png',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
        technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
        liveVersition: 'See live',
        seeSources: 'See source'
    },
    work_four: {
        name: 'Uber Navigation',
        feature: ['Uber', './Images/Counter.png', 'Load Developer', './Images/Counter.png', '2018'],
        image: './Images/sub-div1.png',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
        technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
        liveVersition: 'See live',
        seeSources: 'See source'
    }
};

function setProjectData(projectElement, projectData) {
    projectElement.querySelector('h2').textContent = projectData.name;
    projectElement.querySelector('.detail-1').textContent = projectData.feature[0];
    projectElement.querySelector('.doks:nth-of-type(2) img').src = projectData.feature[1];
    projectElement.querySelector('.detail-2').textContent = projectData.feature[2];
    projectElement.querySelector('.doks:nth-of-type(4) img').src = projectData.feature[3];
    projectElement.querySelector('.detail-3').textContent = projectData.feature[4];
    projectElement.querySelector('.img-sub-div img').src = projectData.image;
    projectElement.querySelector('.p-information-row p').textContent = projectData.description
    projectElement.querySelector('.btn:nth-of-type(1)').textContent = projectData.liveVersition;
    projectElement.querySelector('.tecnologia_1').textContent = projectData.technologies[0];
    projectElement.querySelector('.tecnologia_2').textContent = projectData.technologies[1];
    projectElement.querySelector('.tecnologia_3').textContent = projectData.technologies[2];
    projectElement.querySelector('.tecnologia_4').textContent = projectData.technologies[3];
}







