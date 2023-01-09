import checkNumInputs from "./checkNumInputs";

const changeModalState = (state) => {
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWith = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowType = document.querySelectorAll('#view_type'),
          windowProfile= document.querySelectorAll('.checkbox');

    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionsToElems(event, elem, prop){
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                if (elem.length > 1) {
                    state[prop] = i;
                } else {
                    state[prop] = item.value;
                }
                console.log(state);
            });
        });
    };
    bindActionsToElems('click', windowForm, 'form');
    bindActionsToElems('input', windowWith, 'width');
    bindActionsToElems('input', windowHeight, 'height');
    bindActionsToElems('change', windowType, 'windowType');
    bindActionsToElems('change', windowProfile, 'windowProfile');


    // windowForm.forEach((item, i) => {
    //     item.addEventListener('click', () => {
    //         state.form = i;
    //         console.log(state);
    //     });

    // });
};

export default changeModalState;