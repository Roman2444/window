import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWith = document.querySelector('#width'),
          windowHeight = document.querySelector('#height'),
          indowType = document.querySelector('#view_type'),
          indowProfile= document.querySelector('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionsToElems(event, elem, prop){
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                state[prop] = i;
                console.log(state);
            });
        });
    };
    bindActionsToElems('click', windowForm, 'form');
    // windowForm.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     });

    // });
};

export default changeModalState;