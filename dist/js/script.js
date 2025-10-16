document.addEventListener('DOMContentLoaded', () => {
    var first_el = new transformAnim({
        'id':'test_el',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrow-clockwise"></i></div>'
    });
    first_el.setupAnimation({'animation':'rotate-right'})

    var second_el = new transformAnim({
        'id':'second_el',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrow-counterclockwise"></i></div>'
    });
    second_el.setupAnimation({'animation':'rotate-left'})

    var el1 = new transformAnim({
        'id':'el1',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrows-fullscreen"></i></div>'
    });
    el1.setupAnimation({'animation':'fade-scale'})

    var el2 = new transformAnim({
        'id':'el2',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrow-down"></i></div>'
    });
    el2.setupAnimation({'animation':'slide-vertical'})

    var el3 = new transformAnim({
        'id':'el3',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrow-right"></i></div>'
    });
    el3.setupAnimation({'animation':'slide-horizontal'})

    var el4 = new transformAnim({
        'id':'el4',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrow-left-right"></i></div>'
    });
    el4.setupAnimation({'animation':'flip'})

    var el5 = new transformAnim({
        'id':'el5',
        'new_element':'<div class="new_box general_box"><i class="bi bi-arrow-repeat"></i></div>'
    });
    el5.setupAnimation({'animation':'rotate'})

    var el6 = new transformAnim({
        'id':'el6',
        'new_element':'<div class="new_box general_box"><i class="bi bi-fullscreen-exit"></i></div>'
    });
    el6.setupAnimation({'animation':'morph'})

    var el7 = new transformAnim({
        'id':'el7',
        'new_element':'<div class="new_box general_box"><i class="bi bi-water"></i></div>'
    });
    el7.setupAnimation({'animation':'wave'})

    var el8 = new transformAnim({
        'id':'el8',
        'new_element':'<div class="new_box general_box"><i class="bi bi-transparency"></i></div>'
    });
    el8.setupAnimation({'animation':'bounce'})


    
    const elements = document.querySelectorAll('.red_box');
    elements.forEach(el => {
        el.addEventListener('click', () => {
            console.log('Clicked redbox');
        });
    });

});
