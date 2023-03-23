$(function(){
    populateSkills();
    $('#back2top').click(function(){
        $("html, body").animate({scrollTop: 0}, 100);
    });
});

function populateSkills(){
    let skills = [
        {skill:'HTML',value:100},
        {skill:'CSS',value:90},
        {skill:'Javascript',value:80},
        {skill:'JQuery',value:90},
        {skill:'PHP',value:80},
        {skill:'Codeigniter',value:80},
        {skill:'Photoshop',value:70},
        {skill:'Filmora',value:80},
        {skill:'Sony Vegas',value:60}
    ];

    let html = '';
    $.each(skills,function(i,e){
        html += '<tr><td class="w-25">'+e.skill+'</td><td><div class="progress" role="progressbar" aria-label="'+e.skill+'" aria-valuenow="'+e.value+'" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar " style="width:'+e.value+'%"></div></div></td></tr>';
    });
    $('#skills').html(html);
}