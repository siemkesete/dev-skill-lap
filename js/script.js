const skillsBtn = function() {
    const $skill = $("#addSkill").val();
    const $newSkill = $(`<li><p class="className"> ${$skill}</p></li>`)
    $("ul").append($newSkill)
}


$('#skill-add').click(function() {
   skillsBtn()
})



$("skill-type").submit(function(event) {
    event.preventDefault();
    $("li").html(textInput);


});
$("ul").on("click", "button", function() {
   console.log(this)
    $(this).closest("li").fadeOut(1000, function() {
        $(this.remove())
    })


   })
console.log($('#delete'))
$("#delete").click (function() {
    console.log('delete')
    $("ul").children().last().remove()
    
})