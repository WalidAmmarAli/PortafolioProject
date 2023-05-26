//Constant variables
const buttonSee = document.querySelector('.button_see');
const buttonSee2 = document.querySelector('.button_see_2');
const buttonSee3 = document.querySelector('.button_see_3');
const buttonSee4 = document.querySelector('.button_see_4');
const model = document.getElementsByClassName('model');
const model2 = document.getElementsByClassName('model_2');
const model3 = document.getElementsByClassName('model_3');
const model4 = document.getElementsByClassName('model_4');
const main_body = document.getElementsByClassName('main_body')
const tecnologia_container_two = document.getElementById('tecnologia_container_two')
const desktopIdContainer = document.getElementById('desktop-id').closest('.icon-container');

//Lunch
function openModel() {
    model[0].style.display = 'block';
    tecnologia_container_two.style.display = 'none';
    main_body[0].style.overflow = 'hidden';
    var projectElement1 = document.querySelector('.model');
    setProjectData(projectElement1, works.work_one);
}
function openModel2() {
    model2[0].style.display = 'block';
    tecnologia_container_two.style.display = 'block';
    main_body[0].style.overflow = 'hidden';
    var projectElement2 = document.querySelector('.model_2');
    setProjectData(projectElement2, works.work_second);
}
function openModel3() {
    model3[0].style.display = 'block';
    tecnologia_container_two.style.display = 'block';
    main_body[0].style.overflow = 'hidden';
    var projectElement3 = document.querySelector('.model_3');
    setProjectData(projectElement3, works.work_three);
}
function openModel4() {
    model4[0].style.display = 'block';
    tecnologia_container_two.style.display = 'block';
    main_body[0].style.overflow = 'hidden';
    var projectElement4 = document.querySelector('.model_4');
    setProjectData(projectElement4, works.work_four);
}
function closeModels() {
    model[0].style.display = 'none';
    model2[0].style.display = 'none';
    model3[0].style.display = 'none';
    model4[0].style.display = 'none';
    main_body[0].style.overflow = 'auto';
}
buttonSee.addEventListener('click', openModel);
buttonSee2.addEventListener('click', openModel2);
buttonSee3.addEventListener('click', openModel3);
buttonSee4.addEventListener('click', openModel4);
desktopIdContainer.addEventListener('click', closeModels);












