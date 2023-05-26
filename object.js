const works = {
  work_one: {
    name: 'Tonic',
    feature: ['CANOPY', './Images/Counter.png', 'Back End Dev', './Images/Counter.png', '2015'],
    image: './Images/sub-div1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'See live',
    see: 'See source',
  },
  work_second: {
    name: 'Multi-Post Stories',
    feature: ['FACEBOOK', './Images/Counter.png', 'Full Stack Dev', './Images/Counter.png', '2015'],
    image: './Images/sub-div1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby On Rails', 'CSS', 'JavaScript'],
    live: 'See live',
    see: 'See source',
  },
  work_three: {
    name: 'Facebook 360',
    feature: ['FACEBOOK', './Images/Counter.png', 'Full Stack Dev', './Images/Counter.png', '2015'],
    image: './Images/sub-div1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    live: 'See live',
    see: 'See source',
  },
  work_four: {
    name: 'Uber Navigation',
    feature: ['Uber', './Images/Counter.png', 'Load Developer', './Images/Counter.png', '2018'],
    image: './Images/sub-div1.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n\nLorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
    technologies: ['HTML', 'Ruby on rails', 'CSS', 'JavaScript'],
    live: 'See live',
    see: 'See source',
  },
};

function setProjectData(projectElement, projectData) {
  const [detail1, image1, detail2, image2, detail3] = projectData.feature;
  const [technology1, technology2, technology3, technology4] = projectData.technologies;
  projectElement.querySelector('h2').textContent = projectData.name;
  projectElement.querySelector('.detail-1').textContent = detail1;
  projectElement.querySelector('.doks:nth-of-type(2) img').src = image1;
  projectElement.querySelector('.detail-2').textContent = detail2;
  projectElement.querySelector('.doks:nth-of-type(4) img').src = image2;
  projectElement.querySelector('.detail-3').textContent = detail3;
  projectElement.querySelector('.img-sub-div img').src = projectData.image;
  projectElement.querySelector('.p-information-row p').textContent = projectData.description;
  projectElement.querySelector('.tecnologia_1').textContent = technology1;
  projectElement.querySelector('.tecnologia_2').textContent = technology2;
  projectElement.querySelector('.tecnologia_3').textContent = technology3;
  projectElement.querySelector('.tecnologia_4').textContent = technology4;
  projectElement.querySelector('.btn1:nth-of-type(1)').textContent = projectData.live;
  projectElement.querySelector('.btn2:nth-of-type(1)').textContent = projectData.see;
}

// Const variables

const buttonSee = document.querySelector('.button_see');
const buttonSee2 = document.querySelector('.button_see_2');
const buttonSee3 = document.querySelector('.button_see_3');
const buttonSee4 = document.querySelector('.button_see_4');
const model = document.getElementsByClassName('model');
const model2 = document.getElementsByClassName('model_2');
const model3 = document.getElementsByClassName('model_3');
const model4 = document.getElementsByClassName('model_4');
const mainBody = document.getElementsByClassName('main_body');
const tecnologiaContainerTwo = document.getElementById(
  'tecnologia_container_two',
);
const desktopIdContainer = document
  .getElementById('desktop-id')
  .closest('.icon-container');

// funtions

function openModel() {
  model[0].style.display = 'block';
  tecnologiaContainerTwo.style.display = 'none';
  mainBody[0].style.overflow = 'hidden';
  const projectElement1 = document.querySelector('.model');
  setProjectData(projectElement1, works.work_one);
}
function openModel2() {
  model2[0].style.display = 'block';
  tecnologiaContainerTwo.style.display = 'block';
  mainBody[0].style.overflow = 'hidden';
  const projectElement2 = document.querySelector('.model_2');
  setProjectData(projectElement2, works.work_second);
}
function openModel3() {
  model3[0].style.display = 'block';
  tecnologiaContainerTwo.style.display = 'block';
  mainBody[0].style.overflow = 'hidden';
  const projectElement3 = document.querySelector('.model_3');
  setProjectData(projectElement3, works.work_three);
}
function openModel4() {
  model4[0].style.display = 'block';
  tecnologiaContainerTwo.style.display = 'block';
  mainBody[0].style.overflow = 'hidden';
  const projectElement4 = document.querySelector('.model_4');
  setProjectData(projectElement4, works.work_four);
}
function closeModels() {
  model[0].style.display = 'none';
  model2[0].style.display = 'none';
  model3[0].style.display = 'none';
  model4[0].style.display = 'none';
  mainBody[0].style.overflow = 'auto';
}
// EventListener

buttonSee.addEventListener('click', openModel);
buttonSee2.addEventListener('click', openModel2);
buttonSee3.addEventListener('click', openModel3);
buttonSee4.addEventListener('click', openModel4);
desktopIdContainer.addEventListener('click', closeModels);
